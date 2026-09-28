import { CollageArchive } from "@/components/sections/CollageArchive";
import { PhotographyArchive } from "@/components/sections/PhotographyArchive";
import { collageWorks } from "@/content/collages";
import { photographyGroups } from "@/content/photography";
import { SECTION_IDS } from "@/lib/constants";

const photographyCount = photographyGroups.reduce(
  (frameCount, group) => frameCount + group.frames.length,
  0,
);
const archiveImageCount = photographyCount + collageWorks.length + 1;

export function ArchiveContactSheet() {
  return (
    <div id={SECTION_IDS.archive} className="scroll-mt-8 pt-section">
      <div className="grid min-h-7 grid-cols-editorial items-center gap-gutter border-t-hairline border-rule">
        <p className="col-span-2 text-number text-accent tabular-numbers" aria-hidden="true">
          A—Z
        </p>
        <h3 className="label col-span-7 text-ink md:col-span-8">Archive / Contact Sheet</h3>
        <p className="col-span-3 text-right text-number text-ink-soft tabular-numbers md:col-span-2">
          <span className="sr-only">Image count: </span>({archiveImageCount})
        </p>
      </div>

      <PhotographyArchive />

      <CollageArchive />
    </div>
  );
}
