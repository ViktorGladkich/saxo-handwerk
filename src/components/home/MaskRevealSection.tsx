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

/* ─── Config ─────────────────────────────────────────── */
const REVEAL_TEXT =
  "WIR GLAUBEN AN PERFEKTION IM DETAIL. JEDER HANDGRIFF, JEDES MATERIAL UND JEDE ENTSCHEIDUNG SPIEGELT UNSERE LEIDENSCHAFT FÜR ERSTKLASSIGES HANDWERK WIDER.";

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
   * Phase 1 (0 → 0.5): Letter-by-letter text reveal with blur + opacity.
   * Phase 2 (0.5 → 1): Circle mask expands, image + overlay text appear.
   */

  // Phase 2: mask circle expansion
  const maskSize = useTransform(scrollYProgress, [0.5, 1], [0, 150]);
  const clipPath = useMotionTemplate`circle(${maskSize}% at 50% 50%)`;

  // Phase 2: overlay text on the image
  const overlayOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  const overlayY = useTransform(scrollYProgress, [0.75, 0.95], [40, 0]);

  // Split text into individual characters (preserve spaces)
  const chars = useMemo(() => REVEAL_TEXT.split(""), []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#111111]"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* ── Phase 1: Letter-by-letter text reveal ── */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.48, 0.52], [1, 1, 0]),
          }}
          className="absolute inset-0 z-0 flex items-center justify-center px-6 md:px-16"
        >
          <h2
            className="max-w-5xl font-black font-sans uppercase tracking-tight leading-none text-left"
            style={{
              fontSize: "clamp(28px, 5vw, 70px)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="inline-block w-full">
              {chars.map((char, i) => {
                const total = chars.length;
                const start = (i / total) * 0.48;
                const end = Math.min(((i + 1) / total) * 0.48 + 0.02, 0.48);
                return (
                  <RevealChar
                    key={i}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {char}
                  </RevealChar>
                );
              })}
            </span>
          </h2>
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
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/30" />
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

/* ─── Sub-component: single character with blur + opacity ── */
interface RevealCharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const RevealChar = ({ children, progress, range }: RevealCharProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, [8, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const mid = range[0] + (range[1] - range[0]) * 0.5;
  const color = useTransform(
    progress,
    [range[0], mid, range[1]],
    ["#333333", "#f55733", "#ffffff"],
  );

  // For spaces, render a regular space
  if (children === " ") {
    return <span>{"\u00A0"}</span>;
  }

  return (
    <motion.span
      style={{
        opacity,
        filter,
        color,
        willChange: "filter, opacity, color",
        display: "inline-block",
        transition: "color 0.3s linear",
      }}
    >
      {children}
    </motion.span>
  );
};
