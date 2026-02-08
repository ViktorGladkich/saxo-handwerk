"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav-data";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter, X } from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* MAIN SIDEBAR (Fixed, Always Visible) */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[80px] flex-col items-center bg-[#424242] md:flex shadow-2xl py-8 gap-8">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#fcfcfc] rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:scale-105 transition-transform shadow-lg z-50 group"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-[#333333]" />
          ) : (
            <>
              <div className="w-5 h-[2px] bg-[#333333] transition-all group-hover:w-6" />
              <div className="w-5 h-[2px] bg-[#333333] transition-all group-hover:w-4" />
            </>
          )}
        </button>

        {/* Spacer / Vertical Logo Container */}
        <div className="grow flex items-center justify-center w-full">
          {/* Vertical Brand */}
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="transform -rotate-90 text-[#fcfcfc] font-bold text-sm tracking-[0.25em] whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity select-none cursor-default">
              SAXO HANDWERK
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-5 pb-4">
          <a
            href="#"
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            <Facebook
              size={20}
              className="text-[#fcfcfc] group-hover:text-[#f55733] transition-colors"
            />
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            <Twitter
              size={20}
              className="text-[#fcfcfc] group-hover:text-[#f55733] transition-colors"
            />
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
              <nav className="flex-1 overflow-y-auto flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const isHovered = hovered === item.label;
                  const isContact = item.label === "Contact";

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setHovered(item.label)}
                      onMouseLeave={() => setHovered(null)}
                      className="group relative flex items-center px-8 h-[60px] border-b border-[#cfcfcf] overflow-hidden"
                    >
                      {/* Hover Background Animation - Left to Right */}
                      <motion.div
                        className="absolute inset-0 bg-[#f55733]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                      />

                      <div className="relative z-10 flex items-center justify-between w-full h-full">
                        {/* Label */}
                        <p
                          className={cn(
                            "text-[14px] font-medium transition-colors duration-200 tracking-wide",
                            isActive || isHovered
                              ? "text-white underline decoration-white underline-offset-4"
                              : "text-[#333333]",
                          )}
                        >
                          {item.label}
                        </p>

                        {/* Right Side Icons (Arrow or Dot) */}
                        <div className="flex items-center gap-2">
                          {/* Contact Glowing Dot */}
                          {isContact && (
                            <div className="relative flex items-center justify-center w-3 h-3 mr-2">
                              <div className="absolute w-full h-full bg-[#15bf5f] rounded-full animate-ping opacity-50" />
                              <div className="relative w-2 h-2 bg-[#15bf5f] rounded-full" />
                            </div>
                          )}

                          {/* Arrow Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className={cn(
                              "w-4 h-4 transition-colors duration-200",
                              isActive || isHovered
                                ? "fill-white text-white"
                                : "fill-[#fcfcfc] text-[#fcfcfc]",
                            )}
                            style={{
                              fill:
                                isActive || isHovered ? "#ffffff" : "#e0e0e0",
                            }}
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
