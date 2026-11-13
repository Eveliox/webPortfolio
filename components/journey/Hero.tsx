"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, personal } from "@/lib/data";
import { CityCanvas } from "./CityCanvas";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // As you scroll, the sun sets, the skyline rises, and the title gives way.
  const titleOpacity = useTransform(scrollYProgress, [0.12, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-14%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
  const footOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const interOpacity = useTransform(scrollYProgress, [0.62, 0.82], [0, 1]);
  const interY = useTransform(scrollYProgress, [0.62, 0.82], [30, 0]);

  return (
    <section id="top" ref={ref} className="hero" aria-label="Introduction">
      <div className="hero-sticky">
        <CityCanvas progress={scrollYProgress} />

        <motion.div
          className="hero-content"
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
        >
          <p className="hero-eyebrow">
            <span lang="ja">ネオ・マイアミ</span>
            {personal.location} / 25.76°N 80.19°W
          </p>
          <h1 className="hero-name" aria-label={personal.name}>
            <span aria-hidden="true">
              <span className="glitch" data-text="EVELIO">
                EVELIO
              </span>
            </span>
            <span aria-hidden="true">
              <span className="glitch" data-text="GONZALEZ">
                GONZALEZ
              </span>
            </span>
          </h1>
          <p className="hero-kana" lang="ja" aria-hidden="true">
            エベリオ・ゴンザレス
          </p>
        </motion.div>

        <motion.div className="hero-foot" style={{ opacity: footOpacity }}>
          <p className="hero-tagline">
            I build software that turns messy data into <em>useful decisions.</em>
          </p>
          <div className="hero-side">
            <p className="hero-status">
              <i aria-hidden="true" />
              {hero.status}
            </p>
            <a href="#self" className="hero-scroll">
              Scroll to descend <span aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-inter"
          style={{ opacity: interOpacity, y: interY }}
          aria-hidden="true"
        >
          <p>18:47 — 日没 / Sundown</p>
          <p>
            The sun goes down.
            <br />
            The work starts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
