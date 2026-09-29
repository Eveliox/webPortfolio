import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="content-section"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div id="skills-heading">
          <SectionHeading index="04 — Skills" title="Tools in the kit." />
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.04}>
              <div className="skill-group">
                <dt className="font-serif text-base md:text-lg text-ink dark:text-ink-dark mb-4">
                  {group.group}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2 font-mono text-sm text-muted dark:text-muted-dark">
                    {group.items.map((item) => (
                      <li key={item} className="skill-tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
