import React from "react";
import Image from "next/image";
type SideBySideProps = {
  title: string;
  description: string;
};

export const SideBySide: React.FC<SideBySideProps> = ({ title, description }) => {
  return (
    <section className="py-32 px-8 md:px-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="pre-heading">WHO WE are</span>
          <h2 className="heading">Crafting legacies through natural stone.</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            With over 25 years of expertise in the stone industry, we've set a new standard for excellence. From
            sourcing rare marbles in Carrara to precision installation in modern landmarks, our commitment to quality is
            unwavering.
          </p>
          <div className="pt-4">
            <a className="inline-flex items-center space-x-4 group" href="#">
              <span className="text-sm uppercase tracking-widest font-semibold">Our Story</span>
              <span className="w-12 h-[1px] bg-gray-900 dark:bg-white group-hover:w-20 transition-all duration-300"></span>
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            width={400}
            height={500}
            alt="Detail of white marble vein"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            src="/images/home-slider/4.jpg"
          />
        </div>
      </div>
    </section>
  );
};
