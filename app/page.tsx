import { getPageData } from "@/lib/getPageData";
import { BlockRenderer } from "@/components/BlockRenderer";
import { notFound } from "next/navigation";

export default function Home() {
  // Get data for the home page from pages.json
  const pageData = getPageData("home");

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <BlockRenderer blocks={pageData.blocks} />
    </main>
  );
}
