"use client"; // scroll-linked transform via Motion's useScroll/useTransform, browser-only

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useParallax } from "@/lib/hooks/useParallax";
import { cn } from "@/lib/cn";

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps an image group so it drifts a little slower than the page around
 * it as Hero scrolls past — the depth cue is disciplined to this one leaf
 * component so the scroll-linked hook it needs doesn't force Hero itself
 * to become a client component. `relative` is set here, not left to the
 * caller, because it's this component's own absolutely-positioned
 * children (the film-frame overlap) that depend on it.
 */
export function ParallaxImage({ children, className }: ParallaxImageProps) {
  const { ref, y } = useParallax<HTMLDivElement>();

  return (
    <motion.div ref={ref} style={{ y }} className={cn("relative", className)}>
      {children}
    </motion.div>
  );
}
