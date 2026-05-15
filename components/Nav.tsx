"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { nav, personal } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/85 dark:bg-paper-dark/85 backdrop-blur-md border-b border-hairline dark:border-hairline-dark"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10"
      >
        <a
          href="#top"
          className="font-serif text-sm tracking-wide text-ink dark:text-ink-dark hover:text-sumi dark:hover:text-sumi transition-colors"
        >
          {personal.name}
        </a>
        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden md:flex items-center gap-7 text-[0.78rem] font-mono tracking-wider uppercase">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="hidden md:inline-block h-4 w-px bg-hairline dark:bg-hairline-dark mx-3"
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
