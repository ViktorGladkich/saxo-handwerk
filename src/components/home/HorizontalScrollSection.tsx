"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Präzision im Detail",
    subtitle: "Jeder Millimeter zählt",
    src: "/images/services_interior_fitting_v2.png",
  },
  {
    id: 2,
    title: "Langlebige Materialien",
    subtitle: "Qualität, die Generationen überdauert",
    src: "/images/services_flooring_tiling.png",
  },
  {
    id: 3,
    title: "Moderne Ästhetik",
    subtitle: "Zeitloses Design für Ihr Zuhause",
    src: "/images/services_bathroom_sanitary.png",
  },
  {
    id: 4,
    title: "Energieeffizienz",
    subtitle: "Nachhaltige Lösungen für die Zukunft",
    src: "/images/services_windows_doors.png",
  },
  {
    id: 5,
    title: "Meisterhandwerk",
    subtitle: "Erfahrung und Können aus Sachsen",
    src: "/images/services_complete_renovation.png",
  },
];

export const HorizontalScrollSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#111111]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Title overlay (optional) */}
        <div className="absolute top-10 left-10 z-20 md:top-20 md:left-20 pointer-events-none">
          <h2 className="text-4xl font-black uppercase text-white md:text-6xl tracking-tighter opacity-20">
            Unsere <span className="text-[#f55733]">Werte</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 pl-[5vw]">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative h-[60vh] w-[80vw] md:h-[70vh] md:w-[60vw] overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl transition-transform hover:scale-[1.02] duration-300 shrink-0"
              >
                <div className="absolute inset-0 z-0 h-full w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 flex flex-col gap-2 transition-all duration-300 group-hover:translate-y-[-10px]">
                  <h3 className="text-3xl font-bold uppercase text-white md:text-5xl tracking-tight leading-none drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-white/80 md:text-xl drop-shadow-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
