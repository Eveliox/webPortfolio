"use client";

import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { Enso } from "./Enso";
import { hero, personal } from "@/lib/data";

const ctas = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Resume",
    href: personal.resume,
    icon: FileDown,
    external: false,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-[88vh] flex items-center pt-32 pb-32 md:pt-40 md:pb-40"
    >
      <span
        aria-hidden="true"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 vertical-rl font-serif text-[0.7rem] tracking-[0.5em] text-muted/70 dark:text-muted-dark/70 select-none"
      >
        {personal.nameKatakana}
      </span>

      <Enso
        aria-hidden="true"
        className="pointer-events-none absolute right-6 md:right-16 top-24 md:top-28 text-sumi/35 dark:text-sumi/40"
        size={140}
      />

      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-8">
            {personal.location}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] tracking-tight text-ink dark:text-ink-dark">
            {personal.name}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-prose text-lg md:text-xl leading-[1.7] text-ink dark:text-ink-dark">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-4 max-w-prose text-base leading-[1.7] text-muted dark:text-muted-dark">
            {hero.status}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            {ctas.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-2 text-ink dark:text-ink-dark hover:text-sumi dark:hover:text-sumi transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowUpRight
                    className="h-3 w-3 -translate-y-px opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
