"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type HeroSlide = {
  preheading?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  fullHeight?: boolean;
};

type HeroProps = {
  slides: HeroSlide[];
  autoScrollInterval?: number;
};

export const Hero: React.FC<HeroProps> = ({ slides, autoScrollInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || slides.length <= 1 || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isPaused, slides.length, autoScrollInterval, isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className={`hero-video-container min-h-screen relative flex items-center justify-center bg-gray-900 overflow-hidden transition-all duration-700`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 translate-x-0" : index < currentSlide ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
            }`}
          >
            <Image alt={slide.imageAlt} className="absolute inset-0 w-full h-full object-cover opacity-70" src={slide.image} fill priority={index === 0} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div key={currentSlide} className="relative z-10 text-center px-4 animate-fadeIn">
        {currentSlideData?.preheading && (
          <>
            <span className="pre-heading text-white">{currentSlideData.preheading}</span>
            <br />
          </>
        )}
        <h1 className="font-abygaer text-5xl md:text-8xl text-white mb-6 font-medium">{currentSlideData?.title}</h1>
        <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] font-light">{currentSlideData?.description}</p>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 rounded-full group"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 rounded-full group"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white mb-4">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent scroll-down-indicator"></div>
      </div>
    </section>
  );
};
