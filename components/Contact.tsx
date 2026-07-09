import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EmailLink, EmailAddress } from "./EmailLink";
import { personal } from "@/lib/data";

const socials = [
  { label: "GitHub", href: personal.github, icon: Github, external: true },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  { label: "Resume", href: personal.resume, icon: FileDown, external: false },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div id="contact-heading">
          <SectionHeading index="06 — Contact" title="Let's talk." />
        </div>

        <Reveal>
          <p className="text-lg md:text-xl leading-[1.7] text-ink dark:text-ink-dark max-w-prose">
            Open to internship opportunities for Summer 2027. The fastest way to
            reach me is email. I read everything.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <EmailLink className="group mt-10 inline-flex items-baseline gap-3 font-serif text-2xl md:text-3xl text-ink dark:text-ink-dark hover:text-sumi dark:hover:text-sumi-dark transition-colors">
            <Mail
              className="h-5 w-5 translate-y-1 text-muted dark:text-muted-dark group-hover:text-sumi dark:group-hover:text-sumi-dark transition-colors"
              aria-hidden="true"
            />
            <EmailAddress />
          </EmailLink>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
