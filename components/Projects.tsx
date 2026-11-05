import Link from "next/link";
import { ProjectArtwork } from "./ProjectArtwork";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Experiment } from "./Experiments";
import { projects } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";

export function Projects() {
  return <section id="projects" aria-labelledby="projects-heading" className="content-section projects-section">
    <div className="mx-auto max-w-5xl px-6 md:px-10">
      <div id="projects-heading"><SectionHeading index="01 — Field notes" title="Three systems. Try the decisions." /></div>
      <p className="section-intro">A field journal of data, evidence, and reliable execution. Explore a small experiment, then open the engineering notes.</p>
      <div className="featured-studies">{caseStudies.map(study => <article id={`project-${study.slug}`} key={study.slug} className="featured-study">
        <div className="study-intro"><Link className="study-artwork" href={`/projects/${study.slug}`} aria-label={`Read the ${study.project.name} case study`}><ProjectArtwork visual={study.project.visual} /></Link><p className="exhibit-label">{study.number} / {study.discipline}</p><h3 className="font-serif text-3xl md:text-4xl"><Link href={`/projects/${study.slug}`}>{study.project.name}</Link></h3><p className="study-deck">{study.title}</p><p className="study-outcome">{study.outcome}</p><p className="study-description">{study.project.description}</p><div className="study-links"><Link href={`/projects/${study.slug}`}>Read the case study <ArrowUpRight size={15} aria-hidden="true" /></Link>{study.project.liveUrl && <a href={study.project.liveUrl} target="_blank" rel="noopener noreferrer">Live project ↗<span className="sr-only"> (opens in new tab)</span></a>}{study.project.github && <a href={study.project.github} target="_blank" rel="noopener noreferrer">Source code ↗<span className="sr-only"> (opens in new tab)</span></a>}</div></div>
        <Experiment slug={study.slug} />
      </article>)}</div>
      <details className="project-archive"><summary>More from the workbench <span>{projects.length - 3} projects +</span></summary><ul className="project-grid mt-6">{projects.slice(3).map(project => <li key={project.name} className="project-card"><article className="project-inner"><ProjectArtwork visual={project.visual} /><h3 className="font-serif text-2xl">{project.name}</h3><p className="study-description">{project.description}</p><ul className="project-tech">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul><div className="study-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project ↗<span className="sr-only"> (opens in new tab)</span></a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source code ↗<span className="sr-only"> (opens in new tab)</span></a>}</div></article></li>)}</ul></details>
    </div>
  </section>;
}
