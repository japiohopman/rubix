import React from "react";
import { Button } from "@/components/ui/button";

export default function Academy() {
  const pillars = [
    {
      title: "Gezonde Werkcultuur",
      description: "Een omgeving waar open communicatie en respect centraal staan.",
      icon: "🤝",
    },
    {
      title: "Psychologische Veiligheid",
      description: "Een klimaat waarin teamleden zich veilig voelen om ideeën te delen en fouten te maken.",
      icon: "🛡️",
    },
    {
      title: "Leiderschap & Vitaliteit",
      description: "Programma's die leiders ondersteunen in het bevorderen van welzijn en veerkracht.",
      icon: "⭐",
    },
  ];

  const courses = [
    {
      title: "Zeg NEE tegen agressie",
      description: "Leer proactief omgaan met agressie en conflicten in de praktijk, met focus op de-escalatie en persoonlijke veiligheid.",
      icon: "🚫",
    },
    {
      title: "Blije Dokter Programma",
      description: "Versterk je mentale weerbaarheid en werkplezier met concrete tools en technieken voor stressmanagement.",
      icon: "😊",
    },
    {
      title: "Leefstijlinterventies",
      description: "Begeleiding bij het implementeren van duurzame leefstijlveranderingen voor zowel zorgprofessionals als patiënten.",
      icon: "🌿",
    },
     {
      title: "Communicatieve Vaardigheden",
      description:
        "Verbeter je communicatie met patiënten, collega's en familie, essentieel voor effectieve zorgverlening.",
      icon: "💬",
    },
    {
      title: "Leiderschap in de Zorg",
      description:
        "Een programma gericht op het ontwikkelen van effectieve leiderschapsvaardigheden voor managers en teamleiders in de zorg.",
      icon: "👑",
    },
    {
      title: "Digitale Vaardigheden in Zorg",
      description:
        "Blijf up-to-date met de nieuwste digitale tools en technologieën die relevant zijn voor de zorgsector.",
      icon: "💻",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Academy INC | Duurzame Inzetbaarheid
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Samen bouwen aan een gezonde en veilige werkcultuur in de zorg. Wij versterken zorgprofessionals en organisaties met trainingen op maat.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">De Drie Pijlers voor een Gezond Werkklimaat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programma Overzicht */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ons Aanbod</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inschrijven CTA */}
      <section className="bg-green-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bekijk ons volledige aanbod op de Academy INC website en schrijf je in.
          </p>
          <a
            href="https://academyinc.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-lg"
          >
            Bezoek AcademyINC.nl
          </a>
        </div>
      </section>
    </div>
  );
}
