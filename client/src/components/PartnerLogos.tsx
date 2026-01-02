import React from 'react';

const partners = [
  { href: "https://nvvpm.com/", src: "/assets/nvvpm.webp", alt: "NVVPM" },
  { href: "https://nvvpo.nl/", src: "/assets/nvvpo.webp", alt: "NVVPO" },
  { href: "https://tandartsregister.nl/", src: "/assets/krt.webp", alt: "KRT" },
  { href: "https://www.kngf.nl/", src: "/assets/fysio.webp", alt: "KNGF" },
  { href: "https://www.nvda.nl/", src: "/assets/nvda.webp", alt: "NVDA" },
  { href: "https://www.venvn.nl/", src: "/assets/venvn.webp", alt: "V&VN" },
  { href: "https://www.knmg.nl/", src: "/assets/knms.webp", alt: "KNMG" },
];

export const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Onze Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <a
              key={partner.href}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-16 max-w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
