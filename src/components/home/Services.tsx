"use client";

import { motion } from "framer-motion";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const serviceItems: iCardItem[] = [
  {
    title: "Komplettsanierung",
    description:
      "Aus Alt mach Neu – wir revitalisieren Ihre Immobilie von Grund auf.",
    tag: "sanierung",
    src: "/images/services_complete_renovation.png",
    link: "/services/sanierung",
    color: "#f55733",
    textColor: "white",
  },
  {
    title: "Innenausbau",
    description:
      "Individuelle Raumkonzepte und Trockenbau für modernes Wohnen.",
    tag: "innenausbau",
    src: "/images/services_interior_fitting_v2.png",
    link: "/services/innenausbau",
    color: "#424242",
    textColor: "white",
  },
  {
    title: "Bäder & Sanitär",
    description:
      "Ihr Traumbad aus einer Hand – von der Planung bis zur Installation.",
    tag: "baeder",
    src: "/images/services_bathroom_sanitary.png",
    link: "/services/baeder",
    color: "#f55733",
    textColor: "white",
  },
  {
    title: "Boden & Fliesen",
    description: "Meisterhafte Verlegung für langlebige und stilvolle Böden.",
    tag: "boden",
    src: "/images/services_flooring_tiling.png",
    link: "/services/boden",
    color: "#424242",
    textColor: "white",
  },
  {
    title: "Fenster & Türen",
    description: "Hochwertige Bauelemente für Sicherheit und Energieeffizienz.",
    tag: "fenster",
    src: "/images/services_windows_doors.png",
    link: "/services/fenster",
    color: "#f55733",
    textColor: "white",
  },
  {
    title: "Fassaden & Putze",
    description: "Schutz und Ästhetik für Ihre Gebäudehülle.",
    tag: "fassaden",
    src: "/images/services_facades_plaster_v2.png",
    link: "/services/fassaden",
    color: "#424242",
    textColor: "white",
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-white min-h-screen relative">
      <div className="container mx-auto px-6 py-24 mb-0 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-sans md:text-5xl font-black text-[#333] mb-6 uppercase">
            Unsere <span className="text-[#f55733]">Leistungen</span>
          </h2>
          <p className="text-xl font-sans md:text-2xl text-[#545454] max-w-3xl mx-auto leading-relaxed">
            Wir bieten Ihnen ein umfassendes Spektrum an Handwerksleistungen aus
            einer Hand – von der Planung bis zur perfekten Umsetzung.
          </p>
        </motion.div>
      </div>
      <CardsParallax items={serviceItems} />
    </section>
  );
};
