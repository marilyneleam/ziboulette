import React from "react";
import { Metadata } from "next";
import { Box } from "@mui/material";
import HighlightedCard from "@/components/HighlightedCard";
import CategoryNavigation from "@/components/CategoryNavigation";
import zibunityData from "../../zibunity.json";
import { IZibunityPost } from "../../types/IZibPost";

export const metadata: Metadata = {
  title: "Zibunity - Découvrez des ziboulettes",
  description: "Swipez et trouvez des ziboulettes intéressants sur Zibunity",
};

export default function ZibunityPage() {
  return (
    <>
      {/* Version Mobile */}
      <Box className="md:hidden w-full overflow-x-hidden">
        <Box className="fixed top-16 left-0 right-0 bg-white z-40 border-b">
          <Box className="p-4">
            <h1 className="text-2xl font-bold mb-4">Zibunity</h1>
            {/* <CategoryNavigation /> */}
          </Box>
        </Box>

        <Box className="pt-44 pb-2 px-4">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <Box className="grid grid-cols-1 gap-4">
              {zibunityData.map((post: IZibunityPost) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Version Tablet */}
      <Box className="hidden lg:hidden md:block ">
        <Box className="fixed top-0 left-16 right-0 z-40 bg-zib-light-gray">
          <Box className="w-[calc(100%-4rem)] mx-8 py-8">
            <h1 className="text-3xl font-bold mb-6">Zibunity</h1>
          </Box>
        </Box>

        <Box maxWidth="xl" className="pt-48 p-8">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <Box className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.map((post: IZibunityPost) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Version Desktop */}
      <Box className="hidden lg:block ">
        <Box className="fixed top-0 left-64 right-0 z-40 bg-zib-light-gray">
          <Box className="w-[calc(100%-4rem)] mx-8 py-8">
            <h1 className="text-3xl font-bold mb-6">Zibunity</h1>
          </Box>
        </Box>

        <Box maxWidth="xl" className="pt-48 p-8">
          {/* Dernière zibunity Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <Box className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zibunityData.map((post: IZibunityPost) => (
                <div
                  key={post.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <HighlightedCard post={post} />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
