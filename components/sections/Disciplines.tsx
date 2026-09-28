import { Section } from "@/components/layout/Section";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { disciplines } from "@/content/disciplines";
import { sectionMeta } from "@/content/site";

export function Disciplines() {
  const disciplinesMeta = sectionMeta.disciplines;

  return (
    <Section
      id={disciplinesMeta.id}
      number={disciplinesMeta.number}
      title={disciplinesMeta.title}
      count={disciplinesMeta.count}
      className="discipline-section"
    >
      <div className="grid grid-cols-editorial gap-x-gutter gap-y-7">
        <MaskedLines
          ariaLabel="Image, word, frame"
          lines={[{ text: "IMAGE," }, { text: "WORD," }, { text: "FRAME" }]}
          className="display-optical optical-display col-span-11 font-display text-display md:col-span-4"
        />

        <ol className="col-span-12 border-t-hairline border-rule md:col-span-8 md:col-start-5 rails:col-span-7 rails:col-start-6">
          {disciplines.map((discipline) => (
            <li key={discipline.slug} className="border-b-hairline border-rule">
              <a
                href={discipline.href}
                className="group grid min-h-8 grid-cols-editorial items-center gap-gutter py-3"
                data-cursor-label="VIEW"
                data-discipline={discipline.slug}
              >
                <span className="col-span-2 text-number text-accent tabular-numbers">
                  {discipline.number}
                </span>
                <span className="col-span-8 md:col-span-7">
                  <span className="block text-body text-ink group-hover:text-accent group-focus-visible:text-accent">
                    {discipline.title}
                  </span>
                  <span className="mt-2 block text-timecode uppercase text-ink-soft tabular-numbers">
                    {discipline.meta}
                  </span>
                </span>
                <span
                  className="col-span-2 justify-self-end text-body text-accent transition-transform duration-fast ease-editorial group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
