"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";

export const MaskRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate percentage for clipPath
  // Using useTransform for numbers, then template for string interpolation
  const size = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const clipPath = useMotionTemplate`circle(${size}% at 50% 50%)`;

  // Text effects
  const introOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.3]);
  const introY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  // Reveal Text effects
  const revealOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.4, 0.8], [50, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-[#111111]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 1. Base Layer: Text (Perfektion im Detail) */}
        <motion.div
          style={{ opacity: introOpacity, scale: introScale, y: introY }}
          className="absolute z-0 flex flex-col items-center justify-center text-center px-4 md:px-20"
        >
          <span className="text-[#f55733] font-bold font-sans tracking-[0.3em] uppercase mb-8 text-sm md:text-xl">
            Unsere Philosophie
          </span>
          <h2 className="text-white text-5xl md:text-9xl font-sans font-black uppercase tracking-tighter leading-[0.9]">
            Perfektion
            <br />
            im Detail
          </h2>
        </motion.div>

        {/* 2. Reveal Layer: Image with Mask */}
        <motion.div
          className="absolute inset-0 z-10 w-full h-full bg-white flex items-center justify-center pointer-events-none"
          style={{ clipPath }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/philosophieMaskRevealSectoin.png"
              alt="Restoration Effect"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>
        </motion.div>

        {/* 3. Text Overlay on the REVEALED Image (Fades IN) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center justify-center text-center px-4"
            style={{ opacity: revealOpacity, y: revealY }}
          >
            <span className="text-[#f55733] font-bold font-sans tracking-[0.3em] uppercase mb-6 text-sm md:text-lg">
              Wir bauen Zukunft
            </span>
            <h2 className="text-white text-6xl md:text-[10vw] font-sans font-black uppercase tracking-tighter drop-shadow-2xl leading-none">
              LEIDENSCHAFT
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
