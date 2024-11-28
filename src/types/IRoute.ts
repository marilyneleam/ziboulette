import { Home, Newspaper, Users, Info } from "lucide-react";

export interface INavigationItem {
    name: string;
    icon: React.FC<{ className?: string }>;
    href: string;
    ariaLabel: string;
}

export interface IFooterItem {
    name: string;
    menu: { text: string; href: string }[];
}

export const navigationItems: INavigationItem[] = [
    { name: "Accueil", icon: Home, href: "/", ariaLabel: "Accueil" },
    {
        name: "Zibnews",
        icon: Newspaper,
        href: "/zibnews",
        ariaLabel:
            "Consultez des nouvelles complètement improbables sur Zibnews",
    },
    {
        name: "Zibunity",
        icon: Users,
        href: "/zibunity",
        ariaLabel:
            "Découvrez de nouvelles anecdotes de la communauté sur Zibunity",
    },
    {
        name: "A propos",
        icon: Info,
        href: "/a-propos",
        ariaLabel: "En savoir plus sur Ziboulette et son équipe",
    },
];

export const footerItems: IFooterItem[] = [
    {
        name: "Ziboulette",
        menu: [
            { text: "28 place de la Bourse<br>75002 Paris", href: "/contact" },
            { text: "01 23 45 67 89", href: "tel:0123456789" },
        ],
    },
	{
		name: "Navigation",
		menu: [
			{ text: "Accueil", href: "/" },
			{ text: "Zibnews", href: "/zibnews" },
			{ text: "Zibunity", href: "/zibunity" },
			{ text: "Qui sommes-nous", href: "/qui-sommes-nous" },
		],
	},
    {
        name: "Liens utiles",
        menu: [
            { text: "Plan du site", href: "/plan-site" },
            { text: "FAQ", href: "/faq" },
            { text: "Retour en haut de page", href: "#top" },
            { text: "Sections principales", href: "/sections" },
        ],
    },
    {
        name: "Informations légales",
        menu: [
            { text: "Mentions légales", href: "/mentions-legales" },
            { text: "Politique de confidentialité", href: "/confidentialite" },
            { text: "CGU", href: "/cgu" },
            { text: "Politique des cookies", href: "/cookies" },
            { text: "Copyright et droit d'auteur", href: "/copyright" },
        ],
    },
];
