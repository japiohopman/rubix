import React from 'react';
import { SubPageLayout, SubPageMenuLink } from "@/components/SubPageLayout";
import { Route, Switch, Redirect } from "wouter";
import OverDAIHuisartsen from "./huisartsen/OverDAIHuisartsen";
import TrainingEnScholing from "./huisartsen/TrainingEnScholing";
import CommunityEnNetwerk from "./huisartsen/CommunityEnNetwerk";
import ProjectenEnInnovatie from "./huisartsen/ProjectenEnInnovatie";
import Agenda from "./huisartsen/Agenda";
import Contact from './Contact';

const huisartsenMenu: SubPageMenuLink[] = [
  { href: "/over", label: "Over DAI Huisartsen" },
  { href: "/training-en-scholing", label: "Training & Scholing" },
  { href: "/community-en-netwerk", label: "Community & Netwerk" },
  { href: "/projecten-en-innovatie", label: "Projecten & Innovatie" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contact", label: "Contact" },
];

export default function Huisartsen() {
  const basePath = "/huisartsen"; // Define basePath here for SubPageLayout

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            DAI Huisartsen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ondersteuning voor praktijkhouders, waarnemers en AIOS met training, een hechte community en innovatieve projecten die het vak versterken.
          </p>
        </div>
      </section>
      <SubPageLayout menu={huisartsenMenu} basePath={basePath}>
        <Switch>
          <Route path="/over" component={OverDAIHuisartsen} />
          <Route path="/training-en-scholing" component={TrainingEnScholing} />
          <Route path="/community-en-netwerk" component={CommunityEnNetwerk} />
          <Route path="/projecten-en-innovatie" component={ProjectenEnInnovatie} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/over" />
        </Switch>
      </SubPageLayout>
    </div>
  );
}
