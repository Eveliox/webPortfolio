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
      <span
        aria-hidden="true"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 vertical-rl font-serif text-[0.7rem] tracking-[0.5em] text-muted/70 dark:text-muted-dark/70 select-none"
      >
        {personal.nameKatakana}
      </span>

      <div className="hero-layout">
      <div className="hero-copy">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-8">
            SOFTWARE ENGINEER / {personal.location}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="hero-name font-serif">
            Evelio<span className="block">Gonzalez<span className="text-sumi dark:text-sumi-dark">.</span></span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-lg text-base md:text-lg leading-[1.8] text-muted dark:text-muted-dark">
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
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 font-mono text-sm">
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
      <Reveal delay={0.15} className="hero-art"><Landscape /></Reveal>
      </div>
      <div className="hero-footnote"><span>THOUGHTFUL SOFTWARE. PURPOSEFUL DETAILS.</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={13} aria-hidden="true" /></a></div>
    </section>
  );
}
