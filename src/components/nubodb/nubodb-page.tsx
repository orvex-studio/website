"use client";

import NuboDBHero from "./hero";
import NuboDBFeatures from "./features";
import NuboDBGettingStarted from "./getting-started";
import NuboDBUseCases from "./use-cases";
import NuboDBDisclaimer from "./disclaimer";
import NuboDBFAQ from "./faq";
import NuboDBFooter from "./footer";

export default function NuboDBPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-14 font-sans nubodb-figtree">
      <NuboDBHero />
      <NuboDBFeatures />
      <NuboDBDisclaimer />
      <NuboDBGettingStarted />
      <NuboDBUseCases />
      <NuboDBFAQ />
      <NuboDBFooter />
      {/* Large faint watermark - below footer */}
      <div
        className="w-full py-8 pointer-events-none select-none"
        aria-hidden
      >
        <div className="text-[clamp(12rem,35vw,28rem)] font-medium leading-none text-white/[0.04] tracking-tighter text-center font-[family-name:var(--font-fredoka)]">
          NuboDB
        </div>
      </div>
    </main>
  );
}
