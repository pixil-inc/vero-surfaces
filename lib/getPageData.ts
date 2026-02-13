import pagesData from "@/data/pages.json";

export type BlockType = "hero" | "featured-projects" | "image-carousel" | "side-by-side" | "image-columns" | "projects-grid" | "toggle-list";

export interface Block {
  type: BlockType;
  data: Record<string, any>;
}

export interface PageData {
  title: string;
  description: string;
  blocks: Block[];
}

export interface PagesData {
  [key: string]: PageData;
}

export function getPageData(slug: string): PageData | null {
  const pages = pagesData as PagesData;
  return pages[slug] || null;
}

export function getAllPageSlugs(): string[] {
  return Object.keys(pagesData);
}

export function pageExists(slug: string): boolean {
  return slug in pagesData;
}
