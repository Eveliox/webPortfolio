import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div id="certifications-heading">
          <SectionHeading
            index="05 — Certifications"
            title="Things I've taken the time to learn."
          />
        </div>

        <ul className="divide-y divide-hairline dark:divide-hairline-dark border-y border-hairline dark:border-hairline-dark">
          {certifications.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.03}>
                <div className="flex items-baseline justify-between gap-6 py-5">
                  <span className="text-[0.95rem] leading-[1.6] text-ink dark:text-ink-dark">
                    {c.title}
                  </span>
                  <span className="font-mono text-xs text-muted dark:text-muted-dark shrink-0">
                    {c.year}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
