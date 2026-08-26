"use client"; // per-line mount animation needs Motion's client-only primitives

import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE } from "@/lib/motion";

interface LineMaskHeadlineProps {
  lines: string[];
  className?: string;
}

/**
 * Hero's entrance device, and only Hero's: each line sits in its own
 * overflow-hidden band and rises up into place, like type being set into
 * a press one line at a time. Kept to this one headline so it doesn't
 * compete with ClipReveal (Step 7a's other entrance idiom) on the same
 * section — Hero is visible on load, so it plays on mount; everything
 * below the fold uses the scroll-triggered device instead.
 *
 * The component owns the `<h1>` tag itself, rather than taking children,
 * because masking requires one wrapper per line — Hero hands it a plain
 * `string[]` and never touches the per-line markup.
 *
 * Lines stagger by DURATION.fast so they read in sequence instead of
 * arriving as one block; the delay is computed from each line's index, so
 * adding or removing a line never leaves a stale hand-typed delay behind.
 */
export function LineMaskHeadline({ lines, className }: LineMaskHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1 className={className}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={prefersReducedMotion ? false : { y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: DURATION.base,
              ease: EASE.out,
              delay: prefersReducedMotion ? 0 : index * DURATION.fast,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
