// next-seo.config.ts

import type { NextSeoProps } from "next-seo";

const config: NextSeoProps = {
    defaultTitle: "Ziboulette - L'actualité ludique et accessible",
    titleTemplate: "%s | Ziboulette",
    description:
        "",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://ziboulette.com",
        siteName: "Ziboulette",
		title: "Ziboulette, l'actualité qui déboule de façon ludique et accessible quotidiennement tout en partageant vos pires boulettes ZIB (Ziboulettes Incroyablement Bizarres)",
		description: "",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "",
            },
        ],
    },
    twitter: {
        handle: "@ziboulette",
        site: "@ziboulette",
        cardType: "summary_large_image",
    },
    additionalMetaTags: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            name: "keywords",
            content:
                "Ziboulette, actu ludique, articles divertissants, nouvelles décalées, boulettes amusantes, ZIB, Ziboulettes Incroyablement Bizarres, partage de boulettes, VDM",
        },
    ],
    additionalLinkTags: [
        {
            rel: "",
            href: "",
        },
    ],
};

export default config;
