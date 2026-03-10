"use client";

import {
  Shield,
  CheckCircle,
  Search,
  Blocks,
  BarChart3,
  Type,
  Radio,
  Package,
  LucideIcon,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Shield,
    title: "Built-in Encryption",
    description:
      "AES-256-CBC or AES-256-GCM at-rest encryption for sensitive data",
  },
  {
    icon: CheckCircle,
    title: "Schema Validation",
    description:
      "Off, warn, or strict mode with field types, constraints, and custom validators",
  },
  {
    icon: Search,
    title: "Advanced Querying",
    description: "MongoDB-like query syntax with QueryBuilder for complex operations",
  },
  {
    icon: Blocks,
    title: "Modular Architecture",
    description: "Document or collection storage engines, extensible codebase",
  },
  {
    icon: BarChart3,
    title: "Transactions",
    description: "Begin/commit/rollback with timeout and auto-rollback",
  },
  {
    icon: Type,
    title: "Type Safety",
    description: "Full TypeScript support with comprehensive type definitions",
  },
  {
    icon: Radio,
    title: "Event System",
    description: "Hooks and EventEmitter for reactive programming patterns",
  },
  {
    icon: Package,
    title: "Zero Dependencies",
    description: "Lightweight and self-contained with no external dependencies",
  },
];

export default function NuboDBFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Designed for local development and testing workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
