import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function GezamenlijkeHome() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-no-repeat bg-center relative pt-24 pb-32 text-white"
        style={{
          backgroundImage:
            "url('/assets/hero1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for better text readability */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welkom bij DAI Artsen
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Een landelijk netwerk van artsen en paramedici met een duidelijke visie op het welzijn van de zorgverlener, autonomie en werkplezier.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Ontdek ons netwerk
            <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Goede zorg begint bij een gezonde zorgprofessional.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DAI Artsen is een landelijk netwerk van artsen en paramedici. Onze visie draait om het welzijn van de zorgverlener, autonomie en werkplezier – zowel in de spreekkamer van de huisarts als binnen de bedrijfsgezondheidszorg.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wij geloven dat goede zorg begint bij goed voor jezelf zorgen. Alleen dan kun je duurzame, kwalitatieve zorg leveren. Voor huisartsen betekent dit met energie en aandacht werken in de spreekkamer. Voor bedrijfsartsen betekent dit autonomie en zeggenschap binnen organisaties, als basis voor het bevorderen van een gezond werkklimaat.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1024x683"
              alt="Mission Image"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Onze Segmenten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                DAI Huisartsen
              </h3>
              <p className="text-gray-600">
                Ondersteuning voor praktijkhouders, waarnemers en AIOS met training, community en projecten.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                DAI Bedrijfsartsen
              </h3>
              <p className="text-gray-600">
                Versterken van bedrijfsgezondheid door preventie, vitaliteit en strategische samenwerking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                DAI Basisartsen
              </h3>
              <p className="text-gray-600">
                Oriëntatie, loopbaanontwikkeling en coaching voor startende artsen.
              </p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                DAI Paramedici
              </h3>
              <p className="text-gray-600">
                Ondersteuning op thema's als werkdruk, veerkracht en samenwerking in de wijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Onze kernwaarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Betrokkenheid
              </h3>
              <p className="text-gray-600">
                Wij zijn nauw betrokken bij onze klanten en hun doelen. We
                luisteren, denken mee en leveren oplossingen die echt impact
                hebben.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Deskundigheid
              </h3>
              <p className="text-gray-600">
                Met een team van ervaren professionals bieden we hoogwaardige
                kennis en expertise op het gebied van duurzame inzetbaarheid in
                de zorg.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Resultaatgericht
              </h3>
              <p className="text-gray-600">
                Wij streven altijd naar concrete en meetbare resultaten. Onze
                aanpak is praktisch, effectief en gericht op duurzame
                verbeteringen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
