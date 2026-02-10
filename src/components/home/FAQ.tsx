"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Shared Sticky Corner Component
const StickyCorner = ({
  className,
  style,
  fill = "currentColor",
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
}) => (
  <div className={className} style={style}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
    >
      <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill={fill}></path>
    </svg>
  </div>
);

// FAQ Data
const faqs = [
  {
    question: "Welche Leistungen bietet Saxo Handwerk genau an?",
    answer:
      "Wir sind Ihr komplettanbieter für Sanierungen und Renovierungen. Unser Spektrum reicht vom Trockenbau und Innenausbau über Bodenverlegung und Fliesenarbeiten bis hin zu Fassadengestaltung und dem Einbau von Fenstern & Türen. Alles aus einer Hand.",
  },
  {
    question: "Wie erhalte ich ein Angebot für mein Projekt?",
    answer:
      "Ganz einfach: Kontaktieren Sie uns über das Formular oder rufen Sie an. Wir vereinbaren einen unverbindlichen Besichtigungstermin vor Ort, besprechen Ihre Wünsche und erstellen daraufhin ein detailliertes und transparentes Angebot.",
  },
  {
    question: "Arbeiten Sie nur in Dresden?",
    answer:
      "Unser Hauptfokus liegt auf Dresden und der umliegenden Region in Sachsen. Für größere Projekte sind wir nach Absprache auch überregional tätig. Sprechen Sie uns einfach an.",
  },
  {
    question: "Was bedeutet 'Alles aus einer Hand'?",
    answer:
      "Das bedeutet für Sie: Ein Ansprechpartner für alle Gewerke. Wir koordinieren Elektriker, Installateure, Maler und Bodenleger. Sie müssen sich nicht um die Abstimmung verschiedener Firmen kümmern – das übernehmen wir.",
  },
  {
    question: "Wie schnell können Sie mit meinem Projekt beginnen?",
    answer:
      "Der Starttermin hängt von unserer aktuellen Auslastung und dem Projektumfang ab. Kleinere Reparaturen können oft kurzfristig realisiert werden. Für Komplettsanierungen planen wir gemeinsam mit Ihnen einen realistischen Zeitrahmen.",
  },
  {
    question: "Sind Sie ein Meisterbetrieb?",
    answer:
      "Ja, wir legen größten Wert auf handwerkliche Qualität und Fachkompetenz. Unsere Arbeiten werden nach geltenden Normen und mit höchster Sorgfalt ausgeführt, um Langlebigkeit und Ihre Zufriedenheit zu garantieren.",
  },
  {
    question: "Übernehmen Sie auch Arbeiten an denkmalgeschützten Gebäuden?",
    answer:
      "Ja, wir haben Erfahrung im Umgang mit historischer Bausubstanz. Wir arbeiten eng mit den Denkmalschutzbehörden zusammen, um den Charme Ihres Gebäudes zu erhalten und gleichzeitig modernen Wohnkomfort zu ermöglichen.",
  },
  {
    question: "Bieten Sie energetische Sanierungen an?",
    answer:
      "Absolut. Wir beraten Sie gerne zu Dämmung, Fenstertausch und energieeffizienten Maßnahmen. So senken Sie nicht nur Ihre Heizkosten, sondern steigern auch den Wert Ihrer Immobilie nachhaltig.",
  },
  {
    question: "Wie lange habe ich Gewährleistung auf Ihre Arbeiten?",
    answer:
      "Wir arbeiten strikt nach VOB (Vergabe- und Vertragsordnung für Bauleistungen) bzw. BGB. Das bedeutet für Sie volle Sicherheit: In der Regel gewähren wir auf unsere Bauleistungen 5 Jahre Gewährleistung.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
      >
        <span
          className={cn(
            "text-lg md:text-xl font-medium font-sans transition-colors duration-300",
            isOpen ? "text-[#333]" : "text-gray-400 group-hover:text-[#333]",
          )}
        >
          {question}
        </span>
        <div
          className={cn(
            "relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ml-4 shrink-0",
            isOpen
              ? "border-[#333] bg-[#333] text-white rotate-45"
              : "border-gray-200 text-gray-400 group-hover:border-gray-400 group-hover:text-[#333]",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base md:text-lg text-gray-600 font-sans leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 md:py-32 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f55733] to-[#d43d1a] font-bold tracking-wider uppercase w-fit text-sm">
              Häufige Fragen
            </span>
            <h2 className="text-4xl font-sans md:text-6xl font-black text-[#333] uppercase leading-none">
              Klare Antworten auf <br />
              <span className="text-gray-400 font-sans">Ihre Fragen.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Image */}
            <div className="relative lg:sticky lg:top-24">
              <div className="relative w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden group mx-auto lg:mx-0">
                <Image
                  src="/images/about_hands_4k.png"
                  alt="FAQ Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Sticky Corner Effect - Bottom Left */}
                <div className="absolute bottom-0 left-0 z-20">
                  {/* Visual Block itself - Empty white corner */}
                  <div className="bg-white w-32 h-32 rounded-tr-[40px] flex items-center justify-center relative">
                    {/* Empty content */}
                  </div>

                  {/* Right Connector */}
                  <StickyCorner
                    className="absolute bottom-0 -right-10 w-10 h-10"
                    fill="#ffffff"
                    style={{ transform: "rotate(90deg)" }}
                  />
                  {/* Top Connector */}
                  <StickyCorner
                    className="absolute -top-10 left-0 w-10 h-10"
                    fill="#ffffff"
                    style={{ transform: "rotate(90deg)" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
