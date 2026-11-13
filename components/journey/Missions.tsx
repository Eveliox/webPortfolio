"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";
import { ChapterHead } from "./ChapterHead";

const numerals = ["壱", "弐", "参", "肆", "伍", "陸"];
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// On wide, tall screens this chapter pins and scrolls sideways, like a train
// passing stations. Everywhere else it is a plain vertical list.
export function Missions() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distRef = useRef(0);
  const [horizontal, setHorizontal] = useState(false);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1000px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setHorizontal(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useIsoLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const d = horizontal ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;
      distRef.current = d;
      setDist(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [horizontal]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * distRef.current);

  return (
    <section
      id="record"
      ref={sectionRef}
      className={horizontal ? "missions is-h" : "missions"}
      style={horizontal ? { height: `calc(100vh + ${dist}px)` } : undefined}
      aria-labelledby="record-title"
    >
      <div className="missions-sticky">
        <motion.div ref={trackRef} className="missions-track" style={horizontal ? { x } : undefined}>
          <div className="missions-intro" id="record-title">
            <ChapterHead
              no="02"
              jp="経歴"
              en="Record"
              title="Where the hours went."
              lede="Four postings, most recent first: production software, county data, a team of ten, and two years keeping a campus running."
            />
          </div>

          {experience.map((job, i) => (
            <article className="mission" key={`${job.company}-${job.role}`}>
              <span className="ghost" aria-hidden="true" lang="ja">
                {numerals[i]}
              </span>
              <p className="mission-meta">
                {job.period} · {job.location}
              </p>
              <h3>{job.role}</h3>
              <p className="mission-co">{job.company}</p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}

          <span className="missions-end" aria-hidden="true" lang="ja">
            続く
          </span>
        </motion.div>

        <div className="missions-count" aria-hidden="true">
          <span>Record</span>
          <div>
            <motion.span style={{ scaleX: scrollYProgress }} />
          </div>
          <span>{String(experience.length).padStart(2, "0")} postings</span>
        </div>
      </div>
    </section>
  );
}
