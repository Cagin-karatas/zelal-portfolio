import type { SectionNumber } from "@/types/site";

export interface SectionHeaderProps {
  readonly titleId: string;
  readonly number: SectionNumber;
  readonly title: string;
  readonly count: number;
}

export function SectionHeader({ titleId, number, title, count }: SectionHeaderProps) {
  return (
    <div className="grid min-h-7 grid-cols-editorial items-center gap-gutter border-t-hairline border-rule">
      <p className="col-span-2 text-number text-accent tabular-numbers" aria-hidden="true">
        {number}
      </p>
      <h2 id={titleId} className="label col-span-7 text-ink md:col-span-8">
        {title}
      </h2>
      <p className="col-span-3 text-right text-number text-ink-soft tabular-numbers md:col-span-2">
        <span className="sr-only">Item count: </span>({String(count).padStart(2, "0")})
      </p>
    </div>
  );
}
