import type { StaticImageData } from "next/image";

export type ProjectCategory =
  | "films"
  | "music-videos"
  | "photography"
  | "collage"
  | "drawings"
  | "writing";

export type ProjectAspectRatio = "4:5" | "16:9" | "1:1";

/** §6 item 3: the only three module widths a Work grid item may occupy. */
export type ModuleSpan = 4 | 5 | 7;

interface FilmMeta {
  kind: "film";
  /** SMPTE-style, e.g. "00:02:14:08". */
  timecode: string;
  year: number;
  format: string;
  location: string;
}

interface PhotoMeta {
  kind: "photo";
  aperture: string;
  shutterSpeed: string;
  iso: number;
}

/**
 * §6 item 7's two technical-caption shapes. Collage and drawing entries
 * have no `meta` at all — neither shape describes hand-made work
 * honestly, so forcing one on would turn real information into
 * decoration, which is exactly what item 7 warns against.
 */
export type ProjectMeta = FilmMeta | PhotoMeta;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  aspectRatio: ProjectAspectRatio;
  moduleSpan: ModuleSpan;
  image: StaticImageData;
  /** From content/generated/image-manifest.json — feeds the ambient-color-bleed effect (§3.6, Step 7b). */
  dominantColor: string;
  alt: string;
  caption: string;
  meta?: ProjectMeta;
  /** At most 2 true across the whole site (§6 item 13) — enforced by review, not by this type. */
  hasRedOverlay?: boolean;
}
