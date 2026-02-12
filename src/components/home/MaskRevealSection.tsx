"use client";

import { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─── Config ─────────────────────────────────────────── */
const REVEAL_TEXT =
  "Wir glauben an Perfektion im Detail. Jeder Handgriff, jedes Material und jede Entscheidung spiegelt unsere Leidenschaft für erstklassiges Handwerk wider.";

const REVEALED_TITLE = "LEIDENSCHAFT";
const REVEALED_SUBTITLE = "Wir bauen Zukunft";
const IMAGE_SRC = "/images/philosophieMaskRevealSectoin.png";

/* ─── Main Component ─────────────────────────────────── */
export const MaskRevealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Phase 1 (0 → 0.5): Text reveal — words light up one by one.
   * Phase 2 (0.5 → 1): Circle mask expands, image + overlay text appear.
   */

  // Phase 2: mask circle expansion (0 at 50%, 150% at 100%)
  const maskSize = useTransform(scrollYProgress, [0.5, 1], [0, 150]);
  const clipPath = useMotionTemplate`circle(${maskSize}% at 50% 50%)`;

  // Phase 2: overlay text on the image
  const overlayOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  const overlayY = useTransform(scrollYProgress, [0.75, 0.95], [40, 0]);

  // Build words array once
  const words = useMemo(() => REVEAL_TEXT.split(" "), []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#111111]"
      style={{ height: "500vh" }} // enough scroll room for both phases
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* ── Phase 1: Word-by-word text reveal ── */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.48, 0.52], [1, 1, 0]),
          }}
          className="absolute inset-0 z-0 flex items-center justify-center px-6 md:px-16"
        >
          <p className="flex flex-wrap justify-center max-w-4xl text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans text-white/15 leading-relaxed">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.5;
              const end = ((i + 1) / words.length) * 0.5;
              return (
                <RevealWord
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </RevealWord>
              );
            })}
          </p>
        </motion.div>

        {/* ── Phase 2: Circular mask image reveal ── */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ clipPath }}
        >
          <div className="relative w-full h-full">
            <Image
              src={IMAGE_SRC}
              alt="Philosophie"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          </div>
        </motion.div>

        {/* ── Phase 2: Text overlay on revealed image ── */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ opacity: overlayOpacity, y: overlayY }}
        >
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-[#f55733] font-bold font-sans tracking-[0.3em] uppercase mb-4 text-xs md:text-lg">
              {REVEALED_SUBTITLE}
            </span>
            <h2 className="text-white text-4xl md:text-7xl lg:text-[10vw] font-sans font-black uppercase tracking-tighter drop-shadow-2xl leading-none">
              {REVEALED_TITLE}
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Sub-component: single word ─────────────────────── */
interface RevealWordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const RevealWord = ({ children, progress, range }: RevealWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2">
      <span className="opacity-20">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
