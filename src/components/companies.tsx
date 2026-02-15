"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Company = {
  name: string;
  description: string;
  category: string;
  url?: string;
  image?: string;
};

const companies: Company[] = [
  {
    name: "Fluxo",
    description: "Open-source billing panel for hosting companies.",
    category: "Hosting Tools",
    url: "https://fluxo.orvex.cc",
    image: "/img/projects/fluxo-vector.svg",
  },
  {
    name: "Orvex Monitor",
    description: "Advanced uptime monitoring for all of your services.",
    category: "Monitoring",
    url: "https://monitor.orvex.cc",
    image: "/img/projects/monitor-vector.svg",
  },
];

const Companies: React.FC = () => {
  return (
    <section id="companies" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You might know us as:
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {companies.map((company, index) => {
              return (
                <div
                  key={index}
                  className="group bg-zinc-950 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    {company.image ? (
                      <div className="w-10 h-10 p-1 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image
                          src={company.image}
                          alt={`${company.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform" />
                    )}
                    {company.url && (
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                        aria-label={`Visit ${company.name}`}
                      >
                        <ExternalLink size={14} className="text-white/60" />
                      </a>
                    )}
                  </div>

                  <div className="mb-2">
                    <span className="text-xs text-white/60 font-medium bg-white/5 px-2 py-1 rounded">
                      {company.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {company.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {company.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
