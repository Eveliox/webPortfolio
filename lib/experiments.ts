// Fictional project centroids, used only by the portfolio's offline exhibit.
export const gridProjects = [
  { id: "a", name: "Pine corridor", utility: "North", lat: 27.10, lon: -81.20, month: 6 },
  { id: "b", name: "Lake upgrade", utility: "South", lat: 27.19, lon: -81.12, month: 10 },
  { id: "c", name: "Ridge connection", utility: "East", lat: 27.48, lon: -80.94, month: 18 },
  { id: "d", name: "Coastal link", utility: "South", lat: 27.57, lon: -80.80, month: 24 },
  { id: "e", name: "Western reinforcement", utility: "North", lat: 27.40, lon: -81.43, month: 9 },
];

export function distanceKm(a: typeof gridProjects[number], b: typeof gridProjects[number]) {
  const rad = (n: number) => n * Math.PI / 180;
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lon - a.lon) / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export function findMatches(km: number, months: number) {
  return gridProjects.flatMap((a, i) => gridProjects.slice(i + 1).flatMap(b => {
    const distance = distanceKm(a, b);
    const gap = Math.abs(a.month - b.month);
    return a.utility !== b.utility && distance <= km && gap <= months
      ? [{ id: `${a.id}-${b.id}`, a, b, distance, gap }] : [];
  }));
}

export const scenarios = {
  stale: { label: "Stale account state", gate: 0, reason: "The account snapshot is stale. Refresh and reconcile broker state before evaluating an order." },
  duplicate: { label: "Duplicate order", gate: 1, reason: "This order key already exists in the journal. Stop to avoid submitting it twice." },
  loss: { label: "Daily loss limit", gate: 2, reason: "The simulated daily loss limit has been reached. New orders remain blocked." },
} as const;

export const gates = ["Reconcile account", "Check order journal", "Check daily risk", "Submit paper order"];
