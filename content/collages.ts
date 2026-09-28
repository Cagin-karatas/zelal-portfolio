import collageBoardImage from "@/public/images/collage/collage-board-complete.png";
import collage28699 from "@/public/images/collage/collage-28699.jpg";
import collageImg0953 from "@/public/images/collage/collage-img-0953.jpg";
import collageImg3149 from "@/public/images/collage/collage-img-3149.png";
import collageImg4899 from "@/public/images/collage/collage-img-4899.png";
import selfCollage from "@/public/images/work-05-self-collage.jpg";
import { imageManifest } from "@/content/image-manifest.generated";
import type { CollageWork } from "@/types/collages";

export const collageBoard = {
  title: "Complete Collage Board",
  image: collageBoardImage,
  alt: "Complete A3 landscape board containing Zelal Günay's collages, drawings, photographs and graphic studies",
  sourceDimensions: "A3 landscape · 2382 × 1684 px",
} as const;

export const collageWorks = [
  {
    id: "self-collage",
    title: "Self Collage",
    sourceFileName: "self_collage.jpg",
    image: selfCollage,
    alt: "Self-portrait collage assembled from monochrome facial fragments and hand-drawn forms",
    dominantColor: imageManifest["work-05-self-collage.jpg"].dominantColor,
    ambientOpacity: 0.09,
  },
  {
    id: "untitled-collage-01",
    title: "Untitled Collage I",
    sourceFileName: "28699.jpg",
    image: collage28699,
    alt: "Two-panel handmade collage combining Istanbul city fragments, newspaper typography, a pigeon and surreal portrait elements",
    dominantColor: imageManifest["collage/collage-28699.jpg"].dominantColor,
    ambientOpacity: 0.1,
  },
  {
    id: "untitled-collage-02",
    title: "Untitled Collage II",
    sourceFileName: "IMG_0953.jpg",
    image: collageImg0953,
    alt: "Two vertically arranged surreal collages combining eyes, hands, figures, fingerprints and architectural fragments",
    dominantColor: imageManifest["collage/collage-img-0953.jpg"].dominantColor,
    ambientOpacity: 0.1,
  },
  {
    id: "untitled-collage-03",
    title: "Untitled Collage III",
    sourceFileName: "IMG_3149.heic",
    image: collageImg3149,
    alt: "Dense handmade collage surrounding a broken mirror portrait with text, faces, hands and organic fragments",
    dominantColor: imageManifest["collage/collage-img-3149.png"].dominantColor,
    ambientOpacity: 0.09,
  },
  {
    id: "untitled-collage-04",
    title: "Untitled Collage IV",
    sourceFileName: "IMG_4899.heic",
    image: collageImg4899,
    alt: "Tall handmade collage of fragmented faces above a sculptural figure surrounded by newsprint and electronic objects",
    dominantColor: imageManifest["collage/collage-img-4899.png"].dominantColor,
    ambientOpacity: 0.09,
  },
] as const satisfies readonly CollageWork[];
