"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const GITHUB_URL = "https://github.com/orvex-studio/nubodb";
const WIKI_URL = "https://github.com/orvex-studio/nubodb/wiki";

const faqs = [
  {
    question: "How does NuboDB compare to other databases?",
    answer:
      "NuboDB is designed for local storage in Node.js applications. Unlike MongoDB or PostgreSQL, it runs entirely within your application with no separate server. It's best suited for development, testing, and prototyping rather than production.",
  },
  {
    question: "Is my data secure with NuboDB?",
    answer:
      "NuboDB includes built-in AES-256-CBC or AES-256-GCM encryption for sensitive data. You can encrypt specific fields or entire documents. Encryption and decryption happen automatically at runtime.",
  },
  {
    question: "Should I use NuboDB in production?",
    answer:
      "NuboDB is not recommended for production use in large-scale applications. For production workloads, use MongoDB for document storage or PostgreSQL for relational data. These offer better scalability, replication, monitoring, and ecosystem support. NuboDB is best for testing and development.",
  },
  {
    question: "How do I migrate from MongoDB?",
    answer:
      "NuboDB uses MongoDB-like query syntax ($eq, $ne, $gt, $in, $and, $or, etc.), making it familiar for MongoDB users. You can export data to JSON and import into NuboDB collections. Useful when prototyping or testing locally before deploying to MongoDB.",
  },
  {
    question: "Does NuboDB support TypeScript?",
    answer:
      "Yes. NuboDB is built with TypeScript and includes comprehensive type definitions. You get full IntelliSense support and type checking when working with your data.",
  },
  {
    question: "What about native Go acceleration?",
    answer:
      "If Go is installed during build, filter, sort, projection, and index resolution can run in a native Go process. If the binary is not available, the TypeScript implementation is used automatically.",
  },
];

export default function NuboDBFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">FAQ</h2>
          </div>
          <p className="text-lg text-gray-300">Common questions about NuboDB</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-black/30 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-white/10">
                  <p className="text-gray-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WIKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
            >
              View Documentation
            </a>
            <a
              href={`${GITHUB_URL}/discussions`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block text-center"
            >
              GitHub Discussions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
