import React from "react";

export default function QuiSommesNous() {
  return (
      <div className="p-8">
              <h1 className="text-3xl font-bold mb-8">Qui sommes-nous ?</h1>

          {/* Mission Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">
                  Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                  Chez Ziboulette, nous révolutionnons la façon de consommer
                  l&apos;actualité en la rendant accessible et divertissante.
                  Notre plateforme combine deux univers uniques :
              </p>
              <ul className="space-y-4 ml-6 text-gray-700">
                  <li className="flex items-start">
                      <span className="font-bold text-primary mr-2">
                          ZibNews :
                      </span>
                      Lactualité décryptée de manière ludique et accessible
                  </li>
                  <li className="flex items-start">
                      <span className="font-bold text-primary mr-2">
                          ZibUnity :
                      </span>
                      Un espace communautaire pour partager vos ZIB (Ziboulettes
                      Incroyablement Bizarres)
                  </li>
              </ul>
          </section>

          {/* Concept Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">
                  Le Concept Ziboulette
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                  Notre approche unique combine information et divertissement
                  pour créer une expérience engageante :
              </p>
              <ul className="space-y-3 ml-6 text-gray-700">
                  <li>
                      Des articles quotidiens qui rendent l&apos;actualité
                      accessible à tous
                  </li>
                  <li>
                      Une communauté active partageant leurs expériences sous
                      forme de ZIB
                  </li>
                  <li>
                      Un ton décalé mais respectueux pour traiter
                      l&apos;information
                  </li>
              </ul>
          </section>

          {/* Values Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-8">
                  Nos Valeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-zib-light-gray rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-primary mb-3">
                          Accessibilité
                      </h3>
                      <p className="text-gray-700">
                          L&apos;information claire et compréhensible pour tous
                      </p>
                  </div>
                  <div className="bg-zib-light-gray rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-primary mb-3">
                          Ludique
                      </h3>
                      <p className="text-gray-700">
                          Le sérieux de l&apos;info avec une touche
                          d&apos;humour
                      </p>
                  </div>
                  <div className="bg-zib-light-gray rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-primary mb-3">
                          Communauté
                      </h3>
                      <p className="text-gray-700">
                          Un espace bienveillant de partage
                      </p>
                  </div>
                  <div className="bg-zib-light-gray rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-primary mb-3">
                          Qualité
                      </h3>
                      <p className="text-gray-700">
                          Une information vérifiée et fiable
                      </p>
                  </div>
              </div>
          </section>

          {/* Team Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-8">
                  L&apos;Équipe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-zib-light-gray rounded-lg p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                          Antony Lignac
                      </h3>
                      <p className="text-lg font-semibold mb-2">
                          Co-fondateur
                      </p>
                      <p className="text-primary font-medium italic mb-4">
                          Responsable ZibNews
                      </p>
                      <p className="text-gray-700">
                          Expert en vulgarisation de l&apos;actualité, Antony
                          transforme l&apos;information complexe en contenu
                          accessible et engageant.
                      </p>
                  </div>
                  <div className="bg-zib-light-gray rounded-lg p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                          Marilyne Leam
                      </h3>
                      <p className="text-lg font-semibold mb-2">
                          Co-fondatrice
                      </p>
                      <p className="text-primary font-medium italic mb-4">
                          Responsable ZibUnity
                      </p>
                      <p className="text-gray-700">
                          Créative et passionnée par l&apos;humain, Marilyne
                          anime la communauté et veille à ce que chaque ZIB
                          trouve son public.
                      </p>
                  </div>
              </div>
          </section>

          {/* Join Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                  Rejoignez l&apos;Aventure !
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                  Que vous soyez passionné d&apos;actualités ou amateur de
                  moments insolites, Ziboulette est votre nouvelle destination
                  quotidienne. Rejoignez notre communauté grandissante et
                  partagez vos propres ZIB !
              </p>
              <a
                  href="#"
                  className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                  Découvrir Ziboulette
              </a>
          </section>
      </div>
  );
};
