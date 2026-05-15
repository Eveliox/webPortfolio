import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { about, education } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div id="about-heading">
          <SectionHeading index="01 — About" title="A note on what I do." />
        </div>

        <Reveal>
          <div className="flex items-start gap-6 md:gap-8 mb-12">
            <div className="relative h-[120px] w-[120px] md:h-[140px] md:w-[140px] shrink-0 overflow-hidden rounded-full border border-hairline dark:border-hairline-dark bg-paper dark:bg-paper-dark">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Evelio Gonzalez"
                fill
                sizes="(min-width: 768px) 140px, 120px"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-base md:text-lg leading-[1.8] text-ink dark:text-ink-dark max-w-prose">
            {about}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-16 pt-10 border-t border-hairline dark:border-hairline-dark">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-4">
              Education
            </p>
            <p className="font-serif text-lg md:text-xl text-ink dark:text-ink-dark">
              {education.school}
            </p>
            <p className="mt-1 text-base text-muted dark:text-muted-dark">
              {education.degree} · {education.graduation}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark mb-3">
              Relevant Coursework
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-ink dark:text-ink-dark">
              {education.coursework.map((course, i) => (
                <li key={course} className="flex items-center gap-4">
                  <span>{course}</span>
                  {i < education.coursework.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-muted/60 dark:text-muted-dark/60"
                    >
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
