import type { Metadata } from "next";
import { Inter, Sora, Figtree, Josefin_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import UnderConstruction from "@/components/under-construction";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//     title: "Orvex Studios",
//     description:
//         "We are working on something amazing. Stay tuned for something incredible. We're working hard behind the scenes.",
//     keywords: [
//         "under construction",
//         "coming soon",
//         "work in progress",
//         "we are working on something amazing",
//         "stay tuned for something incredible",
//     ],
//     authors: [{ name: "Orvex Studios", url: "https://orvex.cc" }],
//     creator: "Orvex Studios",
//     publisher: "Orvex Studios",
//     metadataBase: new URL("https://orvex.cc"),
//     alternates: {
//         canonical: "https://orvex.cc/",
//     },
// };

export const metadata: Metadata = {
  title:
    "Orvex Studios | Where Innovation Begins | Products, Platforms & Ventures",
  description:
    "Orvex Studios is an umbrella company developing products, platforms, and ventures that push boundaries and bring new ideas to life. We build innovative technology solutions including fluxo and other cutting-edge products.",
  keywords: [
    "umbrella company",
    "technology company",
    "product development",
    "platform building",
    "venture creation",
    "innovation",
    "technology ventures",
    "software products",
    "digital platforms",
    "startup ventures",
    "technology innovation",
    "product innovation",
    "venture building",
    "technology solutions",
    "Orvex Studios",
    "orvex",
    "fluxo",
    "developer tools",
    "SaaS products",
    "technology platforms",
  ],
  authors: [{ name: "Orvex Studios", url: "https://orvex.cc" }],
  creator: "Orvex Studios",
  publisher: "Orvex Studios",
  metadataBase: new URL("https://orvex.cc"),
  alternates: {
    canonical: "https://orvex.cc/",
  },
  openGraph: {
    title:
      "Orvex Studios | Where Innovation Begins | Products, Platforms & Ventures",
    description:
      "Orvex Studios is a development company making products, platforms, and ventures that push boundaries and bring new ideas to life. Known for fluxo and other innovative technology solutions.",
    url: "https://orvex.cc",
    siteName: "Orvex Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/icon.png",
        width: 1200,
        height: 630,
        alt: "Orvex Studios - Where Innovation Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orvex Studios | Where Innovation Begins | Products, Platforms & Ventures",
    description:
      "Development studio making products, platforms, and ventures that push boundaries and bring new ideas to life. Known for Fluxo and other innovative technology solutions.",
    images: ["/img/icon.png"],
    site: "@orvexcc",
    creator: "@orvexcc",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Software Development",
  applicationName: "Orvex Studios",
  generator: "Next.js",
  verification: {
    google: undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${figtree.variable} ${josefin.variable} ${fredoka.variable} bg-black antialiased`}
      >
        {/* <UnderConstruction /> */}
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
