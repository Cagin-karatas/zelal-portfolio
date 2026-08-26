"use client"; // whileInView is IntersectionObserver-backed — a browser-only API

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE } from "@/lib/motion";

const VARIANTS = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)" },
};

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * The site's scroll-entrance device for below-the-fold section content: a
 * block is clipped away from the bottom, then uncovers top-to-bottom as it
 * scrolls into view — a shutter opening, not a fade or a slide. Reserved
 * for Disciplines/Selected Work/Footer's content; Hero uses
 * LineMaskHeadline instead, since it's visible on load and never actually
 * scrolls into view, so this device would have nothing to trigger on.
 *
 * `viewport={{ once: true }}` plays the reveal a single time — scrolling
 * back up and down past a section shouldn't replay it.
 *
 * Reduced motion renders the content already fully visible, with no
 * clip-path and no transition at all, rather than an instant jump-cut
 * version of the same animation.
 */
export function ClipReveal({ children, className }: ClipRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={VARIANTS}
      transition={{ duration: DURATION.slow, ease: EASE.out }}
    >
      {children}
    </motion.div>
  );
}
