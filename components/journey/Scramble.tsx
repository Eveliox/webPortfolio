"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ01<>/#_";

// Decodes text from half-width katakana noise the first time it scrolls in.
// The real text is always present for screen readers and without JavaScript.
export function Scramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView || reduce) return;
    const total = 20;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      if (frame >= total) {
        window.clearInterval(id);
        setOut(text);
        return;
      }
      const solved = (frame / total) * text.length;
      setOut(
        [...text]
          .map((ch, i) =>
            ch === " " || i < solved ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      );
    }, 38);
    return () => window.clearInterval(id);
  }, [inView, reduce, text]);

  return (
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
