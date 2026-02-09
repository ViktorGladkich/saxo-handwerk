import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Beratung & Planung",
    description:
      "Wir beginnen mit einer detaillierten Analyse Ihrer Wünsche und Bedürfnisse. Gemeinsam entwickeln wir ein Konzept, das Ihre Vision perfekt widerspiegelt und alle technischen Anforderungen erfüllt.",
  },
  {
    id: "process-2",
    title: "Konzeption & Design",
    description:
      "Unsere Experten erstellen detaillierte Pläne und Visualisierungen. Wir wählen Materialien aus und stimmen Farben und Oberflächen ab, um ein harmonisches Gesamtbild zu schaffen.",
  },
  {
    id: "process-3",
    title: "Vorbereitung",
    description:
      "Wir kümmern uns um alle notwendigen Vorbereitungen, von der Materialbestellung bis zur Terminplanung. So stellen wir sicher, dass die Umsetzung reibungslos und termingerecht erfolgt.",
  },
  {
    id: "process-4",
    title: "Umsetzung",
    description:
      "Unsere erfahrenen Handwerker setzen Ihr Projekt mit höchster Präzision um. Qualität und Sauberkeit stehen dabei an erster Stelle. Wir halten Sie über jeden Schritt auf dem Laufenden.",
  },
  {
    id: "process-5",
    title: "Abnahme & Service",
    description:
      "Nach Abschluss der Arbeiten erfolgt eine gemeinsame Abnahme. Auch danach sind wir für Sie da und kümmern uns um Wartung und Pflege, damit Sie lange Freude an Ihrem Projekt haben.",
  },
];

export const ProcessStack = () => {
  return (
    <section id="process" className="bg-white py-24 text-stone-900">
      <div className="container px-6 xl:px-12 mx-auto">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="left-0 top-0 md:sticky md:h-svh md:py-12 flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <h5 className="text-xs uppercase tracking-wide text-[#f55733] font-bold font-sans">
              Unser Prozess
            </h5>
            <h2 className="mb-6 mt-4 text-4xl font-bold font-sans tracking-tight text-[#333]">
              Planung Ihres <span className="text-[#f55733]">Bauprojekts</span>
            </h2>
            <p className="max-w-prose text-base text-[#545454] font-sans">
              Unser Weg beginnt mit einem tiefen Verständnis für Ihre Vision.
              Wir begleiten Sie von der ersten Idee bis zur fertigen Umsetzung
              mit Fachwissen, Leidenschaft und Präzision.
            </p>
          </div>
          <ContainerScroll className="min-h-[250vh] space-y-8 py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 1}
                className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="my-6 text-2xl font-bold font-sans tracking-tighter text-[#333]">
                    {phase.title}
                  </h2>
                  <h3 className="text-2xl font-bold font-sans text-[#f55733]">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>

                <p className="text-[#545454] font-sans leading-relaxed">
                  {phase.description}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};
