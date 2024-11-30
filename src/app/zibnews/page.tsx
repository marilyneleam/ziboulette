import { Box, Container, Divider } from "@mui/material";
import React from "react";
import zibnewsData from "../../zibnews.json";
import { IZibnewsPost } from "@/types/IZibPost";
import { CategoryCode, WithContext } from "schema-dts";
import HighlightedCard from "../../components/HighlightedCard";
import Script from "next/script";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zibnews - Découvrez les dernières actualités sur Ziboulette",
    description: "Découvrez les dernières actualités sur Ziboulette",
  };
}
const Zibnews: React.FC = () => {
  const transformedData: IZibnewsPost[] = zibnewsData.map((post) => ({
    ...post,
    postType: "zibnews",
  }));
  const jsonLdData: WithContext<CategoryCode> = {
    "@context": "https://schema.org",
    "@type": "CategoryCode",
    name: "Ziboulette",
    url: "https://www.ziboulette.fr/zibnews",
  };
  const groupedByCategory = Object.values(
    transformedData.reduce(
      (acc: { [key: string]: IZibnewsPost[] }, item: IZibnewsPost) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
      {}
    )
  );

  return (
    <Container>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        strategy="beforeInteractive"
      />
      {/* Dernière zibnews Section */}
      <Box className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-xl font-bold text-primary mb-6">
          Dernières actualités
        </h1>
        {groupedByCategory.map((category: IZibnewsPost[], index: number) => (
          <div key={index} className="mb-4 last:mb-0">
            <Divider textAlign="left">
              <h2 className="text-lg font-bold mb-2">{category[0].category}</h2>
            </Divider>
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.map((post: IZibnewsPost) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default Zibnews;
