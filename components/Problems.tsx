"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";
import { problemProjects } from "@/lib/projects";

export default function Problems() {
  const { t } = useLanguage();
  const p = t.problems;

  return (
    <section
      id="problemas"
      className="scroll-mt-20 py-28 px-6 bg-elev border-t border-line transition-colors duration-[450ms]"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="mb-[72px]">
          <p className="label-mono mb-4">{p.label}</p>
          <h2 className="text-[clamp(34px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.02] text-fg">
            {p.title}
          </h2>
          <p className="mt-7 text-[clamp(16px,2.1vw,19px)] leading-[1.6] text-muted max-w-[720px] text-pretty">
            {p.lead}
          </p>
        </Reveal>

        {problemProjects.map((project, i) => {
          const copy = p.items[project.key as keyof typeof p.items];
          return (
            <Reveal
              key={project.slug}
              className={`flex gap-[52px] items-center mb-24 last:mb-0 max-[820px]:flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 min-w-0 basis-[400px] w-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block rounded-3xl overflow-hidden shadow-elevated transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 820px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>

              <div className="flex-1 min-w-0 basis-[320px]">
                <p className="label-mono">{p.problemLabel}</p>

                {/* the problem is the headline — the project name is the
                    footnote, not the other way around */}
                <h3 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.02em] leading-[1.25] mt-3.5 text-fg text-balance">
                  {copy.problem}
                </h3>

                <div className="mt-7">
                  <p className="font-mono text-[12px] tracking-[0.04em] text-muted uppercase">
                    {p.buildLabel}
                  </p>
                  <p className="mt-2.5 text-[16px] leading-[1.6] text-muted max-w-[440px]">
                    {copy.build}
                  </p>
                </div>

                <p className="mt-6 pl-4 border-l-2 border-accent text-[15px] leading-[1.6] text-fg max-w-[440px]">
                  {copy.outcome}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-muted px-2 py-1 rounded-pill border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-fg font-medium text-[15px] mt-[26px] hover:text-accent transition-colors"
                >
                  {project.title} <span className="text-[13px]">→</span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
