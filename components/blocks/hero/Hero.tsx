"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HeroBlockData } from "@/types/blocks";
import { Button } from "@/components/atoms";

export const Hero: React.FC<HeroBlockData> = ({ slides, autoScrollInterval = 5000, fullHeight = false }) => {
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
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlideData = slides[currentSlide];
  const { content, links } = currentSlideData;
  const { preheading, heading, copy } = content;
  const sliderHeight = fullHeight ? "slider-h-full" : "slider-h-70";

  return (
    <section
      data-block-type="hero"
      className={`${sliderHeight} hero-video-container bg-dark relative flex items-center justify-center overflow-hidden transition-all duration-700`}
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
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
            }`}
          >
            <Image
              alt={slide.imageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              src={slide.image}
              fill
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div key={currentSlide} className="animate-fadeIn relative z-10 max-w-3xl px-4 text-center">
        {preheading && (
          <>
            <span className="pre-heading text-white">{preheading}</span>
            <br />
          </>
        )}
        <h1 className="font-abygaer mb-6 text-5xl font-medium text-white md:text-8xl">{heading}</h1>
        <p className="text-sm font-light tracking-[0.3em] text-white/80 uppercase md:text-base">{copy}</p>
        {links && (
          <div className="mt-8 inline-flex items-center gap-6">
            {links.map((link, index) => (
              <Button key={index} url={link.url} style={link.style}>
                {link.text}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="group absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/10 md:left-8"
            aria-label="Previous slide"
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
            onClick={nextSlide}
            className="group absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/10 md:right-8"
            aria-label="Next slide"
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

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "bg-white/50 hover:bg-white/75"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Down Indicator */}
      {fullHeight && (
        <div className="absolute bottom-18 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
            <div className="scroll-dot h-1 w-1 rounded-full bg-white"></div>
          </div>
          <span className="text-[9px] font-light tracking-[0.4em] text-white/40 uppercase">Discover</span>
        </div>
      )}
    </section>
  );
};
