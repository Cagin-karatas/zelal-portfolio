"use client"; // IntersectionObserver + live scroll progress are both browser-only, and both drive live UI updates here

import { motion, useScroll } from "motion/react";
import { useActiveSectionNumber } from "@/lib/hooks/useActiveSectionNumber";

/**
 * EdgeFrame's right-hand column, wired to real scroll state (§5.8): the
 * number is whichever section is most visible right now, and the hairline
 * beneath it fills with `--accent` from top to bottom as the page is
 * scrolled through. The structural placement (a number over an h-24 line)
 * was built in Step 3; this is the first time either value is live rather
 * than a fixed "01" over a plain `--rule` line.
 *
 * Not gated on prefers-reduced-motion: `scrollYProgress` is a direct,
 * un-eased reflection of scroll position — it has no spring or duration
 * of its own to remove, the same way a native scrollbar thumb isn't
 * "motion" to turn off. The number is a discrete text swap, not a
 * transform. Neither is the kind of effect that preference targets.
 */
export function ScrollProgress() {
  const activeSectionNumber = useActiveSectionNumber();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <span className="text-number tabular-nums text-ink-soft">
        {activeSectionNumber}
      </span>
      <span className="relative block h-24 w-px bg-rule">
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-full origin-top bg-accent"
          style={{ scaleY: scrollYProgress }}
        />
      </span>
    </>
  );
}
