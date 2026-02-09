import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black font-sans text-[#333] mb-8 uppercase">
          Kontakt
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-sans max-w-2xl">
          Wir freuen uns auf Ihre Anfrage. Lassen Sie uns über Ihr Projekt
          sprechen.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#f55733]/10 p-3 rounded-full text-[#f55733]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333] text-lg mb-1">Telefon</h3>
                <p className="text-gray-600 font-sans">+49 (0) 123 456 789</p>
                <p className="text-sm text-gray-400 mt-1">
                  Mo-Fr, 08:00 - 18:00 Uhr
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f55733]/10 p-3 rounded-full text-[#f55733]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333] text-lg mb-1">E-Mail</h3>
                <a
                  href="mailto:info@saxo-handwerk.de"
                  className="text-gray-600 font-sans hover:text-[#f55733] transition-colors"
                >
                  info@saxo-handwerk.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f55733]/10 p-3 rounded-full text-[#f55733]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#333] text-lg mb-1">Standort</h3>
                <p className="text-gray-600 font-sans">
                  Musterstraße 123
                  <br />
                  01234 Dresden
                  <br />
                  Sachsen
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder or Form Placeholder */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#333] mb-6">
              Schreiben Sie uns
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f55733] transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f55733] transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#f55733] transition-colors"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f55733] text-white font-bold py-3 rounded-lg hover:bg-[#d43d1a] transition-colors uppercase tracking-wide"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
