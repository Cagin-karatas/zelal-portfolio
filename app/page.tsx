import { Disciplines } from "@/components/sections/Disciplines";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Disciplines />
      <DiagonalRule />
      <SelectedWork />
    </main>
  );
}
import { DiagonalRule } from "@/components/motion/DiagonalRule";
