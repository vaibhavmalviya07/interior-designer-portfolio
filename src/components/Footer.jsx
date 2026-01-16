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
        href: 'https://www.instagram.com/boffodecor/',
        label: 'Instagram',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                                Chapra, Bihar,<br />
                                India, 841401
                            </p>
                            <p>
                                <span className="block text-[var(--color-cream)] font-medium">Phone</span>
                                <a href="tel:+919229242421" className="hover:text-[var(--color-gold)] transition-colors">
                                    +91 9229242421
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

                </div>
            </div>
        </footer>
    );
}
