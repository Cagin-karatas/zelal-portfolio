import { RevealImage } from "@/components/motion/RevealImage";
import { CollageWorks } from "@/components/sections/CollageWorks";
import { collageBoard } from "@/content/collages";
import { IMAGE_QUALITY } from "@/lib/constants";

export function CollageArchive() {
  return (
    <div className="pt-section">
      <div className="grid min-h-7 grid-cols-editorial items-center gap-gutter border-t-hairline border-rule">
        <p className="col-span-2 text-number text-accent tabular-numbers" aria-hidden="true">
          COL
        </p>
        <h3 className="label col-span-7 text-ink md:col-span-8">Collage / Complete Board</h3>
        <p className="col-span-3 text-right text-number text-ink-soft tabular-numbers md:col-span-2">
          <span className="sr-only">Board count: </span>(01)
        </p>
      </div>

      <figure className="pt-5">
        <RevealImage
          source={collageBoard.image}
          alt={collageBoard.alt}
          sizes="(min-width: 1024px) 84vw, 92vw"
          quality={IMAGE_QUALITY.work}
          hasNaturalAspectRatio
          className="bg-paper"
          imageClassName="object-contain"
        />
        <figcaption className="mt-3 flex items-start justify-between gap-3">
          <p className="label text-ink">{collageBoard.title}</p>
          <p className="text-right text-timecode uppercase text-ink-soft tabular-numbers">
            {collageBoard.sourceDimensions}
          </p>
        </figcaption>
      </figure>

      <CollageWorks />
    </div>
  );
}
