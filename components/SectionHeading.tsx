import { Reveal } from "./Reveal";

const characters: Record<string, string> = { "01": "自己紹介", "02": "経験", "03": "作品", "04": "技術", "05": "学び", "06": "連絡" };

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="section-character" lang="ja" aria-hidden="true">{characters[index.slice(0, 2)]}</span>
        <div className="section-heading-copy">
          <p className="section-index">{index}</p>
          <h2 className="font-serif text-3xl md:text-[2.6rem] leading-[1.3] tracking-tight">{title}</h2>
        </div>
      </div>
    </Reveal>
  );
}
