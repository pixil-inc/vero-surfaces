import pagesData from "@/data/pages.json";
import {
  HeroBlockData,
  FeaturedProjectsBlockData,
  ImageCarouselBlockData,
  SideBySideBlockData,
  ProjectsGridBlockData,
  ToggleListBlockData,
} from "@/types/blocks";

export type Block =
  | { type: "hero"; data: HeroBlockData }
  | { type: "featured-projects"; data: FeaturedProjectsBlockData }
  | { type: "image-carousel"; data: ImageCarouselBlockData }
  | { type: "side-by-side"; data: SideBySideBlockData }
  | { type: "projects-grid"; data: ProjectsGridBlockData }
  | { type: "toggle-list"; data: ToggleListBlockData };

export interface PageData {
  title: string;
  description: string;
  blocks: Block[];
}

export interface PagesData {
  [key: string]: PageData;
}

export function getPageData(slug: string): PageData | null {
  const pages = pagesData as unknown as PagesData;
  return pages[slug] || null;
}

export function getAllPageSlugs(): string[] {
  return Object.keys(pagesData);
}

export function pageExists(slug: string): boolean {
  return slug in pagesData;
}
