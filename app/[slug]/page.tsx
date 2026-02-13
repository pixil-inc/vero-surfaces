import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageData, getAllPageSlugs, pageExists } from "@/lib/getPageData";
import { BlockRenderer } from "@/components/BlockRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all pages at build time
export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageData(slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: pageData.title,
    description: pageData.description,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Check if page exists
  if (!pageExists(slug)) {
    notFound();
  }

  // Get page data
  const pageData = getPageData(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <BlockRenderer blocks={pageData.blocks} />
    </main>
  );
}
