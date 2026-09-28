// Client boundary: live scroll measurements animate the rail fill and masked section number.
"use client";

import { AnimatePresence, motion } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useSectionProgress } from "@/hooks/useSectionProgress";
import { Z_LAYER_CLASS } from "@/lib/constants";
import { DURATION, EASE, SCROLL_PROGRESS } from "@/lib/motion";

export function ScrollProgress() {
  const { progress, activeNumber } = useSectionProgress();
  const prefersReducedMotion = usePrefersReducedMotion();
  const numberTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: DURATION.fast, ease: EASE.out };

  return (
    <div
      className={`fixed right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 ${Z_LAYER_CLASS.rails}`}
      aria-hidden="true"
    >
      <span className="relative h-9 w-hairline overflow-hidden bg-rule">
        <span
          className="absolute inset-0 origin-top bg-accent"
          style={{ transform: `scaleY(${progress})` }}
        />
      </span>
      <span className="relative h-4 w-5 overflow-hidden text-number text-accent tabular-numbers">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={activeNumber}
            className="absolute inset-0 text-center"
            initial={{
              y: prefersReducedMotion
                ? SCROLL_PROGRESS.visibleNumberY
                : SCROLL_PROGRESS.hiddenNumberY,
            }}
            animate={{ y: SCROLL_PROGRESS.visibleNumberY }}
            exit={{
              y: prefersReducedMotion
                ? SCROLL_PROGRESS.visibleNumberY
                : SCROLL_PROGRESS.exitingNumberY,
            }}
            transition={numberTransition}
          >
            {activeNumber}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
