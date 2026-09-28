// Client scroll values are required to move the two hero image layers at independent speeds.
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { HeroCollage } from "@/components/sections/HeroCollage";
import { HeroPortfolioPage } from "@/components/sections/HeroPortfolioPage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { HERO_SCROLL_OFFSET, PARALLAX_OFFSET } from "@/lib/motion";

export function HeroParallaxMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: HERO_SCROLL_OFFSET,
  });
  const portraitY = useTransform(
    scrollYProgress,
    (progress) => `${progress * PARALLAX_OFFSET.portrait}%`,
  );
  const filmFrameY = useTransform(
    scrollYProgress,
    (progress) => `${progress * PARALLAX_OFFSET.filmFrame}%`,
  );

  return (
    <div ref={containerRef} className="grid grid-cols-editorial items-end gap-y-4">
      <motion.div
        className="col-span-10 col-start-2 row-start-1 md:col-span-9 md:col-start-2 rails:col-span-8 rails:col-start-3"
        style={{ y: isReducedMotion ? PARALLAX_OFFSET.rest : portraitY }}
        data-parallax-layer="true"
      >
        <HeroCollage />
      </motion.div>
      <motion.div
        className="z-content col-span-7 col-start-6 row-start-2 self-end md:col-span-6 md:row-start-1 rails:col-span-5 rails:col-start-8"
        style={{ y: isReducedMotion ? PARALLAX_OFFSET.rest : filmFrameY }}
        data-parallax-layer="true"
      >
        <HeroPortfolioPage />
      </motion.div>
    </div>
  );
}
