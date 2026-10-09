"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { nav, personal } from "@/lib/data";

const navCharacters = ["私", "歩", "作", "縁"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: "-15% 0px -55% 0px" });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <nav aria-label="Primary" className="nav-inner">
        <a href="#top" className="brand" aria-label={`${personal.name}, home`} onClick={() => setOpen(false)}>
          <span className="brand-seal" aria-hidden="true">eg</span>
          <span className="brand-name">Evelio Gonzalez<span className="brand-caption">SOFTWARE / SYSTEMS / CRAFT</span></span>
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="desktop-nav hidden md:flex">
            {nav.map((item, i) => <li key={item.href}><a className="nav-link" aria-current={active === item.href ? "location" : undefined} href={item.href}><span className="nav-character" lang="ja" aria-hidden="true">{navCharacters[i]}</span><span>{item.label}</span></a></li>)}
          </ul>
          <a href={personal.resume} className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">Résumé <ArrowUpRight size={14} aria-hidden="true" /></a>
          <ThemeToggle />
          <button id="menu-toggle" type="button" className="md:hidden p-2" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>
      <div id="mobile-nav" hidden={!open} className="mobile-nav md:!hidden">
        {nav.map((item, i) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span className="font-mono text-xs text-sumi dark:text-sumi-dark">0{i + 1}</span>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
      </div>
    </header>
  );
}
