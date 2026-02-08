"use client";

import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const serviceItems: iCardItem[] = [
  {
    title: "Komplettsanierung",
    description:
      "Aus Alt mach Neu – wir revitalisieren Ihre Immobilie von Grund auf.",
    tag: "sanierung",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    link: "/services/sanierung",
    color: "#f55733",
    textColor: "white",
  },
  {
    title: "Innenausbau",
    description:
      "Individuelle Raumkonzepte und Trockenbau für modernes Wohnen.",
    tag: "innenausbau",
    src: "https://images.unsplash.com/photo-1620621752939-2794be6a3313?q=80&w=2670&auto=format&fit=crop",
    link: "/services/innenausbau",
    color: "#424242",
    textColor: "white",
  },
  {
    title: "Fenster & Türen",
    description: "Hochwertige Bauelemente für Sicherheit und Energieeffizienz.",
    tag: "fenster",
    src: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=2670&auto=format&fit=crop",
    link: "/services/fenster",
    color: "#f55733",
    textColor: "white",
  },
  {
    title: "Boden & Fliesen",
    description: "Meisterhafte Verlegung für langlebige und stilvolle Böden.",
    tag: "boden",
    src: "https://images.unsplash.com/photo-1581858726768-fd8a641fecc1?q=80&w=2670&auto=format&fit=crop",
    link: "/services/boden",
    color: "#424242",
    textColor: "white",
  },
];

export const Services = () => {
  return (
    <section className="bg-white min-h-screen relative">
      <div className="container mx-auto px-6 py-24 mb-0">
        <h2 className="text-4xl md:text-5xl font-black text-[#333] mb-4 uppercase">
          Unsere <span className="text-[#f55733]">Leistungen</span>
        </h2>
        <p className="text-xl text-[#545454] max-w-2xl">
          Wir bieten Ihnen ein umfassendes Spektrum an Handwerksleistungen aus
          einer Hand.
        </p>
      </div>
      <CardsParallax items={serviceItems} />
    </section>
  );
};
