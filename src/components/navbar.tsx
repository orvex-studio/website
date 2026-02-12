"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/img/orvex-transparent.png"
                                alt="Orvex Services"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="text-xl font-bold text-white">
                                Orvex Services
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            ["Home", "/#home"],
                            ["Services", "/#services"],
                            ["Projects", "/#projects"],
                            ["Companies", "/#companies"],
                            ["Team", "/#team"],
                            ["About", "/#about"],
                            ["Contact", "/#contact"],
                        ].map(([label, href]) => (
                            <Link
                                key={label}
                                href={href}
                                className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <a href="#contact" className="btn-primary">
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-white/80 p-2"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-white/5">
                    <div className="px-4 pt-2 pb-3 space-y-1 bg-black/90">
                        {[
                            ["Home", "/#home"],
                            ["Services", "/#services"],
                            ["Projects", "/#projects"],
                            ["Companies", "/#companies"],
                            ["Team", "/#team"],
                            ["About", "/#about"],
                            ["Contact", "/#contact"],
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                onClick={closeMenu}
                                className="text-white/70 hover:text-white block px-3 py-2 text-sm font-medium"
                            >
                                {label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="btn-primary w-full block text-center"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
