"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { certifications, skills } from "@/lib/data";
import { ChapterHead } from "./ChapterHead";

function Row({
  group,
  items,
  index,
  progress,
}: {
  group: string;
  items: string[];
  index: number;
  progress: MotionValue<number>;
}) {
  // Rows slide in opposite directions as the page scrolls.
  const x = useTransform(progress, [0, 1], index % 2 === 0 ? ["0%", "-22%"] : ["-22%", "0%"]);
  return (
    <div>
      <p className="arsenal-label">
        0{index + 1} / {group}
      </p>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <motion.div className="arsenal-line" style={{ x }} aria-hidden="true">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}

export function Arsenal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="arsenal" className="chapter arsenal" aria-labelledby="arsenal-title">
      <div className="wrap" id="arsenal-title">
        <ChapterHead no="04" jp="技術" en="Arsenal" title="Tools of the night shift." />
      </div>

      <div className="arsenal-rows" ref={ref}>
        {skills.map((s, i) => (
          <Row key={s.group} group={s.group} items={s.items} index={i} progress={scrollYProgress} />
        ))}
      </div>

      <div className="wrap certs">
        <h3>
          <span lang="ja">免許</span> / Certifications
        </h3>
        <ul>
          {certifications.map((c) => (
            <li key={c.title}>
              <span>{c.year}</span>
              {c.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
