"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

type HeaderProps = {
  links: { label: string; href: string }[];
};

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const hasCheckedForHero = useRef(false);

  useEffect(() => {
    const heroElement = document.querySelector('[data-block-type="hero"]');

    // If no hero exists on the page and we haven't checked yet
    if (!heroElement && !hasCheckedForHero.current) {
      hasCheckedForHero.current = true;
      // Use setTimeout to avoid setState during render
      setTimeout(() => setIsHeroVisible(false), 0);
      return;
    }

    if (!heroElement) return;

    hasCheckedForHero.current = true;

    // Create intersection observer to track hero visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of hero is visible
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`text-primary-alt fixed top-0 left-0 z-50 w-screen py-2 transition-all duration-300 ${
        !isHeroVisible ? "bg-translucent shadow-sm backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between transition-colors duration-300 ${
            !isHeroVisible ? "text-primary dark:text-white" : "text-white"
          }`}
        >
          <div className="font-display text-2xl font-semibold tracking-widest uppercase">
            <Link href="/" className="block h-[62px] w-[102px]">
              <Logo />
            </Link>
          </div>
          <nav className="hidden space-x-12 text-xs font-medium tracking-widest uppercase md:flex">
            {links &&
              links.map((link, index) => (
                <a
                  key={`link-${index}`}
                  className="block text-sm text-xs font-semibold tracking-[0.3em] uppercase transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
