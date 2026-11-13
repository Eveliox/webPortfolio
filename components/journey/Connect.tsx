"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, personal } from "@/lib/data";
import { EmailAddress, EmailLink } from "@/components/EmailLink";

// The night ends where it began: the same red sun, now rising.
export function Connect() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const sunY = useTransform(scrollYProgress, [0, 1], ["100%", "70%"]);

  return (
    <section id="connect" ref={ref} className="connect" aria-labelledby="connect-title">
      <div className="dawn-glow" aria-hidden="true" />
      <motion.div className="dawn" style={{ y: sunY }} aria-hidden="true" />

      <div className="wrap connect-inner">
        <p className="chapter-head">
          <b>05</b>
          <i aria-hidden="true" />
          <strong lang="ja">接続</strong>
          <span>05:58 — First light</span>
        </p>
        <h2 className="connect-title" id="connect-title">
          <span className="glitch" data-text="LET’S TALK.">
            LET’S TALK.
          </span>
        </h2>
        <p className="connect-lede">
          {hero.status} Based in {personal.location}.
        </p>
        <EmailLink className="connect-mail">
          <EmailAddress />
        </EmailLink>
        <div className="btn-row">
          <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Résumé ↗<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn">
            GitHub ↗<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn ↗<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      <footer className="site-foot">
        <p>
          <b lang="ja">終点</b>End of the line
        </p>
        <p>© 2026 {personal.name}</p>
        <a href="#top">Back to sundown ↑</a>
      </footer>
    </section>
  );
}
