import { Hero, SideBySide, FeaturedProjects, ImageCarousel, ImageColumns } from "@/components";

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
      fullHeight: false,
    },
    {
      title: "Elevate Your Space",
      description: "Luxury Stone & Surface Specialists",
      image: "/images/home-slider/3.jpg",
      imageAlt: "Premium surfaces showcase",
      fullHeight: true,
    },
  ];

  const logos = [
    { src: "/images/logos/amg.png", alt: "Logo 1" },
    { src: "/images/logos/audi.svg", alt: "Logo 2" },
    { src: "/images/logos/facebook.png", alt: "Logo 3" },
    { src: "/images/logos/google.png", alt: "Logo 4" },
    { src: "/images/logos/honda.png", alt: "Logo 5" },
    { src: "/images/logos/roblox.png", alt: "Logo 6" },
    { src: "/images/logos/youtube.png", alt: "youtube 6" },
    { src: "/images/logos/intuit.svg", alt: "Intuit 6" },
  ];

  return (
    <main className="bg-white dark:bg-black">
      <Hero slides={heroSlides} />
      <SideBySide title="Timeless Artistry in Stone" description="Exquisite Materials. Masterful Execution." />
      <FeaturedProjects title="Timeless Artistry in Stone" description="Exquisite Materials. Masterful Execution." />
      <ImageColumns title="Header" />
      <ImageCarousel images={logos} />
    </main>
  );
}
