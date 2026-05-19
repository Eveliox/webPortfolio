import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div id="projects-heading">
          <SectionHeading
            index="03 — Projects"
            title="A few things I've built."
          />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline dark:bg-hairline-dark border border-hairline dark:border-hairline-dark">
          {projects.map((project, i) => {
            const href = project.liveUrl ?? project.github;
            const isLive = Boolean(project.liveUrl);
            return (
            <li
              key={project.name}
              className="bg-paper dark:bg-paper-dark transition-colors duration-300 hover:bg-paper/60 dark:hover:bg-[#15151450]"
            >
              <Reveal delay={i * 0.05}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    isLive
                      ? `${project.name} — visit live site`
                      : `${project.name} on GitHub`
                  }
                  className="group block h-full p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl md:text-2xl text-ink dark:text-ink-dark leading-tight">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      className="h-4 w-4 mt-1 text-muted dark:text-muted-dark group-hover:text-sumi group-hover:-translate-y-px group-hover:translate-x-px transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted dark:text-muted-dark">
                    {project.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-sm leading-[1.7] text-ink/85 dark:text-ink-dark/85"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.8em] h-px w-2 bg-muted/60 dark:bg-muted-dark/60"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted dark:text-muted-dark">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </a>
              </Reveal>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
