"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { about, education, personal } from "@/lib/data";
import { ChapterHead } from "./ChapterHead";

const stats = [
  { value: 6, suffix: "", unit: "", label: "internal applications" },
  { value: 50, suffix: "+", unit: "", label: "employees served" },
  { value: 20, suffix: "+", unit: "hrs", label: "saved monthly" },
];

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const opacity = useTransform(progress, [start, Math.min(1, start + 6 / total)], [0.16, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

function Counter({ value, suffix, unit }: { value: number; suffix: string; unit: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <strong ref={ref}>
      {n}
      {suffix}
      {unit && <small>{unit}</small>}
    </strong>
  );
}

export function Identity() {
  const bioRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: bioRef, offset: ["start 0.85", "end 0.45"] });
  const words = about.split(" ");

  return (
    <section id="self" className="chapter" aria-labelledby="self-title">
      <div className="wrap">
        <div id="self-title">
          <ChapterHead no="01" jp="自己" en="Identity" title="The operator." />
        </div>

        <div className="identity-grid">
          <aside className="identity-aside">
            <figure className="idcard">
              <div className="idcard-top">
                <span>Operator ID</span>
                <span lang="ja">身分証</span>
              </div>
              <div className="idcard-photo">
                <Image
                  src="/headshot.jpg"
                  alt={`Portrait of ${personal.name}`}
                  width={400}
                  height={400}
                  sizes="340px"
                  priority={false}
                />
              </div>
              <figcaption>
                <dl>
                  <dt>Name</dt>
                  <dd>{personal.name}</dd>
                  <dt lang="ja">名前</dt>
                  <dd className="jp" lang="ja">
                    {personal.nameKatakana}
                  </dd>
                  <dt>Base</dt>
                  <dd>{personal.location}</dd>
                  <dt>Class</dt>
                  <dd>Full-stack engineer</dd>
                  <dt>Status</dt>
                  <dd className="ok">Available Summer 2027</dd>
                </dl>
              </figcaption>
              <div className="idcard-code" aria-hidden="true" />
            </figure>
          </aside>

          <div>
            <p className="bio" ref={bioRef}>
              <span className="sr-only">{about}</span>
              <span aria-hidden="true">
                {words.map((word, i) => (
                  <Word
                    key={i}
                    word={word}
                    index={i}
                    total={words.length}
                    progress={scrollYProgress}
                  />
                ))}
              </span>
            </p>

            <div className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} unit={s.unit} />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="stats-note">From my engineering internship at Caley Insurance.</p>

            <div className="edu">
              {education.map((e) => (
                <div className="edu-item" key={e.school}>
                  <span className="f-mono">
                    {e.graduation} · {e.location}
                  </span>
                  <h4>{e.school}</h4>
                  <p>{e.degree}</p>
                  {e.coursework && <p>{e.coursework.join(" / ")}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
