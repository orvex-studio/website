"use client";

import { Database, Github, BookOpen, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";

const GITHUB_URL = "https://github.com/orvex-studio/nubodb";
const WIKI_URL = "https://github.com/orvex-studio/nubodb/wiki";

export default function NuboDBFooter() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npm install nubodb");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <Database className="w-7 h-7 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-white">NuboDB</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              A NoSQL document database for Node.js. Built for testing and
              development, with TypeScript support, built-in encryption, schema
              validation, and MongoDB-like querying.
            </p>
            <div className="flex gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href={WIKI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
              >
                <BookOpen className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href={`${GITHUB_URL}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
              >
                <MessageCircle className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Start</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#getting-started"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#getting-started"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/tree/main/examples`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href={`${WIKI_URL}/Config-File`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Configuration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Documentation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WIKI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Wiki Home
                </a>
              </li>
              <li>
                <a
                  href={`${WIKI_URL}/API-Reference`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href={`${WIKI_URL}/QueryBuilder-Class`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Query Builder
                </a>
              </li>
              <li>
                <a
                  href={`${WIKI_URL}/Encryption-Options`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Encryption Guide
                </a>
              </li>
              <li>
                <a
                  href={`${WIKI_URL}/Best-Practices`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Best Practices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 mb-8 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Install NuboDB</h4>
            <button
              onClick={copyInstall}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-black/50 rounded-lg p-4 font-mono border border-white/10">
            <span className="text-gray-500">$</span>
            <span className="text-blue-400 ml-2 font-bold">npm install nubodb</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 NuboDB. MIT License. By{" "}
            <a
              href="https://orvex.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Orvex Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
