import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CoreStaff } from "@/components/CoreStaff";

const raadVanAdvies = [
    { name: "Matthijs van der Poel", role: "Huisarts" },
    { name: "Juul Leijssen", role: "Basisarts interne geneeskunde" },
    { name: "Nienke van Bergen", role: "Huisarts" },
    { name: "Gordon Oron", role: "Huisarts" },
];

const lectoraten = [
    { name: "Annet de Lange", role: "“Succesvol oud worden op het werk” Hogeschool van Arnhem en Nijmegen" },
    { name: "Henk Rosendal", role: "“Lectoraat de Gezonde Wijk” Hogeschool Rotterdam" },
    { name: "Olaf Timmermans", role: "“Lector Healthy Region” Hogeschool Zeeland" },
]

const denktank = [
  { name: "Françoise Langens", role: "Huisarts, project de gezonde wijkaanpak" },
  { name: "Jacqui van Kemenade", role: "Kaderehuisarts diabetes, gespecialiseerd in voeding en leefstijl" },
  { name: "Derk Rietveld", role: "Orthopedisch Chirurg, Digitale innovaties in de huisartsenzorg" },
  { name: "Max Caffa", role: "Huisarts, gespecialiseerd in zorg en innovatie" },
  { name: "Harriët Verkoelen", role: "Diëtist, diabetesverpleegkundige, auteur" },
  { name: "Jolanda Schulze", role: "Praktijkondersteuner somatiek, leefstijlcoach, project het leefstijlnetwerk, DAI Leefstijlcoach" },
  { name: "Jan-Hein Wijers", role: "Bedrijfsarts, gespecialiseerd in transitie van inzicht naar feitelijke gedragsverandering" },
  { name: "Adrie Bouma", role: "Bewegingswetenschappen, proefschrift 'The barrier-belief approach'" },
  { name: "Marit Martens", role: "Bewegingsagoog, projectleider Dokter & Bewegen" },
  { name: "Maarten Stiggelbout", role: "Bewegingswetenschapper, integrale aanpak Bewegen op Recept" },
  { name: "Prem Heera", role: "Leefstijl en Arbo arts" },
];

const networkPartners = [
  { href: "https://niped.nl/", src: "/assets/svg_logo/niped.svg", alt: "Niped" },
  { href: "https://www.blueriq.com/", src: "/assets/svg_logo/blueriq.svg", alt: "Blueriq" },
  { href: "https://www.vcareconnect.nl/", src: "/assets/svg_logo/vcare.svg", alt: "Vcare" },
  { href: "https://u-prevent.nl/", src: "/assets/svg_logo/u-prevent-logo.svg", alt: "U-Prevent" },
  { href: "https://medischescholing.nl/", src: "/assets/svg_logo/flag.svg", alt: "Medische Scholing" },
  { href: "https://www.bettery.nl/", src: "/assets/svg_logo/bettery.svg", alt: "Bettery" },
  { href: "https://patientplus.nl/", src: "/assets/svg_logo/patient.svg", alt: "Patient Plus" },
  { href: "https://www.anvh.nl/", src: "/assets/svg_logo/anvh_logo_xs.svg", alt: "ANVH" },
  { href: "https://www.chronischzorgnet.nl/", src: "/assets/svg_logo/chronisch-zorgnet.svg", alt: "Chronisch Zorgnet" },
  { href: "https://111.nl/", src: "/assets/svg_logo/111.svg", alt: "111.nl" },
  { href: "https://www.kenniscentrumsportenbewegen.nl/", src: "/assets/svg_logo/kennis_centerum.svg", alt: "Kenniscentrum Sport en Bewegen" },
  { href: "https://www.ekomenu.nl/", src: "/assets/svg_logo/ekomenu-logo-rgb.svg", alt: "Ekomenu" },
  { href: "https://www.saxion.nl/", src: "/assets/svg_logo/saxion.svg", alt: "Saxion" },
  { href: "https://www.han.nl/", src: "/assets/svg_logo/han.svg", alt: "HAN" },
  { href: "https://www.inholland.nl/", src: "/assets/svg_logo/hsh.svg", alt: "Inholland" },
  { href: "https://docendoorbis.nl/", src: "/assets/svg_logo/Logo_Orbis.svg", alt: "Docendo Orbis" },
  { href: "https://ancora.health/", src: "/assets/svg_logo/ancora.svg", alt: "Ancora Health" },
];

const TeamMemberCard = ({ name, role }: { name: string; role: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default function OverDAIArtsen() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Over DAI Artsen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DAI Artsen is een landelijk netwerk van artsen en paramedici. Onze visie draait om het welzijn van de zorgverlener, autonomie en werkplezier – zowel in de spreekkamer van de huisarts als binnen de bedrijfsgezondheidszorg.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Visie</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Wij geloven dat goede zorg begint bij goed voor jezelf zorgen. Alleen dan kun je duurzame, kwalitatieve zorg leveren. Voor huisartsen betekent dit met energie en aandacht werken in de spreekkamer. Voor bedrijfsartsen betekent dit autonomie en zeggenschap binnen organisaties, als basis voor het bevorderen van een gezond werkklimaat.
            </p>
        </div>
      </section>
      
      <CoreStaff />

      {/* Raad van Advies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Raad van Advies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {raadVanAdvies.map(member => <TeamMemberCard key={member.name} {...member} />)}
          </div>
        </div>
      </section>

      {/* Lectoraten Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Lectoraten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lectoraten.map(member => <TeamMemberCard key={member.name} {...member} />)}
          </div>
        </div>
      </section>

      {/* Denktank Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Denktank & Adviesraad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {denktank.map(member => <TeamMemberCard key={member.name} {...member} />)}
          </div>
        </div>
      </section>

      {/* Netwerkpartners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Onze Netwerkpartners</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {networkPartners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 max-w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

