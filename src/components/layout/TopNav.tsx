"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "./nav-data";
import { cn } from "@/lib/utils";

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar Header */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#333] bg-[#111111]/95 px-6 py-4 backdrop-blur-md md:hidden">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/saho-logo.png"
            alt="Saxo Handwerk Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Animated Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
        >
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-[2px] bg-white block origin-center"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-[2px] bg-white block origin-center"
          />
        </button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#fcfcfc] flex flex-col md:hidden pt-24"
          >
            <div className="flex-1 overflow-y-auto flex flex-col">
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
