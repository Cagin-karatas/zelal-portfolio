"use client"; // observes DOM elements via IntersectionObserver — a browser-only, live-updating concern

import { useEffect, useState } from "react";
import { SECTION_ID, type SectionId } from "@/lib/constants";

// Top-to-bottom document order — must match app/page.tsx's actual section order.
const SECTION_ORDER: SectionId[] = [
  SECTION_ID.hero,
  SECTION_ID.disciplines,
  SECTION_ID.selectedWork,
  SECTION_ID.footer,
];

/**
 * Which of the site's 4 sections is most visible right now, as a
 * zero-padded number ("01"…"04") — EdgeFrame's right-hand column reads
 * this directly (§5.8). Defaults to "01" until the observer has anything
 * to report (server render, and the first paint before effects run) —
 * the same number Step 3's static placeholder used, so there's no visible
 * jump on load for whoever's already at the top.
 */
export function useActiveSectionNumber(): string {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = SECTION_ORDER.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }
        const mostVisible = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b,
        );
        const index = sections.findIndex((section) => section === mostVisible.target);
        if (index !== -1) {
          setActiveIndex(index);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return String(activeIndex + 1).padStart(2, "0");
}
