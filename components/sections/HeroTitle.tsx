import { siteIdentity } from "@/content/site";

export function HeroTitle() {
  return (
    <h1 className="optical-display whitespace-nowrap font-display text-display">
      <span className="sr-only">{siteIdentity.name}</span>
      <span className="block" aria-hidden="true">
        ZELAL
      </span>
      <span className="block" aria-hidden="true">
        GÜNAY
      </span>
    </h1>
  );
}
