import project01 from "@/public/images/work/01.jpg";
import project02 from "@/public/images/work/02.jpg";
import project03 from "@/public/images/work/03.jpg";
import project04 from "@/public/images/work/04.jpg";
import project05 from "@/public/images/work/05.jpg";
import project06 from "@/public/images/work/06.jpg";
import { getDominantColor } from "@/lib/image-manifest";
import type { Project, ProjectCategory } from "@/types/project";

/**
 * ASSUMPTION: every field below — titles, category mix, technical meta —
 * is placeholder. The brief (§10) is explicit that real photography
 * exists but hasn't been placed yet; this file exists so the grid, the
 * module rhythm, and the meta-strip formatting can all be built and
 * verified now, and swapped for real work later without touching any
 * component. Aspect ratio pairs with module width by design (4/12↔4:5,
 * 5/12↔1:1, 7/12↔16:9, §6 item 3) — not required by the brief, but keeps
 * the module/ratio relationship legible instead of arbitrary.
 */
export const PROJECTS: Project[] = [
  {
    id: "work-photography-01",
    title: "Untitled (Photography)",
    category: "photography",
    aspectRatio: "4:5",
    moduleSpan: 4,
    image: project01,
    dominantColor: getDominantColor("work/01.jpg"),
    alt: "Placeholder photography still",
    caption: "Study, unpublished",
    meta: { kind: "photo", aperture: "ƒ/2.0", shutterSpeed: "1/250", iso: 400 },
  },
  {
    id: "work-collage-01",
    title: "Untitled (Collage)",
    category: "collage",
    aspectRatio: "1:1",
    moduleSpan: 5,
    image: project02,
    dominantColor: getDominantColor("work/02.jpg"),
    alt: "Placeholder collage composition",
    caption: "Collage, untitled",
  },
  {
    id: "work-films-01",
    title: "Untitled (Film)",
    category: "films",
    aspectRatio: "16:9",
    moduleSpan: 7,
    image: project03,
    dominantColor: getDominantColor("work/03.jpg"),
    alt: "Placeholder film still",
    caption: "Still, work in progress",
    meta: {
      kind: "film",
      timecode: "00:02:14:08",
      year: 2026,
      format: "16mm",
      location: "Istanbul",
    },
    // The one red-overlay use spent in this section (§6 item 13's budget
    // of 2 site-wide); this image is also the set's naturally red-toned
    // focal point (§3.5), the same device as Hero's film-frame.
    hasRedOverlay: true,
  },
  {
    id: "work-music-video-01",
    title: "Untitled (Music Video)",
    category: "music-videos",
    aspectRatio: "1:1",
    moduleSpan: 5,
    image: project04,
    dominantColor: getDominantColor("work/04.jpg"),
    alt: "Placeholder music video still",
    caption: "Frame, unreleased",
    meta: {
      kind: "film",
      timecode: "00:00:47:12",
      year: 2025,
      format: "Digital",
      location: "Istanbul",
    },
  },
  {
    id: "work-drawing-01",
    title: "Untitled (Drawing)",
    category: "drawings",
    aspectRatio: "4:5",
    moduleSpan: 4,
    image: project05,
    dominantColor: getDominantColor("work/05.jpg"),
    alt: "Placeholder drawing",
    caption: "Drawing, untitled",
  },
  {
    id: "work-films-02",
    title: "Untitled (Film)",
    category: "films",
    aspectRatio: "16:9",
    moduleSpan: 7,
    image: project06,
    dominantColor: getDominantColor("work/06.jpg"),
    alt: "Placeholder film still",
    caption: "Still, work in progress",
    meta: {
      kind: "film",
      timecode: "00:05:03:19",
      year: 2024,
      format: "16mm",
      location: "Istanbul",
    },
  },
];

export interface CategoryLink {
  id: ProjectCategory;
  label: string;
}

export const CATEGORIES: CategoryLink[] = [
  { id: "films", label: "Films" },
  { id: "music-videos", label: "Music Videos" },
  { id: "photography", label: "Photography" },
  { id: "collage", label: "Collage" },
  { id: "drawings", label: "Drawings" },
  { id: "writing", label: "Writing" },
];
