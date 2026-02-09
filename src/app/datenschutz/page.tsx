export default function DatenschutzPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black font-sans text-[#333] mb-8 uppercase">
          Datenschutzerklärung
        </h1>
        <div className="prose prose-lg text-gray-600 font-sans space-y-6">
          <h2 className="text-2xl font-bold text-[#333]">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-xl font-bold text-[#333]">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="text-2xl font-bold text-[#333]">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            Vercel.
          </p>

          <h2 className="text-2xl font-bold text-[#333]">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="text-xl font-bold text-[#333]">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <p className="text-sm text-gray-400 mt-12">Stand: 2024 (Muster)</p>
        </div>
      </div>
    </div>
  );
}
