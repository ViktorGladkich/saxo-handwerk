"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
  };

  return (
    <section
      id="contact"
      className="relative bg-[#111111] py-24 md:py-32 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#f55733] opacity-[0.08] blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-600 opacity-[0.05] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT COLUMN: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between gap-12"
          >
            <div>
              <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[#f55733] uppercase">
                Kontakt
              </span>
              <h2 className="mb-6 font-sans text-5xl font-black leading-[1.1] text-white md:text-7xl">
                Lassen Sie uns <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f55733] to-[#d43d1a]">
                  gemeinsam bauen.
                </span>
              </h2>
              <p className="max-w-md font-sans text-lg text-gray-400">
                Sie haben die Vision, wir das Handwerk. Schreiben Sie uns für
                eine unverbindliche Beratung zu Ihrem Bauvorhaben.
              </p>
            </div>

            {/* Contact Details Blocks */}
            <div className="mt-12 space-y-5 md:mt-0">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#f55733]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-lg font-bold text-white">
                    Telefon
                  </h4>
                  <p className="font-sans text-gray-400">+49 (0) 123 456 789</p>
                  <p className="text-sm text-gray-500">
                    Mo-Fr, 08:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#f55733]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-lg font-bold text-white">
                    E-Mail
                  </h4>
                  <p className="font-sans text-gray-400">
                    kontakt@vantura-handwerk.de
                  </p>
                  <p className="text-sm text-gray-500">
                    Wir antworten in der Regel innerhalb von 24h.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Row */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative z-0 w-full">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formState.firstname}
                    onChange={handleChange}
                    className="peer block w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#f55733] focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute top-3 -z-10 origin-left -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f55733]"
                  >
                    Vorname
                  </label>
                </div>
                <div className="group relative z-0 w-full">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formState.lastname}
                    onChange={handleChange}
                    className="peer block w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#f55733] focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute top-3 -z-10 origin-left -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f55733]"
                  >
                    Nachname
                  </label>
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative z-0 w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="peer block w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#f55733] focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-3 -z-10 origin-left -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f55733]"
                  >
                    E-Mail Adresse
                  </label>
                </div>
                <div className="group relative z-0 w-full">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="peer block w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#f55733] focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-3 -z-10 origin-left -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f55733]"
                  >
                    Telefon (Optional)
                  </label>
                </div>
              </div>

              <div className="group relative z-0 w-full">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent py-2.5 px-0 text-lg text-white focus:border-[#f55733] focus:outline-none focus:ring-0 resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-left -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f55733]"
                >
                  Ihre Nachricht
                </label>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <button
                  type="submit"
                  className="group relative cursor-pointer inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#f55733] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#d43d1a] hover:pr-10 hover:shadow-lg hover:shadow-[#f55733]/40"
                >
                  <span>Nachricht senden</span>
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
