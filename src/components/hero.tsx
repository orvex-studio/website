import { ArrowRight, Zap, Code, Rocket } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white pt-14"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Building the Future
            <span className="block text-violet-400">Of Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-none">
            We develop products, platforms, and ventures that push boundaries
            and bring new ideas to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#contact" className="btn-primary group flex items-center">
            Get Started
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Code size={24} className="text-green-400" />
            <div className="h-8 border-l border-white/15 mx-3"></div>
            <div className="text-left">
              <div className="text-lg font-bold">Full-Stack</div>
              <div className="text-gray-400 text-sm">Development</div>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Rocket size={24} className="text-blue-400" />
            <div className="h-8 border-l border-white/15 mx-3"></div>
            <div className="text-left">
              <div className="text-lg font-bold">Innovation</div>
              <div className="text-gray-400 text-sm">First</div>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Zap size={24} className="text-purple-400" />
            <div className="h-8 border-l border-white/15 mx-3"></div>
            <div className="text-left">
              <div className="text-lg font-bold">Quality</div>
              <div className="text-gray-400 text-sm">Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
