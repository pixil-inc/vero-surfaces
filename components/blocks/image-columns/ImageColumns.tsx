import React from "react";

type ImageColumnsProps = {
  title: string;
};

export const ImageColumns: React.FC<ImageColumnsProps> = ({ title }) => {
  return (
    <section className="bg-gray-50 px-8 py-32 md:px-24 dark:bg-[#111]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4 text-center">
          <span className="text-accent block text-xs font-semibold tracking-[0.3em] uppercase">OUR MATERIALS</span>
          <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-square overflow-hidden bg-white dark:bg-black">
              <img
                alt="Marble material"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcgI8fhr0nI2JFShAkVXJAju8pq-u6WSDUkvw4ziF-AJlpve9-6rlV9vM84ZvoamG21GPBDphyfzffw8GDxzxFWbTyvDP6yvf1QRnELvfxQWMZ16d-lngsTHJu1pJ3_ILyev4HXwlWtdxCbp5RawFxEuQJRndqquIGcFQ52cU7VZgIn-SsMGMGDhYQQywKos3h6V9T_bZGgTaJgOJyEDkrt64c-2ixYhjjBVB3PqM9cqcXNc2UHsSfhyYsYQICADOjLtAQPNT9YQ2f"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase">Marble</h4>
          </div>
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-square overflow-hidden bg-white dark:bg-black">
              <img
                alt="Granite material"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKWhRlDeGEFJpj8wywOoFIr15KTfb8hevlJYtUkMsegxJA6vn3p2NlvmJh78ya2Zx_Y5CXDUheqBYtD3ETp51LxVLpHC_LcHL4gHWrIMAaN9DdJ2aTNTGZen7eS8jyv9lZkIdV1Sno48WkbxQ5T7U5iS-4g2j-nxx-yFV-8RAFPPIOQW-FIZwzR1wRKwn4aQANMWuQcuNSW0jFT5ZB4Znnctz-ylvMrndJBAqJszI46YvfbrCTl-ssE-67-J3WSpaNUJdbWnPFbIB3"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase">Granite</h4>
          </div>
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-square overflow-hidden bg-white dark:bg-black">
              <img
                alt="Limestone material"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWcpDPP7h6vnG2nSyTlTKceCPYEOJRIwkR1f3ui1ssVr494d9Rnl9SHNpgywQhzqoPNXotdHoKjSzXxy26mfRxbj-FFQ3myDcRXySUds6T3UqPlZOnLQDt3W9iDMSLOYNwDEc2UH_dWBNIdvEm_xO75jrOnMcR5bCLjFQ6I-hKN2-fMbNS3qUh7JaW6Hy_DVM4TiFVHknXP2wq8hWZ9LE1-7sxe86WXXils6VU3zFlBfe_wRbYA5MSM7yXUyIfiU0X-9UZzK6EiPfe"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase">Limestone</h4>
          </div>
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-square overflow-hidden bg-white dark:bg-black">
              <img
                alt="Travertine material"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_Zu9YxfZ_WM94SEFtqH54qXltbtg2PGdY3ctBjv4SZrJbQyLib5awTiBwX3EsxNNnIFMioOtezdhYtCzvtVp5FfFSXg6o8ilqrtpLEq9MuH_2sGwHhlxKXYRhEtRWvn8rCKUJGaeF8eK2Sk3WOnk_Xk3lX7Gvhu_pvN-dTL_m_-nd4hCtdHa3pJKb2ImMv7OOqlO2He9KB2iCvSTXmceSx3HF64HIgGrtdlaITAlqDDzuYUnC_4GVOVOpzxqjvtJFZy31D8E5czH"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase">Travertine</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageColumns;
