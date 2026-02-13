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
    <section className="py-24 px-8 md:px-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(title || description) && (
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {title && <h2 className="font-abygaer text-4xl md:text-6xl mb-6">{title}</h2>}
            {description && <p className="text-gray-600 dark:text-gray-400 text-lg">{description}</p>}
          </div>
        )}

        {/* Category Filter */}
        {!filterByCategory && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.heroImageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/90 text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <h3 className="font-abygaer text-2xl group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-accent text-sm font-medium pt-2">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
