"use server";

import { Box } from "@mui/material";
import React from "react";
import zibnewsData from "../../zibnews.json";
import HighlightedCard from "@/components/HighlightedCard";

const Zibnews: React.FC = () => {

  return (
      <Box className="p-8">
          <h1 className="text-3xl font-bold mb-8">Zibnews</h1>

          {/* Dernière zibnews Section */}
          <Box className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-primary mb-6">
                  Dernières actualités
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {zibnewsData.slice(0, 4).map((post) => (
                      <div
                          key={post.id}
                          className="hover:shadow-md transition-shadow duration-300"
                      >
                          <HighlightedCard post={post} />
                      </div>
                  ))}
              </div>
          </Box>
      </Box>
  );
};

export default Zibnews;
