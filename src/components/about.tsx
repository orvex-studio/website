import { FC } from "react";
import { Users, Award, Clock, MapPin } from "lucide-react";

const About: FC = () => {
    return (
        <section id="about" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            About Orvex Services
                        </h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Orvex Services is develops products, platforms, and
                            ventures that push boundaries and bring new ideas to
                            life. We focus on innovation, building cutting-edge
                            technology solutions that transform industries.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Our mission is to identify opportunities, develop
                            innovative solutions, and launch ventures that make
                            a meaningful impact. From software products to
                            technology platforms, we build the future of
                            technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FeatureCard
                            icon={<Users size={24} className="text-white" />}
                            title="Innovation Driven"
                            description="We identify opportunities and develop products that push boundaries and create value."
                        />
                        <FeatureCard
                            icon={<Award size={24} className="text-white" />}
                            title="Quality Focused"
                            description="We maintain the highest standards in everything we build, from products to platforms."
                        />
                        <FeatureCard
                            icon={<Clock size={24} className="text-white" />}
                            title="Rapid Execution"
                            description="We move quickly from concept to launch, bringing innovative ideas to market faster."
                        />
                        <FeatureCard
                            icon={<MapPin size={24} className="text-white" />}
                            title="Venture Building"
                            description="We don't just build products—we build companies and platforms that scale."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

export default About;
