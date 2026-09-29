import { Reveal } from "./Reveal";

const characters: Record<string, string> = { "01": "私", "02": "歩", "03": "作", "04": "技", "05": "学", "06": "縁" };

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="section-heading">
        <div>
          <p className="section-index">{index}</p>
          <h2 className="font-serif text-3xl md:text-[2.6rem] leading-[1.3] tracking-tight">{title}</h2>
        </div>
        <span className="section-character" lang="ja" aria-hidden="true">{characters[index.slice(0, 2)]}</span>
      </div>
    </Reveal>
  );
}
