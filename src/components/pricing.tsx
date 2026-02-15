"use client";

import { Code, Globe, Smartphone, Rocket } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web platforms built with modern Services",
    category: "Full-Stack",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    category: "Mobile",
  },
  {
    icon: Code,
    title: "Enterprise Systems",
    description: "Robust backend infrastructure and APIs",
    category: "Backend",
  },
  {
    icon: Rocket,
    title: "Startup MVPs",
    description: "Rapid prototyping and product development",
    category: "Product",
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Ventures
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Products, platforms, and ventures we&apos;ve built that push boundaries
            and create value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-zinc-950 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="mb-2">
                  <span className="text-xs text-violet-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Interested in partnering or learning more?{" "}
            <a
              href="#contact"
              className="text-white hover:text-gray-300 underline"
            >
              Get in touch
            </a>{" "}
            to explore opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
