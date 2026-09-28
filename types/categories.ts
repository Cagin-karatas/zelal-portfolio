export type CategoryAnchor = "the-bound" | "dordu-bes-gece" | "archive" | "self-collage";

export interface CategoryLink {
  readonly label: "Films" | "Music Videos" | "Photography" | "Collage";
  readonly href: `#${CategoryAnchor}`;
}
