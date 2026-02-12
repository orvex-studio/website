"use client";

import { ArrowRight, Construction } from "lucide-react";

const UnderConstruction: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white pt-14 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb bg-violet-500/20 w-96 h-96 -top-48 -left-48 animate-pulse-glow" />
        <div
          className="gradient-orb bg-blue-500/20 w-96 h-96 -bottom-48 -right-48 animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="gradient-orb bg-purple-500/20 w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="mb-8 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative group">
            <Construction
              size={80}
              className="text-violet-400 relative z-10 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-r from-violet-400/30 via-violet-500/20 to-violet-400/30 blur-3xl rounded-full animate-pulse-glow" />
            <div className="absolute inset-0 bg-violet-400/10 blur-xl rounded-full animate-float" />
          </div>
        </div>

        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            We&apos;re bringing you
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-violet-500 to-violet-400 mt-2 relative animate-gradient-shift">
              something amazing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            Stay tuned for something incredible. We&apos;re working hard behind
            the scenes.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            disabled
            tabIndex={-1}
            aria-disabled="true"
            className="btn-primary group flex items-center relative overflow-hidden cursor-not-allowed active:cursor-not-allowed disabled:cursor-not-allowed opacity-60 bg-white text-black border border-white/10"
          >
            <span className="relative z-10 flex items-center">
              Coming Soon
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button
            disabled
            className="bg-white/5 text-white/40 border border-white/10 font-semibold py-2.5 px-6 rounded-lg cursor-not-allowed text-sm relative overflow-hidden backdrop-blur-sm"
            aria-disabled="true"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white/5 animate-shimmer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
