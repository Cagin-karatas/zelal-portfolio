import Image from "next/image";
import heroFilmFrame from "@/public/images/hero/film-frame.jpg";
import heroPortrait from "@/public/images/hero/portrait.jpg";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ImageCaption } from "@/components/ui/ImageCaption";
import { Label } from "@/components/ui/Label";
import { LineMaskHeadline } from "@/components/motion/LineMaskHeadline";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { AmbientTrigger } from "@/components/motion/AmbientTrigger";
import { SITE } from "@/content/site";
import { SECTION_ID } from "@/lib/constants";
import { getDominantColor } from "@/lib/image-manifest";

const HEADLINE_LINES = ["ZELAL", "GÜNAY"];

/**
 * Grid-overlap layout. Weight sits left (name, roles, CTA), per
 * design-plan.md §3.4's alternating sol·sağ·sol rule for the first
 * section. Hero stays a server component: its three motion devices
 * (LineMaskHeadline, ParallaxImage from Step 7a; AmbientTrigger from Step
 * 7b) are each a "use client" leaf that owns its own hook, so none of them
 * forces this file to become client code. `getDominantColor` is a plain,
 * synchronous read of the build-time manifest — safe to call directly in
 * a server component, no client boundary needed for that part.
 *
 * The portrait bleeds to the viewport edge on large screens
 * (`lg:-mr-edge`) — this is the site's one deliberate full-bleed moment
 * (§3.4: "her ekranda tek bir tam kanama anı"). Selected Work's grid
 * (Step 6) must not repeat it.
 *
 * Only one line+number motif exists on screen at a time: EdgeFrame
 * already renders it as a fixed, site-wide element, so Hero's own right
 * column carries just the slogan — an earlier draft duplicated the
 * line+"01" here too, which read as two copies of the same idea stacked
 * next to each other.
 */
export function Hero() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-gutter">
      <div className="lg:col-span-5">
        <LineMaskHeadline
          lines={HEADLINE_LINES}
          className="font-display text-display optical-tighten"
        />

        <ul className="mt-8 flex flex-col gap-2">
          {SITE.roles.map((role) => (
            <Label key={role} as="li">
              {role}
            </Label>
          ))}
        </ul>

        <ArrowLink href={`#${SECTION_ID.selectedWork}`} className="mt-12">
          Selected Work
        </ArrowLink>
      </div>

      <ParallaxImage className="lg:col-span-5 lg:-mr-edge">
        <AmbientTrigger
          color={getDominantColor("hero/portrait.jpg")}
          className="relative aspect-[4/5] w-full"
        >
          <Image
            src={heroPortrait}
            alt="Portrait of Zelal Günay"
            fill
            placeholder="blur"
            priority
            quality={80}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </AmbientTrigger>

        {/* Future silent-loop video slot (§10 of the brief): the same
            static frame becomes a <video poster={...} preload="none">
            that plays only on hover, once a real clip exists. Left as a
            plain <Image> so that swap is additive, not a restructure. */}
        <AmbientTrigger
          color={getDominantColor("hero/film-frame.jpg")}
          className="absolute -bottom-8 -right-8 aspect-video w-3/5 lg:-bottom-12 lg:-right-12"
        >
          <Image
            src={heroFilmFrame}
            alt="Film still"
            fill
            placeholder="blur"
            quality={80}
            sizes="(min-width: 1024px) 24vw, 60vw"
            className="object-cover"
          />
          <ImageCaption>Film still</ImageCaption>
        </AmbientTrigger>
      </ParallaxImage>

      <div className="hidden lg:col-span-2 lg:flex lg:items-start lg:justify-end lg:pt-4">
        <p className="max-w-[20ch] text-right text-body text-ink-soft">
          {SITE.tagline}
        </p>
      </div>
    </div>
  );
}
