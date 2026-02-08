"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { StarButton } from "@/components/ui/star-button";

export const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full bg-white overflow-hidden flex flex-col md:flex-row">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[50%] flex flex-col justify-center px-6 md:px-12 lg:px-12 z-10 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Pre-title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#333333]" />
            <span className="text-[#333333] font-medium tracking-widest text-sm uppercase">
              Meisterbetrieb aus Sachsen
            </span>
          </div>

          {/* Headline */}
          <div className="relative">
            <h1 className="text-[6vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter text-[#333333] uppercase">
              Saxo
              <br />
              Handwerk
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-md text-[#545454] text-lg md:text-xl leading-relaxed">
            Von der Planung bis zur perfekten Umsetzung. Wir schaffen bleibende
            Werte mit traditionellem Handwerk und moderner Präzision.
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
      </div>

      {/* RIGHT IMAGE SECTION with Sticky Corner Effect */}
      <div className="relative w-full md:w-[50%] h-[40vh] md:h-full bg-white">
        {/* Main Video */}
        <div className="absolute inset-0">
          <video
            src="/hero.mp4"
            poster="https://images.unsplash.com/photo-1581094794329-cd1096a78432?q=80&w=2000&auto=format&fit=crop"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-bl-[50px]"
          />
        </div>

        {/* Circular Scroll Button - Repositioned to Top Right */}
        {/* Circular Scroll Button - Repositioned to Top Right */}
        <div className="absolute bottom-35 right-5 z-30 hidden md:block">
          <Link
            href="/contact"
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
        </div>

        {/* Bottom Right Sticky Block */}
        <div className="absolute bottom-0 right-0 z-20 flex flex-col items-end">
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
                fill="#fcfcfc"
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
                  fill="#fcfcfc"
                />
              </svg>
            </div>

            {/* Text Content Block */}
            <div className="bg-[#fcfcfc] p-4 pb-4 pr-6 rounded-tl-[40px]">
              <h2 className="text-[#333] font-black text-3xl md:text-4xl leading-none uppercase text-right">
                SANIERUNG &<br />
                RENOVIERUNG
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
