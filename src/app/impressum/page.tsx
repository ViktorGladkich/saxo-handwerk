export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black font-sans text-[#333] mb-8 uppercase">
          Impressum
        </h1>
        <div className="prose prose-lg text-gray-600 font-sans">
          <p>Angaben gemäß § 5 TMG</p>

          <h3 className="text-[#333] font-bold mt-8">Vantura Handwerk</h3>
          <p>
            Musterstraße 123
            <br />
            01234 Dresden
          </p>

          <h3 className="text-[#333] font-bold mt-8">Vertreten durch:</h3>
          <p>Max Mustermann</p>

          <h3 className="text-[#333] font-bold mt-8">Kontakt:</h3>
          <p>
            Telefon: +49 (0) 123 445566
            <br />
            E-Mail: info@vantura-handwerk.de
          </p>

          <h3 className="text-[#333] font-bold mt-8">Umsatzsteuer-ID:</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
}
