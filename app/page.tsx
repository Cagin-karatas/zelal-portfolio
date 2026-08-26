import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Disciplines } from "@/components/sections/Disciplines";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { DISCIPLINES } from "@/content/disciplines";
import { PROJECTS } from "@/content/projects";
import { SECTION_ID } from "@/lib/constants";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section id={SECTION_ID.hero}>
        <Hero />
      </Section>

      {/* The cut between major sections (Step 7d) — inset by px-edge here,
          not inside DiagonalDivider itself, matching how Section applies
          its own edge padding. Not used inside a section's own opener
          strip (Section's <Rule /> stays the straight, in-header device). */}
      <div className="px-edge">
        <DiagonalDivider />
      </div>

      <Section
        id={SECTION_ID.disciplines}
        opener={{
          number: "02",
          title: "Disciplines",
          itemCount: DISCIPLINES.length,
        }}
      >
        <Disciplines />
      </Section>

      <div className="px-edge">
        <DiagonalDivider />
      </div>

      <Section
        id={SECTION_ID.selectedWork}
        opener={{
          number: "03",
          title: "Selected Work",
          itemCount: PROJECTS.length,
        }}
      >
        <SelectedWork />
      </Section>

      <div className="px-edge">
        <DiagonalDivider />
      </div>

      <Footer />
    </main>
  );
}
