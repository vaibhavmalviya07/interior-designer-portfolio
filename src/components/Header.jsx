'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[var(--color-ivory)]/95 backdrop-blur-md shadow-md py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <nav className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 overflow-hidden rounded-sm">
                        <img 
                            src="/logo.jpg" 
                            alt="Boffo Decor Logo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)] flex flex-col leading-none">
                        <span className="text-[var(--color-walnut)] tracking-widest">BOFFO</span>
                        <span className="text-[var(--color-gold)] text-sm tracking-[0.2em]">DECOR</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-[0.1em] text-[var(--color-walnut)] hover:text-[var(--color-gold)] link-hover transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button (Desktop) */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="btn btn-primary text-xs"
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-[72px] bg-[var(--color-ivory)] transition-all duration-500 ${isMenuOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                <div className="container-custom py-8 flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-[var(--color-sand)]">
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="btn btn-gold text-sm w-full"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
