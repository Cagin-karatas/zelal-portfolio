import { siteIdentity } from "@/content/site";

export function Introduction() {
  return (
    <div className="mt-8 grid grid-cols-editorial gap-x-gutter gap-y-5 border-t-hairline border-rule pt-5">
      <div className="col-span-12 md:col-span-3">
        <h3 className="label text-ink">Introduction</h3>
        <p className="mt-2 text-number text-accent tabular-numbers">Bilkent · COMD</p>
      </div>

      <div className="col-span-12 space-y-5 md:col-span-7 md:col-start-5">
        {siteIdentity.introduction.map((paragraph) => (
          <p key={paragraph} className="max-w-copy text-body text-ink">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
