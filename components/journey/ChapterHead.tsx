import { Scramble } from "./Scramble";

export function ChapterHead({
  no,
  jp,
  en,
  title,
  lede,
}: {
  no: string;
  jp: string;
  en: string;
  title: string;
  lede?: string;
}) {
  return (
    <header>
      <p className="chapter-head">
        <b>{no}</b>
        <i aria-hidden="true" />
        <strong lang="ja">{jp}</strong>
        <span>{en}</span>
      </p>
      <h2 className="chapter-title">
        <Scramble text={title} />
      </h2>
      {lede && <p className="chapter-lede">{lede}</p>}
    </header>
  );
}
