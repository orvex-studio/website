"use client";

import {
  Globe,
  Smartphone,
  Server,
  Gamepad2,
  BarChart3,
  Settings,
  LucideIcon,
} from "lucide-react";

const useCases: {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}[] = [
  {
    icon: Globe,
    title: "Local Development",
    description: "Mock data and local state for web app development",
    examples: ["User profiles", "Form data", "Session state"],
  },
  {
    icon: Smartphone,
    title: "Desktop Prototypes",
    description: "Quick local storage for Electron or desktop app prototypes",
    examples: ["Settings", "Offline cache", "User content"],
  },
  {
    icon: Server,
    title: "API Testing",
    description: "Lightweight storage for API and backend testing",
    examples: ["REST APIs", "GraphQL", "Prototyping"],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Local save data and game state during development",
    examples: ["Player progress", "Settings", "Save files"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Logging",
    description: "Collect metrics and logs during development",
    examples: ["Event tracking", "Error logs", "Debug data"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Manage config and feature flags locally",
    examples: ["Feature flags", "Env configs", "A/B testing"],
  },
];

export default function NuboDBUseCases() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            For testing, prototyping, and local development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ icon: Icon, title, description, examples }) => (
            <div
              key={title}
              className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {examples.map((example) => (
                  <span
                    key={example}
                    className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
