"use server";

import { Box, Container } from "@mui/material";
import React from "react";
import zibnewsData from "../../zibnews.json";
import HighlightedCard from "../../components/highlightedCard/HighlightedCard";

const Zibnews: React.FC = () => {
  return (
    <Container>
      <Container className="!p-0 flex flex-col md:flex-row md:gap-4">
        <Container className="!p-0 md:flex md:flex-[2_2_0%] md:flex-col">
          <Box>
            <h2 className="text-xl md:text-2xl text-center mt-4">
              Dernières Zibnews
            </h2>
            <Box className="flex gap-4 flex-col mt-4">
              {zibnewsData.slice(0, 1000).map((post) => (
                <HighlightedCard post={post} key={post.id} />
              ))}
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Zibnews;
