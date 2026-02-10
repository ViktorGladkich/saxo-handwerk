import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-neutral-900 py-16 px-6 md:px-12 border-t border-neutral-200">
      <div className="container mx-auto">
        {/* Top Section: Logo, Contact, and Navigation */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          {/* Logo & Contact Info */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="mb-4">
              <span className="text-2xl font-black uppercase tracking-tighter">
                Saxo<span className="text-[#f55733]">Handwerk</span>
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+49123456789"
                className="flex items-center gap-3 text-neutral-600 hover:text-[#f55733] transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#f55733]/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+49 (0) 123 456 789</span>
              </a>

              <a
                href="mailto:kontakt@saxo-handwerk.de"
                className="flex items-center gap-3 text-neutral-600 hover:text-[#f55733] transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#f55733]/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>kontakt@saxo-handwerk.de</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-600 group">
                <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Musterstraße 123, 01067 Dresden</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-6 text-neutral-900 border-b border-neutral-200 pb-2 inline-block">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "Über Uns", href: "/#about" },
                { label: "Leistungen", href: "/#services" },
                { label: "Prozess", href: "/#process" },
                { label: "Team", href: "/#team" },
                { label: "FAQ", href: "/#faq" },
                { label: "Kontakt", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-neutral-600 hover:text-[#f55733] transition-colors flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#f55733] opacity-0 hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-1 w-full h-[250px] rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 shadow-sm border border-neutral-200">
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

        {/* Divider */}
        <div className="h-px bg-neutral-200 w-full mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Saxo Handwerk. Alle Rechte
            vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-neutral-900 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="hover:text-neutral-900 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
