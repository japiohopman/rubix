import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const themes = [
  {
    title: "Werkdruk & Veerkracht",
    description: "Strategieën en ondersteuning om de balans te bewaren en veerkracht te vergroten in een veeleisende omgeving.",
    icon: "⚖️"
  },
  {
    title: "Agressie & Grensstelling",
    description: "Leer effectief omgaan met lastige situaties, agressie te de-escaleren en duidelijke grenzen te stellen.",
    icon: "🛡️"
  },
  {
    title: "Samenwerking in de Wijk",
    description: "Versterk de interdisciplinaire samenwerking met andere zorgprofessionals in de eerste lijn.",
    icon: "🤝"
  }
];

export default function Paramedici() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            DAI Paramedici
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voor fysiotherapeuten, POH's, praktijkondersteuners en andere paramedici in de eerste lijn. Wij ondersteunen op het gebied van werkdruk, veerkracht en samenwerking.
          </p>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Onze Thema's</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <Card key={theme.title} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4 mx-auto w-fit-content">{theme.icon}</div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">{theme.title}</CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed pt-2">
                    {theme.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Scholing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Scholing via Academy INC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Vergroot je expertise met gespecialiseerde trainingen en opleidingen, aangeboden door onze partner Academy INC.
          </p>
          <Link href="/academy-inc">
            <Button size="lg">
              Bekijk Opleidingen
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center bg-blue-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Aansluiten bij ons netwerk?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op om de mogelijkheden te bespreken en deel uit te maken van ons groeiende netwerk van zorgprofessionals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
