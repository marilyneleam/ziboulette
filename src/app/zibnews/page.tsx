"use server";

import { Box, Divider } from "@mui/material";
import React from "react";
import zibnewsData from "../../zibnews.json";
import HighlightedCard from "@/components/HighlightedCard";
import { IZibnewsPost } from "../../types/IZibPost";
import { CategoryCode, WebSite, WithContext } from "schema-dts";
import Script from "next/script";

const Zibnews: React.FC = () => {
  const jsonLdData: WithContext<CategoryCode> = {
    "@context": "https://schema.org",
    "@type": "CategoryCode",
    name: "Ziboulette",
    url: "https://www.ziboulette.fr/zibnews",
  };

  const groupedByCategory = Object.values(
    zibnewsData.reduce(
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
    <Box className="p-8">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        strategy="beforeInteractive"
      />
      <h1 className="text-3xl font-bold mb-8">Zibnews</h1>

      {/* Dernière zibnews Section */}
      <Box className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-primary mb-6">
          Dernières actualités
        </h2>
        {groupedByCategory.map((category: IZibnewsPost[], index: number) => (
          <div key={index} className="mb-4 last:mb-0">
            <Divider textAlign="left">
              <h3 className="text-lg font-bold mb-2">{category[0].category}</h3>
            </Divider>
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.map((post: IZibnewsPost) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Zibnews;
