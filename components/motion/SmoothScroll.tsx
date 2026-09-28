// Client effects are required to drive and dispose the Lenis requestAnimationFrame loop.
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MEDIA_QUERY } from "@/lib/constants";
import { LENIS_MOTION } from "@/lib/motion";

export function SmoothScroll() {
  const isReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isReducedMotion || window.matchMedia(MEDIA_QUERY.reducedMotion).matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: LENIS_MOTION.lerp,
      smoothWheel: true,
    });
    let animationFrameId = 0;

    const handleAnimationFrame = (time: number) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(handleAnimationFrame);
    };

    animationFrameId = window.requestAnimationFrame(handleAnimationFrame);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isReducedMotion]);

  return null;
}
