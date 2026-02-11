"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Mouse } from "lucide-react";

interface SplitHeroProps {
  title: string;
  imageSrc: string;
  revealedTitle?: string;
  subtitle?: string;
}

export const SplitHero = ({
  title,
  imageSrc,
  revealedTitle = "",
  subtitle,
}: SplitHeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Desktop: Left moves -100%, Right moves +100%
  const leftX = useTransform(scrollYProgress, [0, 0.45], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.45], ["0%", "100%"]);

  // Mobile: Top moves -100% (Up), Bottom moves +100% (Down)
  const topY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-100%"]);
  const bottomY = useTransform(scrollYProgress, [0, 0.45], ["0%", "100%"]);

  // Cover Text (The initial big title on white)
  // Extended fade out so it stays longer
  const coverOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const coverScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const coverY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  // Revealed Content (The text on image)
  const revealedOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]); // Delayed reveal
  const revealedY = useTransform(scrollYProgress, [0.35, 0.6], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#111111]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* === LAYER 1: REVEALED IMAGE & CONTENT === */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={imageSrc}
            alt={revealedTitle || "Hero Image"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Revealed Text */}
          <motion.div
            style={{ opacity: revealedOpacity, y: revealedY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
          >
            {subtitle && (
              <span className="text-[#f55733] font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-lg">
                {subtitle}
              </span>
            )}
            <h2 className="text-white font-black text-4xl md:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tighter">
              {revealedTitle}
            </h2>
          </motion.div>
        </div>

        {/* === LAYER 2: MOVING CURTAINS === */}
        {/* Desktop: Left/Right Split */}
        <div className="hidden md:flex absolute inset-0 z-20 pointer-events-none">
          <motion.div
            style={{ x: leftX }}
            className="w-1/2 h-full bg-white relative"
          />
          <motion.div
            style={{ x: rightX }}
            className="w-1/2 h-full bg-white relative"
          />
        </div>

        {/* Mobile: Top/Bottom Split */}
        <div className="md:hidden absolute inset-0 z-20 pointer-events-none flex flex-col">
          <motion.div
            style={{ y: topY }}
            className="w-full h-1/2 bg-white relative"
          />
          <motion.div
            style={{ y: bottomY }}
            className="w-full h-1/2 bg-white relative"
          />
        </div>

        {/* === LAYER 3: COVER TITLE (Fades Out) === */}
        <motion.div
          style={{ opacity: coverOpacity, scale: coverScale, y: coverY }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          <h1 className="text-black font-black text-[12vw] uppercase leading-none tracking-tighter text-center">
            {title}
          </h1>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-12 flex flex-col items-center gap-2 text-black/60"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase">
              Bitte scrollen
            </span>
            <Mouse className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
