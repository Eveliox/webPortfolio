import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-hairline dark:border-hairline-dark">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs text-muted dark:text-muted-dark">
        <p>© 2026 {personal.name}</p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
