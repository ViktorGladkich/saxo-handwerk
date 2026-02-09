"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Award, Hammer } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">
          {/* 1. Main Text Block (Large) - Spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 bg-[#f9f9f9] rounded-[32px] p-8 md:p-12 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-[#f55733]" />
                <span className="text-[#333] font-sans font-bold uppercase tracking-widest text-sm">
                  Über Uns
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-sans text-[#333] mb-8 leading-[0.9] uppercase">
                Tradition <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f55733] to-[#d43d1a]">
                  trifft Moderne
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-xl">
                Wir verbinden bewährtes sächsisches Handwerk mit modernsten
                Techniken. Ob Komplettsanierung oder feiner Innenausbau – wir
                stehen für Ergebnisse, die nicht nur funktionieren, sondern
                begeistern.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
              <span className="font-bold text-[#333]">Mehr erfahren</span>
              <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-[#f55733] group-hover:border-[#f55733] group-hover:text-white transition-colors duration-300">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* 2. Portrait Image (Tall) - Spans 1 col, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 relative rounded-[32px] overflow-hidden min-h-[400px]"
          >
            <Image
              src="/images/about_us_craftsman_4k.png"
              alt="Handwerksmeister"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
              <p className="text-white/80 font-sans font-medium">
                Unser Anspruch
              </p>
              <p className="text-white text-2xl font-bold font-sans">
                Perfektion bis ins Detail
              </p>
            </div>
          </motion.div>

          {/* 3. Stat Block (Square) - Spans 1 col, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-[#171717] rounded-[32px] p-8 flex flex-col justify-center items-center text-center hover:bg-[#f55733] transition-colors duration-500 group"
          >
            <span className="text-6xl md:text-8xl font-black font-sans text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              10+
            </span>
            <span className="text-gray-400 font-sans font-bold uppercase tracking-widest group-hover:text-white/90">
              Jahre Erfahrung
            </span>
          </motion.div>

          {/* 4. Service Feature: Alles aus einer Hand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-[#f9f9f9] rounded-[32px] p-8 flex flex-col justify-center gap-4 group hover:bg-[#eaeaea] transition-colors duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#f55733]">
              <Hammer className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-sans text-[#333] mb-1">
                Alles aus einer Hand
              </h3>
              <p className="text-sm text-gray-500 font-sans">
                Wir koordinieren alle Gewerke für Sie.
              </p>
            </div>
          </motion.div>

          {/* 5. Quality Feature: Meisterbetrieb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 md:col-start-3 md:row-span-1 bg-[#f55733] rounded-[32px] p-8 flex flex-col justify-center gap-4 group hover:bg-[#d43d1a] transition-colors duration-300"
          >
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-sans text-white mb-1">
                Meisterbetrieb
              </h3>
              <p className="text-sm text-white/80 font-sans">
                Qualität nach deutschen Standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
