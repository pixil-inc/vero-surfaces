import React from "react";

type FeaturedProjectsProps = {
  title: string;
  description: string;
};

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ title, description }) => {
  return (
    <section className="bg-gray-200 py-32 px-8 md:px-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="col-span-4">
            <div className="md:sticky md:top-32 space-y-8">
              <div className="space-y-4">
                <span className="pre-heading">PORTFOLIO OF EXCELLENCE</span>
                <h2 className="heading">Crafting legacies through natural stone.</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                With over 25 years of expertise in the stone industry, we've set a new standard for excellence. From sourcing rare marbles in Carrara to
                precision installation in modern landmarks, our commitment to quality is unwavering.
              </p>
              <a
                className="border border-primary dark:border-white px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                href="#"
              >
                View All Projects
              </a>
            </div>
          </div>
          <div className="col-span-8">
            <div className="space-y-6 group">
              <div className="overflow-hidden aspect-video">
                <img
                  alt="Melbourne Square Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrQCXlDLln4mLa5C_cIhIRkS6_mKqMiWNaNH4pNwpNIo9Y-ZGuvTF1naX7XyDsZxebm_q7RFIJHZtlIApl-MQJmiRH_b0ZMv17tZqNWK5xEHBocoaqlADlsu8_P08nHa8hnbGOqZ0yiTcrcYjiWl-hEwJpOYF-hOOhmsIo55a7YwjJCkWIXC0T1n4XDOaD3ht4tjxryu17oo5nd7hI6xmx62Ylr9V8Pey5JAMUltD3gmX-GZuDMhoBMz0Te14UsoGID7OSInJCJyvz"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Commercial · Residential</span>
                <h3 className="text-2xl font-display font-medium">The Azure Towers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  A $1.2 billion precinct featuring custom-quarried Italian Travertine throughout the lobbies and penthouse suites.
                </p>
              </div>
            </div>
            <div className="space-y-6 group">
              <div className="overflow-hidden aspect-video">
                <img
                  alt="Melbourne Square Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrQCXlDLln4mLa5C_cIhIRkS6_mKqMiWNaNH4pNwpNIo9Y-ZGuvTF1naX7XyDsZxebm_q7RFIJHZtlIApl-MQJmiRH_b0ZMv17tZqNWK5xEHBocoaqlADlsu8_P08nHa8hnbGOqZ0yiTcrcYjiWl-hEwJpOYF-hOOhmsIo55a7YwjJCkWIXC0T1n4XDOaD3ht4tjxryu17oo5nd7hI6xmx62Ylr9V8Pey5JAMUltD3gmX-GZuDMhoBMz0Te14UsoGID7OSInJCJyvz"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Commercial · Residential</span>
                <h3 className="text-2xl font-display font-medium">The Azure Towers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  A $1.2 billion precinct featuring custom-quarried Italian Travertine throughout the lobbies and penthouse suites.
                </p>
              </div>
            </div>
            <div className="space-y-6 group">
              <div className="overflow-hidden aspect-video">
                <img
                  alt="Melbourne Square Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrQCXlDLln4mLa5C_cIhIRkS6_mKqMiWNaNH4pNwpNIo9Y-ZGuvTF1naX7XyDsZxebm_q7RFIJHZtlIApl-MQJmiRH_b0ZMv17tZqNWK5xEHBocoaqlADlsu8_P08nHa8hnbGOqZ0yiTcrcYjiWl-hEwJpOYF-hOOhmsIo55a7YwjJCkWIXC0T1n4XDOaD3ht4tjxryu17oo5nd7hI6xmx62Ylr9V8Pey5JAMUltD3gmX-GZuDMhoBMz0Te14UsoGID7OSInJCJyvz"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Commercial · Residential</span>
                <h3 className="text-2xl font-display font-medium">The Azure Towers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  A $1.2 billion precinct featuring custom-quarried Italian Travertine throughout the lobbies and penthouse suites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
