"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { personal } from "@/lib/data";
import { chapters } from "./chapters";

// The story runs from sundown to first light; scroll position is the clock.
const START_MIN = 18 * 60 + 47;
const SPAN_MIN = 11 * 60 + 11; // ends 05:58

function storyTime(progress: number) {
  const total = Math.round(START_MIN + progress * SPAN_MIN) % 1440;
  const h = String(Math.floor(total / 60)).padStart(2, "0");
  const m = String(total % 60).padStart(2, "0");
  return `${h}:${m}`;
}

export function Hud() {
  const { scrollYProgress } = useScroll();
  const [time, setTime] = useState(storyTime(0));
  const [active, setActive] = useState<string>("top");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setTime(storyTime(v));
  });

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      let current: string = chapters[0].id;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= mid) current = c.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header className="hud-top">
        <a href="#top" className="hud-mark" aria-label={`${personal.name}, back to top`}>
          <span className="hud-stamp" aria-hidden="true">
            EG
          </span>
          <span aria-hidden="true">{personal.nameKatakana}</span>
        </a>
        <div className="hud-links">
          <span className="hud-clock" title="Story time: sundown to first light">
            <span className="hud-hide-sm">Neo-Miami </span>
            {time}
          </span>
          <a href={personal.resume} target="_blank" rel="noopener noreferrer">
            Résumé ↗<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href="#connect" className="hud-hide-sm">
            Contact
          </a>
        </div>
      </header>

      <nav className="hud-rail" aria-label="Chapters">
        <ol>
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}>
                <span>
                  <b>{c.jp}</b>
                  {c.no} {c.en}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <motion.div className="hud-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </>
  );
}
