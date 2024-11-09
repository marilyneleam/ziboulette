import { arvo } from "../../public/fonts/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziboulette",
  description: "Ziboulette l'actualité décalé et ludique",
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
          <Navigation />
          <main className="lg:pl-64 md:pl-16 pb-16 md:pb-0">{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
