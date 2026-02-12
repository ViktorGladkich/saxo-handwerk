"use client";

import { SplitHero } from "@/components/ui/SplitHero";
import { AboutSection } from "@/components/home/AboutSection";
import { JourneySection } from "@/components/home/JourneySection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TeamSection } from "@/components/home/TeamSection";

export default function AboutPage() {
  return (
    <>
      <SplitHero
        title="Über Uns"
        imageSrc="/images/about_hands_4k.png"
        revealedTitle="Handwerk aus Leidenschaft"
        subtitle="QUALITÄT & VERTRAUEN"
      />
      <AboutSection />
      <JourneySection />
      <WhyUsSection />
      <TeamSection />
    </>
  );
}
