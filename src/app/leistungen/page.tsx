"use client";

import { SplitHero } from "@/components/ui/SplitHero";
import { Services } from "@/components/home/Services";
import { MaskRevealSection } from "@/components/home/MaskRevealSection";
import { ProcessStack } from "@/components/home/ProcessStack";
import { StackingCardsSection } from "@/components/home/StackingCardsSection";

export default function ServicesPage() {
  return (
    <>
      <SplitHero
        title="Leistungen"
        imageSrc="/images/services_complete_renovation.png"
        revealedTitle="Alles aus einer Hand"
        subtitle="Kompetent . Zuverlässig . Sächsisch"
      />
      <Services />
      <ProcessStack />
      <MaskRevealSection />
      <StackingCardsSection />
    </>
  );
}
