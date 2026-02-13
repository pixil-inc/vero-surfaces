"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  autoScrollInterval?: number;
};

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoScrollInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Responsive logos visible - will be calculated based on screen size
  // 3 mobile, 5 tablet, 6 desktop
  const [visibleLogos, setVisibleLogos] = useState(6);

  // Create infinite loop by duplicating images
  const extendedImages = [...images, ...images, ...images];

  // Handle responsive logos visible
  useEffect(() => {
    const updateVisibleLogos = () => {
      const newVisibleLogos = window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 5 : 6;
      setVisibleLogos(newVisibleLogos);
    };

    updateVisibleLogos();
    window.addEventListener("resize", updateVisibleLogos);
    return () => window.removeEventListener("resize", updateVisibleLogos);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isPaused, images.length, autoScrollInterval]);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === images.length) {
      // When we reach the second set, snap back to the first set without animation
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700); // Wait for transition to complete
    } else if (currentIndex === -1) {
      // When we go before the first set, snap to the end of the second set
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length - 1);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }
  }, [currentIndex, images.length]);

  const nextLogo = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevLogo = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextLogo();
      } else {
        prevLogo();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Calculate the translation percentage per logo
  const logoWidth = 100 / visibleLogos;
  const translateX = -((currentIndex + images.length) * logoWidth);

  return (
    <section
      className="bg-gray-50 px-8 py-32 md:px-24 dark:bg-[#111]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Logo Grid Container with Slide Animation */}
        <div className="relative overflow-hidden">
          <div
            className={`flex items-center gap-8 md:gap-12 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {extendedImages.map((image, index) => (
              <div
                key={`${index}`}
                className="relative flex h-20 flex-shrink-0 items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100"
                style={{
                  width: `calc((100% - ${(visibleLogos - 1) * (visibleLogos >= 6 ? 3 : 2)}rem) / ${visibleLogos})`,
                }}
              >
                <Image src={image.src} alt={image.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Hidden on Mobile */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevLogo}
              className="group absolute top-1/2 left-0 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-gray-800 transition-all duration-300 hover:bg-gray-200 md:-left-12 md:flex lg:-left-16 dark:text-white dark:hover:bg-white/10"
              aria-label="Previous logo"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextLogo}
              className="group absolute top-1/2 right-0 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-gray-800 transition-all duration-300 hover:bg-gray-200 md:-right-12 md:flex lg:-right-16 dark:text-white dark:hover:bg-white/10"
              aria-label="Next logo"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Page Indicator */}
        {images.length > 1 && (
          <div className="mt-8 flex justify-center gap-2 md:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === ((currentIndex % images.length) + images.length) % images.length
                    ? "w-8 bg-gray-800 dark:bg-white"
                    : "bg-gray-400 hover:bg-gray-600 dark:bg-white/50 dark:hover:bg-white/75"
                }`}
                aria-label={`Go to logo ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCarousel;
