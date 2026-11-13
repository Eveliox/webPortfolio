import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This path does not exist. Return home.",
};

export default function NotFound() {
  return (
    <main id="main" className="lost">
      <p className="chapter-head">
        <b>Signal lost</b>
        <i aria-hidden="true" />
        <strong lang="ja">迷子</strong>
      </p>
      <h1>
        <span className="glitch" data-text="404">
          404
        </span>
      </h1>
      <p>This station isn’t on the line. The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="btn btn-primary">
        Return to the city →
      </Link>
    </main>
  );
}
