import React from "react";
import Image from "next/image";

type HeaderProps = {
  links: { label: string; href: string }[];
};

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="fixed top-0 left-0 w-screen z-50 mix-blend-difference px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-white">
          <div className="text-2xl font-display font-semibold tracking-widest uppercase">
            <Image priority alt="Vero Surfaces Logo" src="/images/logo/white.png" width={102} height={62} className="inline-block mr-2" />
          </div>
          <nav className="hidden md:flex space-x-12 text-xs uppercase tracking-widest font-medium">
            {links &&
              links.map((link, index) => (
                <a
                  key={`link-${index}`}
                  className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block text-sm hover:text-accent transition-colors"
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
