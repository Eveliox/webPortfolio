import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { Experiment } from "@/components/Experiments";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) return {};
  return { title: `${study.project.name} — Engineering notes`, description: study.title, alternates: { canonical: `/projects/${study.slug}` }, openGraph: { title: `${study.project.name} — Evelio Gonzalez`, description: study.title, url: `/projects/${study.slug}` } };
}
export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) notFound();
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  return <div className="portfolio atlas-case"><header className="case-nav"><Link href="/#projects">← Evelio Gonzalez / System atlas</Link><ThemeToggle /></header><main id="main" className="case-page">
    <p className="exhibit-label">Engineering notes {study.number} / {study.discipline}</p><h1 className="font-serif">{study.title}</h1><p className="case-subtitle">{study.project.name}</p><p className="study-outcome">{study.outcome}</p>
    <div className="study-links mb-12"><a href="#experiment">Try the experiment ↓</a>{study.project.liveUrl && <a href={study.project.liveUrl} target="_blank" rel="noopener noreferrer">Live project ↗<span className="sr-only"> (opens in new tab)</span></a>}{study.project.github && <a href={study.project.github} target="_blank" rel="noopener noreferrer">Source code ↗<span className="sr-only"> (opens in new tab)</span></a>}</div>
    <ol className="architecture" aria-label="System architecture">{study.architecture.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol>
    <div id="experiment" className="case-experiment"><Experiment slug={study.slug} /></div>
    <div className="case-notes">{[["01 / Context", "The problem", study.problem], ["02 / Ownership", "My contribution", study.contribution], ["03 / Architecture", "The decision", study.decision], ["04 / Constraints", "The tradeoff", study.tradeoff], ["05 / Evidence", "Results & validation", study.results], ["06 / Open questions", "Limits & next steps", study.limitations]].map(([label, title, text]) => <section key={label}><p className="exhibit-label">{label}</p><div><h2 className="font-serif text-2xl">{title}</h2><p>{text}</p></div></section>)}</div>
    <ul className="project-tech">{study.project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul><Link className="next-study" href={`/projects/${next.slug}`}>Next system <span>{next.project.name} ↗</span></Link>
  </main><Footer /></div>;
}
