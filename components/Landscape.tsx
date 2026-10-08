"use client";

import { useId, useRef, useState, type PointerEvent } from "react";
import styles from "./Landscape.module.css";

/** An original, layered SVG scene. No canvas, video, or animation runtime. */
export function Landscape() {
  const id = useId().replace(/:/g, "");
  const paint = (name: string) => `url(#${id}-${name})`;
  const stage = useRef<HTMLDivElement>(null);
  const [night, setNight] = useState(false);
  const [paused, setPaused] = useState(false);

  function resetPerspective() {
    stage.current?.style.setProperty("--pointer-x", "0px");
    stage.current?.style.setProperty("--pointer-y", "0px");
  }

  function movePerspective(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    stage.current?.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 16}px`);
    stage.current?.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`);
  }

  return (
    <figure className={styles.artwork} data-night={night} data-paused={paused}>
      <div className={styles.masthead}>
        <span><span className={styles.liveDot} /> CODE / CANVAS</span>
        <span>STUDY NO. 01</span>
      </div>
      <div className={styles.frame}>
        <div ref={stage} className={styles.stage} onPointerMove={movePerspective} onPointerLeave={resetPerspective}>
          <svg className={styles.scene} viewBox="0 0 520 600" fill="none" role="img" aria-label={`${night ? "Moonlit" : "Sunrise"} Japanese mountain landscape with mist, a winding river, and a small torii gate`}>
            <defs>
              <linearGradient id={`${id}-sky`} x2="0" y2="1">
                <stop className={styles.skyTop} /><stop offset="1" className={styles.skyBottom} />
              </linearGradient>
              <linearGradient id={`${id}-sun`} x2=".3" y2="1">
                <stop className={styles.sunTop} /><stop offset="1" className={styles.sunBottom} />
              </linearGradient>
              <radialGradient id={`${id}-halo`}>
                <stop stopColor="var(--celestial)" stopOpacity=".35" /><stop offset="1" stopColor="var(--celestial)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${id}-mountain`} x1=".25" y1="0" x2=".7" y2="1">
                <stop stopColor="var(--peak)" /><stop offset="1" stopColor="var(--peak-base)" />
              </linearGradient>
              <linearGradient id={`${id}-mist`}>
                <stop stopColor="var(--fog)" stopOpacity="0" /><stop offset=".5" stopColor="var(--fog)" stopOpacity=".8" /><stop offset="1" stopColor="var(--fog)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`${id}-river`} x1="0" y1="0" x2=".4" y2="1">
                <stop stopColor="var(--fog)" /><stop offset="1" stopColor="var(--river)" />
              </linearGradient>
              <pattern id={`${id}-hatch`} width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M0 5L5 0" stroke="var(--fog)" strokeOpacity=".13" strokeWidth=".65" />
              </pattern>
              <pattern id={`${id}-grain`} width="31" height="29" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="8" r=".7" /><circle cx="19" cy="23" r=".5" /><circle cx="27" cy="4" r=".6" /><circle cx="11" cy="17" r=".45" />
              </pattern>
            </defs>
            <path d="M0 0H520V600H0Z" fill={paint("sky")} />
            <g className={styles.stars} fill="#ede5cd">
              {[[64, 105], [177, 58], [428, 73], [466, 168], [230, 101], [109, 199], [381, 43], [452, 249], [153, 136], [47, 271]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="1.3" />)}
              <path d="M406 112V122M401 117H411" stroke="#ede5cd" strokeWidth=".8" />
            </g>
            <g className={styles.skyDepth}>
              <g className={styles.solar}>
                <circle className={styles.halo} cx="322" cy="195" r="192" fill={paint("halo")} />
                <circle cx="322" cy="195" r="129" stroke="var(--celestial)" strokeOpacity=".28" strokeWidth=".7" />
                <circle className={styles.orbit} cx="322" cy="195" r="143" stroke="var(--celestial)" strokeOpacity=".4" strokeDasharray="1 12" />
                <circle cx="322" cy="195" r="111" fill={paint("sun")} />
                <path d="M212 196H432M214 215H430M220 234H424M230 253H414M246 272H398" stroke="var(--sky-bottom)" strokeOpacity=".22" />
              </g>
              <g className={styles.clouds} stroke="var(--fog)" strokeLinecap="round">
                <path d="M61 186H225M87 195H262M362 288H548M394 298H509" strokeWidth="2" opacity=".5" />
                <path d="M289 125H418M321 133H460" opacity=".4" />
              </g>
            </g>
            <path d="M-30 415L45 325L90 363L160 301L241 386L348 292L415 351L479 298L550 387V610H-30Z" fill="var(--far-ridge)" opacity=".42" />
            <g className={styles.peakDepth}>
              <path d="M-30 476Q54 434 126 373L252 224L283 257L303 270Q374 362 550 465V630H-30Z" fill={paint("mountain")} />
              <path d="M252 224L283 257L303 270L326 300L282 280L275 294L260 270L244 301L235 275L209 297Z" fill="var(--snow)" />
              <path d="M252 224L244 301L223 352L247 333L215 410L277 365L267 419L339 463L364 464L285 337L275 294L260 270Z" fill="var(--peak-shadow)" opacity=".35" />
              <path d="M-30 476Q54 434 126 373L252 224L283 257L303 270Q374 362 550 465V630H-30Z" fill={paint("hatch")} />
              <g stroke="var(--snow)" strokeOpacity=".18" strokeWidth="1">
                <path d="M218 321L162 395L193 377L155 431M293 310L329 357L317 353L381 414M247 323L226 366M271 344L281 372" />
              </g>
            </g>
            <g className={styles.mistBack} fill={paint("mist")}>
              <path d="M-90 383Q75 351 240 385T610 370V402Q433 428 250 406T-90 416Z" />
              <path d="M-90 433Q140 395 310 430T610 418V438Q419 462 210 447T-90 454Z" opacity=".5" />
            </g>
            <path d="M-30 476Q28 391 106 420T237 459Q312 480 383 413T550 426V630H-30Z" fill="var(--middle-ridge)" />
            <path className={styles.mistFront} d="M-100 461Q82 431 241 463T610 448V470Q418 498 232 480T-100 492Z" fill={paint("mist")} opacity=".5" />
            <path d="M255 454C353 474 351 490 275 508S184 534 292 551S405 582 342 620H213C330 584 308 575 228 559S199 521 269 502S324 477 255 454Z" fill={paint("river")} />
            <g className={styles.ripples} stroke="var(--snow)" strokeOpacity=".45" strokeLinecap="round">
              <path d="M295 481H326M282 495H310M224 529H267M236 538H280M298 569H343M311 583H355" />
              <path d="M281 486H314M242 523H261M280 560H301M289 593H328" strokeOpacity=".5" />
            </g>
            <g className={styles.foregroundDepth}>
              <path d="M-30 509Q39 458 111 483T220 525L157 554L210 620H-30Z" fill="var(--near-ridge)" />
              <path d="M550 474Q443 461 372 519L343 539L393 565L361 620H550Z" fill="var(--near-ridge)" />
              <g stroke="var(--ridge-line)" strokeOpacity=".3">
                <path d="M-30 532Q59 485 140 519M-30 546Q58 499 158 536M394 539Q451 490 550 512M411 552Q464 512 550 530" />
              </g>
              {/* A small torii gives the landscape a human scale. */}
              <g transform="translate(394 466) rotate(4)" fill="var(--gate)">
                <path d="M0 0Q21 7 44 0L43 6Q21 11 1 6ZM4 13H40V17H4ZM9 6H14L13 43H8ZM30 6H35L36 43H31Z" />
                <path d="M20 6H24V15H20Z" />
              </g>
              <path d="M-30 582Q65 539 151 596L192 630H-30ZM402 619Q463 553 550 570V630Z" fill="var(--front-ink)" />
              <g className={styles.reeds} stroke="var(--front-ink)" strokeWidth="2" strokeLinecap="round">
                <path d="M49 580Q50 541 35 524M59 579Q62 543 78 534M70 588Q75 559 89 551M468 589Q461 548 478 529M477 595Q481 563 498 551" />
                <path d="M35 524L31 511M78 534L86 523M478 529L485 515" strokeWidth="4" />
              </g>
            </g>
            <g className={styles.birds} stroke="var(--bird)" strokeWidth="1.7" strokeLinecap="round">
              <path d="M371 159Q378 154 384 160Q389 152 396 155M408 179Q412 175 417 180Q422 173 427 177M351 178Q355 175 360 180Q365 173 369 176" />
            </g>
            <g className={styles.motes} fill="var(--celestial)" opacity=".7">
              <circle cx="100" cy="438" r="1.8" /><circle cx="173" cy="489" r="1.3" /><circle cx="358" cy="425" r="1.5" /><circle cx="431" cy="395" r="1.2" /><circle cx="66" cy="375" r="1" />
            </g>
            <path d="M0 0H520V600H0Z" fill={paint("grain")} opacity=".09" />
          </svg>
          <div className={styles.inscription} aria-hidden="true">
            <span className={styles.japanese} lang="ja">静かな情熱</span>
            <span className={styles.translation}>QUIET PASSION</span>
          </div>
          <span className={styles.coordinates} aria-hidden="true">35°21′ N / 138°43′ E</span>
          <div className={styles.sceneFooter} aria-hidden="true">
            <span className={styles.sceneLabel}>{night ? "02 / BLUE HOUR" : "01 / FIRST LIGHT"}</span>
            <span className={styles.seal} lang="ja">創造</span>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        <div className={styles.titleRow}>
          <div><p className={styles.eyebrow}>AN EXERCISE IN BALANCE</p><h2>Stillness in motion<span>.</span></h2></div>
          <span className={styles.edition}>富士山<br /><span>FUJI, JP</span></span>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.modes} role="group" aria-label="Landscape lighting">
            <button type="button" aria-pressed={!night} onClick={() => setNight(false)}><span className={styles.dawnIcon} aria-hidden="true" />Dawn</button>
            <button type="button" aria-pressed={night} onClick={() => setNight(true)}><span className={styles.moonIcon} aria-hidden="true" />Dusk</button>
          </div>
          <button type="button" className={styles.pause} aria-label={paused ? "Resume landscape animation" : "Pause landscape animation"} onClick={() => { setPaused(!paused); resetPerspective(); }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">{paused ? <path d="M3 1L11 6L3 11Z" /> : <path d="M2 1H5V11H2ZM7 1H10V11H7Z" />}</svg>
            <span>{paused ? "Resume" : "Pause"}</span>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
