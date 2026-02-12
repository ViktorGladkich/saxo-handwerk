"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Clock,
  HandCoins,
  Wrench,
  HeartHandshake,
} from "lucide-react";

/* ─── Data ───────────────────────────────────────────── */
const REASONS = [
  {
    icon: ShieldCheck,
    title: "Garantierte Qualität",
    description:
      "Jedes Projekt wird nach höchsten deutschen Standards ausgeführt — mit schriftlicher Gewährleistung.",
  },
  {
    icon: Clock,
    title: "Termintreue",
    description:
      "Wir halten, was wir versprechen. Feste Zeitpläne und transparente Kommunikation.",
  },
  {
    icon: HandCoins,
    title: "Faire Preise",
    description:
      "Transparente Kostenaufstellung ohne versteckte Gebühren. Sie wissen immer, was Sie bezahlen.",
  },
  {
    icon: Wrench,
    title: "Alles aus einer Hand",
    description:
      "Von Planung bis Abnahme — ein Ansprechpartner, der alle Gewerke koordiniert.",
  },
  {
    icon: Sparkles,
    title: "Sauberkeit",
    description:
      "Wir hinterlassen Ihr Zuhause so sauber, wie wir es vorgefunden haben. Versprochen.",
  },
  {
    icon: HeartHandshake,
    title: "Persönlich & Nah",
    description:
      "Kein anonymer Konzern — wir sind ein lokales Team, das Ihren Namen kennt.",
  },
];

/* ─── Tilt Card ──────────────────────────────────────── */
const TiltCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/* ─── Main Section ───────────────────────────────────── */
export const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fafafa] py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#f55733] font-bold font-sans uppercase tracking-[0.3em] text-sm">
            Warum SaxoHandwerk
          </span>
          <h2 className="text-4xl md:text-7xl font-black font-sans text-[#111] uppercase tracking-tighter mt-4 leading-[0.9]">
            6 Gründe für
            <br />
            <span className="text-[#f55733]">Vertrauen</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            const isLarge = i === 0; // First card is large and spans 2 cols on desktop

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={isLarge ? "lg:col-span-2" : ""}
              >
                <TiltCard
                  className={`rounded-3xl p-8 md:p-10 h-full border transition-all duration-300 cursor-default ${
                    isLarge
                      ? "bg-[#111] border-[#222] text-white shadow-2xl"
                      : "bg-white border-neutral-200 hover:border-[#f55733]/30 hover:shadow-xl"
                  }`}
                >
                  <div className="flex flex-col gap-6 h-full">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        isLarge
                          ? "bg-[#f55733] text-white"
                          : "bg-[#f55733]/10 text-[#f55733]"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl md:text-2xl font-black font-sans uppercase tracking-tight mb-3 ${
                          isLarge ? "text-white" : "text-[#111]"
                        }`}
                      >
                        {reason.title}
                      </h3>
                      <p
                        className={`font-sans text-base md:text-lg leading-relaxed ${
                          isLarge ? "text-white/60" : "text-[#666]"
                        }`}
                      >
                        {reason.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="flex items-center gap-3 mt-auto pt-4">
                      <div
                        className={`h-[2px] flex-1 ${
                          isLarge ? "bg-white/10" : "bg-neutral-100"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          isLarge ? "text-[#f55733]" : "text-[#f55733]/60"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
          {/* CTA Banner — inside grid, next to card 06 on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden"
          >
            <div className="relative h-[250px] md:h-full min-h-[250px]">
              <Image
                src="/images/cta_consultation.png"
                alt="SaxoHandwerk Beratung"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#111]/90 via-[#111]/60 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 md:px-12">
                <div>
                  <h3 className="text-white text-2xl md:text-4xl font-black font-sans uppercase tracking-tight leading-none mb-4">
                    Bereit für Ihr
                    <br />
                    <span className="text-[#f55733]">Projekt?</span>
                  </h3>
                  <p className="text-white/60 font-sans text-base md:text-lg max-w-md mb-6">
                    Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
                    Kostenlose Erstberatung — unverbindlich und persönlich.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#f55733] hover:bg-[#d43d1a] text-white font-bold font-sans text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-colors duration-300"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
