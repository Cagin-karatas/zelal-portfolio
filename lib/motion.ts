import type { MotionProps, UseScrollOptions } from "motion/react";

export const DURATION = {
  reduced: 0.00001,
  fast: 0.3,
  base: 0.6,
  slow: 1.2,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  outCss: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const DELAY = {
  line: 0.08,
  cursorPreview: 0.08,
} as const;

export const LENIS_MOTION = {
  lerp: 0.1,
} as const;

export const CURSOR_MOTION = {
  lerp: 0.18,
  previewLerp: 0.1,
  previewOffsetX: 24,
  previewOffsetY: 24,
  hiddenPosition: -96,
} as const;

export const SCROLL_PROGRESS = {
  activationPoint: 0.45,
  hiddenNumberY: "100%",
  visibleNumberY: "0%",
  exitingNumberY: "-100%",
} as const;

export const DIAGONAL_RULE = {
  viewBox: "0 0 1000 48",
  path: "M0 47 L1000 1",
  pathLength: 1,
  hiddenOffset: 1,
  visibleOffset: 0,
} as const;

export const DIAGONAL_RULE_SCROLL_OFFSET: NonNullable<UseScrollOptions["offset"]> = [
  "start 90%",
  "end 55%",
];

export const MASKED_LINE = {
  hiddenY: "100%",
  visibleY: "0%",
} as const;

export const IMAGE_REVEAL = {
  hiddenClip: "inset(0 0 100% 0)",
  visibleClip: "inset(0 0 0% 0)",
  hiddenScale: 1.12,
  visibleScale: 1,
} as const;

export const PARALLAX_OFFSET = {
  rest: "0%",
  portrait: -8,
  filmFrame: 14,
} as const;

export const HERO_SCROLL_OFFSET: NonNullable<UseScrollOptions["offset"]> = [
  "start end",
  "end start",
];

export const REVEAL_VIEWPORT: NonNullable<MotionProps["viewport"]> = {
  once: true,
  amount: 0.2,
};
