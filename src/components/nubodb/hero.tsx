"use client";

import { Database, ArrowRight, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

const GITHUB_URL = "https://github.com/orvex-studio/nubodb";

export default function NuboDBHero() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npm install nubodb");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 mb-8">
          <div className="p-3 bg-white/10 rounded-xl border border-white/10">
            <Database className="w-7 h-7 text-blue-400" />
          </div>
          <span className="text-2xl font-bold text-white">NuboDB</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Local NoSQL
          <br />
          <span className="text-blue-400">Reimagined</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A NoSQL document database for Node.js.{" "}
          <span className="text-blue-400">TypeScript-first</span>,{" "}
          <span className="text-emerald-400">MongoDB-like queries</span>,{" "}
          <span className="text-teal-400">built-in encryption</span>. Built for
          testing and development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() =>
              document
                .getElementById("getting-started")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary group flex items-center justify-center"
          >
            Get Started
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>

        <div className="bg-black/30 rounded-xl p-6 max-w-2xl mx-auto border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 font-medium">Install with npm</span>
            <button
              onClick={copyInstall}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm font-medium">Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-lg border border-white/10">
            <span className="text-gray-500">$</span>
            <span className="text-blue-400 ml-2 font-bold">npm install nubodb</span>
          </div>
        </div>
      </div>
    </section>
  );
}
