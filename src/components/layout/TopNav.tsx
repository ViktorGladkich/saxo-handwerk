"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav-data";
import { cn } from "@/lib/utils";

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#545454] bg-[#424242]/95 px-4 py-3 backdrop-blur-md md:hidden">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[#f55733] flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <span className="text-white font-semibold">Saxo Handwerk</span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md p-2 text-[#d4d4d4] hover:bg-[#545454] hover:text-white transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-16 border-b border-[#545454] bg-[#424242] px-4 py-4 shadow-xl"
          >
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#f55733]/10 text-[#f55733]"
                          : "text-[#d4d4d4] hover:bg-[#545454] hover:text-white",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
