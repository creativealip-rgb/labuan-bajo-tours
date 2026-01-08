"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Paket Tour", href: "#trips" },
    { name: "Destinasi", href: "#destinations" },
    { name: "Tentang", href: "#about" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${isScrolled ? "bg-primary" : "bg-white"
                            }`}
                    >
                        <span
                            className={`text-xl font-bold ${isScrolled ? "text-white" : "text-primary"
                                }`}
                        >
                            🐉
                        </span>
                    </div>
                    <span
                        className={`text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-white"
                            }`}
                    >
                        Labuan Bajo Tours
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all hover:scale-105 shadow-lg"
                    >
                        Pesan Sekarang
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
                    <div className="flex flex-col gap-2 px-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-2 px-6 py-3 bg-accent text-white font-semibold rounded-full text-center hover:bg-accent-light transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pesan Sekarang
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
