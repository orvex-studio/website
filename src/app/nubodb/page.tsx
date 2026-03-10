import type { Metadata } from "next";
import NuboDBPage from "@/components/nubodb/nubodb-page";

export const metadata: Metadata = {
  title: "NuboDB | Local NoSQL Database for Node.js | Orvex Studios",
  description:
    "A fast, feature-rich NoSQL document database for Node.js. TypeScript-first with optional native Go acceleration. Zero dependencies, MongoDB-like queries, built-in encryption.",
  keywords: [
    "nubodb",
    "nosql",
    "database",
    "node.js",
    "typescript",
    "local database",
    "document database",
    "encryption",
    "schema validation",
  ],
  openGraph: {
    title: "NuboDB | Local NoSQL Database for Node.js",
    description:
      "A fast, feature-rich NoSQL document database for Node.js. TypeScript-first with optional native Go acceleration.",
    url: "https://orvex.cc/nubodb",
  },
};

export default function NuboDBRoute() {
  return <NuboDBPage />;
}
