"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms";
import { ToggleListBlockData } from "@/types/blocks";

export const ToggleList: React.FC<ToggleListBlockData> = ({ content, link, items }) => {
  const { preheading, heading, copy } = content;
  const { text, url } = link;
  const [selectedItem, setSelectedItem] = useState<string>(items[0]?.id || "");

  return (
    <section className="dark:bg-background-dark bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[700px] flex-col items-stretch overflow-hidden lg:flex-row dark:border-gray-900">
          <div className="flex w-full flex-col justify-between border-r border-gray-100 bg-white p-12 md:p-16 lg:w-2/5 dark:border-gray-900 dark:bg-neutral-950">
            <div>
              <div className="space-y-4">
                <span className="pre-heading">{preheading}</span>
                <h2 className="heading">{heading}</h2>
                <p className="mb-12 text-sm leading-relaxed font-light text-gray-500 dark:text-gray-400">{copy}</p>
              </div>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    className={`category-label group font-display flex cursor-pointer items-center text-xl tracking-widest transition-colors duration-300 ${
                      selectedItem === item.id
                        ? "text-primary dark:text-white"
                        : "text-secondary-alt hover:text-primary dark:hover:text-white"
                    }`}
                  >
                    <span
                      className={`indicator mr-4 h-[1px] transition-all duration-500 ${selectedItem === item.id ? "bg-vero-red w-12" : "bg-secondary w-6"}`}
                    ></span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12">
              <Button url={url}>{text}</Button>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full overflow-hidden rounded-xl bg-gray-50 p-12 lg:min-h-full lg:w-3/5 dark:bg-neutral-900">
            {items.map((item) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ${selectedItem === item.id ? "z-10 opacity-100" : "z-0 opacity-0"}`}
              >
                <Image alt={item.imageAlt} className="object-cover" src={item.image} fill sizes="65vw" />
                <div className="absolute bottom-0 left-0 z-20 w-full px-12 text-white">
                  <p className="mb-1 text-[9px] tracking-widest uppercase opacity-70">{item.subtitle}</p>
                  <h3 className="font-display text-xl tracking-wide">{item.title}</h3>
                  <p className="mb-12 text-sm leading-relaxed font-light">{item.description}</p>
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
