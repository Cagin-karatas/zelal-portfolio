import type { PropsWithChildren } from "react";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/cn";
import type { SectionId, SectionNumber } from "@/types/site";

export interface SectionProps extends PropsWithChildren {
  readonly id: SectionId;
  readonly number: SectionNumber;
  readonly title: string;
  readonly count: number;
  readonly isHero?: boolean;
  readonly className?: string;
  readonly contentClassName?: string;
}

export function Section({
  id,
  number,
  title,
  count,
  isHero = false,
  children,
  className,
  contentClassName,
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("scroll-mt-8", isHero ? "pb-0" : "pb-section", className)}
    >
      <PageContainer>
        <SectionHeader titleId={titleId} number={number} title={title} count={count} />
        <div className={cn("pt-7", contentClassName)}>{children}</div>
      </PageContainer>
    </section>
  );
}
