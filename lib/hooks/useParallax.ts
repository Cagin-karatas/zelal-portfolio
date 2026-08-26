"use client"; // reads live scroll position via Motion's useScroll — a browser-only concern

import { useRef, type RefObject } from "react";
import { useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

/** How far the element drifts from the page's own scroll, in pixels either side of 0. */
const PARALLAX_RANGE_PX = 60;

interface ParallaxResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  y: MotionValue<number>;
}

/**
 * Maps how far `ref`'s element has traveled through the viewport into a
 * small vertical offset — a depth cue, not a scroll-position side effect.
 * Returns a MotionValue for `style={{ y }}` so the transform is driven off
 * the main thread; nothing here ever calls `setState` on scroll.
 *
 * Under reduced motion, `useTransform` still runs (hooks can't be called
 * conditionally) but its output range collapses to `[0, 0]`, so the
 * element is mounted with a live MotionValue that simply never moves.
 */
export function useParallax<T extends HTMLElement>(): ParallaxResult<T> {
  const ref = useRef<T>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-PARALLAX_RANGE_PX, PARALLAX_RANGE_PX],
  );

  return { ref, y };
}
