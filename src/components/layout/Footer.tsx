import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-neutral-900 py-16 px-6 md:px-12 border-t border-neutral-200">
      <div className="container mx-auto">
        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left Column: Brand, Contact, Navigation */}
          <div className="flex flex-col gap-12">
            {/* Brand & Contact */}
            <div className="flex flex-col gap-8">
              <span className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">
                Saxo<span className="text-[#f55733]">Handwerk</span>
              </span>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+49123456789"
                  className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-[#f55733] transition-colors w-fit"
                >
                  <Phone className="h-5 w-5 text-[#f55733]" />
                  <span>+49 (0) 123 456 789</span>
                </a>

                <a
                  href="mailto:kontakt@saxo-handwerk.de"
                  className="flex items-center gap-3 text-lg font-medium text-neutral-600 hover:text-[#f55733] transition-colors w-fit"
                >
                  <Mail className="h-5 w-5 text-[#f55733]" />
                  <span>kontakt@saxo-handwerk.de</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-neutral-900">Navigation</h4>
              <nav className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Über Uns", href: "/#about" },
                  { label: "Leistungen", href: "/#services" },
                  { label: "Kontakt", href: "/#contact" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/privacy" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg text-neutral-600 hover:text-[#f55733] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: Address & Map */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#f55733]" />
                Address
              </h4>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-sm pl-7">
                Musterstraße 123, 01067 Dresden, Deutschland
              </p>
            </div>

            <div className="w-full h-[300px] rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 shadow-sm border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160534.5067215165!2d13.626297059049903!3d51.07689163013838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf29101ad6a9%3A0x421b1cb4288dc80!2sDresden!5e0!3m2!1sen!2sde!4v1716234567890!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 w-full mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Saxo Handwerk. Alle Rechte
            vorbehalten.
          </p>

          <p>
            Created by{" "}
            <a href="#" className="underline hover:text-neutral-900">
              Viktor Gladkich
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
