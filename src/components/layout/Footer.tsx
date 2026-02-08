import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-6 px-6 sm:flex-row lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Saxo Handwerk. Alle Rechte
          vorbehalten.
        </p>
        <div className="flex gap-x-6 text-sm font-medium">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="hover:text-white transition-colors"
          >
            Impressum
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
};
