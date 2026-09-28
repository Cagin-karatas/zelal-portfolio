import Image from "next/image";

import { disciplines } from "@/content/disciplines";
import { cn } from "@/lib/cn";
import { DELAY, DURATION, EASE } from "@/lib/motion";
import type { DisciplineSlug } from "@/types/disciplines";

export interface CursorPreviewProps {
  readonly disciplineSlug: DisciplineSlug | null;
}

export function CursorPreview({ disciplineSlug }: CursorPreviewProps) {
  const discipline = disciplines.find((item) => item.slug === disciplineSlug);
  const isVisible = discipline !== undefined;

  return (
    <div
      className={cn(
        "relative aspect-portrait w-cursor-preview origin-top-left overflow-hidden transition-[opacity,transform]",
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
      )}
      style={{
        transitionDelay: `${DELAY.cursorPreview}s`,
        transitionDuration: `${DURATION.fast}s`,
        transitionTimingFunction: EASE.outCss,
      }}
      aria-hidden="true"
    >
      {discipline ? (
        <Image
          src={discipline.previewImage}
          alt=""
          fill
          sizes="10rem"
          placeholder="blur"
          className="object-contain grayscale"
        />
      ) : null}
    </div>
  );
}
