"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/getProjectData";

type ProjectsGridProps = {
  title?: string;
  description?: string;
  filterByCategory?: string;
};

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ title, description, filterByCategory }) => {
  const allProjects = getAllProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>(filterByCategory || "All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-white px-8 py-24 md:px-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {(title || description) && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            {title && <h2 className="font-abygaer mb-6 text-4xl md:text-6xl">{title}</h2>}
            {description && <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>}
          </div>
        )}

        {/* Category Filter */}
        {!filterByCategory && (
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-6 py-2 text-sm tracking-wider uppercase transition-all ${
                  selectedCategory === category
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-gray-50 transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-medium tracking-wider uppercase dark:bg-black/90">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="space-y-3 p-6">
                <h3 className="font-abygaer group-hover:text-accent text-2xl transition-colors">{project.title}</h3>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex items-center gap-4 text-xs tracking-wider text-gray-500 uppercase dark:text-gray-500">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <div className="text-accent flex items-center gap-2 pt-2 text-sm font-medium">
                  <span>View Project</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500 dark:text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
