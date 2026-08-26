"use client"; // per-row hover state + live cursor position, both client-only

import { useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion, useSpring } from "motion/react";
import { useCursorPosition } from "@/lib/context/cursor-position";
import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PREVIEW_WIDTH_PX = 160;
const PREVIEW_HEIGHT_PX = 200;
const PREVIEW_OFFSET_PX = 24;
const PREVIEW_SPRING = { damping: 26, stiffness: 300, mass: 0.6 };

interface CursorPreviewProps {
  image: StaticImageData;
  children: ReactNode;
  className?: string;
}

/**
 * Disciplines' cursor-follow preview: hovering a row floats a small still
 * near the cursor, previewing that discipline's work without leaving the
 * list — the payoff for content/disciplines.ts's `previewImage` field.
 * Shares the one sitewide pointer-position listener
 * (CursorPositionProvider) instead of adding a second.
 *
 * Purely decorative: the row's own text is the accessible content, so the
 * thumbnail is `aria-hidden` and only ever appears on pointer hover — a
 * keyboard user sees exactly the same information, just without this
 * supplementary image, never less of it.
 */
export function CursorPreview({ image, children, className }: CursorPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = useCursorPosition();
  const springX = useSpring(x, PREVIEW_SPRING);
  const springY = useSpring(y, PREVIEW_SPRING);

  return (
    <div
      className={cn(className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-cursor overflow-hidden"
            style={{
              width: PREVIEW_WIDTH_PX,
              height: PREVIEW_HEIGHT_PX,
              marginLeft: PREVIEW_OFFSET_PX,
              marginTop: -PREVIEW_HEIGHT_PX / 2,
              x: prefersReducedMotion ? x : springX,
              y: prefersReducedMotion ? y : springY,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : DURATION.fast,
              ease: EASE.out,
            }}
          >
            <Image
              src={image}
              alt=""
              fill
              placeholder="blur"
              quality={80}
              sizes={`${PREVIEW_WIDTH_PX}px`}
              className="object-cover"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
