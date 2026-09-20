"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";
import { clientProjects } from "@/lib/projects";

/* Paid client work, kept in its own band so it doesn't read as another
   personal project — the point here is that it's live, for someone else. */
export default function ClientWork() {
  const { t } = useLanguage();
  const c = t.clientWork;
  const project = clientProjects[0];
  if (!project) return null;

  return (
    <section
      id="cliente"
      className="scroll-mt-20 py-24 px-6 border-t border-line"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="flex gap-[52px] items-center max-[820px]:flex-col">
          <div className="flex-1 min-w-0 basis-[420px]">
            <p className="label-mono mb-4">{c.label}</p>
            <h2 className="text-[clamp(26px,3.6vw,42px)] font-semibold tracking-[-0.025em] leading-[1.12] text-fg">
              {c.title}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-muted max-w-[480px] text-pretty">
              {c.body}
            </p>

            <div className="mt-7 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-muted px-2 py-1 rounded-pill border border-line"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-fg font-medium text-[15px] hover:text-accent transition-colors"
              >
                {c.cta} <span className="text-[13px]">→</span>
              </Link>
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] text-muted hover:text-fg transition-colors"
                >
                  wilbor.studio <span className="text-[12px]">↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0 basis-[380px] w-full">
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-3xl overflow-hidden shadow-elevated transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 820px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
