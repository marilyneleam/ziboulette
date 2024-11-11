import React from "react";
import Link from "next/link";
import { navigationItems } from "../types/IRoute";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 lg:pl-64 md:pl-16 pb-16 md:pb-0">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informations de l'entreprise */}
          <div>
            <h2 className="text-xl mb-4">À propos de nous</h2>
            <address className="not-italic">
              <p>Ziboulette</p>
              <p>28 Pl. de la Bourse</p>
              <p>75002 Paris, France</p>
              <p>Tél: +33 1 23 45 67 89</p>
            </address>
          </div>

          {/* Navigation principale */}
          <div>
            <h2 className="text-xl mb-4">Navigation</h2>
            <nav>
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Liens légaux */}
          <div>
            <h2 className="text-xl mb-4">Informations légales</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="/mentions-legales" className="hover:text-white">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/cgv" className="hover:text-white">
                    CGV
                  </a>
                </li>
                <li>
                  <a href="/plan-du-site" className="hover:text-white">
                    Plan du site
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright et microdonnées */}
        <div className="mt-8 py-4 border-t border-gray-700 text-center">
          <p itemScope itemType="http://schema.org/Organization">
            <span>© {new Date().getFullYear()} </span>
            <span itemProp="name">Ziboulette</span>
            <span> - Tous droits réservés</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
