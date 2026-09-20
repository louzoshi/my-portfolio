"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import LetterGlitch from "./LetterGlitch";
import { useLanguage } from "@/lib/useLanguage";
import { useTheme } from "@/lib/useTheme";

/* Palettes per theme: the glitch grid has to sit behind dark text in light mode
   and light text in dark mode, so both the backdrop and the glyphs swap. */
const PALETTE = {
  light: {
    background: "#ffffff",
    colors: ["#ededf2", "#dedef0", "#bfbfe8"],
    scrim: "rgba(255,255,255,0.9)",
  },
  dark: {
    background: "#0a0a0b",
    colors: ["#1c1c23", "#2c2c40", "#5b5bd6"],
    scrim: "rgba(10,10,11,0.9)",
  },
} as const;

export default function Hero() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const palette = PALETTE[theme];

  /* The cue is pinned to the first fold, while the column above it grows with
     the viewport width and the language (the description wraps to more lines
     on a narrow screen). A height breakpoint guesses wrong either way, so
     measure: keep the cue only while it clears the text. It stays in the
     layout when hidden, so the next measurement is still valid. */
  const textRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLAnchorElement>(null);
  const [cueFits, setCueFits] = useState(true);

  useEffect(() => {
    const check = () => {
      const text = textRef.current;
      const cue = cueRef.current;
      if (!text || !cue) return;
      const gap = cue.getBoundingClientRect().top - text.getBoundingClientRect().bottom;
      setCueFits(gap >= 16);
    };

    // let the entrance reveals settle before the first measurement
    const t1 = window.setTimeout(check, 1200);
    const t2 = window.setTimeout(check, 200);
    window.addEventListener("resize", check);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", check);
    };
  }, [lang]);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* animated backdrop */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchSpeed={100}
          outerVignette
          smooth
          glitchColors={[...palette.colors]}
          background={palette.background}
        />
      </div>

      {/* legibility scrim: a soft wash behind the centred content plus a fade
          at the bottom so the hero melts into the page background. Phones get a
          wider veil — the text block fills almost the whole screen there. */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background: `radial-gradient(ellipse 110% 52% at 50% 50%, ${palette.scrim} 0%, ${palette.scrim} 62%, transparent 100%),
                       linear-gradient(to bottom, transparent 70%, var(--bg) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: `radial-gradient(ellipse 78% 64% at 50% 50%, ${palette.scrim} 0%, ${palette.scrim} 40%, transparent 92%),
                       linear-gradient(to bottom, transparent 60%, var(--bg) 100%)`,
        }}
      />

      {/* content — centred column */}
      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-6 pt-28 pb-24 text-center flex flex-col items-center">
        <Reveal delay={0.04}>
          <div className="relative w-[180px] sm:w-[210px] md:w-[230px] aspect-square rounded-full overflow-hidden ring-1 ring-line shadow-elevated">
            <Image
              src="/imgs/newphoto.jpg"
              alt="Matheus Louzada"
              fill
              priority
              sizes="(max-width: 768px) 210px, 230px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-8">
          <p className="label-mono">{t.hero.role}</p>
        </Reveal>

        <Reveal delay={0.18} className="mt-4">
          <h1 className="text-[clamp(44px,9vw,88px)] leading-[1.02] tracking-[-0.04em] font-semibold text-fg">
            Matheus Louzada
          </h1>
        </Reveal>

        <Reveal delay={0.26} className="mt-6" innerRef={textRef}>
          <p className="max-w-[560px] mx-auto text-[clamp(16px,2vw,20px)] leading-[1.55] text-muted text-pretty">
            {t.hero.description}
          </p>
        </Reveal>
      </div>

      {/* scroll cue — anchored to the first fold rather than to the end of the
          content, so it sits on screen without scrolling whatever the column's
          height, and scrolls away with the hero. No Reveal wrapper: its
          entrance transform would push the cue past the fold. */}
      <a
        ref={cueRef}
        href="#sobre"
        aria-label={t.hero.scrollHint}
        aria-hidden={!cueFits}
        tabIndex={cueFits ? undefined : -1}
        className={`scroll-cue group absolute left-1/2 -translate-x-1/2 top-[calc(100svh-50px)] z-10 flex flex-col items-center gap-2 transition-opacity duration-300 ${
          cueFits ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted group-hover:text-fg transition-colors">
          {t.hero.scroll}
        </span>
        <svg
          className="scroll-cue-arrow text-accent"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M1.5 1.5 8 8l6.5-6.5" />
        </svg>
      </a>
    </section>
  );
}
