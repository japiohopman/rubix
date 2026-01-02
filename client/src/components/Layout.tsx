import React, { useState } from "react";
import { Link, useRoute } from "wouter";
import { Menu, X, Linkedin } from "lucide-react";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  className,
}) => {
  const [isActive] = useRoute(href);
  const activeClassName = isActive
    ? "text-blue-600 font-semibold"
    : "text-gray-600 hover:text-blue-600";
  const mobileActiveClassName = isActive
    ? "bg-blue-50 text-blue-700"
    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600";

  return (
    <Link
      href={href}
      className={`${className} ${className?.includes("block") ? mobileActiveClassName : activeClassName}`}
    >
      {children}
    </Link>
  );
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/over-dai-artsen", label: "Over DAI Artsen" },
    { href: "/huisartsen", label: "Huisartsen" },
    { href: "/bedrijfsartsen", label: "Bedrijfsartsen" },
    { href: "/basisartsen", label: "Basisartsen" },
    { href: "/paramedici", label: "Paramedici" },
    { href: "/academy-inc", label: "Academy INC" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600"
            >
              <img src="/assets/DAI.png" alt="DAI Artsen" className="h-12" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <ActiveLink
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </ActiveLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <ActiveLink
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </ActiveLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* DAI Artsen */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              DAI Artsen
            </h3>
            <p className="text-gray-400">
              Een landelijk netwerk van artsen en paramedici met een duidelijke
              visie op het welzijn van de zorgverlener, autonomie en
              werkplezier.
            </p>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Adres: Daltonlaan 600, 3584 BK Utrecht</li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:info@dai-artsen.nl"
                  className="text-blue-400 hover:text-white transition-colors duration-200"
                >
                  info@dai-artsen.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daiartsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* Navigatie */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/over-dai-artsen"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Over DAI Artsen
                </Link>
              </li>
              <li>
                <Link
                  to="/huisartsen"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Huisartsen
                </Link>
              </li>
              <li>
                <Link
                  to="/bedrijfsartsen"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Bedrijfsartsen
                </Link>
              </li>
              <li>
                <Link
                  to="/basisartsen"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Basisartsen
                </Link>
              </li>
              <li>
                <Link
                  to="/paramedici"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Paramedici
                </Link>
              </li>
              <li>
                <Link
                  to="/academy-inc"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Academy INC
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Nieuwsbrief */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Nieuwsbrief
            </h3>
            <p className="text-gray-400 mb-4">
              Blijf op de hoogte van onze laatste ontwikkelingen.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Jouw e-mail"
                className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md transition-colors duration-200"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} DAI Artsen. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

import { PartnerLogos } from "./PartnerLogos";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default Layout;
