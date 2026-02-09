"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { StarButton } from "@/components/ui/star-button";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation values
  const leftX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"]);
  const rightWidth = useTransform(scrollYProgress, [0, 0.4], ["50%", "100%"]);
  const floatX = useTransform(scrollYProgress, [0, 0.3], ["0%", "200%"]); // Elements fly right

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-[95vh] w-full overflow-hidden flex flex-col md:flex-row ">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ x: leftX }}
          className="w-full md:w-[50%] flex flex-col justify-center px-6 md:px-12 lg:px-12 z-10 pt-20 md:pt-0 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Pre-title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#333333]" />
              <span className="text-black font-medium  tracking-widest text-sm uppercase">
                Meisterbetrieb aus Sachsen
              </span>
            </div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-[6vw] font-sans md:text-[6vw] font-black leading-[0.85] tracking-tighter text-black uppercase">
                Saxo
                <br />
                <span className="text-[#f55733]">Handwerk</span>
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-md text-[#545454] font-sans text-lg md:text-xl leading-relaxed">
              Von der Planung bis zur perfekten Umsetzung. Wir schaffen
              bleibende Werte mit traditionellem Handwerk und moderner
              Präzision.
            </p>

            {/* Contact Button */}
            <div className="pt-4">
              <Link href="/contact">
                <StarButton
                  lightColor="#f55733"
                  backgroundColor="black"
                  className="rounded-full shadow-lg h-14 px-8 text-base bg-black hover:bg-black/90 text-white"
                >
                  Kontakt aufnehmen
                </StarButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          style={{ width: rightWidth }} // expand width
          className="hidden md:block h-full bg-white absolute right-0 top-0 z-0"
        >
          {/* Main Video */}
          <div className="absolute inset-0">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-bl-[50px]"
            />
          </div>

          {/* Circular Scroll Button - Repositioned to Top Right */}
          <motion.div
            style={{ x: floatX }}
            className="absolute bottom-36 right-10 z-30"
          >
            <Link
              href="#services"
              className="group relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white/60 backdrop-blur-[5px] transition-colors duration-300 hover:bg-[#f55733]"
            >
              {/* Rotating Text Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 h-full w-full"
              >
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <path
                    id="textCurve"
                    d="M 12 50 A 38 38 0 1 1 88 50 A 38 38 0 1 1 12 50"
                    fill="none"
                  />
                  <text className="fill-[#333] text-[10.5px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 group-hover:fill-white">
                    <textPath href="#textCurve" startOffset="0%">
                      KONTAKT AUFNEHMEN • PROJEKT STARTEN •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Center Orange Button */}
              <div className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#f55733] text-white shadow-lg transition-colors duration-300 group-hover:bg-white group-hover:text-[#f55733]">
                <ArrowDown className="h-8 w-8" />
              </div>
            </Link>
          </motion.div>

          {/* Bottom Right Sticky Block */}
          <motion.div
            style={{ x: floatX }}
            className="absolute bottom-0 right-0 z-20 flex flex-col items-end"
          >
            {/* Top Curve Connector */}
            <div className="w-10 h-10 relative">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 40 40"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <div className="flex items-end">
              {/* Left Curve Connector */}
              <div className="w-10 h-10 relative">
                <svg
                  className="absolute bottom-0 left-0 w-full h-full"
                  viewBox="0 0 40 40"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>

              {/* Text Content Block */}
              <div className="bg-[#ffffff] p-4 pb-4 pr-6 rounded-tl-[40px]">
                <h2 className="text-black font-black font-sans text-3xl md:text-4xl leading-none uppercase text-right">
                  SANIERUNG &<br />
                  RENOVIERUNG
                </h2>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* MOBILE LAYOUT WRAPPER (fallback for mobile simple view) */}
        <div className="md:hidden w-full h-[40vh] relative">
          <div className="absolute inset-0">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
