import React from 'react';
import { SubPageLayout, SubPageMenuLink } from "@/components/SubPageLayout";
import { Route, Switch, Redirect } from "wouter";
import OverDAIBedrijfsartsen from "./bedrijfsartsen/OverDAIBedrijfsartsen";
import VoorOrganisaties from "./bedrijfsartsen/VoorOrganisaties";
import VoorBedrijfsartsen from "./bedrijfsartsen/VoorBedrijfsartsen";
import TrainingEnAcademie from "./bedrijfsartsen/TrainingEnAcademie";
import ProjectenEnSamenwerkingen from "./bedrijfsartsen/ProjectenEnSamenwerkingen";
import Contact from './Contact';

const bedrijfsartsenMenu: SubPageMenuLink[] = [
  { href: "/over", label: "Over DAI Bedrijfsartsen" },
  { href: "/voor-organisaties", label: "Voor Organisaties" },
  { href: "/voor-bedrijfsartsen", label: "Voor Bedrijfsartsen" },
  { href: "/training-en-academie", label: "Training & Academie" },
  { href: "/projecten-en-samenwerkingen", label: "Projecten & Samenwerkingen" },
  { href: "/contact", label: "Contact" },
];

export default function Bedrijfsartsen() {
  const basePath = "/bedrijfsartsen"; // Define basePath here for SubPageLayout

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            DAI Bedrijfsartsen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Versterken van bedrijfsgezondheid door preventie, vitaliteit en strategische samenwerking. Voor organisaties en bedrijfsartsen.
          </p>
        </div>
      </section>
      <SubPageLayout menu={bedrijfsartsenMenu} basePath={basePath}>
        <Switch>
          <Route path="/over" component={OverDAIBedrijfsartsen} />
          <Route path="/voor-organisaties" component={VoorOrganisaties} />
          <Route path="/voor-bedrijfsartsen" component={VoorBedrijfsartsen} />
          <Route path="/training-en-academie" component={TrainingEnAcademie} />
          <Route path="/projecten-en-samenwerkingen" component={ProjectenEnSamenwerkingen} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/over" />
        </Switch>
      </SubPageLayout>
    </div>
  );
}
