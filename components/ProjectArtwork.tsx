import type { ComponentType, ReactNode } from "react";
import type { ProjectVisual } from "@/lib/data";
import styles from "./ProjectArtwork.module.css";

function Label({ x, y, children, kind = "small" }: { x: number; y: number; children: ReactNode; kind?: "small" | "title" | "muted" | "accent" | "metric" }) {
  return <text x={x} y={y} className={styles[kind]}>{children}</text>;
}
function Lines({ x, y, width = 100 }: { x: number; y: number; width?: number }) {
  return <path d={`M${x} ${y}h${width}M${x} ${y + 10}h${width * .85}M${x} ${y + 20}h${width * .62}`} className={styles.lines} />;
}
function Window({ title, children }: { title: string; children: ReactNode }) {
  return <><rect x="24" y="24" width="552" height="312" rx="5" className={styles.window} /><path d="M24 54H576" className={styles.rule} /><g className={styles.chrome}><circle cx="39" cy="39" r="2" /><circle cx="48" cy="39" r="2" /><circle cx="57" cy="39" r="2" /></g><Label x={76} y={43}>{title}</Label>{children}</>;
}

function Relay() {
  return <Window title="RELAY / TRANSMISSION INTELLIGENCE">
    <path d="M395 54V336" className={styles.rule} />
    <g className={styles.map}>
      <path d="M26 109L111 138L167 84L245 111L299 64M24 203L102 171L165 214L231 171L303 215L394 182M58 334L111 265L181 288L244 236L322 279L395 251M95 54L123 136L102 171L111 265M202 54L167 84L165 214L181 288L168 336M321 54L303 135L303 215L322 279L346 335" />
      <path d="M32 268C99 229 124 289 188 221S227 128 294 144S336 205 390 99" className={styles.river} />
    </g>
    <g className={styles.network}><path d="M78 223L151 169L218 204L288 126L346 153M151 169L130 106M218 204L300 272" /><path d="M78 223L218 204L346 153" strokeDasharray="4 5" opacity=".5" /></g>
    <circle cx="218" cy="204" r="31" className={styles.zone} />
    {[[78,223],[151,169],[218,204],[288,126],[346,153],[130,106],[300,272]].map(([x,y]) => <g key={x}><circle cx={x} cy={y} r="6" className={styles.node} /><circle cx={x} cy={y} r="2" className={styles.accentFill} /></g>)}
    <rect x="168" y="242" width="116" height="25" rx="3" className={styles.window} /><Label x={179} y={258} kind="accent">OVERLAP DETECTED</Label>
    <Label x={414} y={82} kind="muted">PLANNING OVERVIEW</Label><Label x={414} y={125} kind="metric">252</Label><Label x={414} y={146}>Projects mapped</Label><path d="M414 164H556" className={styles.rule} /><Label x={414} y={205} kind="metric">39</Label><Label x={414} y={226}>Coordination matches</Label><path d="M414 244H556" className={styles.rule} /><Label x={414} y={269} kind="accent">CROSS-UTILITY</Label><Lines x={414} y={286} width={119} />
    <Label x={41} y={318} kind="muted">POSTGIS / GEOSPATIAL MATCHING</Label>
  </Window>;
}

function Research() {
  return <Window title="BIOMEDICAL / EVIDENCE BEFORE ANSWERS">
    <rect x="42" y="73" width="516" height="32" rx="3" className={styles.panel} /><circle cx="59" cy="87" r="5" className={styles.outline} /><path d="M63 91L67 95" className={styles.outline} /><Label x={79} y={94}>Search biomedical literature...</Label>
    <Label x={45} y={128} kind="muted">01 / RETRIEVE</Label>
    {[0,1,2].map(n => <g key={n}><rect x={47 + n * 8} y={155 + n * 7} width="145" height="124" rx="2" className={styles.window} /><Label x={64+n*8} y={179+n*7} kind="accent">PUBMED / 0{n+1}</Label><Lines x={64+n*8} y={199+n*7} width={101} /><Lines x={64+n*8} y={239+n*7} width={81} /></g>)}
    <path d="M217 213H275M268 208L275 213L268 218" className={styles.connector} />
    <Label x={300} y={128} kind="muted">02 / GROUNDED RESPONSE</Label><rect x="294" y="143" width="261" height="156" rx="4" className={styles.panel} /><Label x={311} y={168} kind="title">An answer. With evidence.</Label><Lines x={312} y={190} width={217} /><Lines x={312} y={229} width={156} />
    {[1,2,3].map((n) => <g key={n}><rect x={312+(n-1)*49} y="268" width="37" height="18" rx="3" className={styles.citation} /><Label x={322+(n-1)*49} y={280} kind="accent">[{n}]</Label></g>)}
    <Label x={47} y={321} kind="muted">RETRIEVE → RERANK → GENERATE → CITE</Label>
  </Window>;
}

function Trading() {
  const candles = [86,102,94,121,112,136,125,155,145,169,153,181,177,196];
  return <Window title="ALPACAAGENTS / PAPER TRADING ONLY">
    <rect x="41" y="71" width="518" height="30" rx="3" className={styles.panel} /><circle cx="56" cy="86" r="3" className={styles.accentFill} /><Label x={67} y={90} kind="accent">SIMULATION MODE</Label><Label x={390} y={90} kind="muted">LIVE ORDERS DISABLED</Label>
    <Label x={43} y={128} kind="title">Signal / risk / execution</Label>
    {[160,194,228,262].map(y => <path key={y} d={`M43 ${y}H346`} className={styles.rule} />)}
    {candles.map((v,i) => {const y=322-v; return <g key={i} className={i%3 === 0 ? styles.falling : styles.rising}><path d={`M${55+i*21} ${y-15}v45`} /><rect x={50+i*21} y={y} width="10" height={i%3 === 0 ? 18 : 24} /></g>;})}
    <path d="M45 261Q101 253 139 226T211 219T344 156" className={styles.trend} />
    <rect x="371" y="117" width="185" height="168" rx="3" className={styles.panel} /><Label x={385} y={140} kind="muted">EXECUTION GUARDS</Label>
    {["Kill switch", "Playbook approval", "Position reconcile", "Daily-loss breaker"].map((text,i) => <g key={text}><path d={`M385 ${162+i*30}l3 3 6-7`} className={styles.connector} /><Label x={404} y={165+i*30}>{text}</Label></g>)}
    <Label x={43} y={314} kind="muted">ILLUSTRATIVE SIGNAL / NO LIVE PERFORMANCE</Label>
  </Window>;
}

function Campus() {
  return <Window title="PANTHER AI / YOUR CAMPUS COPILOT">
    <rect x="41" y="72" width="156" height="244" rx="3" className={styles.panel} /><Label x={56} y={96} kind="title">Campus, simplified.</Label><Label x={56} y={122} kind="muted">MY WORKSPACE</Label>
    {["Coursework", "Deadlines", "Campus services"].map((s,i) => <g key={s}><rect x="55" y={140+i*34} width="11" height="11" rx="2" className={styles.outline} /><Label x={77} y={149+i*34}>{s}</Label></g>)}
    <path d="M56 246H180" className={styles.rule} /><Label x={56} y={268} kind="accent">+ UPLOAD SYLLABUS</Label><Label x={56} y={288} kind="muted">PDF → OCR → CONTEXT</Label>
    <rect x="294" y="79" width="261" height="43" rx="6" className={styles.userBubble} /><Label x={309} y={105}>Help me organize my week.</Label>
    <circle cx="225" cy="158" r="13" className={styles.citation} /><Label x={219} y={162} kind="accent">P</Label>
    <rect x="249" y="140" width="306" height="124" rx="6" className={styles.panel} /><Label x={264} y={163} kind="title">Let’s make a plan.</Label><Lines x={264} y={183} width={224} />
    {["COURSES", "SCHEDULE", "RESOURCES"].map((s,i) => <g key={s}><rect x={264+i*92} y="223" width="83" height="24" rx="3" className={styles.window} /><Label x={271+i*92} y={238} kind="muted">{s}</Label></g>)}
    <rect x="214" y="281" width="341" height="35" rx="5" className={styles.window} /><Label x={228} y={303} kind="muted">Ask about life at FIU...</Label><path d="M530 293L539 298L530 303M538 298H522" className={styles.connector} />
  </Window>;
}

function Pipeline() {
  return <Window title="MARKET DATA / ANATOMY OF A PIPELINE">
    <Label x={44} y={89} kind="title">From raw events to reliable data.</Label><Label x={44} y={110} kind="muted">ORCHESTRATED WITH APACHE AIRFLOW</Label>
    <path d="M97 183H499" className={styles.flow} />
    {["INGEST", "VALIDATE", "TRANSFORM", "LOAD"].map((s,i) => <g key={s}>
      <rect x={44+i*134} y="146" width="107" height="76" rx="4" className={styles.panel} /><Label x={56+i*134} y={166} kind="accent">0{i+1}</Label><Label x={56+i*134} y={207}>{s}</Label>
      {i===0 ? <path d="M116 165v20m-6-6 6 6 6-6" className={styles.outline} /> : i===1 ? <path d="M243 176l6 6 13-16" className={styles.connector} /> : i===2 ? <path d="M376 167h16m-12 8h12m-16 8h16" className={styles.outline} /> : <g className={styles.outline}><ellipse cx="517" cy="166" rx="10" ry="4" /><path d="M507 166V182Q517 190 527 182V166M507 174Q517 181 527 174" /></g>}
    </g>)}
    <path d="M232 222V264H334" className={styles.rejected} /><Label x={244} y={255} kind="accent">INVALID → REJECT</Label><rect x="44" y="250" width="128" height="49" rx="3" className={styles.window} /><Label x={57} y={269} kind="muted">API EVENT STREAM</Label><path d="M57 286h12l4-9 6 17 5-12 4 4h65" className={styles.connector} />
    <Label x={414} y={263} kind="muted">POSTGRESQL</Label><Label x={414} y={280}>Analytics-ready rows</Label><Label x={44} y={321} kind="muted">INGEST / RETRY / BACKFILL / REPEAT</Label>
  </Window>;
}

function Property() {
  return <Window title="REAL ESTATE / SEE BEYOND THE LISTING">
    <g className={styles.map}><path d="M32 256L275 124M25 208L220 103M69 326L285 206M117 70L286 292M31 126L182 335M216 64L305 180" /></g>
    <path d="M67 233L172 291L275 232L169 173Z" className={styles.houseGround} />
    <path d="M97 161L165 199V263L97 225Z" className={styles.houseSide} /><path d="M165 199L242 156V220L165 263Z" className={styles.houseFront} />
    <path d="M82 165L145 97L220 139L165 213Z" className={styles.houseRoof} /><path d="M145 97L220 139L252 163L181 122Z" className={styles.houseSide} />
    <path d="M188 216L210 204V238L188 251Z" className={styles.houseDoor} /><path d="M115 190L137 202V222L115 210Z" className={styles.window} />
    <Label x={64} y={315} kind="muted">MULTIPLE SOURCES. ONE SCHEMA.</Label>
    <rect x="306" y="75" width="248" height="228" rx="4" className={styles.panel} /><Label x={322} y={100} kind="title">Compare with clarity.</Label><Label x={322} y={124} kind="muted">NORMALIZED LISTING FIELDS</Label>
    {[['Address','MATCHED'],['Price / sq ft','NORMALIZED'],['Features','INDEXED']].map(([s,v],i) => <g key={s}><path d={`M322 ${143+i*34}H538`} className={styles.rule} /><Label x={322} y={164+i*34}>{s}</Label><Label x={453} y={164+i*34} kind="accent">{v}</Label></g>)}
    <rect x="322" y="257" width="216" height="28" rx="3" className={styles.citation} /><Label x={337} y={275} kind="accent">FILTER → RANK → REVIEW</Label>
  </Window>;
}

function Studio() {
  return <>
    <rect x="33" y="34" width="469" height="285" rx="4" className={styles.window} /><path d="M33 65H502" className={styles.rule} /><Label x={51} y={54}>AZUL / INDEPENDENT WEB STUDIO</Label><circle cx="482" cy="49" r="3" className={styles.accentFill} />
    <Label x={57} y={98} kind="muted">STRATEGY. DESIGN. DEVELOPMENT.</Label>
    <text x="54" y="164" className={styles.studioWord}>azul<tspan className={styles.accentFill}>.</tspan></text>
    <Label x={59} y={193} kind="title">Small studio. Considered websites.</Label><Lines x={59} y={216} width={209} /><path d="M59 269H179M172 264L179 269L172 274" className={styles.connector} /><Label x={59} y={259} kind="accent">FROM IDEA TO LAUNCH</Label>
    <g className={styles.studioSculpture}><ellipse cx="371" cy="226" rx="61" ry="15" /><ellipse cx="371" cy="207" rx="53" ry="19" /><ellipse cx="371" cy="182" rx="44" ry="23" /><ellipse cx="371" cy="150" rx="32" ry="26" /></g>
    <rect x="441" y="132" width="119" height="200" rx="12" className={styles.phone} /><rect x="481" y="139" width="39" height="4" rx="2" className={styles.chrome} /><Label x={456} y={170} kind="title">azul.</Label><path d="M456 184H544" className={styles.rule} /><Label x={456} y={210}>Thoughtful</Label><Label x={456} y={225}>by design.</Label><rect x="456" y="241" width="89" height="52" rx="2" className={styles.citation} /><path d="M467 279L484 253L501 279M489 271H534" className={styles.connector} /><path d="M480 320H522" className={styles.rule} />
  </>;
}

const visuals: Record<ProjectVisual, { component: ComponentType; label: string }> = {
  relay: { component: Relay, label: "Geospatial coordination" },
  research: { component: Research, label: "Evidence-grounded research" },
  trading: { component: Trading, label: "Safety-first execution" },
  campus: { component: Campus, label: "A copilot for campus life" },
  pipeline: { component: Pipeline, label: "From stream to storage" },
  property: { component: Property, label: "Property intelligence" },
  studio: { component: Studio, label: "From brand to browser" },
};

/** Purpose-built interface illustrations, explicitly labeled rather than presented as screenshots. */
export function ProjectArtwork({ visual }: { visual: ProjectVisual }) {
  const { component: Visual, label } = visuals[visual];
  return (
    <div className={styles.artwork} data-visual={visual}>
      <svg className={styles.canvas} viewBox="0 0 600 360" fill="none" aria-hidden="true" focusable="false"><Visual /></svg>
      <div className={styles.caption}><span>{label}</span><span>INTERFACE STUDY <span aria-hidden="true">↗</span></span></div>
    </div>
  );
}
