import { arvo } from "../../public/fonts/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
// import { headers } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // // Récupérer le pathname côté serveur
  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path") || "/";

  return (
    <html lang="fr">
      <DefaultSeo {...SEO} />
      <body className={`${arvo.className}`}>
        <AppRouterCacheProvider>
          <Navigation />
          <main className="lg:pl-64 md:pl-16 pb-16 md:pb-0">{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
