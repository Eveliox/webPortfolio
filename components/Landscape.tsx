/** Original code-native landscape inspired by Japanese woodblock compositions. */
export function Landscape() {
  return (
    <div className="landscape" aria-hidden="true">
      <svg viewBox="0 0 520 620" fill="none">
        <defs>
          <pattern id="landscape-grid" width="65" height="65" patternUnits="userSpaceOnUse"><path d="M65 0H0V65" stroke="currentColor" strokeOpacity=".09" /></pattern>
          <pattern id="landscape-lines" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8L8 0" stroke="currentColor" strokeOpacity=".13" strokeWidth=".6" /></pattern>
          <linearGradient id="mountain-fade" x1="260" y1="290" x2="260" y2="580" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor" stopOpacity=".85" /><stop offset="1" stopColor="currentColor" stopOpacity=".45" /></linearGradient>
        </defs>
        <path d="M30 40H490V580H30Z" fill="url(#landscape-grid)" />
        <circle className="landscape-sun" cx="305" cy="215" r="113" />
        <circle cx="305" cy="215" r="132" stroke="currentColor" strokeOpacity=".15" />
        <path d="M0 465L105 366L151 393L256 245L301 303L324 295L520 475V580H0Z" fill="url(#mountain-fade)" />
        <path d="M213 305L256 245L301 303L278 293L262 311L248 286L235 309Z" className="mountain-snow" />
        <path d="M0 465L105 366L151 393L256 245L301 303L324 295L520 475V580H0Z" fill="url(#landscape-lines)" />
        <path d="M0 494C105 425 174 523 282 467C392 410 435 429 520 461V620H0Z" className="landscape-ridge" />
        <path d="M0 547C128 487 195 578 329 527C421 492 475 511 520 527M0 563C128 503 195 594 329 543C421 508 475 527 520 543" stroke="var(--paper)" strokeOpacity=".25" />
        <path className="landscape-cloud" d="M29 205H170M8 219H122M359 344H508M400 358H520" stroke="var(--paper)" strokeWidth="3" />
        <path d="M46 62V42H66M454 42H474V62M46 552V572H66M454 572H474V552" stroke="currentColor" strokeOpacity=".45" />
      </svg>
      <span className="landscape-script" lang="ja">静かな情熱</span>
      <span className="landscape-stamp" lang="ja">創造</span>
      <div className="landscape-caption"><span>静 / QUIETLY CREATING</span><span>01 — 2026</span></div>
    </div>
  );
}
