import { RevealImage } from "@/components/motion/RevealImage";
import { photographyGroups } from "@/content/photography";
import { IMAGE_QUALITY } from "@/lib/constants";

export function PhotographyArchive() {
  return (
    <div className="space-y-8 pt-5">
      {photographyGroups.map((group) => (
        <section
          key={group.category}
          aria-labelledby={`${group.frames[0].id}-group`}
          className="grid grid-cols-editorial gap-x-gutter gap-y-5"
        >
          <div className="col-span-12 md:col-span-3">
            <h4 id={`${group.frames[0].id}-group`} className="label text-ink">
              {group.category}
            </h4>
            <p className="mt-2 text-number text-accent tabular-numbers">
              ({String(group.frames.length).padStart(2, "0")})
            </p>
          </div>

          <ul className="col-span-12 grid grid-cols-1 gap-x-gutter gap-y-7 md:col-span-9 md:grid-cols-2">
            {group.frames.map((frame) => (
              <li key={frame.id} id={frame.id} className="scroll-mt-8">
                <figure>
                  <a
                    href={frame.image.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${group.category} page ${frame.sequence} at full resolution`}
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <RevealImage
                      source={frame.image}
                      alt={frame.alt}
                      sizes="(min-width: 1024px) 34vw, (min-width: 768px) 35vw, 92vw"
                      quality={IMAGE_QUALITY.work}
                      isRevealEnabled={false}
                      className="aspect-film bg-paper"
                      imageClassName="object-contain"
                    />
                  </a>
                  <figcaption className="mt-3 flex items-start justify-between gap-3">
                    <p className="label text-ink">
                      {group.category} · Page {frame.sequence}
                    </p>
                    <p className="text-right text-timecode uppercase text-ink-soft tabular-numbers">
                      {frame.sourceDimensions}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
