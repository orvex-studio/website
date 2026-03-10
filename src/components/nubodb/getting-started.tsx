"use client";

import { Terminal, FileText, Rocket, Copy, Check } from "lucide-react";
import { useState } from "react";

const WIKI_URL = "https://github.com/orvex-studio/nubodb/wiki";

const steps = [
  {
    icon: Terminal,
    title: "Install NuboDB",
    description: "Add NuboDB to your project",
    code: "npm install nubodb",
  },
  {
    icon: FileText,
    title: "Create Database",
    description: "Initialize your database instance",
    code: `import { createDatabase } from 'nubodb'

// Create a database
const db = createDatabase({ path: './my-database' })

// Open the database
await db.open()

// Get a collection (creates it if it doesn't exist)
const users = await db.collection('users')`,
  },
  {
    icon: Rocket,
    title: "Start Building",
    description: "Insert and query your data",
    code: `// Insert a document
const { document } = await users.insert({
  name: 'Alice',
  email: 'alice@example.com',
  age: 30,
})

// Find documents
const result = await users.find({ age: { $gte: 18 } })

// QueryBuilder
const active = await users
  .query()
  .where('status', 'active')
  .where('age', '$gte', 18)
  .sort({ createdAt: -1 })
  .limit(20)
  .execute()

await db.close()`,
  },
];

export default function NuboDBGettingStarted() {
  const [copiedSteps, setCopiedSteps] = useState<boolean[]>([false, false, false]);

  const copyCode = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSteps((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    setTimeout(() => {
      setCopiedSteps((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 2000);
  };

  return (
    <section id="getting-started" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Three simple steps to get up and running
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  {(() => {
                    const Icon = step.icon;
                    return <Icon className="w-6 h-6 text-blue-400" />;
                  })()}
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                <div className="bg-black/30 rounded-xl overflow-hidden border border-white/10">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    </div>
                    <button
                      onClick={() => copyCode(index, step.code)}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      {copiedSteps[index] ? (
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
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WIKI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View Full Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
