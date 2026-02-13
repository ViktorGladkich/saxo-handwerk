"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const features = [
  {
    title: "Leidenschaft",
    description:
      "Jedes Projekt ist ein Meisterwerk. Wir legen Herzblut in jeden Handgriff, um Ergebnisse zu schaffen, die begeistern.",
    src: "/images/services_interior_fitting_v2.png",
    color: "#BBACAF",
  },
  {
    title: "Präzision",
    description:
      "Kein Detail ist zu klein. Unsere Arbeit zeichnet sich durch chirurgische Genauigkeit und höchste Standards aus.",
    src: "/images/services_flooring_tiling.png",
    color: "#977F6D",
  },
  {
    title: "Innovation",
    description:
      "Tradition trifft Moderne. Wir nutzen neueste Techniken und Materialien für nachhaltige und zukunftssichere Lösungen.",
    src: "/images/services_bathroom_sanitary.png",
    color: "#C2491D",
  },
  {
    title: "Verlässlichkeit",
    description:
      "Ein Wort, ein Handschlag. Wir stehen zu unseren Terminen und Versprechen – ohne Wenn und Aber.",
    src: "/images/services_complete_renovation.png",
    color: "#B62429",
  },
];

export const StackingCardsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative mt-[50vh] mb-[50vh] bg-[#fcfcfc]">
      {/* Sticky Header overlay (optional but nice) */}
      <div className="sticky top-[10vh] flex justify-center mb-[-20vh] z-0 pointer-events-none">
        <h2 className="text-[#eee] text-[15vw] leading-none font-black uppercase text-center opacity-50 select-none">
          WERTE
        </h2>
      </div>

      {features.map((project, i) => {
        const targetScale = 1 - (features.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="flex flex-col relative -top-[25%] h-[500px] w-[90vw] md:w-[1000px] rounded-3xl p-12 origin-top border border-neutral-200 bg-white shadow-2xl overflow-hidden"
      >
        <div className="flex h-full flex-col md:flex-row gap-12">
          {/* Text Content */}
          <div className="w-full md:w-[40%] flex flex-col justify-between relative z-10 h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-[#111] mb-6 drop-shadow-sm leading-[0.9]">
                {title}
              </h2>
              <p className="text-lg text-[#555] font-sans leading-relaxed">
                {description}
              </p>
            </div>

            <span className="hidden md:block text-9xl font-black text-[#f55733]/10 absolute bottom-[-40px] left-[-20px] select-none pointer-events-none z-[-1]">
              0{i + 1}
            </span>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-[60%] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-inner">
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full relative"
            >
              <Image fill src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
