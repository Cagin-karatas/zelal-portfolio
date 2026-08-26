import { SECTION_ID } from "@/lib/constants";

export const SITE = {
  name: "Zelal Günay",
  logoMonogram: "ZG",
  tagline: "I tell stories through images, words and frames.",
  roles: ["Visual Storyteller", "Director", "Screenwriter", "Photographer"],
  location: "Based in Istanbul, working worldwide",
  // Kept in sentence case: the `.label` component applies uppercase via
  // CSS, so the source string doesn't need to fight that transform. The
  // em dash (rather than the comma used in `location` above) is this
  // string's own punctuation, for the fixed edge column (§6 item 1).
  locationLabel: "Based in Istanbul — working worldwide",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/**
 * ASSUMPTION: the brief's page structure (§4) defines only four sections —
 * Hero, Disciplines, Selected Work, Footer — but the nav row (brief §2)
 * lists Work / About / Archive / Contact. Rather than invent two sections
 * nothing in the brief describes, "About" anchors to Hero (where the bio
 * and role list already live) and "Archive" anchors to Footer until a
 * dedicated archive route exists. Flagging this so it's revisited once
 * there's real Archive content to route to instead of the footer.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: `#${SECTION_ID.selectedWork}` },
  { label: "About", href: `#${SECTION_ID.hero}` },
  { label: "Archive", href: `#${SECTION_ID.footer}` },
  { label: "Contact", href: "mailto:hello@zelalgunay.com" },
];

export interface SocialLink {
  label: string;
  href: string;
}

// ASSUMPTION: gerçek sosyal medya hesap adları elimde değil; yer
// tutucu kullanıcı adlarıyla dolduruldu. Gerçek hesaplar geldiğinde
// sadece bu üç href değişecek.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/zelalgunay" },
  { label: "Vimeo", href: "https://vimeo.com/zelalgunay" },
  { label: "Letterboxd", href: "https://letterboxd.com/zelalgunay" },
];
