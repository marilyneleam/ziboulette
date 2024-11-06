"use server";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
} from "@mui/material";
import { IZibnewsPost, IZibunityPost } from "../types/IZibPost";
import HighlightedCard from "../components/highlightedCard/HighlightedCard";
import zibnewsData from "../zibnews.json";

export default async function Home() {
  const latestZibnewsPosts = await fetchLatestZibnewsPosts();
  const latestZibunityPosts = await fetchLatestZibunityPosts();

  return (
    <Container>
      <Container className="!p-0 hidden lg:block">
        <Box className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl text-center mt-4 relative before:-z-10 before:absolute before:content-[''] before:w-12 before:h-12 before:rounded-full before:bg-purple-500 before:opacity-50 before:-left-5 before:-top-3">
            Bienvenue sur Ziboulette
          </h1>
          <p className="text-center mt-4">
            Découvrez les dernières Zibnews et partagez vos anecdotes sur
            Zibunity.
          </p>
        </Box>
      </Container>
      <Container className="!p-0 flex flex-col md:flex-row md:gap-4">
        <Container className="!p-0 md:flex md:flex-[2_2_0%] md:flex-col">
          <Box className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl text-center mt-4">À la une</h2>
            <Box className="flex gap-4 flex-col mt-4">
              {zibnewsData.slice(0, 1).map((post) => (
                <Card key={post.id}>
                  <Link
                    href={`/zibnews/${post.slug}`}
                    underline="none"
                    className="!text-black"
                  >
                    <CardMedia image={post.image} className="w-full h-72" />
                    <CardContent>
                      <h3 className="text-lg md:text-2xl">{post.title}</h3>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </Box>
          </Box>
          <Box>
            <h2 className="text-xl md:text-2xl text-center mt-4">
              Dernières Zibnews
            </h2>
            <Box className="flex gap-4 flex-col mt-4">
              {latestZibnewsPosts.slice(1, 3).map((post) => (
                <HighlightedCard post={post} key={post.id} />
              ))}
            </Box>
          </Box>
        </Container>

        <Container className="!p-0 md:flex-1">
          <Box>
            <h2 className="text-xl md:text-2xl text-center mt-4">
              Dernières Zibunity
            </h2>
            <Box className="flex gap-4 flex-row flex-wrap mt-4">
              {latestZibunityPosts.slice(0, 3).map((post) => (
                <HighlightedCard
                  post={post}
                  key={post.id}
                  className="flex-[40%] md:flex-[100%]"
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Container>
      <section className="newsletter">
        <h2>Rejoignez Notre Newsletter</h2>
        <p>
          Recevez des astuces et des nouveautés directement dans votre boîte
          mail.
        </p>
        <form>
          <input type="email" name="email" placeholder="Votre email" required />
          <button type="submit">sinscrire</button>
        </form>
      </section>
    </Container>
  );
}

async function fetchLatestZibnewsPosts(): Promise<IZibnewsPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibnewsData;
}

async function fetchLatestZibunityPosts(): Promise<IZibunityPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: 1,
      title: "Quand le télétravail tourne mal",
      content:
        '"Confinement oblige, je faisais une présentation importante en visioconférence. Très concentré, je ne réalisais pas que mon chat avait grimpé sur mon bureau. Il a renversé une tasse de café directement sur mon clavier… l’ordinateur a planté et j’ai dû tout recommencer. Mes collègues en parlent encore aujourd\'hui."',
      slug: "teletravail-tourne-mal",
    },
    {
      id: 2,
      title: "Un GPS trop efficace",
      content:
        '"Je suivais religieusement les instructions de mon GPS pour me rendre à un mariage. Il m\'a fait prendre un chemin étrange et je me suis retrouvé... en plein milieu d’un champ de vaches. Disons que je suis arrivé à la cérémonie en retard, et avec quelques taches de boue sur mon costume."',
      slug: "gps-trop-efficace",
    },
    {
      id: 3,
      title: "L'erreur de cuisine qui sent fort",
      content:
        "\"Je voulais impressionner ma copine avec un plat maison. J'ai suivi la recette à la lettre... sauf que j'ai confondu le sucre avec le sel. Le dessert était immangeable et elle ne cesse de me rappeler cet 'échec cuisant' dès que je mets un pied dans la cuisine.\"",
      slug: "erreur-cuisine",
    },
    // Ajoutez d'autres posts si nécessaire
  ];
}
