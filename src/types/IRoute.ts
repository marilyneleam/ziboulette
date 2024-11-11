import { Home, Newspaper, Users, Info, Heart } from "lucide-react";

export interface INavigationItem {
    name: string;
    icon: React.FC<{ className?: string }>;
    href: string;
    ariaLabel: string;
}

export const navigationItems: INavigationItem[] = [
    { name: "Accueil", icon: Home, href: "/", ariaLabel: "Accueil" },
    {
        name: "Zibnews",
        icon: Newspaper,
        href: "/zibnews",
        ariaLabel: "Consultez des nouvelles complètement improbables sur Zibnews",
    },
    {
        name: "Zibunity",
        icon: Users,
        href: "/zibunity",
        ariaLabel:
            "Découvrez de nouvelles anecdotes de la communauté sur Zibunity",
    },
    {
        name: "Favoris",
        icon: Heart,
        href: "/favoris",
        ariaLabel: "Retrouvez vos Zibutity favoris",
    },
    {
        name: "Qui sommes-nous",
        icon: Info,
        href: "/qui-sommes-nous",
        ariaLabel: "En savoir plus sur Ziboulette et son équipe",
    },
];