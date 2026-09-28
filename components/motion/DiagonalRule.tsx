// Client boundary: viewport progress draws the section divider through SVG stroke offset.
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { PageContainer } from "@/components/layout/PageContainer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DIAGONAL_RULE, DIAGONAL_RULE_SCROLL_OFFSET } from "@/lib/motion";

export function DiagonalRule() {
  const ruleRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ruleRef,
    offset: DIAGONAL_RULE_SCROLL_OFFSET,
  });
  const animatedOffset = useTransform(
    scrollYProgress,
    [DIAGONAL_RULE.visibleOffset, DIAGONAL_RULE.hiddenOffset],
    [DIAGONAL_RULE.hiddenOffset, DIAGONAL_RULE.visibleOffset],
  );

  return (
    <PageContainer>
      <div ref={ruleRef} className="py-7" aria-hidden="true">
        <svg
          className="h-5 w-full overflow-visible"
          viewBox={DIAGONAL_RULE.viewBox}
          preserveAspectRatio="none"
        >
          <motion.path
            d={DIAGONAL_RULE.path}
            pathLength={DIAGONAL_RULE.pathLength}
            strokeDasharray={DIAGONAL_RULE.pathLength}
            style={{
              strokeDashoffset: prefersReducedMotion ? DIAGONAL_RULE.visibleOffset : animatedOffset,
            }}
            className="fill-none stroke-accent stroke-hairline"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </PageContainer>
  );
}
