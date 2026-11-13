"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";

type VizProps = { progress: MotionValue<number> };

// Maps a slice of scroll progress onto 0..1.
function useSeg(progress: MotionValue<number>, from: number, to: number) {
  return useTransform(progress, [from, to], [0, 1], { clamp: true });
}

// Counts how many thresholds the scroll progress has passed.
function useStage(progress: MotionValue<number>, stops: number[]) {
  const [stage, setStage] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    const next = stops.filter((s) => v >= s).length;
    setStage((prev) => (prev === next ? prev : next));
  });
  return stage;
}

function Frame({
  label,
  tag,
  children,
  readout,
}: {
  label: string;
  tag: string;
  children: React.ReactNode;
  readout?: React.ReactNode;
}) {
  return (
    <div className="viz" aria-hidden="true">
      <div className="viz-bar">
        <i />
        <span>{label}</span>
        <span>{tag}</span>
      </div>
      <div className="viz-body">{children}</div>
      {readout && <div className="viz-read">{readout}</div>}
    </div>
  );
}

/* ---------- Relay: a grid drawing itself, then finding overlaps ---------- */

const lines = [
  { d: "M60 300 L150 230 L250 250 L330 170 L450 130", color: "var(--cyan)", from: 0.2, to: 0.5 },
  { d: "M90 110 L190 150 L262 236 L360 300 L500 280", color: "#edecf4", from: 0.28, to: 0.58 },
  { d: "M300 60 L340 160 L420 220 L520 200", color: "#8f8ea6", from: 0.36, to: 0.62 },
];
const nodes = [
  [60, 300], [150, 230], [250, 250], [330, 170], [450, 130],
  [90, 110], [190, 150], [262, 236], [360, 300], [500, 280],
  [300, 60], [340, 160], [420, 220], [520, 200],
];
const overlaps = [
  { x: 256, y: 243, at: 0.62 },
  { x: 335, y: 165, at: 0.68 },
  { x: 425, y: 222, at: 0.74 },
];

function RelayLine({ line, progress }: { line: (typeof lines)[number]; progress: MotionValue<number> }) {
  const pathLength = useSeg(progress, line.from, line.to);
  return (
    <motion.path
      d={line.d}
      fill="none"
      stroke={line.color}
      strokeWidth="2"
      strokeLinejoin="round"
      style={{ pathLength }}
    />
  );
}

function RelayOverlap({ o, progress }: { o: (typeof overlaps)[number]; progress: MotionValue<number> }) {
  const opacity = useSeg(progress, o.at, o.at + 0.05);
  return (
    <motion.g style={{ opacity }}>
      <circle className="ring" cx={o.x} cy={o.y} r="22" fill="none" stroke="var(--red)" strokeWidth="1.5" />
      <circle cx={o.x} cy={o.y} r="14" fill="rgba(255,42,69,.22)" stroke="var(--red)" strokeWidth="1.5" />
    </motion.g>
  );
}

export function RelayViz({ progress }: VizProps) {
  const nodeOpacity = useSeg(progress, 0.12, 0.3);
  const projects = useTransform(useSeg(progress, 0.2, 0.62), (v) => Math.round(v * 252));
  const matches = useTransform(useSeg(progress, 0.62, 0.84), (v) => Math.round(v * 39));
  const pages = useTransform(useSeg(progress, 0.12, 0.5), (v) => `${Math.round(v * 700)}+`);

  return (
    <Frame
      label="Relay / transmission grid"
      tag="PostGIS"
      readout={
        <>
          <div>
            PDF pages
            <motion.strong>{pages}</motion.strong>
          </div>
          <div>
            Projects mapped
            <motion.strong>{projects}</motion.strong>
          </div>
          <div className="hot">
            Coordination matches
            <motion.strong>{matches}</motion.strong>
          </div>
        </>
      }
    >
      <svg viewBox="0 0 560 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="relay-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#25253a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="560" height="400" fill="url(#relay-grid)" opacity=".7" />
        <path
          d="M-10 340 Q120 300 200 330 T380 350 T580 310"
          fill="none"
          stroke="#2ee6ff"
          strokeOpacity=".08"
          strokeWidth="34"
        />
        {lines.map((line) => (
          <RelayLine key={line.d} line={line} progress={progress} />
        ))}
        <motion.g style={{ opacity: nodeOpacity }}>
          {nodes.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#050508" stroke="#edecf4" strokeWidth="1.5" />
          ))}
        </motion.g>
        {overlaps.map((o) => (
          <RelayOverlap key={o.x} o={o} progress={progress} />
        ))}
      </svg>
    </Frame>
  );
}

/* ---------- RAG: papers in, a cited answer out ---------- */

const ragSteps = ["Retrieve", "Rerank", "Generate", "Cite"];

export function RagViz({ progress }: VizProps) {
  const stage = useStage(progress, [0.18, 0.36, 0.54, 0.72]);
  return (
    <Frame label="Biomedical RAG / evidence first" tag="PubMed">
      <div className="rag" data-stage={stage}>
        <div className="rag-docs">
          {[1, 2, 3].map((n) => (
            <div className="rag-doc" key={n}>
              <b>PUBMED / 0{n}</b>
              <u />
              <u />
              <u />
              <u />
            </div>
          ))}
        </div>
        <div className="rag-beam" />
        <div className="rag-ans">
          <h5>An answer. With evidence.</h5>
          <u />
          <u />
          <u />
          <u />
          <div className="rag-cites">
            <span>[1]</span>
            <span>[2]</span>
            <span>[3]</span>
          </div>
        </div>
        <div className="rag-steps">
          {ragSteps.map((step, i) => (
            <span key={step} className={stage > i ? "on" : undefined}>
              {i > 0 && "→ "}
              {step}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---------- AlpacaAgents: the guard that stops the order ---------- */

const gateLabels = [
  "Reconcile account",
  "Check order journal",
  "Check daily risk",
  "Submit paper order",
];

export function GateViz({ progress }: VizProps) {
  const stage = useStage(progress, [0.22, 0.42, 0.62]);
  const state = (i: number) => {
    if (i < Math.min(stage, 2)) return "pass";
    if (stage === 3 && i === 2) return "blocked";
    if (stage === 3 && i === 3) return "skipped";
    return "waiting";
  };
  const text = { pass: "Passed", blocked: "Blocked", skipped: "Not reached", waiting: "Waiting" };

  return (
    <Frame label="AlpacaAgents / decision path" tag="Paper only">
      <div className="gates" data-stage={stage}>
        <span className="gates-dot" />
        {gateLabels.map((label, i) => (
          <div className="gate" key={label} data-state={state(i)}>
            <em>0{i + 1}</em>
            <span>{label}</span>
            <strong>{text[state(i)]}</strong>
          </div>
        ))}
        <span className="gates-stamp">ORDER BLOCKED</span>
      </div>
    </Frame>
  );
}
