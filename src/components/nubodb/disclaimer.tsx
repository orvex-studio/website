"use client";

import { AlertTriangle } from "lucide-react";

export default function NuboDBDisclaimer() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 p-6 rounded-xl border border-white/10">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Best for Testing & Development
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                NuboDB is designed primarily for local development, testing, and
                prototyping. It is not recommended for production use in
                large-scale applications. For production workloads, consider
                established databases that offer better scalability,
                replication, and tooling.
              </p>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Alternatives for production:</span>{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  MongoDB
                </a>{" "}
                for document storage,{" "}
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  PostgreSQL
                </a>{" "}
                for relational data, or other production-grade databases that
                better suit your scale and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
