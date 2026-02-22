"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MapPin, Calendar, Users, Trophy } from "lucide-react";

/* ─── Timeline Data ─────────────────────────────────── */
const MILESTONES = [
  {
    year: "2016",
    title: "Gründung",
    description:
      "VanturaHandwerk wurde in Dresden gegründet — mit einer klaren Vision: Handwerk auf höchstem Niveau.",
    icon: MapPin,
    accent: "#f55733",
  },
  {
    year: "2018",
    title: "Erste Großprojekte",
    description:
      "Komplettsanierungen und gewerbliche Aufträge — unser Team wächst, unsere Expertise auch.",
    icon: Calendar,
    accent: "#111",
  },
  {
    year: "2021",
    title: "Teamaufbau",
    description:
      "Ein starkes Team aus Meistern und Gesellen — vereint durch Leidenschaft und Präzision.",
    icon: Users,
    accent: "#f55733",
  },
  {
    year: "2025",
    title: "Zukunft gestalten",
    description:
      "Modernste Techniken, nachhaltige Materialien und ein wachsendes Vertrauensnetzwerk in ganz Sachsen.",
    icon: Trophy,
    accent: "#111",
  },
];

const STATS = [
  { value: 200, suffix: "+", label: "Projekte" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 100, suffix: "%", label: "Kundenzufriedenheit" },
  { value: 15, suffix: "+", label: "Fachkräfte" },
];

/* ─── Animated Counter ───────────────────────────────── */
const AnimatedCounter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    motionValue.set(isInView ? value : 0);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-5xl md:text-7xl font-black font-sans text-white tabular-nums">
        {display}
        {suffix}
      </span>
      <span className="text-white/60 font-sans font-bold uppercase tracking-widest text-xs mt-2">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Timeline Card ──────────────────────────────────── */
const TimelineCard = ({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[0];
  index: number;
}) => {
  const Icon = milestone.icon;
  const isOrange = milestone.accent === "#f55733";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10"
    >
      {/* Timeline Dot & Line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
            isOrange ? "bg-[#f55733] text-white" : "bg-white text-[#111]"
          }`}
        >
          <Icon className="w-7 h-7" />
        </div>
        {/* Connector line */}
        {index < MILESTONES.length - 1 && (
          <div className="w-[2px] h-20 md:h-28 bg-white/10 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 md:pb-16 flex-1">
        <span
          className={`text-sm font-bold font-sans uppercase tracking-[0.3em] ${
            isOrange ? "text-[#f55733]" : "text-white/40"
          }`}
        >
          {milestone.year}
        </span>
        <h3 className="text-2xl md:text-4xl font-black font-sans text-white uppercase tracking-tight mt-2 mb-4 leading-none">
          {milestone.title}
        </h3>
        <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-lg">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────── */
export const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the background gradient blob
  const blobY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111111] overflow-hidden py-24 md:py-40"
    >
      {/* Animated gradient blob background */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-[#f55733]/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]) }}
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#f55733]/3 blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-[#f55733] font-bold font-sans uppercase tracking-[0.3em] text-sm">
            Unsere Geschichte
          </span>
          <h2 className="text-4xl md:text-7xl font-black font-sans text-white uppercase tracking-tighter mt-4 leading-[0.9]">
            Der Weg zu
            <br />
            <span className="text-[#f55733]">Exzellenz</span>
          </h2>
        </motion.div>

        {/* Two Column Layout: Timeline + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: Timeline (3 cols) */}
          <div className="lg:col-span-3">
            {MILESTONES.map((milestone, i) => (
              <TimelineCard
                key={milestone.year}
                milestone={milestone}
                index={i}
              />
            ))}
          </div>

          {/* Right: Stats Grid (2 cols) — sticky on desktop */}
          <div className="lg:col-span-2 lg:sticky lg:top-[20vh] lg:self-start">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {STATS.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 border-l-2 border-[#f55733] pl-6"
            >
              <p className="text-white/50 font-sans text-lg italic leading-relaxed">
                &ldquo;Wir bauen nicht nur Räume — wir schaffen Lebensqualität,
                die Generationen überdauert.&rdquo;
              </p>
              <span className="text-white/30 font-sans font-bold text-sm mt-4 block uppercase tracking-wider">
                — VanturaHandwerk Team
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
