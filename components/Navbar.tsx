"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/lib/useTheme";
import { useLanguage } from "@/lib/useLanguage";
import SiteNotice from "./SiteNotice";

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.2" y1="4.2" x2="6" y2="6" />
      <line x1="18" y1="18" x2="19.8" y2="19.8" />
      <line x1="4.2" y1="19.8" x2="6" y2="18" />
      <line x1="18" y1="6" x2="19.8" y2="4.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" fill="currentColor" />
    </svg>
  );
}

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label={t.nav.switchLang}
      className={`h-9 px-2.5 rounded-full border border-line flex items-center gap-1 font-mono text-[11px] tracking-[0.04em] hover:bg-elev transition-colors ${className}`}
    >
      <span className={lang === "pt" ? "text-fg font-semibold" : "text-muted"}>PT</span>
      <span className="text-muted opacity-50">/</span>
      <span className={lang === "en" ? "text-fg font-semibold" : "text-muted"}>EN</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const links = t.nav.links;

  // Floating island: detached from the top edge so the hero background runs
  // behind and around the bar — and through it, since the glass is translucent.
  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-5">
      <SiteNotice />
      <nav
        className={`glass-nav mx-auto max-w-[1120px] rounded-2xl overflow-hidden transition-colors duration-300 ${
          open ? "is-open" : ""
        }`}
      >
        <div className="px-4 sm:px-5 h-[58px] flex items-center justify-between gap-4">
          {/* left — wordmark */}
          <Link
            href="/"
            aria-label="Início"
            className="font-semibold text-[15px] tracking-[-0.01em] text-fg hover:opacity-70 transition-opacity"
          >
            Matheus Louzada
          </Link>

          {/* right — links and utilities */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-0.5 mr-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-[14px] py-2 rounded-pill text-[14px] text-muted hover:text-fg hover:bg-elev transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <LangToggle className="hidden sm:flex" />

            <button
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
              }}
              aria-label={t.nav.toggleTheme}
              className="w-9 h-9 rounded-full border border-line text-fg flex items-center justify-center hover:bg-elev transition-colors"
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t.nav.menu}
              className="md:hidden w-9 h-9 rounded-full border border-line text-fg flex items-center justify-center hover:bg-elev transition-colors"
            >
              {open ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-line px-3 pb-3 pt-2 flex flex-col gap-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3.5 rounded-xl text-[17px] font-medium text-fg hover:bg-elev transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-3 pt-3 pb-1">
              <LangToggle />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
