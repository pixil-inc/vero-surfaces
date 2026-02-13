import React from "react";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  copyright: string;
  locations: { city: string; address: string }[];
  email: string;
  phone: string;
};

export const Footer: React.FC<FooterProps> = ({ copyright, locations, email, phone }) => {
  return (
    <footer className="pt-24 pb-12 px-8 md:px-24 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">
        <div className="space-y-8">
          <Image alt="Vero Surfaces Logo" src="/images/logo/white.png" width={102} height={62} className="inline-block mr-2" />
          <div className="space-y-6">
            <div className="flex items-start space-x-3 text-sm text-gray-500 dark:text-gray-400">
              <Image alt="phone icon" src="/icons/location.svg" width={14} height={14} className="inline-block mr-2" />
              <span className="leading-relaxed">
                {locations.map((location) => (
                  <div key={location.city} className="mb-4">
                    <strong>{location.city}</strong>
                    <br />
                    {location.address}
                  </div>
                ))}
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
              <Image alt="phone icon" src="/icons/phone.svg" width={14} height={14} className="inline-block mr-2" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
              <Image alt="email icon" src="/icons/email.svg" width={14} height={14} className="inline-block mr-2" />
              <Link href={`mailto:${email}`}>
                <span>{email}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-accent">Locations</h5>
          <nav className="flex flex-col space-y-4">
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Home
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              About Us
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Projects
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Materials
            </a>
          </nav>
        </div>
        <div className="space-y-8">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-accent">Services</h5>
          <nav className="flex flex-col space-y-4">
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Consultation
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Sourcing
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Installation
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Maintenance
            </a>
          </nav>
        </div>
        <div className="space-y-8">
          <h5 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-accent">Follow Us</h5>
          <nav className="flex flex-col space-y-4">
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Instagram
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              LinkedIn
            </a>
            <a className="text-sm font-display text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" href="#">
              Pinterest
            </a>
          </nav>
        </div>
      </div>
      <div className="pt-12 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{copyright}</div>
        <div className="flex space-x-12">
          <a className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-primary dark:hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
