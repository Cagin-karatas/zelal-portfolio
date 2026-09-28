import type { CategoryLink } from "@/types/categories";

export const categories = [
  { label: "Films", href: "#the-bound" },
  { label: "Music Videos", href: "#dordu-bes-gece" },
  { label: "Photography", href: "#archive" },
  { label: "Collage", href: "#self-collage" },
] as const satisfies readonly CategoryLink[];
