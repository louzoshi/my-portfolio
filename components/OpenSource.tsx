"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";
import { contributions, githubHref } from "@/lib/opensource";

export default function OpenSource() {
  const { t } = useLanguage();
  const os = t.opensource;

  return (
    <section
      id="opensource"
      className="scroll-mt-20 py-28 px-6 border-t border-line"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <p className="label-mono mb-4">{os.label}</p>
          <h2 className="text-[clamp(34px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.02] text-fg">
            {os.title}
          </h2>
          <p className="mt-7 text-[clamp(16px,2.1vw,19px)] leading-[1.6] text-muted max-w-[720px] text-pretty">
            {os.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
          {contributions.map((c, i) => {
            const copy = os.items[c.key];
            return (
              <Reveal key={c.key} delay={i * 0.06} className="h-full">
                <article className="h-full flex flex-col p-7 rounded-[20px] bg-card border border-line transition-all duration-300 hover:border-accent hover:shadow-elevated">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.03em] text-accent bg-accent-soft px-[9px] py-[5px] rounded-pill">
                      {c.tag}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {c.prs.merged}{" "}
                      {c.prs.merged === 1 ? os.mergedLabelOne : os.mergedLabel}
                    </span>
                  </div>

                  <h3 className="text-[24px] font-semibold tracking-[-0.015em] mt-6 text-fg">
                    {c.title}
                  </h3>
                  <p className="font-mono text-[12px] text-muted mt-1.5">
                    {copy.role} · {c.prs.total}{" "}
                    {c.prs.total === 1 ? os.prLabel : os.prsLabel}
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.6] text-muted">
                    {copy.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {copy.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-[14px] leading-[1.55] text-fg"
                      >
                        <span aria-hidden className="text-accent shrink-0">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {c.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-muted px-2 py-1 rounded-pill border border-line"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* links anchor the card bottom, so cards of different
                      heights still line up */}
                  <div className="mt-auto pt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={c.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-fg hover:text-accent transition-colors"
                    >
                      {os.viewPrs} <span className="text-[12px]">↗</span>
                    </a>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-fg transition-colors"
                    >
                      {os.visitSite} <span className="text-[12px]">↗</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08} className="mt-8">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[15px] font-medium text-fg hover:text-accent transition-colors"
          >
            {os.allWork}
          </a>
        </Reveal>

        {/* what the contributions taught me */}
        <div className="mt-[104px] pt-[72px] border-t border-line">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[0.04em] text-muted mb-3.5">
              {os.experienceLabel}
            </p>
            <h3 className="text-[clamp(26px,3.6vw,42px)] font-semibold tracking-[-0.025em] leading-[1.12] text-fg max-w-[760px]">
              {os.experienceTitle}
            </h3>
            <p className="mt-6 text-[17px] leading-[1.6] text-muted max-w-[680px] text-pretty">
              {os.experienceBody}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-x-10 gap-y-9">
            {os.experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="border-t border-line pt-5">
                  <h4 className="text-[18px] font-semibold tracking-[-0.01em] text-fg">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
