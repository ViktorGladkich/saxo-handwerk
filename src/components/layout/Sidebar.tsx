"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "./nav-data";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* MAIN SIDEBAR (Fixed, Always Visible) */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[80px] flex-col items-center bg-[#111111] md:flex shadow-2xl py-8 gap-8">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#fcfcfc] rounded-full flex flex-col items-center justify-center gap-[6px] cursor-pointer hover:scale-105 transition-transform shadow-lg z-50 group relative"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="flex flex-col gap-[6px] items-center justify-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-[#333333] block"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[2px] bg-[#333333] block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-[#333333] block"
            />
          </motion.div>
        </button>

        {/* Spacer / Vertical Logo Container */}
        <div className="grow flex items-center justify-center w-full">
          {/* Vertical Brand */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="transform -rotate-90 flex items-center gap-4 origin-center">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/saho-logo.png"
                  alt="Saxo Handwerk"
                  fill
                  className="object-contain" // White logo? If it's black it might be invisible on dark bg. Assuming logo is fine.
                />
              </div>
              <span className="text-[#fcfcfc] font-bold text-sm tracking-[0.25em] whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity select-none cursor-default">
                SAXO HANDWERK
              </span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-5 pb-4">
          <a
            href="#"
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#fcfcfc] group-hover:text-[#f55733] transition-colors"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            <Instagram
              size={20}
              className="text-[#fcfcfc] group-hover:text-[#f55733] transition-colors"
            />
          </a>
        </div>
      </aside>

      {/* SLIDE-OUT MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-30 md:block hidden backdrop-blur-[2px]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: -400, opacity: 0 }} // Start off-screen to the left
              animate={{ x: 80, opacity: 1 }} // 80px is sidebar width, so it sits right next to it
              exit={{ x: -400, opacity: 0 }} // Exit off-screen to the left
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 bottom-0 w-[400px] bg-[#fcfcfc] z-40 hidden md:flex flex-col shadow-2xl font-sans"
            >
              {/* Drawer Header */}
              <div className="flex items-center gap-3 px-8 py-8 border-b border-[#cfcfcf]">
                <Image
                  src="/saho-logo.png"
                  alt="Saxo Handwerk"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <span className="text-2xl font-black uppercase tracking-tighter text-[#333]">
                  Saxo<span className="text-[#f55733]">Handwerk</span>
                </span>
              </div>

              <nav className="flex-1 overflow-y-auto flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isHovered = hovered === item.label;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setHovered(item.label)}
                      onMouseLeave={() => setHovered(null)}
                      className="group relative block"
                    >
                      {/* Container for the link item */}
                      <div className="relative flex items-center justify-between px-8 py-6 border-b border-[#cfcfcf] overflow-hidden transition-colors h-24">
                        {/* Hover Background Animation - Left to Right */}
                        <motion.div
                          className="absolute inset-0 bg-[#f55733] z-0"
                          initial={{ x: "-100%" }}
                          animate={{ x: isHovered ? "0%" : "-100%" }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }} // smooth easeOutCubic-ish
                        />

                        {/* Text Label */}
                        <div className="relative z-10 flex items-center gap-4">
                          {/* Pulse Dot for CONTACT only */}
                          {(item.label === "Contact" ||
                            item.label === "Kontakt") && (
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15bf5f] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#15bf5f]"></span>
                            </div>
                          )}

                          <span
                            className={cn(
                              "text-3xl font-bold tracking-tight transition-colors duration-300",
                              isHovered ? "text-white" : "text-[#333333]",
                            )}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow Icon */}
                        <div className="relative z-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className={cn(
                              "w-8 h-8 transition-colors duration-300",
                              isHovered ? "fill-white" : "fill-[#e0e0e0]",
                            )}
                          >
                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
