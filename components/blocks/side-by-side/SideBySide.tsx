import React from "react";
import Image from "next/image";
type SideBySideProps = {
  title: string;
  description: string;
};

export const SideBySide: React.FC<SideBySideProps> = ({ title, description }) => {
  return (
    <section className="bg-background-light dark:bg-background-dark px-8 py-32 md:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-8">
          <span className="pre-heading">WHO WE are</span>
          <h2 className="heading">Crafting legacies through natural stone.</h2>
          <p className="max-w-md leading-relaxed text-gray-600 dark:text-gray-400">
            With over 25 years of expertise in the stone industry, we've set a new standard for excellence. From
            sourcing rare marbles in Carrara to precision installation in modern landmarks, our commitment to quality is
            unwavering.
          </p>
          <div className="pt-4">
            <a className="group inline-flex items-center space-x-4" href="#">
              <span className="text-sm font-semibold tracking-widest uppercase">Our Story</span>
              <span className="h-[1px] w-12 bg-gray-900 transition-all duration-300 group-hover:w-20 dark:bg-white"></span>
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            width={400}
            height={500}
            alt="Detail of white marble vein"
            className="h-full w-full transform object-cover transition-transform duration-700 hover:scale-105"
            src="/images/home-slider/4.jpg"
          />
        </div>
      </div>
    </section>
  );
};
