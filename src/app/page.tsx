import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import About from "@/components/about";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Employees from "@/components/employees";
import Companies from "@/components/companies";

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Orvex Services",
        url: "https://orvex.cc",
        logo: "https://orvex.cc/favicon.png",
        description:
            "Umbrella company developing products, platforms, and ventures that push boundaries and bring new ideas to life.",
        sameAs: ["https://driftlabs.dev"],
        foundingDate: "2025",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "1-10",
        },
        areaServed: "Worldwide",
        knowsAbout: [
            "Product Development",
            "Platform Building",
            "Venture Creation",
            "Technology Innovation",
            "SaaS Products",
            "Developer Tools",
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div>
                <Hero />
                <Services />
                <Pricing />
                <Companies />
                <Employees />
                <About />
                <FAQ />
                <Contact />
            </div>
        </>
    );
}
