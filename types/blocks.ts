/**
 * Type definitions for block data in pages.json
 * Use these as a reference when authoring page content
 */

export interface LinkData {
  text: string;
  url: string;
  external?: boolean;
  style?: "primary" | "secondary" | "tertiary";
}
export interface ContentData {
  preheading?: string;
  heading?: string;
  subheading?: string;
  copy?: string;
}

export interface HeroSlideData extends ContentData {
  image: string;
  imageAlt: string;
  fullHeight?: boolean;
}
// Hero Block
export interface HeroBlockData {
  slides: Array<HeroSlideData>;
  autoScrollInterval?: number;
  fullHeight?: boolean;
}

// Featured Projects Block
export interface FeaturedProjectsBlockData {
  title: string;
  description: string;
  projects?: Array<{
    image: string;
    alt: string;
    category: string;
    name: string;
    description: string;
  }>;
}

// Image Carousel Block
export interface ImageCarouselBlockData {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoScrollInterval?: number;
}

// Side By Side Block
export interface SideBySideBlockData {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

// Projects Grid Block
export interface ProjectsGridBlockData {
  title?: string;
  description?: string;
  filterByCategory?: string; // Optional: filter to show only specific category
}

// Toggle List Block
export interface ToggleListBlockData {
  content: ContentData;
  link: LinkData;
  items: Array<{
    id: string;
    label: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
  }>;
}

// Add new block types here as you create them

/**
 * Example usage in pages.json:
 *
 * {
 *   "my-page": {
 *     "title": "Page Title",
 *     "description": "Page description",
 *     "blocks": [
 *       {
 *         "type": "hero",
 *         "data": {
 *           // HeroBlockData structure here
 *         }
 *       }
 *     ]
 *   }
 * }
 */
