import type { CSSProperties } from "react";

const lines = [
  <>&gt; waking terminal <b>OK</b></>,
  <>&gt; operator: EVELIO GONZALEZ</>,
  <>&gt; syncing city grid: NEO-MIAMI <b>OK</b></>,
  <>&gt; 18:47 sundown. descending.</>,
];

// Pure-CSS boot sequence: it plays and removes itself without JavaScript.
// layout.tsx hides it on repeat visits in the same session.
export function Boot() {
  return (
    <div className="boot" aria-hidden="true">
      <div className="boot-inner">
        <p className="boot-kanji">起動</p>
        <ul>
          {lines.map((line, i) => (
            <li key={i} style={{ "--i": i } as CSSProperties}>
              {line}
            </li>
          ))}
        </ul>
        <div className="boot-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
