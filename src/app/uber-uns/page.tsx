"use client";

import { SplitHero } from "@/components/ui/SplitHero";
import { AboutSection } from "@/components/home/AboutSection";
import { TeamSection } from "@/components/home/TeamSection";

export default function AboutPage() {
  return (
    <>
      <SplitHero
        title="Über Uns"
        imageSrc="/images/about_hands_4k.png" // Use existing image
        revealedTitle="Handwerk aus Leidenschaft"
        subtitle="Seit 2010"
      />
      <AboutSection />
      <TeamSection />
    </>
  );
}
