import projectsData from "@/data/projects.json";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectData {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  client: string;
  scope: string;
  materials: string[];
  features: string[];
  images: ProjectImage[];
  testimonial?: ProjectTestimonial;
}

export interface ProjectsData {
  [key: string]: ProjectData;
}

export function getProjectData(slug: string): ProjectData | null {
  const projects = projectsData as ProjectsData;
  return projects[slug] || null;
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsData);
}

export function getAllProjects(): Array<ProjectData & { slug: string }> {
  const projects = projectsData as ProjectsData;
  return Object.entries(projects).map(([slug, data]) => ({
    ...data,
    slug,
  }));
}

export function getProjectsByCategory(category: string): Array<ProjectData & { slug: string }> {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.category === category);
}

export function projectExists(slug: string): boolean {
  return slug in projectsData;
}
