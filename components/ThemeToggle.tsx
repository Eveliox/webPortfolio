"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      className="relative inline-flex h-9 w-9 items-center justify-center text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark transition-colors"
    >
      {mounted && !reduce && (
        <AnimatePresence initial={false}>
          <motion.span
            key={theme}
            aria-hidden="true"
            initial={{ scale: 0, opacity: 0.55 }}
            animate={{ scale: 2.6, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 rounded-full bg-sumi/25 dark:bg-sumi-dark/25"
          />
        </AnimatePresence>
      )}
      {mounted && theme === "dark" ? (
        <Sun className="relative h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="relative h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
