import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Neem contact op
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij staan klaar om uw vragen te beantwoorden.
          </p>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stuur ons een bericht
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Naam
                </label>
                <Input type="text" id="name" placeholder="Uw volledige naam" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mailadres
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="uw.email@voorbeeld.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefoonnummer (optioneel)
                </label>
                <Input type="tel" id="phone" placeholder="+31 6 12345678" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bericht
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Hoe kunnen we u helpen?"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Verstuur bericht
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contactinformatie
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  DAI Artsen
                </h3>
                <p className="text-gray-700 mt-1">
                  Reinout Koperdraat | Directeur
                </p>
                <p className="text-gray-700 mt-1">
                  Postadres: Daltonlaan 600, 3584 BK Utrecht
                </p>
                <p className="text-gray-700 mt-1">
                  E-mail:{" "}
                  <a
                    href="mailto:info@dai-artsen.nl"
                    className="text-blue-600 hover:underline"
                  >
                    info@dai-artsen.nl
                  </a>
                </p>
                <p className="text-gray-700 mt-1">
                  Web:{" "}
                  <a
                    href="https://www.dai-artsen.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.dai-artsen.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Vind ons op de kaart
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Daltonlaan+600,+3584+BK+Utrecht"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
