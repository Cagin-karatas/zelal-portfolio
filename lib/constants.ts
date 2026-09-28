import type { SectionId } from "@/types/site";

export const BREAKPOINTS = {
  small: 640,
  medium: 768,
  rails: 1024,
  large: 1280,
  extraLarge: 1536,
} as const;

export const MEDIA_QUERY = {
  reducedMotion: "(prefers-reduced-motion: reduce)",
  finePointer: "(hover: hover) and (pointer: fine)",
} as const;

export const DATA_SELECTOR = {
  ambientSource: "[data-ambient-color]",
  cursorTarget: "[data-cursor-label]",
} as const;

export const Z_INDEX = {
  vignette: -2,
  ambient: -1,
  base: 0,
  content: 10,
  header: 20,
  rails: 30,
  cursor: 40,
  grain: 50,
  skip: 60,
} as const;

export const IMAGE_QUALITY = {
  hero: 90,
  work: 90,
  archive: 85,
} as const;

export const CHINAGRAPH_STROKE_WIDTH = 1.5;

export const Z_LAYER_CLASS = {
  content: "z-content",
  header: "z-header",
  rails: "z-rails",
  skip: "z-skip",
} as const;

export const SECTION_IDS = {
  about: "about",
  disciplines: "disciplines",
  work: "work",
  archive: "archive",
  contact: "contact",
} as const satisfies Readonly<Record<SectionId, SectionId>>;
