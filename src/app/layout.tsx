import type { Metadata } from "next";
import { Nunito } from "next/font/google"; // Correct import for Next.js 14+ / creating app
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saxo Handwerk - Professional Renovation & Construction in Saxony",
  description:
    "Expert door and window replacement, bathroom renovation, flooring, interior fit-out, and more in Saxony. Quality craftsmanship from a single source.",
};

import { SmoothScrolling } from "@/components/ui/smooth-scrolling";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${nunito.variable} antialiased bg-white text-gray-900`}>
        <SmoothScrolling>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar for Desktop */}
            <Sidebar />

            {/* TopNav for Mobile */}
            <TopNav />

            {/* Main Content Area Wrapper */}
            <div className="flex flex-1 flex-col md:ml-20 mt-0! md:mt-0! transition-all duration-300 min-h-screen relative">
              <main className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
