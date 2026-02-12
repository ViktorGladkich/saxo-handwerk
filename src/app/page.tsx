import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ProcessStack } from "@/components/home/ProcessStack";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQ";
import { TeamSection } from "@/components/home/TeamSection";
import { ContactSection } from "@/components/home/ContactSection";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-0">
      <Hero />
      <AboutSection />
      <Services />
      <ProcessStack />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
