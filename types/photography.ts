import type { StaticImageData } from "next/image";

export type PhotographyCategory =
  | "Portfolio Introduction"
  | "Traditional Portrait"
  | "Street Portrait"
  | "Symmetry"
  | "Reflection"
  | "Reflection Symmetry"
  | "Cityscape";
export type PhotographyOrientation = "landscape";

export interface PhotographyFrame {
  readonly id: `photography-page-${string}`;
  readonly image: StaticImageData;
  readonly alt: string;
  readonly sequence: string;
  readonly orientation: PhotographyOrientation;
  readonly sourceDimensions: string;
}

export interface PhotographyGroup {
  readonly category: PhotographyCategory;
  readonly frames: readonly [PhotographyFrame, ...PhotographyFrame[]];
}
