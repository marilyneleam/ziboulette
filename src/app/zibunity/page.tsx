import React from "react";
import { Metadata } from "next";
<<<<<<< HEAD
import { Box } from "@mui/material";
import HighlightedCard from "@/components/HighlightedCard";
import CategoryNavigation from "@/components/CategoryNavigation";
import zibunityData from "../../zibunity.json";
=======
import dynamic from "next/dynamic";
import type { ICard } from "../../types/ICard";

const ZibunityClient = dynamic(() => import("./ZibunityClient"), {
  ssr: false,
});
>>>>>>> 33f4d54 (new footer and middleware)

export const metadata: Metadata = {
  title: "Zibunity - Découvrez des ziboulettes",
  description: "Swipez et trouvez des ziboulettes intéressants sur Zibunity",
};

<<<<<<< HEAD
export default function ZibunityPage() {
  return (
    <>
      {/* Version Mobile */}
      <Box className="md:hidden w-full overflow-x-hidden">
        <Box className="fixed top-16 left-0 right-0 bg-white z-40 border-b">
          <Box className="p-4">
            <h1 className="text-2xl font-bold mb-4">Zibunity</h1>
            <CategoryNavigation />
          </Box>
        </Box>

        <Box className="pt-44 pb-2 px-4">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <h2 className="text-lg font-bold text-primary mb-4">
              Dernières actualités
            </h2>
            <Box className="grid grid-cols-1 gap-4">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>

          {/* Catégorie 2 Section */}
          <Box className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <h2 className="text-lg font-bold text-primary mb-4">Catégorie 2</h2>
            <div className="grid grid-cols-1 gap-4">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>

      {/* Version Tablet */}
      <Box className="hidden lg:hidden md:block ">
        <Box className="fixed top-0 left-16 right-0 z-40 bg-zib-light-gray">
          <Box className="w-[calc(100%-4rem)] mx-8 py-8">
            <h1 className="text-3xl font-bold mb-6">Zibunity</h1>
            <CategoryNavigation />
          </Box>
        </Box>

        <Box maxWidth="xl" className="pt-48 p-8">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">
              Dernières actualités
            </h2>
            <Box className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>

          {/* Catégorie 2 Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">Catégorie 2</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>

      {/* Version Desktop */}
      <Box className="hidden lg:block ">
        <Box className="fixed top-0 left-64 right-0 z-40 bg-zib-light-gray">
          <Box className="w-[calc(100%-4rem)] mx-8 py-8">
            <h1 className="text-3xl font-bold mb-6">Zibunity</h1>
            <CategoryNavigation />
          </Box>
        </Box>

        <Box maxWidth="xl" className="pt-48 p-8">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">
              Dernières actualités
            </h2>
            <Box className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>

          {/* Catégorie 2 Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">Catégorie 2</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </div>
          </Box>
          {/* Autres Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">Autres</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </>
=======
const initialCards: ICard[] = [
  {
    id: 1,
    title: "L'assistant IA, ou l'angoisse du dev",
    description:
      "Aujourd'hui, j'ai tellement utilisé d'assistants IA pour mon code que je n'ai même plus l'impression de comprendre mon propre projet, Vive l'efficacité… et l'angoisse, ZIB",
    tag: "#DevLife #Zibunity",
    imageUrl: "/boulette.jpg",
  },
  {
    id: 2,
    title: "La peur du chat ?",
    description:
      "Aujourd'hui, ma livraison express de pièces pour mon PC est bloquée, La raison ? Le livreur a peur des chiens et refuse de sonner, même si j'ai un chat, VDM",
    tag: "#TechLife #Zibunity",
    imageUrl: "/boulette.jpg",
  },
  {
    id: 3,
    title: "L'écran partagé, piège fatal",
    description:
      "Aujourd'hui, lors d'une présentation en visio, je partage mon écran, Oubliant que mon groupe de discussion est ouvert, tout le monde a vu mes potes commenter mon patron, VDM",
    tag: "#Télétravail #Zibunity",
    imageUrl: "/boulette.jpg",
  },
  {
    id: 4,
    title: "Le café bug de l'année",
    description:
      "Aujourd'hui, je passe des heures sur un bug… pour découvrir que mon café renversé a éteint mon clavier, J'ai fait semblant de déboguer en vrai, VDM",
    tag: "#VieDeDev #Zibunity",
    imageUrl: "/boulette.jpg",
  },
  {
    id: 5,
    title: "L'IA qui vieillit les crushs",
    description:
      "Aujourd'hui, en voulant impressionner mon crush avec mes skills en IA, je l'ai laissée écrire son prénom dans une app pour qu'elle devine son âge, L'algorithme l'a vieillie de 10 ans, VDM",
    tag: "#Zibunity",
    imageUrl: "/boulette.jpg",
  },
];

export default function ZibunityPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Zibunity</h1>
      <ZibunityClient initialCards={initialCards} />
    </div>
>>>>>>> 33f4d54 (new footer and middleware)
  );
}
