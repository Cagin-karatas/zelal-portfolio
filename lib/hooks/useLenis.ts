"use client"; // mounts a raf loop and wheel/touch listeners — real browser side effects, not renderable output

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { DURATION } from "@/lib/motion";

/**
 * Mounts Lenis's smooth-scroll engine for as long as the calling component
 * is mounted, and tears it down on unmount — the raf loop and Lenis's own
 * wheel/touch listeners are real subscriptions, exactly the kind of side
 * effect that needs a cleanup function, not a "set it and forget it" call.
 *
 * Skipped entirely under prefers-reduced-motion: smooth scrolling changes
 * how the whole page responds to every scroll input, which is the kind of
 * pervasive motion that preference exists to opt out of — not a duration
 * to shorten, but a behavior to not apply at all.
 *
 * Only `duration` is shared with the rest of the site's motion system
 * (DURATION.slow) — Lenis's `easing` option is a raw `(t) => number`
 * function, not the CSS cubic-bezier array `EASE.out` uses, so forcing the
 * same curve into both shapes would mean hand-rolling a bezier solver for
 * a purely cosmetic match. Lenis's own well-tested default easing is used
 * instead; only the timing, not the curve, is kept in sync.
 */
export function useLenis(): void {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: DURATION.slow });

    let frameId: number;
    function raf(time: number): void {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
}
