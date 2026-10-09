import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { about, education } from "@/lib/data";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="content-section">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div id="about-heading"><SectionHeading index="01 — About" title="The person behind the work." /></div>
        <div className="about-layout">
          <Reveal>
            <figure className="about-portrait">
              <div className="about-photo">
                <Image src="/headshot.jpg" alt="Portrait of Evelio Gonzalez" fill sizes="(min-width: 768px) 260px, 220px" className="object-cover" />
              </div>
              <figcaption><span>01 / EVELIO GONZALEZ</span><span lang="ja" aria-hidden="true">私</span></figcaption>
            </figure>
            <p className="about-note">Curiosity is the starting point.<br />Care is in the details.</p>
          </Reveal>
          <div>
            <Reveal delay={0.08}><p className="about-prose">{about}</p></Reveal>
            <Reveal delay={0.16}>
              <div className="about-education">
                <p className="section-index">A foundation for what&apos;s next / Education</p>
                <ul className="space-y-8">
                  {education.map((ed) => (
                    <li key={ed.school}>
                      <p className="font-serif text-lg md:text-xl">{ed.school}</p>
                      <p className="mt-1 text-sm text-muted dark:text-muted-dark">{ed.degree} · {ed.graduation}</p>
                      {ed.coursework && <p className="mt-4 text-xs leading-loose text-muted dark:text-muted-dark">{ed.coursework.join(" / ")}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
