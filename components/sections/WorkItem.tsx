import Image from "next/image";
import { CropMarks } from "@/components/ui/CropMarks";
import { ImageCaption } from "@/components/ui/ImageCaption";
import { TimecodeMeta } from "@/components/ui/TimecodeMeta";
import { AmbientTrigger } from "@/components/motion/AmbientTrigger";
import { cn } from "@/lib/cn";
import type { Project, ProjectAspectRatio } from "@/types/project";

const ASPECT_RATIO_CLASS: Record<ProjectAspectRatio, string> = {
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-[1/1]",
  "16:9": "aspect-[16/9]",
};

interface WorkItemProps {
  project: Project;
  /** Per-row col-start/col-span pair — see SelectedWork's grid comment. */
  className?: string;
}

/**
 * One Work-grid tile. `id={project.id}` is a real scroll target: Selected
 * Work's category links point here instead of at `href="#"`, avoiding the
 * fake-link mistake already corrected once in Disciplines (Step 5).
 *
 * The red overlay (§6 item 13, one of the site's two-use budget — the
 * other slot stays unspent) is a full-opacity `mix-blend-multiply` wash:
 * multiply keeps the underlying image's shape and luminance while pulling
 * every color toward `--accent`, which reads as "drenched in red" rather
 * than "a red rectangle sitting on a photo."
 *
 * `focus-dim-item` (Step 7b) makes every *other* tile in the grid dim
 * while this one is hovered — see globals.css's `.focus-dim-group`
 * comment. `AmbientTrigger` (also Step 7b) is the image box itself, not
 * an extra wrapper around it, so hovering the tile both dims its
 * siblings and bleeds its dominant color into the page at once.
 */
export function WorkItem({ project, className }: WorkItemProps) {
  return (
    <div
      id={project.id}
      className={cn("group focus-dim-item relative", className)}
    >
      <AmbientTrigger
        color={project.dominantColor}
        className={cn(
          "relative w-full overflow-hidden",
          ASPECT_RATIO_CLASS[project.aspectRatio],
        )}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          placeholder="blur"
          quality={80}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {project.hasRedOverlay ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-accent mix-blend-multiply"
          />
        ) : null}

        <CropMarks aspectRatio={project.aspectRatio} />
        <ImageCaption>{project.caption}</ImageCaption>
        {project.meta ? <TimecodeMeta meta={project.meta} /> : null}
      </AmbientTrigger>
    </div>
  );
}
