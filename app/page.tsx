import { Hero, SideBySide, FeaturedProjects } from "@/components";

export default function Home() {
  const heroSlides = [
    {
      title: "Timeless Artistry in Stone",
      description: "Exquisite Materials. Masterful Execution.",
      image: "/images/home-slider/1.jpg",
      imageAlt: "Luxury marble interior",
      preheading: "Premium Surfaces",
      fullHeight: true,
    },
    {
      title: "Crafted to Perfection",
      description: "Where Nature Meets Design",
      image: "/images/home-slider/2.jpg",
      imageAlt: "Stone craftsmanship",
      preheading: "Bespoke Solutions",
      fullHeight: true,
    },
    {
      title: "Elevate Your Space",
      description: "Luxury Stone & Surface Specialists",
      image: "/images/home-slider/3.jpg",
      imageAlt: "Premium surfaces showcase",
      fullHeight: true,
    },
  ];

  return (
    <main className="bg-white dark:bg-black">
      <Hero slides={heroSlides} />
      <SideBySide title="Timeless Artistry in Stone" description="Exquisite Materials. Masterful Execution." />
      <FeaturedProjects title="Timeless Artistry in Stone" description="Exquisite Materials. Masterful Execution." />
    </main>
  );
}
