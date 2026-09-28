import { SECTION_IDS } from "@/lib/constants";
import type { DisciplineSlug } from "@/types/disciplines";
import type { NavigationItem, ProgressSection, SectionMeta, SocialLink } from "@/types/site";

export const siteIdentity = {
  name: "Zelal Günay",
  title: "Zelal Günay — Visual Storyteller",
  description: "Director, screenwriter, photographer and visual storyteller based in Istanbul.",
  canonicalUrl: "https://zelalgunay.com",
  monogram: "ZG",
  slogan: "I tell stories through images, words and frames.",
  introduction: [
    "Zelal Günay is a visual storyteller and director working across film, photography, and creative direction. A graduate of Bilkent University's Communication and Design (COMD) program, she builds concept-driven work through narrative structure, image-making, and editorial precision.",
    "Her practice explores memory, perception, and human behavior, with particular attention to atmosphere and emotional rhythm. Working across directing, scriptwriting, photography, and post-production, she develops each project as a cohesive visual system—from the first idea to the final frame.",
  ],
  roles: ["Visual Storyteller", "Director", "Screenwriter", "Photographer"],
  location: "Based in Istanbul, working worldwide",
  contactEmail: "zelalaska@gmail.com",
} as const;

export const navigation = [
  { label: "Work", href: `#${SECTION_IDS.work}` },
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Archive", href: `#${SECTION_IDS.archive}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
] as const satisfies readonly NavigationItem[];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/zelalgunayy" },
] as const satisfies readonly SocialLink[];

// Discipline numbers move from Zelal's primary narrative practice toward tactile image-making.
export const disciplineOrder = [
  "visual-storytelling",
  "directing",
  "script-writing",
  "photography",
  "collage-drawings",
] as const satisfies readonly DisciplineSlug[];

export const sectionMeta = {
  about: { id: SECTION_IDS.about, number: "01", title: "About", count: 1 },
  disciplines: {
    id: SECTION_IDS.disciplines,
    number: "02",
    title: "Disciplines",
    count: 5,
  },
  work: { id: SECTION_IDS.work, number: "03", title: "Selected Work", count: 33 },
  contact: { id: SECTION_IDS.contact, number: "04", title: "Contact", count: 1 },
} as const satisfies Readonly<Record<Exclude<keyof typeof SECTION_IDS, "archive">, SectionMeta>>;

// Archive remains inside Selected Work's 03 chapter instead of inventing a fifth section number.
export const progressSections = [
  { id: SECTION_IDS.about, number: sectionMeta.about.number },
  { id: SECTION_IDS.disciplines, number: sectionMeta.disciplines.number },
  { id: SECTION_IDS.work, number: sectionMeta.work.number },
  { id: SECTION_IDS.contact, number: sectionMeta.contact.number },
] as const satisfies readonly ProgressSection[];
