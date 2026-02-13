"use client";

import React from "react";
import { Hero, FeaturedProjects, ImageCarousel, SideBySide, ProjectsGrid, ToggleList } from "@/components";
import { Block } from "@/lib/getPageData";

interface BlockRendererProps {
  blocks: Block[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return <Hero key={index} {...block.data} />;

          case "featured-projects":
            return <FeaturedProjects key={index} {...block.data} />;

          case "image-carousel":
            return <ImageCarousel key={index} {...block.data} />;

          case "side-by-side":
            return <SideBySide key={index} {...block.data} />;

          case "projects-grid":
            return <ProjectsGrid key={index} {...block.data} />;

          case "toggle-list":
            return <ToggleList key={index} {...block.data} />;

          default:
            // Exhaustiveness check - should never reach here if all cases are handled
            const _exhaustiveCheck: never = block;
            console.warn(`Unknown block type:`, _exhaustiveCheck);
            return null;
        }
      })}
    </>
  );
};
