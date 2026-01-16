import Link from 'next/link';

const footerLinks = {
    navigation: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ],
};

const socialLinks = [
    {
        href: 'https://instagram.com',
        label: 'Instagram',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        href: 'https://pinterest.com',
        label: 'Pinterest',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        href: 'https://houzz.com',
        label: 'Houzz',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 2.223V7.59l4.927 2.763V24l-4.927-2.762-4.928 2.762V10.353l4.928-2.763V2.223l-9.856 5.527V24H0V5l12.001-5L24 5v19h-2.145V7.75l-9.854-5.527z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
            {/* Main Footer */}
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-heading)] flex flex-col leading-none">
                                <span className="text-[var(--color-walnut)] tracking-widest">BOFFO</span>
                                <span className="text-[var(--color-gold)] text-sm tracking-[0.2em]">DECOR</span>
                            </span>
                        </Link>
                        <p className="text-[var(--color-taupe)] mb-6 leading-relaxed">
                            Creating sophisticated, timeless interiors that reflect your unique lifestyle and aspirations.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[var(--color-walnut)] flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.15em] text-[var(--color-gold)] mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--color-taupe)] hover:text-[var(--color-cream)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.15em] text-[var(--color-gold)] mb-6">
                            Get In Touch
                        </h4>
                        <div className="space-y-4 text-[var(--color-taupe)]">
                            <p>
                                <span className="block text-[var(--color-cream)] font-medium">Address</span>
                                123 Design District<br />
                                Mumbai, Maharashtra 400001
                            </p>
                            <p>
                                <span className="block text-[var(--color-cream)] font-medium">Phone</span>
                                <a href="tel:+919876543210" className="hover:text-[var(--color-gold)] transition-colors">
                                    +91 98765 43210
                                </a>
                            </p>
                            <p>
                                <span className="block text-[var(--color-cream)] font-medium">Email</span>
                                <a href="mailto:hello@boffodecor.com" className="hover:text-[var(--color-gold)] transition-colors">
                                    hello@boffodecor.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--color-walnut)]">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--color-taupe)]">
                        © {currentYear} Boffo Decor. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-[var(--color-taupe)]">
                        <Link href="/privacy" className="hover:text-[var(--color-cream)] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[var(--color-cream)] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
