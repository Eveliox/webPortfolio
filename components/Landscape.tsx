/** A living woodblock print: CSS motion keeps the scene lightweight and JS-free. */
export function Landscape() {
  return (
    <div className="landscape" aria-hidden="true">
      <svg viewBox="0 0 520 620" fill="none" focusable="false">
        <defs>
          <pattern id="landscape-grid" width="65" height="65" patternUnits="userSpaceOnUse">
            <path d="M65 0H0V65" stroke="currentColor" strokeOpacity=".06" />
          </pattern>
          <pattern id="landscape-lines" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 6L6 0" stroke="var(--paper)" strokeOpacity=".12" strokeWidth=".6" />
          </pattern>
          <linearGradient id="mountain-fade" x1="260" y1="260" x2="260" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity=".95" /><stop offset="1" stopColor="currentColor" stopOpacity=".4" />
          </linearGradient>
          <radialGradient id="landscape-glow">
            <stop stopColor="var(--sumi)" stopOpacity=".24" /><stop offset="1" stopColor="var(--sumi)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="landscape-mist">
            <stop stopColor="var(--paper)" stopOpacity="0" /><stop offset=".5" stopColor="var(--paper)" stopOpacity=".7" /><stop offset="1" stopColor="var(--paper)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="landscape-frame"><path d="M0 0H520V620H0Z" /></clipPath>
        </defs>
        <g clipPath="url(#landscape-frame)">
          <path d="M30 40H490V580H30Z" fill="url(#landscape-grid)" />
          <g className="landscape-solar">
            <circle className="landscape-glow" cx="310" cy="205" r="185" fill="url(#landscape-glow)" />
            <circle className="landscape-orbit" cx="310" cy="205" r="131" stroke="var(--sumi)" strokeOpacity=".25" strokeDasharray="1 7" />
            <circle className="landscape-sun" cx="310" cy="205" r="108" />
            <path d="M218 174H402M207 187H414M204 201H417" stroke="var(--paper)" strokeOpacity=".1" />
          </g>
          <g className="landscape-cloud landscape-cloud-high" stroke="var(--paper)" strokeLinecap="round">
            <path d="M155 157H282M193 168H314" strokeWidth="3" />
            <path d="M348 268H501M392 278H533" strokeWidth="2" />
          </g>
          <path className="landscape-distant" d="M-30 445L64 338L112 381L182 318L247 409L357 315L416 369L471 331L550 433V640H-30Z" fill="currentColor" opacity=".2" />
          <g className="landscape-mountain">
            <path d="M-30 491L78 398L133 425L257 249L295 292L322 307L550 511V640H-30Z" fill="url(#mountain-fade)" />
            <path d="M211 315L257 249L295 292L322 307L288 304L272 291L258 318L245 294L231 319Z" className="mountain-snow" />
            <path d="M257 322L209 423L243 397L217 466M279 334L329 403L310 396L375 467" stroke="var(--paper)" strokeOpacity=".15" />
            <path d="M-30 491L78 398L133 425L257 249L295 292L322 307L550 511V640H-30Z" fill="url(#landscape-lines)" />
          </g>
          <g className="landscape-mist landscape-mist-back" fill="url(#landscape-mist)">
            <path d="M-90 409Q80 377 238 414T610 402V431Q410 454 250 436T-90 446Z" />
            <path d="M-90 455Q150 425 330 459T610 447V461Q410 488 210 471T-90 481Z" opacity=".5" />
          </g>
          <path className="landscape-ridge landscape-ridge-back" d="M-40 510C65 414 135 501 231 478S384 397 560 475V650H-40Z" />
          <path className="landscape-mist landscape-mist-front" d="M-90 495Q70 466 260 497T610 485V506Q430 530 250 514T-90 526Z" fill="url(#landscape-mist)" opacity=".5" />
          <path className="landscape-ridge landscape-ridge-front" d="M-40 555C74 477 161 567 279 522S433 493 560 544V650H-40Z" />
          <g className="landscape-water" stroke="var(--paper)" strokeOpacity=".2" strokeWidth="1">
            <path d="M-70 567C60 513 173 601 306 552S480 541 590 565" />
            <path d="M-70 580C60 526 173 614 306 565S480 554 590 578" />
            <path d="M-70 596C60 542 173 630 306 581S480 570 590 594" />
          </g>
          <g className="landscape-birds" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M363 126Q370 120 378 127Q385 118 392 122" />
            <path d="M400 145Q405 141 411 146Q416 139 422 142" />
            <path d="M341 147Q345 143 351 148Q356 141 361 145" />
          </g>
          <path d="M46 62V42H66M454 42H474V62" stroke="currentColor" strokeOpacity=".35" />
        </g>
      </svg>
      <span className="landscape-script" lang="ja">静かな情熱</span>
      <span className="landscape-stamp" lang="ja">創造</span>
      <div className="landscape-caption"><span><i className="landscape-live" />静 / A LIVING LANDSCAPE</span><span>01 — 2026</span></div>
    </div>
  );
}
