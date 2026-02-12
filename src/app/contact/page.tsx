"use client";

import { SplitHero } from "@/components/ui/SplitHero";
import { ContactSection } from "@/components/home/ContactSection";
import { FAQSection } from "@/components/home/FAQ";

export default function ContactPage() {
  return (
    <>
      <SplitHero
        title="Kontakt"
        imageSrc="/images/hero-kontakt.png"
        revealedTitle="Wir sind für Sie da"
        subtitle="Beratung . Planung . Umsetzung"
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
