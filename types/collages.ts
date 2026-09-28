import type { StaticImageData } from "next/image";

export interface CollageWork {
  readonly id: "self-collage" | `untitled-collage-${string}`;
  readonly title: string;
  readonly sourceFileName: string;
  readonly image: StaticImageData;
  readonly alt: string;
  readonly dominantColor: `#${string}`;
  readonly ambientOpacity: 0.08 | 0.09 | 0.1 | 0.11 | 0.12 | 0.13 | 0.14;
}
