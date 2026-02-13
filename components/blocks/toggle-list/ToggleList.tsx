"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ToggleListBlockData } from "@/types/blocks";

export const ToggleList: React.FC<ToggleListBlockData> = ({ content, link, items }) => {
  const { preheading, heading, copy } = content;
  const { text: ctaText, url: ctaLink } = link;
  const [selectedItem, setSelectedItem] = useState<string>(items[0]?.id || "");

  return (
    <section className="py-32 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch dark:border-gray-900 overflow-hidden min-h-[700px]">
          <div className="w-full lg:w-2/5 p-12 md:p-16 flex flex-col justify-between bg-white dark:bg-neutral-950 border-r border-gray-100 dark:border-gray-900">
            <div>
              <div className="space-y-4">
                <span className="pre-heading">{preheading}</span>
                <h2 className="heading">{heading}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-12">{copy}</p>
              </div>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    className={`category-label flex items-center group cursor-pointer text-xl md:text-2xl font-display uppercase tracking-widest transition-colors duration-300 ${
                      selectedItem === item.id
                        ? "text-primary dark:text-white"
                        : "text-gray-400 hover:text-primary dark:hover:text-white"
                    }`}
                  >
                    <span
                      className={`indicator h-[1px] bg-vero-red mr-4 transition-all duration-500 ${selectedItem === item.id ? "w-12" : "w-6"}`}
                    ></span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12">
              <a className="inline-flex items-center space-x-4 group" href={ctaLink}>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{ctaText}</span>
                <span className="w-8 h-[1px] bg-primary dark:bg-white group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/5 relative bg-gray-50 dark:bg-neutral-900 overflow-hidden min-h-[500px] lg:min-h-full">
            {items.map((item) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ${selectedItem === item.id ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <Image alt={item.imageAlt} className="object-cover" src={item.image} fill sizes="65vw" />
                <div className="absolute bottom-0 left-0 text-white z-20 w-full px-12">
                  <p className="text-[9px] uppercase tracking-widest opacity-70 mb-1">{item.subtitle}</p>
                  <h3 className="text-xl font-display tracking-wide">{item.title}</h3>
                  <p className="text-sm leading-relaxed font-light mb-12">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToggleList;
