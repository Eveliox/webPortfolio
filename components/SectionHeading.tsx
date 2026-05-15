import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-16 md:mb-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-3">
          {index}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight text-ink dark:text-ink-dark">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-12 bg-ink/30 dark:bg-ink-dark/30"
        />
      </div>
    </Reveal>
  );
}
