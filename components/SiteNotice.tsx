"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

function WarningIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.8a1.7 1.7 0 0 1 1.47.85l8.2 14.2A1.7 1.7 0 0 1 20.2 20.4H3.8a1.7 1.7 0 0 1-1.47-2.55l8.2-14.2A1.7 1.7 0 0 1 12 2.8Zm0 5.1a1 1 0 0 0-1 1.05l.25 4.3a.75.75 0 0 0 1.5 0l.25-4.3A1 1 0 0 0 12 7.9Zm0 8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
    </svg>
  );
}

// Temporary "still building" banner that rides above the navbar island.
// Dismissal is remembered in localStorage and applied pre-paint by the
// inline script in the root layout, so a returning visitor never sees it
// flash before React hides it.
export default function SiteNotice() {
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  if (dismissed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem("ml-notice", "dismissed");
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-notice", "off");
    setDismissed(true);
  };

  return (
    <div
      role="status"
      className="site-notice mx-auto mb-2 max-w-[1120px] rounded-2xl overflow-hidden"
    >
      <div className="relative z-[1] flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2.5">
        <span className="notice-dot shrink-0" aria-hidden="true" />

        {/* badge — the shout; the sentence after it carries the detail */}
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-black/15 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] leading-none">
          <WarningIcon />
          {t.notice.badge}
        </span>

        <p className="flex-1 min-w-0 truncate text-[12.5px] sm:text-[13.5px] font-semibold tracking-[-0.005em]">
          {t.notice.text}
        </p>

        <button
          onClick={dismiss}
          aria-label={t.notice.dismiss}
          className="shrink-0 -mr-1 w-7 h-7 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-black/15 transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
