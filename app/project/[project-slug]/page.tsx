import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectData, getAllProjectSlugs, projectExists } from "@/lib/getProjectData";

interface ProjectPageProps {
  params: Promise<{ "project-slug": string }>;
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    "project-slug": slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { "project-slug": slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Vero Surfaces`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { "project-slug": slug } = await params;

  // Check if project exists
  if (!projectExists(slug)) {
    notFound();
  }

  // Get project data
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white dark:bg-black">
      {/* Breadcrumb */}
      <div className="py-8 px-8 md:px-24 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image src={project.heroImage} alt={project.heroImageAlt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-8 md:px-24 pb-16">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/90 dark:bg-black/90 text-sm font-medium mb-4 uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="font-abygaer text-5xl md:text-7xl text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div>
                  <span className="text-white/60 text-sm uppercase tracking-wider block mb-1">Location</span>
                  <span className="text-lg">{project.location}</span>
                </div>
                <div>
                  <span className="text-white/60 text-sm uppercase tracking-wider block mb-1">Year</span>
                  <span className="text-lg">{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-16">
              {/* Description */}
              <div>
                <h2 className="font-abygaer text-3xl md:text-4xl mb-6">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="font-abygaer text-2xl md:text-3xl mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="space-y-3">
                      <div className="relative h-[400px] md:h-[600px]">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      </div>
                      {image.caption && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 italic text-center">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12">
                  <blockquote className="space-y-4">
                    <p className="text-xl md:text-2xl font-light italic text-gray-800 dark:text-gray-200">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="font-medium text-gray-900 dark:text-white">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.testimonial.role}</p>
                    </footer>
                  </blockquote>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Client</h4>
                  <p className="text-gray-900 dark:text-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Scope</h4>
                  <p className="text-gray-900 dark:text-white">{project.scope}</p>
                </div>
                {project.materials && project.materials.length > 0 && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                      Materials
                    </h4>
                    <ul className="space-y-1">
                      {project.materials.map((material, index) => (
                        <li key={index} className="text-gray-900 dark:text-white">
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-black dark:bg-white text-white dark:text-black p-6 space-y-4">
                <h4 className="font-abygaer text-xl">Interested in a similar project?</h4>
                <p className="text-sm text-white/80 dark:text-black/80">
                  Let&apos;s discuss how we can bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 px-8 md:px-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
