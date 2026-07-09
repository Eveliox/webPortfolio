import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Enso } from "@/components/Enso";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This path does not exist. Return home.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main"
        aria-labelledby="not-found-heading"
        className="relative min-h-[88vh] flex items-center pt-32 pb-32 md:pt-40 md:pb-40"
      >
        <span
          aria-hidden="true"
          className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 vertical-rl font-serif text-[0.7rem] tracking-[0.5em] text-muted/70 dark:text-muted-dark/70 select-none"
        >
          {personal.nameKatakana}
        </span>

        <Enso
          aria-hidden="true"
          className="pointer-events-none absolute right-6 md:right-16 top-24 md:top-28 text-sumi/35 dark:text-sumi/40"
          size={140}
        />

        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted dark:text-muted-dark mb-8">
            404 — Not Found
          </p>

          <h1
            id="not-found-heading"
            className="font-serif text-4xl md:text-5xl leading-[1.15] tracking-tight text-ink dark:text-ink-dark"
          >
            This path does not exist.
          </h1>

          <p className="mt-10 max-w-prose font-serif italic text-xl md:text-2xl leading-[1.8] text-ink dark:text-ink-dark">
            A path once was here.
            <br />
            The wind has swept the stones smooth —
            <br />
            the way home remains.
          </p>

          <div className="mt-12 font-mono text-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-ink dark:text-ink-dark hover:text-sumi dark:hover:text-sumi-dark transition-colors"
            >
              <span>Return home</span>
              <ArrowUpRight
                className="h-3 w-3 -translate-y-px opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
