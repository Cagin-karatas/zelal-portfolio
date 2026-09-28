// Client hook: a single rAF-throttled measurement tracks document progress and active section.
"use client";

import { useEffect, useState } from "react";

import { progressSections } from "@/content/site";
import { SCROLL_PROGRESS } from "@/lib/motion";
import type { SectionNumber } from "@/types/site";

interface SectionProgressState {
  readonly progress: number;
  readonly activeNumber: SectionNumber;
}

const INITIAL_PROGRESS: SectionProgressState = {
  progress: 0,
  activeNumber: progressSections[0].number,
};

export function useSectionProgress(): SectionProgressState {
  const [state, setState] = useState<SectionProgressState>(INITIAL_PROGRESS);

  useEffect(() => {
    let frameId = 0;
    let isFramePending = false;

    const measure = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? window.scrollY / documentHeight : 0;
      const activationLine = window.scrollY + window.innerHeight * SCROLL_PROGRESS.activationPoint;
      let activeNumber: SectionNumber = progressSections[0].number;

      for (const section of progressSections) {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= activationLine) {
          activeNumber = section.number;
        }
      }

      setState({
        progress: Math.min(Math.max(progress, 0), 1),
        activeNumber,
      });
      isFramePending = false;
    };

    const scheduleMeasure = () => {
      if (isFramePending) {
        return;
      }

      isFramePending = true;
      frameId = window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });
    scheduleMeasure();

    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return state;
}
