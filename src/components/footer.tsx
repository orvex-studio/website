import { FC } from "react";
import { Mail, MessageSquare, Globe } from "lucide-react";

const Footer: FC = () => {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Orvex Services
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
                            We develop products, platforms, and ventures that
                            push boundaries and bring new ideas to life. Where
                            innovation begins.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="mailto:support@orvex.cc"
                                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Mail size={18} className="text-white" />
                            </a>
                            <a
                                href="https://discord.gg/orvex"
                                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <MessageSquare
                                    size={18}
                                    className="text-white"
                                />
                            </a>
                            <a
                                href="https://orvex.cc"
                                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Globe size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Mobile Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Cloud Solutions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Orvex Services. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-3 sm:mt-0">
                        <a
                            href="/legal/privacy"
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/legal/terms"
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
