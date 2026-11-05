"use client";

import { useId, useState } from "react";
import { findMatches, gates, gridProjects, scenarios } from "@/lib/experiments";

export function RelayExperiment() {
  const uid = useId();
  const [km, setKm] = useState(40);
  const [months, setMonths] = useState(12);
  const [selected, setSelected] = useState<string | null>(null);
  const matches = findMatches(km, months);
  const match = matches.find(m => m.id === selected) ?? matches[0];
  const x = (lon: number) => 45 + (lon + 81.5) / .8 * 430;
  const y = (lat: number) => 235 - (lat - 27) / .7 * 205;
  return <div className="experiment">
    <p className="exhibit-label">Experiment 01 / Fictional sample data</p>
    <h3 className="experiment-title">Where could utilities coordinate?</h3>
    <div className="experiment-controls">
      <label htmlFor={`${uid}-distance`}>Distance <output>{km} km</output><input id={`${uid}-distance`} type="range" min="5" max="80" step="5" value={km} onChange={e => setKm(Number(e.target.value))} /></label>
      <label htmlFor={`${uid}-date`}>In-service date gap <output>{months} months</output><input id={`${uid}-date`} type="range" min="0" max="24" step="1" value={months} onChange={e => setMonths(Number(e.target.value))} /></label>
    </div>
    <svg className="coordination-map" viewBox="0 0 520 280" role="img" aria-label={`Schematic map of five fictional transmission projects with ${matches.length} matching cross-utility pairs. Select pairs in the list below.`}>
      <defs><pattern id={`${uid}-grid`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="currentColor" strokeOpacity=".12" /></pattern></defs>
      <rect width="520" height="280" fill={`url(#${uid}-grid)`} />
      <path d="M340 0Q280 90 370 145T420 280" fill="none" stroke="currentColor" strokeWidth="30" opacity=".04" />
      {matches.map(m => <line key={m.id} x1={x(m.a.lon)} y1={y(m.a.lat)} x2={x(m.b.lon)} y2={y(m.b.lat)} stroke="var(--sumi)" strokeWidth={m.id === match?.id ? 3 : 1} opacity={m.id === match?.id ? 1 : .3} />)}
      {gridProjects.map(p => <g key={p.id}><circle cx={x(p.lon)} cy={y(p.lat)} r="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" /><text x={x(p.lon) + 10} y={y(p.lat) - 12} fill="currentColor" fontSize="11">{p.name}</text></g>)}
      <text x="14" y="264" fill="currentColor" fontSize="9">SCHEMATIC · PROJECT CENTROIDS · NOT TO SCALE</text>
    </svg>
    <p className="experiment-status" role="status">{matches.length} potential coordination {matches.length === 1 ? "pair" : "pairs"}</p>
    <div className="match-list" aria-label="Matching project pairs">{matches.map(m => <button type="button" key={m.id} aria-pressed={match?.id === m.id} onClick={() => setSelected(m.id)}>{m.a.name} ↔ {m.b.name}</button>)}</div>
    <div className="experiment-explanation" aria-live="polite">{match ? <><strong>{match.a.utility} + {match.b.utility} utilities</strong><p>{match.distance.toFixed(1)} km apart · {match.gap} months between planned service dates. Both fall within your thresholds, so this pair is flagged for review.</p></> : <p>No pairs meet both thresholds. Increase the distance or date window to explore more opportunities.</p>}</div>
    <p className="experiment-note">Five invented projects. This simplified centroid-distance filter illustrates the idea; it does not reproduce Relay’s production ranking or establish engineering feasibility.</p>
  </div>;
}

const passages = [
  { title: "Source 1 · Study design", text: "In this fictional trial, 120 adults were randomly assigned to intervention or control for eight weeks." },
  { title: "Source 2 · Observed outcome", text: "The intervention group reported improved sleep scores at eight weeks. The study did not measure outcomes after that point." },
];

export function RagExperiment() {
  const uid = useId();
  const [question, setQuestion] = useState<"supported" | "unknown">("supported");
  const [source, setSource] = useState(0);
  return <div className="experiment">
    <p className="exhibit-label">Experiment 02 / Authored evidence walkthrough</p>
    <h3 className="experiment-title">Follow an answer back to its evidence.</h3>
    <div className="choice-row" aria-label="Sample question">
      <button type="button" aria-pressed={question === "supported"} onClick={() => { setQuestion("supported"); setSource(0); }}>What did the study find?</button>
      <button type="button" aria-pressed={question === "unknown"} onClick={() => { setQuestion("unknown"); setSource(1); }}>Does the benefit last a year?</button>
    </div>
    <div className="evidence-layout">
      <div className="answer-sheet" aria-live="polite"><p className="exhibit-label">{question === "supported" ? "Answer / Evidence available" : "Answer / Insufficient evidence"}</p>
        {question === "supported" ? <p>A randomized, eight-week trial enrolled 120 adults <button className="citation" type="button" aria-label="Inspect source 1" aria-controls={`${uid}-source-0`} onClick={() => { setSource(0); document.getElementById(`${uid}-source-0`)?.focus(); }}>[1]</button>. Sleep scores improved in the intervention group at eight weeks <button className="citation" type="button" aria-label="Inspect source 2" aria-controls={`${uid}-source-1`} onClick={() => { setSource(1); document.getElementById(`${uid}-source-1`)?.focus(); }}>[2]</button>.</p> : <p>The retrieved passages do not establish a one-year benefit. Follow-up ends at eight weeks; a longer-term study would be needed. <button className="citation" type="button" aria-label="Inspect follow-up limitation in source 2" aria-controls={`${uid}-source-1`} onClick={() => { setSource(1); document.getElementById(`${uid}-source-1`)?.focus(); }}>[2]</button></p>}
      </div>
      <div><p className="exhibit-label">Retrieved passages / Fictional</p>{passages.map((p, i) => <div tabIndex={-1} id={`${uid}-source-${i}`} key={p.title} className={`source-passage ${source === i ? "is-selected" : ""}`}><strong>{p.title}</strong><p>{p.text}</p>{source === i && <span className="source-marker">Selected evidence</span>}</div>)}</div>
    </div>
    <p className="experiment-note">Fixed, fictional excerpts and authored answers; no model or PubMed request is made. Valid citation numbers establish references, not whether a source supports a claim. No clinical conclusions should be drawn from this example.</p>
  </div>;
}

export function AlpacaExperiment() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>("stale");
  const [run, setRun] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const current = scenarios[scenario];
  return <div className="experiment">
    <p className="exhibit-label">Experiment 03 / Offline failure simulation</p>
    <h3 className="experiment-title">A good system knows when to stop.</h3>
    <div className="choice-row" aria-label="Failure scenario">{Object.entries(scenarios).map(([key, item]) => <button type="button" key={key} aria-pressed={scenario === key} onClick={() => { setScenario(key as keyof typeof scenarios); setHasRun(false); }}>{item.label}</button>)}</div>
    <button type="button" className="primary-link" onClick={() => { setRun(n => n + 1); setHasRun(true); }}>{hasRun ? "Replay decision path" : "Run simulation"} <span aria-hidden="true">↗</span></button>
    <ol key={`${scenario}-${run}`} className={`decision-path ${hasRun ? "has-run" : ""}`}>{gates.map((gate, i) => <li key={gate} style={{ animationDelay: `${i * 180}ms` }} data-state={!hasRun ? "waiting" : i < current.gate ? "pass" : i === current.gate ? "blocked" : "skipped"}><span className="gate-number">0{i + 1}</span><span>{gate}</span><strong>{!hasRun ? "Waiting" : i < current.gate ? "Passed" : i === current.gate ? "Blocked" : "Not reached"}</strong></li>)}</ol>
    <div className="experiment-explanation" role="status">{hasRun ? <><strong>Order blocked · {current.label}</strong><p>{current.reason}</p></> : <p>Choose a failure and run the simulation to inspect the guard that stops it.</p>}</div>
    <p className="experiment-note">Illustrative decision sequence, not an execution of the trading engine. No broker connection, market data, or orders.</p>
  </div>;
}

export function Experiment({ slug }: { slug: string }) {
  if (slug === "relay") return <RelayExperiment />;
  if (slug === "biomedical-rag") return <RagExperiment />;
  if (slug === "alpaca-agents") return <AlpacaExperiment />;
  return null;
}
