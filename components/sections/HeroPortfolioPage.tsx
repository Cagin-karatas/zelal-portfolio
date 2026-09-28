import { RevealImage } from "@/components/motion/RevealImage";
import { cn } from "@/lib/cn";
import { IMAGE_QUALITY } from "@/lib/constants";
import photographyCover from "@/public/images/photography-pages/photography-page-01.png";

export interface HeroPortfolioPageProps {
  readonly className?: string;
}

export function HeroPortfolioPage({ className }: HeroPortfolioPageProps) {
  return (
    <figure className={cn("w-full", className)}>
      <RevealImage
        source={photographyCover}
        alt="Complete opening contact-sheet page of Zelal Günay's photography portfolio"
        className="aspect-film w-full bg-paper"
        imageClassName="object-contain"
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 28vw, 50vw"
        quality={IMAGE_QUALITY.hero}
        isRevealEnabled={false}
      />
      <figcaption className="mt-2 max-w-copy text-timecode text-ink-soft">
        Photography Portfolio · Page 01
      </figcaption>
    </figure>
  );
}
