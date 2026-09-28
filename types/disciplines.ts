import type { StaticImageData } from "next/image";

import type { SectionId } from "@/types/site";

export type DisciplineSlug =
  "visual-storytelling" | "directing" | "script-writing" | "photography" | "collage-drawings";

export type DisciplineNumber = "01" | "02" | "03" | "04" | "05";

export interface Discipline {
  readonly slug: DisciplineSlug;
  readonly number: DisciplineNumber;
  readonly title: string;
  readonly meta: string;
  readonly href: `#${SectionId}`;
  readonly previewImage: StaticImageData;
  readonly previewAlt: string;
}
