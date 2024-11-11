"use server";

import { Box, Card, CardContent, CardMedia, Link } from "@mui/material";
import { IZibnewsPost, IZibunityPost } from "../types/IZibPost";
import zibnewsData from "../zibnews.json";
import zibunityData from "../zibunity.json";
import HighlightedCard from "@/components/HighlightedCard";

export default async function Home() {
  const latestZibnewsPosts = await fetchLatestZibnewsPosts();
  const latestZibunityPosts = await fetchLatestZibunityPosts();

  return (
    <Box className="h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Accueil</h1>

      <Box className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Colonne gauche et centrale (2/3) */}
        <Box className="lg:col-span-2 flex flex-col gap-4">
          {/* Article à la une */}
          <Box className="h-[52vh]">
            {zibnewsData.slice(0, 1).map((post) => (
              <Card key={post.id} className="h-full">
                <Link
                  href={`/zibnews/${post.slug}`}
                  underline="none"
                  className="!text-black h-full flex flex-col"
                >
                  <CardMedia image={post.image} className="w-full flex-1" />
                  <CardContent className="py-3">
                    <h1 className="text-xl font-bold line-clamp-2">
                      {post.title}
                    </h1>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>

          {/* Dernières Zibnews */}
          <Box className="h-[23vh]">
            <Box className="grid grid-cols-2 gap-4 h-full">
              {latestZibnewsPosts.slice(1, 3).map((post) => (
                <HighlightedCard
                  post={post}
                  key={post.id}
                  className="h-full !aspect-auto"
                />
              ))}
            </Box>
          </Box>
<<<<<<< HEAD
        </Box>

        {/* Colonne droite - Zibunity */}
        <Box className="lg:col-span-1 h-[76.5vh] flex flex-col gap-4">
          {latestZibunityPosts.slice(0, 4).map((post) => (
            //   <HighlightedCard
            //       post={post}
            //       key={post.id}
            //       className="flex-1 h-[28vh]"
            //   />
            <Card key={post.id} className="flex-1 h-[28vh]">
              <Link
                href={`/zibunity/${post.slug}`}
                underline="none"
                className="!text-black h-full flex flex-col"
              >
                <CardContent className="p-4">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <p className="text-sm">{post.content}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
=======
        </Container>
      </Container>
    </Container>
>>>>>>> 33f4d54 (new footer and middleware)
  );
}

async function fetchLatestZibnewsPosts(): Promise<IZibnewsPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibnewsData;
}

async function fetchLatestZibunityPosts(): Promise<IZibunityPost[]> {
  return zibunityData;
}
