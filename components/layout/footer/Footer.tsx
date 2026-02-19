import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Logo } from "@/components/atoms";
import { ImageCarousel } from "@/components/blocks/image-carousel/ImageCarousel";
import { FooterDataProps } from "@/types/blocks";

export const Footer: React.FC<FooterDataProps> = ({ copyright, locations, email, phone, logos }) => {
  return (
    <>
      <ImageCarousel images={logos} />
      <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 px-8 pt-24 pb-12 md:px-24 dark:border-gray-900">
        <div className="mx-auto mb-24 grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <h5 className="text-sm font-semibold tracking-[0.1em] uppercase">Contact</h5>
            {/* <Link href="/" className="block h-[62px] w-[102px]">
              <Logo />
            </Link> */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3 text-sm text-gray-500 dark:text-gray-400">
                <Image
                  alt="phone icon"
                  src="/icons/location.svg"
                  width={14}
                  height={14}
                  className="mt-1 mr-2 inline-block"
                />
                <span className="leading-relaxed">
                  {locations.map((location) => (
                    <div key={location.city} className="mb-4">
                      <strong>{location.city}</strong>
                      <br />
                      <span dangerouslySetInnerHTML={{ __html: location.address }} />
                    </div>
                  ))}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                <Image alt="phone icon" src="/icons/phone.svg" width={14} height={14} className="mr-2 inline-block" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                <Image alt="email icon" src="/icons/email.svg" width={14} height={14} className="mr-2 inline-block" />
                <Link href={`mailto:${email}`}>
                  <span>{email}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h5 className="text-sm font-semibold tracking-[0.1em] uppercase">Links</h5>
            <nav className="flex flex-col space-y-4">
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Home
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                About Us
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Projects
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Materials
              </a>
            </nav>
          </div>
          <div className="space-y-8">
            <h5 className="text-sm font-semibold tracking-[0.1em] uppercase">Surfaces</h5>
            <nav className="flex flex-col space-y-4">
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Consultation
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Sourcing
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Installation
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Maintenance
              </a>
            </nav>
          </div>
          <div className="space-y-8">
            <h5 className="text-sm font-semibold tracking-[0.1em] uppercase">Connect</h5>
            <nav className="flex flex-col space-y-4">
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Instagram
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="font-display text-primary hover:text-accent dark:hover:text-accent text-sm transition-colors dark:text-gray-300"
                href="#"
              >
                Pinterest
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 border-t border-gray-100 pt-12 md:flex-row dark:border-gray-900">
          <div className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">{copyright}</div>
          <div className="flex space-x-12">
            <a
              className="hover:text-primary text-[10px] tracking-[0.2em] text-gray-400 uppercase transition-colors dark:hover:text-white"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-primary text-[10px] tracking-[0.2em] text-gray-400 uppercase transition-colors dark:hover:text-white"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
