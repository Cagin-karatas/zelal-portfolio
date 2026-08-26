import type { StaticImageData } from "next/image";
import filmsOne from "@/public/images/work/03.jpg";
import filmsTwo from "@/public/images/work/06.jpg";
import heroFilmFrame from "@/public/images/hero/film-frame.jpg";
import photography from "@/public/images/work/01.jpg";
import collage from "@/public/images/work/02.jpg";

export type DisciplineId =
  | "visual-storytelling"
  | "directing"
  | "script-writing"
  | "photography"
  | "collage-and-drawings";

export interface Discipline {
  id: DisciplineId;
  /** Zero-padded, e.g. '01' — used verbatim in the UI, not derived from array index. */
  number: string;
  title: string;
  /** Cursor-follow preview (§5.4, Step 7c) — see the ASSUMPTION below on where each image came from. */
  previewImage: StaticImageData;
}

/**
 * §6 item 10: this order is not alphabetical and not arbitrary — it runs
 * from the practice that frames everything else down to the most
 * occasional one, matching how her time actually splits.
 *
 * Visual Storytelling leads because every other row here is a specific
 * *method* of it, not a separate skill sitting next to it. Directing and
 * Script Writing follow as a pair because one feeds the other in the
 * actual workflow — a script exists before a shoot does. Photography
 * comes after the moving-image disciplines as the parallel still
 * practice. Collage & Drawings closes the list as the most personal and
 * least frequent output.
 *
 * Colocated here rather than split into content/site.ts (as the brief's
 * §6 item 10 literally names) because the rationale is only legible next
 * to the data it explains — see design-plan.md for this deviation.
 *
 * If this ordering ever stops matching how the work is actually split,
 * the numbers should change with it: they are information, not decoration.
 *
 * ASSUMPTION: `previewImage` reuses the existing Selected Work/Hero
 * placeholder photos rather than five new dedicated stills — the brief's
 * §10 image list never anticipated per-discipline thumbnails, so
 * generating a new placeholder set for them would be scope the brief
 * didn't ask for. Photography's mapping is exact (work-photography-01);
 * the rest are a best-fit pick pending real photography: the two film
 * stills split between Visual Storytelling (the umbrella practice) and
 * Directing, Script Writing borrows Hero's own film-frame image (distinct
 * from either Work still), and Collage & Drawings uses the collage piece
 * as its primary image.
 */
export const DISCIPLINES: Discipline[] = [
  {
    id: "visual-storytelling",
    number: "01",
    title: "Visual Storytelling",
    previewImage: filmsOne,
  },
  {
    id: "directing",
    number: "02",
    title: "Directing",
    previewImage: filmsTwo,
  },
  {
    id: "script-writing",
    number: "03",
    title: "Script Writing",
    previewImage: heroFilmFrame,
  },
  {
    id: "photography",
    number: "04",
    title: "Photography",
    previewImage: photography,
  },
  {
    id: "collage-and-drawings",
    number: "05",
    title: "Collage & Drawings",
    previewImage: collage,
  },
];
