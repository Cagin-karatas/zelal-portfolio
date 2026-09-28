import { RevealImage } from "@/components/motion/RevealImage";
import { collageWorks } from "@/content/collages";
import { IMAGE_QUALITY } from "@/lib/constants";

const COLLAGE_LAYOUT = [
  "md:col-span-5",
  "md:col-span-6 md:col-start-7",
  "md:col-span-4 md:col-start-2",
  "md:col-span-5 md:col-start-7",
  "md:col-span-5 md:col-start-2",
] as const;

export function CollageWorks() {
  return (
    <section aria-labelledby="individual-collage-works" className="pt-8">
      <div className="grid min-h-7 grid-cols-editorial items-center gap-gutter border-t-hairline border-rule">
        <p className="col-span-2 text-number text-accent tabular-numbers" aria-hidden="true">
          IND
        </p>
        <h4 id="individual-collage-works" className="label col-span-7 text-ink md:col-span-8">
          Individual Collage Works
        </h4>
        <p className="col-span-3 text-right text-number text-ink-soft tabular-numbers md:col-span-2">
          <span className="sr-only">Work count: </span>(
          {String(collageWorks.length).padStart(2, "0")})
        </p>
      </div>

      <ul className="work-grid grid grid-cols-1 gap-x-gutter gap-y-8 pt-5 md:grid-cols-editorial">
        {collageWorks.map((work, index) => (
          <li
            key={work.id}
            id={work.id}
            className={`work-card scroll-mt-8 ${COLLAGE_LAYOUT[index] ?? "md:col-span-5"}`}
            data-ambient-color={work.dominantColor}
            data-ambient-opacity={work.ambientOpacity}
            data-cursor-label="VIEW"
          >
            <figure>
              <a
                href={work.image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${work.title} at full resolution`}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <RevealImage
                  source={work.image}
                  alt={work.alt}
                  sizes="(min-width: 768px) 44vw, 92vw"
                  quality={IMAGE_QUALITY.work}
                  isRevealEnabled={false}
                  hasNaturalAspectRatio
                  className="bg-paper"
                  imageClassName="object-contain"
                />
              </a>
              <figcaption className="mt-3 flex items-start justify-between gap-3">
                <p className="label text-ink">{work.title}</p>
                <p className="text-right text-timecode text-ink-soft tabular-numbers">
                  {work.sourceFileName}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
