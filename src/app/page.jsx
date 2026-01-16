import Link from 'next/link';
import Image from 'next/image';

// Featured Projects Data
const featuredProjects = [
    {
        id: 1,
        title: 'Modern Master Bedroom',
        category: 'Residential',
        image: '/projects/bedroom-red-chair.jpg',
    },
    {
        id: 2,
        title: 'Luxury Island Kitchen',
        category: 'Residential',
        image: '/projects/luxury-kitchen-island.jpg',
    },
    {
        id: 3,
        title: 'Living Room Mirror Wall',
        category: 'Residential',
        image: '/projects/living-room-mirrors.jpg',
    },
];

// Services Data
const services = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: 'Residential Design',
        description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and aesthetic preferences.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Commercial Spaces',
        description: 'Create impactful work environments that inspire productivity and leave lasting impressions on clients.',
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Renovation',
        description: 'Breathe new life into existing spaces with thoughtful redesigns that maximize potential and functionality.',
    },
];

export default function Home() {
    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
                        alt="Luxurious interior design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-espresso)]/60 via-[var(--color-espresso)]/40 to-[var(--color-espresso)]/70" />
                </div>

                {/* Hero Content */}
                <div className="container-custom relative z-10 text-center text-[var(--color-cream)] py-20">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] mb-6 animate-fade-in-down">
                        Premium Interior Design Studio
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-bold mb-6 animate-fade-in">
                        Crafting Spaces<br />
                        <span className="text-[var(--color-gold)]">That Inspire</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-sand)] max-w-2xl mx-auto mb-10 animate-fade-in-up">
                        We transform ordinary spaces into extraordinary experiences,
                        blending timeless elegance with contemporary sophistication.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                        <Link href="/portfolio" className="btn btn-gold">
                            View Our Work
                        </Link>
                        <Link href="/contact" className="btn btn-outline border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]">
                            Book Consultation
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
                    <div className="w-6 h-10 border-2 border-[var(--color-cream)]/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-[var(--color-cream)] rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* ===== INTRO SECTION ===== */}
            <section className="section-padding bg-[var(--color-ivory)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                                    alt="Interior design process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[var(--color-gold)] -z-10" />
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                                About Us
                            </p>
                            <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                                Where Vision Meets<br />Craftsmanship
                            </h2>
                            <div className="divider" />
                            <p className="text-[var(--color-walnut)] mb-6 leading-relaxed">
                                Boffo Decor is an interior design studio driven by the belief that well-designed spaces elevate everyday living. We specialize in creating functional, aesthetically refined interiors that reflect our clients’ lifestyles, values, and aspirations.
                            </p>
                            <p className="text-[var(--color-walnut)] mb-6 leading-relaxed">
                                Founded with a passion for thoughtful design and practical execution, Boffo Decor offers end-to-end interior solutions for residential and commercial spaces. Our approach balances creativity with functionality—ensuring every space is not only visually striking but also comfortable, efficient, and timeless.
                            </p>
                            <p className="text-[var(--color-walnut)] mb-6 leading-relaxed">
                                At Boffo Decor, we focus on understanding our clients’ needs in depth, translating ideas into cohesive designs through careful planning, material selection, and attention to detail. From concept development to final execution, we collaborate closely with clients to deliver spaces that feel personal, purposeful, and inspiring.
                            </p>
                            <p className="text-[var(--color-walnut)] mb-8 leading-relaxed">
                                With a commitment to quality, transparency, and design integrity, Boffo Decor aims to create interiors that are not just seen, but truly experienced.
                            </p>
                            <Link href="/about" className="btn btn-primary">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section className="section-padding bg-[var(--color-cream)]">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            What We Do
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Our Services
                        </h2>
                        <div className="divider divider-center" />
                        <p className="text-[var(--color-walnut)]">
                            Comprehensive design solutions tailored to your unique needs
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[var(--color-ivory)] p-8 text-center group hover:shadow-xl transition-all duration-500"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-sand)] text-[var(--color-walnut)] mb-6 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-espresso)] transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--color-walnut)] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* ===== FEATURED PROJECTS SECTION ===== */}
            <section className="section-padding bg-[var(--color-ivory)]">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            Our Portfolio
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Featured Projects
                        </h2>
                        <div className="divider divider-center" />
                        <p className="text-[var(--color-walnut)]">
                            A curated selection of our finest work
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/portfolio/${project.id}`}
                                className="group block"
                            >
                                <div className="card">
                                    <div className="card-image aspect-[4/5]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/40 transition-colors duration-500 flex items-center justify-center">
                                            <span className="text-[var(--color-cream)] uppercase tracking-[0.2em] text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-[var(--color-ivory)]">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mt-2 mb-1">
                                            {project.title}
                                        </h3>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-12">
                        <Link href="/portfolio" className="btn btn-primary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIAL SECTION ===== */}
            <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <svg className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-light leading-relaxed mb-8">
                            "Working with Boffo Decor was an absolute pleasure. They transformed our house
                            into a home that perfectly reflects our personality while exceeding our expectations
                            in every way."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-walnut)] overflow-hidden">
                                <Image
                                    src="/client-profile.jpg"
                                    alt="Vaibhav Malviya"
                                    width={56}
                                    height={56}
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <p className="font-medium">Vaibhav Malviya</p>
                                <p className="text-sm text-[var(--color-taupe)]">Homeowner, Lucknow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="relative py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
                        alt="Elegant interior"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[var(--color-espresso)]/80" />
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 text-center text-[var(--color-cream)]">
                    <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] mb-6">
                        Ready to Transform<br />Your Space?
                    </h2>
                    <p className="text-lg text-[var(--color-sand)] max-w-2xl mx-auto mb-10">
                        Let's collaborate to create an interior that reflects your vision and
                        elevates your everyday living experience.
                    </p>
                    <Link href="/contact" className="btn btn-gold">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}
