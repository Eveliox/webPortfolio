import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";
import { ProjectArtwork } from "./ProjectArtwork";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="content-section projects-section">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div id="projects-heading"><SectionHeading index="03 — Projects" title="Selected works." /></div>
        <ul className="project-grid">
          {projects.map((project, i) => (
            <li key={project.name} className="project-card">
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <article className="project-inner">
                  <div className="project-meta"><span>作品 / {String(i + 1).padStart(2, "0")}</span><span>{project.liveUrl ? "LIVE PROJECT" : "OPEN SOURCE"}</span></div>
                  <a className="project-art-link" href={project.liveUrl ?? project.github} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.name} (opens in new tab)`}><ProjectArtwork visual={project.visual} /></a>
                  <a href={project.liveUrl ?? project.github} target="_blank" rel="noopener noreferrer" className="project-title"><h3 className="font-serif text-2xl md:text-3xl">{project.name}</h3><ArrowUpRight size={22} aria-hidden="true" /><span className="sr-only">{project.liveUrl ? "Visit live site" : "View on GitHub"} (opens in new tab)</span></a>
                  <p className="mt-4 text-sm leading-[1.85] text-muted dark:text-muted-dark">{project.description}</p>
                  <ul className="project-tech">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                  <details className="project-details"><summary>Behind the build <Plus size={15} aria-hidden="true" /></summary><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></details>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
