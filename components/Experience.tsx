import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div id="work-heading">
          <SectionHeading index="02 — Work" title="Where I've spent my hours." />
        </div>

        <ol className="space-y-16 md:space-y-20">
          {experience.map((role, i) => (
            <li key={role.company}>
              <Reveal delay={i * 0.05}>
                <article className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-6 md:gap-12">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                      {role.period}
                    </p>
                    <p className="mt-2 font-mono text-xs text-muted dark:text-muted-dark">
                      {role.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-ink dark:text-ink-dark leading-snug">
                      {role.role}
                    </h3>
                    <p className="mt-1 text-base text-muted dark:text-muted-dark">
                      {role.company}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {role.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="relative pl-5 text-[0.95rem] leading-[1.75] text-ink/90 dark:text-ink-dark/90"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.85em] h-px w-2 bg-muted/60 dark:bg-muted-dark/60"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
              {i < experience.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-16 md:mt-20 h-px w-full bg-hairline dark:bg-hairline-dark"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
