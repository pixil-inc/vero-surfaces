import React from "react";
import Image from "next/image";
import { FeaturedProjectsBlockData } from "@/types/blocks";
import { Button } from "@/components/atoms";

export const FeaturedProjects: React.FC<FeaturedProjectsBlockData> = ({ content, projects }) => {
  const { preheading, heading, copy } = content;

  return (
    <section className="bg-background-light dark:bg-background-dark bg-gray-200 px-8 py-32 md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-20">
          <div className="w-full md:w-2/5">
            <div className="space-y-8 md:sticky md:top-32">
              <div className="space-y-4">
                <span className="pre-heading">{preheading}</span>
                <h2 className="heading">{heading}</h2>
              </div>
              <p className="max-w-md leading-relaxed text-gray-600 dark:text-gray-400">{copy}</p>
              <a
                className="border-primary hover:bg-primary border px-8 py-3 text-[10px] tracking-widest uppercase transition-all hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                href="#"
              >
                View All Projects
              </a>
            </div>
          </div>
          <div className="m:w-3/5 relative w-full">
            {projects &&
              projects.map((project, index) => (
                <div key={index} className="group relative mb-8 block aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image alt={project.alt} className="object-cover" src={project.image} fill sizes="65vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 z-20 w-full px-12 pb-8 text-white transition-all duration-500 group-hover:pb-4">
                    <div className="transition-transform duration-500 group-hover:-translate-y-4">
                      <p className="mb-1 text-[9px] tracking-widest uppercase opacity-70">{project.category}</p>
                      <h3 className="font-display mb-0 text-xl tracking-wide">{project.name}</h3>
                    </div>
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                      <p className="mb-4 text-sm leading-relaxed font-light">{project.description}</p>
                      {project.links &&
                        project.links.map((link, linkIndex) => (
                          <Button key={linkIndex} url={link.url} style="tertiary">
                            {link.text}
                          </Button>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
