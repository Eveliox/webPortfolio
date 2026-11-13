"use client";

import { useRef, type ComponentType } from "react";
import Link from "next/link";
import { useScroll, type MotionValue } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/data";
import { ChapterHead } from "./ChapterHead";
import { GateViz, RagViz, RelayViz } from "./WorkVisuals";

type Study = (typeof caseStudies)[number];

const visuals: Record<string, ComponentType<{ progress: MotionValue<number> }>> = {
  relay: RelayViz,
  "biomedical-rag": RagViz,
  "alpaca-agents": GateViz,
};

const featuredNames = new Set(caseStudies.map((s) => s.project.name));
const sideProjects = projects.filter((p) => !featuredNames.has(p.name));

function NewTab() {
  return <span className="sr-only"> (opens in new tab)</span>;
}

function WorkScene({ study, flip }: { study: Study; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end end"] });
  const Viz = visuals[study.slug];
  const { project } = study;

  return (
    <article ref={ref} className={flip ? "work flip" : "work"} aria-labelledby={`work-${study.slug}`}>
      <div className="work-sticky">
        <div className="wrap work-grid">
          <div className="work-viz">{Viz && <Viz progress={scrollYProgress} />}</div>
          <div className="work-copy">
            <span className="ghost" aria-hidden="true">
              {study.number}
            </span>
            <p className="work-file">
              File {study.number} / {study.discipline}
            </p>
            <h3 className="work-name" id={`work-${study.slug}`}>
              {project.name}
            </h3>
            <p className="work-title">{study.title}</p>
            <p className="work-outcome">{study.outcome}</p>
            <p className="work-desc">{project.description}</p>
            <ul className="tags" aria-label="Technologies">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="btn-row">
              <Link href={`/projects/${study.slug}`} className="btn btn-primary">
                Open case file →
              </Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  Live ↗<NewTab />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                  Source ↗<NewTab />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Works() {
  return (
    <section id="works" aria-labelledby="works-title">
      <div className="wrap works-head" id="works-title">
        <ChapterHead
          no="03"
          jp="作品"
          en="Works"
          title="Three systems. Midnight."
          lede="Data, evidence, and reliable execution. Each file opens into engineering notes with a small experiment you can run."
        />
      </div>

      {caseStudies.map((study, i) => (
        <WorkScene key={study.slug} study={study} flip={i % 2 === 1} />
      ))}

      <div className="wrap alley">
        <p className="chapter-head">
          <b>03.5</b>
          <i aria-hidden="true" />
          <strong lang="ja">路地裏</strong>
          <span>Side streets</span>
        </p>
        <h3>More from the back alleys.</h3>
        <div className="alley-grid">
          {sideProjects.map((p, i) => (
            <article className="sign" key={p.name}>
              <span className="sign-no">No. {String(i + caseStudies.length + 1).padStart(2, "0")}</span>
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <ul className="notes">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="sign-links">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live ↗<NewTab />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    Source ↗<NewTab />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
