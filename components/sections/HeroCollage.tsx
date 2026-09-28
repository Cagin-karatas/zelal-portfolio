import { RevealImage } from "@/components/motion/RevealImage";
import { cn } from "@/lib/cn";
import { IMAGE_QUALITY } from "@/lib/constants";
import selfCollage from "@/public/images/work-05-self-collage.jpg";

export interface HeroCollageProps {
  readonly className?: string;
}

export function HeroCollage({ className }: HeroCollageProps) {
  return (
    <figure className={cn("w-full", className)}>
      <RevealImage
        source={selfCollage}
        alt="Self-portrait collage assembled from monochrome facial fragments and hand-drawn forms"
        className="aspect-portrait w-full bg-paper"
        imageClassName="object-contain"
        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 75vw"
        quality={IMAGE_QUALITY.hero}
        preload
        isRevealEnabled={false}
      />
      <figcaption className="mt-2 max-w-copy text-timecode text-ink-soft">
        Self Collage · Mixed media
      </figcaption>
    </figure>
  );
}
