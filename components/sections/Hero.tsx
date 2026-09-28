import { Section } from "@/components/layout/Section";
import { HeroParallaxMedia } from "@/components/motion/HeroParallaxMedia";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { Introduction } from "@/components/sections/Introduction";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { sectionMeta, siteIdentity } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Hero() {
  const aboutMeta = sectionMeta.about;

  return (
    <Section
      id={aboutMeta.id}
      number={aboutMeta.number}
      title={aboutMeta.title}
      count={aboutMeta.count}
      contentClassName="min-h-hero"
      isHero
    >
      <div className="grid grid-cols-editorial content-start gap-x-gutter gap-y-7">
        <div className="col-span-12 md:col-span-5 rails:col-span-4">
          <HeroTitle />

          <div className="mt-7">
            <ul className="space-y-2" aria-label="Roles">
              {siteIdentity.roles.map((role) => (
                <li key={role} className="label text-ink-soft">
                  {role}
                </li>
              ))}
            </ul>
            <ArrowLink href={`#${SECTION_IDS.work}`} className="mt-5">
              Selected Work
            </ArrowLink>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 rails:col-span-6">
          <HeroParallaxMedia />
        </div>

        <aside className="col-span-12 col-start-1 flex items-end justify-between border-t-hairline border-rule pt-3 md:col-span-4 md:col-start-9 md:min-h-9 md:flex-col md:items-stretch md:border-l-hairline md:border-t-0 md:pl-3 md:pt-0 rails:col-span-2 rails:col-start-11">
          <p className="max-w-copy text-body text-ink">{siteIdentity.slogan}</p>
          <p className="text-number text-accent tabular-numbers">
            <span className="sr-only">Section </span>
            {aboutMeta.number}
          </p>
        </aside>
      </div>

      <Introduction />
    </Section>
  );
}
