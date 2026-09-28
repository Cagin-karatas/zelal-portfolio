import { filmWorks } from "@/content/videos";

function getDrivePreviewUrl(driveFileId: string) {
  return `https://drive.google.com/file/d/${driveFileId}/preview`;
}

export function FilmArchive() {
  return (
    <section id="films" aria-labelledby="film-archive-heading" className="pt-section">
      <div className="grid min-h-7 grid-cols-editorial items-center gap-gutter border-t-hairline border-rule">
        <p className="col-span-2 text-number text-accent tabular-numbers" aria-hidden="true">
          FIL
        </p>
        <h3 id="film-archive-heading" className="label col-span-7 text-ink md:col-span-8">
          Films / Complete Cuts
        </h3>
        <p className="col-span-3 text-right text-number text-ink-soft tabular-numbers md:col-span-2">
          <span className="sr-only">Film count: </span>({String(filmWorks.length).padStart(2, "0")})
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-y-section pt-5">
        {filmWorks.map((film) => (
          <li key={film.id} id={film.id} className="scroll-mt-8">
            <figure>
              <div className="aspect-film overflow-hidden bg-ink">
                <iframe
                  src={getDrivePreviewUrl(film.driveFileId)}
                  title={`${film.title} — complete ${film.category.toLowerCase()}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <figcaption className="mt-3 grid grid-cols-2 gap-gutter border-t-hairline border-rule pt-3">
                <div>
                  <p className="label text-ink">{film.title}</p>
                  <p className="mt-1 text-timecode text-ink-soft">{film.category}</p>
                </div>
                <div className="text-right text-timecode text-ink-soft tabular-nums">
                  <p>{film.duration ?? "COMPLETE CUT"}</p>
                  <p className="mt-1 break-words">{film.sourceFileName}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
