import {
    Code,
    Smartphone,
    Cloud,
    Database,
    Palette,
    Rocket,
} from "lucide-react";

const services = [
    {
        icon: Rocket,
        title: "Product Development",
        description:
            "We build innovative products from concept to launch, focusing on solving real problems.",
    },
    {
        icon: Cloud,
        title: "Platform Building",
        description:
            "Scalable platforms and infrastructure that power businesses and ecosystems.",
    },
    {
        icon: Code,
        title: "Venture Creation",
        description:
            "We identify opportunities and launch new ventures that push boundaries.",
    },
    {
        icon: Database,
        title: "Technology Solutions",
        description:
            "Cutting-edge technology solutions that transform industries and create value.",
    },
    {
        icon: Smartphone,
        title: "Digital Products",
        description:
            "Web and mobile products that deliver exceptional user experiences.",
    },
    {
        icon: Palette,
        title: "Innovation Labs",
        description:
            "Research and development of next-generation Services and ideas.",
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We develop products, platforms, and ventures that push
                        boundaries and bring new ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ icon: Icon, title, description }, idx) => (
                        <div
                            key={idx}
                            className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                {title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
