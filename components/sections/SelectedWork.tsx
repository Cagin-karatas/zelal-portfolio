import { Section } from "@/components/layout/Section";
import { AmbientRegion } from "@/components/motion/AmbientRegion";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { ArchiveContactSheet } from "@/components/sections/ArchiveContactSheet";
import { CategoryIndex } from "@/components/sections/CategoryIndex";
import { FilmArchive } from "@/components/sections/FilmArchive";
import { sectionMeta } from "@/content/site";

export function SelectedWork() {
  const workMeta = sectionMeta.work;

  return (
    <Section
      id={workMeta.id}
      number={workMeta.number}
      title={workMeta.title}
      count={workMeta.count}
    >
      <div className="grid grid-cols-editorial gap-x-gutter gap-y-7">
        <MaskedLines
          ariaLabel="Visual stories. In frames, in words, in motion."
          lines={[
            { text: "Visual" },
            { text: "stories.", className: "optical-italic italic text-accent" },
            { text: "In frames," },
            { text: "in words," },
            { text: "in motion." },
          ]}
          className="optical-display col-span-9 font-display text-display"
        />
        <div className="col-span-5 col-start-8 self-end md:col-span-3 md:col-start-10">
          <CategoryIndex />
        </div>
      </div>

      <FilmArchive />

      <AmbientRegion>
        <ArchiveContactSheet />
      </AmbientRegion>
    </Section>
  );
}
