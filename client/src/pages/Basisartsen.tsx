import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const offerings = [
  {
    title: "Oriëntatie & Loopbaan",
    description: "Vind jouw pad in de medische wereld met onze begeleiding en uitgebreide netwerk.",
    icon: "🧭"
  },
  {
    title: "Mentale Weerbaarheid",
    description: "Leer omgaan met de druk en uitdagingen van het artsenvak en versterk je persoonlijke veerkracht.",
    icon: "💪"
  },
  {
    title: "Scholing & Coaching",
    description: "Persoonlijke en professionele ontwikkeling via maatwerk coaching en geaccrediteerde scholing.",
    icon: "🎓"
  }
];

export default function Basisartsen() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            DAI Basisartsen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voor ANIOS en startende artsen die zich willen oriënteren op hun loopbaan, met focus op persoonlijke ontwikkeling, veerkracht en werkplezier.
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Wat Bieden Wij?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <Card key={offering.title} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4 mx-auto w-fit-content">{offering.icon}</div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">{offering.title}</CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed pt-2">
                    {offering.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Referrals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Ontdek Meer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/huisartsen">
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>DAI Huisartsen</CardTitle>
                  <CardDescription>Verken de mogelijkheden binnen de huisartsenzorg.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/bedrijfsartsen">
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>DAI Bedrijfsartsen</CardTitle>
                  <CardDescription>Ontdek de wereld van bedrijfsgezondheidszorg.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/academy-inc">
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Academy INC</CardTitle>
                  <CardDescription>Verdiep je kennis met onze trainingen en opleidingen.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center bg-blue-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Interesse?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over jouw loopbaan.
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
