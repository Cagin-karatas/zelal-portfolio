import collagePreview from "@/public/images/work-05-self-collage.jpg";
import scriptWritingPreview from "@/public/images/collage/collage-28699.jpg";
import visualStorytellingPreview from "@/public/images/photography-pages/photography-page-01.png";
import directingPreview from "@/public/images/photography-pages/photography-page-02.png";
import photographyPreview from "@/public/images/photography-pages/photography-page-04.png";
import type { Discipline } from "@/types/disciplines";
import { disciplineOrder } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export const disciplines = [
  {
    slug: disciplineOrder[0],
    number: "01",
    title: "Visual Storytelling",
    meta: "Frame / Word / Image",
    href: `#${SECTION_IDS.work}`,
    previewImage: visualStorytellingPreview,
    previewAlt: "Complete opening contact-sheet page of the photography portfolio",
  },
  {
    slug: disciplineOrder[1],
    number: "02",
    title: "Directing",
    meta: "Camera / Performance / Cut",
    href: `#${SECTION_IDS.work}`,
    previewImage: directingPreview,
    previewAlt: "Complete biography page from the photography portfolio",
  },
  {
    slug: disciplineOrder[2],
    number: "03",
    title: "Script Writing",
    meta: "Scene / Action / Dialogue",
    href: `#${SECTION_IDS.work}`,
    previewImage: scriptWritingPreview,
    previewAlt: "Complete handmade collage combining text and photographic fragments",
  },
  {
    slug: disciplineOrder[3],
    number: "04",
    title: "Photography",
    meta: "Light / Time / Observation",
    href: `#${SECTION_IDS.work}`,
    previewImage: photographyPreview,
    previewAlt: "Complete traditional portrait page from the photography portfolio",
  },
  {
    slug: disciplineOrder[4],
    number: "05",
    title: "Collage & Drawings",
    meta: "Paper / Ink / Assemblage",
    href: `#${SECTION_IDS.work}`,
    previewImage: collagePreview,
    previewAlt: "Complete self-portrait collage",
  },
] as const satisfies readonly Discipline[];
