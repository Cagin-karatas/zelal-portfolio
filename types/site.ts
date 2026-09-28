export type SectionId = "about" | "disciplines" | "work" | "archive" | "contact";

export type SectionNumber = "01" | "02" | "03" | "04";

export interface NavigationItem {
  readonly label: string;
  readonly href: `#${SectionId}`;
}

export interface SocialLink {
  readonly label: "Instagram";
  readonly href: `https://${string}`;
}

export interface SectionMeta {
  readonly id: SectionId;
  readonly number: SectionNumber;
  readonly title: string;
  readonly count: number;
}

export interface ProgressSection {
  readonly id: Exclude<SectionId, "archive">;
  readonly number: SectionNumber;
}
