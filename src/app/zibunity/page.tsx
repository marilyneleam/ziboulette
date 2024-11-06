import { Metadata } from "next";
import dynamic from "next/dynamic";
import type { Card } from "../../types/card";

const ZibunityClient = dynamic(() => import("./ZibunityClient"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Zibunity - Découvrez des profils",
  description: "Swipez et trouvez des profils intéressants sur Zibunity",
};

const initialCards: Card[] = [
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
  );
}
