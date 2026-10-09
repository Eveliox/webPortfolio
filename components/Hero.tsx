"use client";

import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { Landscape } from "./Landscape";
import { EmailLink } from "./EmailLink";
import { hero, personal } from "@/lib/data";

type Cta =
  | {
      kind: "link";
      label: string;
      href: string;
      icon: typeof Github;
      external: boolean;
    }
  | { kind: "email"; label: string; icon: typeof Mail };

const ctas: Cta[] = [
  {
    kind: "link",
    label: "GitHub",
    href: personal.github,
    icon: Github,
    external: true,
  },
  {
    kind: "link",
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  { kind: "email", label: "Email", icon: Mail },
  {
    kind: "link",
    label: "Resume",
    href: personal.resume,
    icon: FileDown,
    external: false,
  },
];

const ctaClass =
  "group inline-flex items-center gap-2 text-ink dark:text-ink-dark hover:text-sumi dark:hover:text-sumi-dark transition-colors";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="hero-section"
    >
      <div className="hero-margin" aria-hidden="true"><span lang="ja">{personal.nameKatakana} ・ 静かな情熱</span><span>PORTFOLIO — 2026</span></div>
      <div className="hero-editorial"><span>ENGINEERING, WITH INTENTION.</span><span>MIAMI, FL / AVAILABLE SUMMER 2027</span></div>

      <div className="hero-layout">
      <div className="hero-copy">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-8">
            SOFTWARE ENGINEER / {personal.location}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="hero-preface">A little logic.<br />A lot of intention.</p>
          <h1 className="hero-name font-serif">
            Evelio<span className="block">Gonzalez<span className="text-sumi dark:text-sumi-dark">.</span></span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="hero-description mt-7 text-base leading-[1.9] text-muted dark:text-muted-dark">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="availability mt-6 max-w-sm text-xs leading-[1.8]">
            {hero.status}
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <a href="#projects" className="primary-link mt-8">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
        </Reveal>
        <Reveal delay={0.24}>
          <ul className="hero-socials mt-8 flex flex-wrap gap-x-5 gap-y-3 font-mono text-xs">
            {ctas.map((cta) => {
              const Icon = cta.icon;
              if (cta.kind === "email") {
                return (
                  <li key={cta.label}>
                    <EmailLink className={ctaClass}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{cta.label}</span>
                      <ArrowUpRight
                        className="h-3 w-3 -translate-y-px opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        aria-hidden="true"
                      />
                    </EmailLink>
                  </li>
                );
              }
              return (
                <li key={cta.label}>
                  <a
                    href={cta.href}
                    {...(cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={ctaClass}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{cta.label}</span>
                    <ArrowUpRight
                      className="h-3 w-3 -translate-y-px opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
      <Reveal delay={0.15} className="hero-art"><span className="hero-calligraphy" lang="ja" aria-hidden="true">創造</span><Landscape /></Reveal>
      </div>
      <div className="hero-footnote"><span><span lang="ja">余白</span> SPACE TO THINK. ROOM TO BUILD.</span><a href="#projects">SELECTED WORK <ArrowDown size={15} aria-hidden="true" /></a></div>
    </section>
  );
}
