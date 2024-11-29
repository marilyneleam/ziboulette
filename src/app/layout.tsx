import { arvo } from "../../public/fonts/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "../styles/globals.css";
import { Metadata } from "next";
import Foot from "../components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
	metadataBase: new URL('https://ziboulette.fr'),
	title: {
		default: "Ziboulette",
		template: "%s | Ziboulette",
	},
	description: "Ziboulette, l'actualité qui déboule de façon ludique et accessible quotidiennement tout en partageant vos pires boulettes ZIB (Ziboulettes Incroyablement Bizarres)",
  keywords:
    "Ziboulette, actu ludique, articles divertissants, nouvelles décalées, boulettes amusantes, ZIB, Ziboulettes Incroyablement Bizarres, partage de boulettes, VDM",
  robots: {
    index: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ziboulette.fr/",
    siteName: "Ziboulette",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${arvo.className}`}>
        <AppRouterCacheProvider>
          <Header />
          <main className="relative z-0">{children}</main>
        </AppRouterCacheProvider>
        <Foot />
      </body>
    </html>
  );
}
