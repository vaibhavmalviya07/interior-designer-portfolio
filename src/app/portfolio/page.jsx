import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Portfolio | Boffo Decor',
    description: 'Explore our portfolio of luxurious interior design projects. From modern minimalism to traditional elegance, view our finest work.',
};

const projects = [
    // Bedroom Projects
    {
        id: 1,
        title: 'Modern Master Bedroom',
        category: 'Bedroom',
        image: '/projects/bedroom-red-chair.jpg',
        description: 'Contemporary bedroom design with bold accent furniture.'
    },
    {
        id: 2,
        title: 'Walk-in Closet Suite',
        category: 'Bedroom',
        image: '/projects/bedroom-walkin-closet.jpg',
        description: 'Luxurious walk-in closet with custom joinery.'
    },
    {
        id: 3,
        title: 'Family Bedroom',
        category: 'Bedroom',
        image: '/projects/bedroom-family-photo.jpg',
        description: 'Warm and inviting bedroom space for the whole family.'
    },
    {
        id: 4,
        title: 'Arch & Accent Bedroom',
        category: 'Bedroom',
        image: '/projects/bedroom-arch-design.jpg',
        description: 'Featuring elegantly lighted arches and textured walls.'
    },
    {
        id: 5,
        title: 'Luxury Grey Suite',
        category: 'Bedroom',
        image: '/projects/grey-luxury-bedroom.jpg',
        description: 'Sophisticated grey tones with premium finishes.'
    },
    {
        id: 6,
        title: 'Bedroom Entertainment',
        category: 'Bedroom',
        image: '/projects/bedroom-tv-unit-design.jpg',
        description: 'Integrated TV unit design with marble back panel.'
    },
    // Kitchen & Dining
    {
        id: 7,
        title: 'Modern Kitchen Bar',
        category: 'Kitchen',
        image: '/projects/modern-kitchen-bar.jpg',
        description: 'Open concept kitchen with breakfast counter.'
    },
    {
        id: 8,
        title: 'Luxury Island Kitchen',
        category: 'Kitchen',
        image: '/projects/luxury-kitchen-island.jpg',
        description: 'Spacious kitchen island with premium appliances.'
    },
    {
        id: 9,
        title: 'Kitchen Partition',
        category: 'Kitchen',
        image: '/projects/kitchen-partition-design.jpg',
        description: 'Functional and aesthetic partition design.'
    },
    {
        id: 10,
        title: 'White & Gold Kitchen',
        category: 'Kitchen',
        image: '/projects/white-gold-kitchen.jpg',
        description: 'Classic white kitchen with elegant gold accents.'
    },
    {
        id: 11,
        title: 'Contemporary Kitchen',
        category: 'Kitchen',
        image: '/projects/brown-white-kitchen.jpg',
        description: 'Modern two-tone kitchen cabinetry.'
    },
    {
        id: 12,
        title: 'Gold Accent Dining',
        category: 'Dining',
        image: '/projects/dining-room-gold-partition.jpg',
        description: 'Dining space featuring gold partition details.'
    },
    {
        id: 13,
        title: 'Blue Dining Suite',
        category: 'Dining',
        image: '/projects/dining-room-blue-chairs.jpg',
        description: 'Vibrant blue upholstered chairs for a pop of color.'
    },
    // Bathroom
    {
        id: 14,
        title: 'Beige Serenity Bath',
        category: 'Bathroom',
        image: '/projects/bathroom-beige.jpg',
        description: 'Calming beige tones for a spa-like feel.'
    },
    {
        id: 15,
        title: 'Patterned Tile Bath',
        category: 'Bathroom',
        image: '/projects/bathroom-patterned-tiles.jpg',
        description: 'Feature wall with intricate patterned tiles.'
    },
    {
        id: 16,
        title: 'Bathroom Overview',
        category: 'Bathroom',
        image: '/projects/bathroom-top-down-view.jpg',
        description: 'Top-down view of a spacious bathroom layout.'
    },
    {
        id: 17,
        title: 'Luxury Vanity',
        category: 'Bathroom',
        image: '/projects/bathroom-luxury-vanity.jpg',
        description: 'Premium vanity design with large mirror.'
    },
    // Living / Kids / Special
    {
        id: 18,
        title: 'Living Room Mirror Wall',
        category: 'Living Room',
        image: '/projects/living-room-mirrors.jpg',
        description: 'Expansive feeling created with strategic mirror placement.'
    },
    {
        id: 19,
        title: 'Ceiling Detail',
        category: 'Living Room',
        image: '/projects/ceiling-clock-design.jpg',
        description: 'Unique ceiling design details and lighting.'
    },
    {
        id: 20,
        title: 'World Map Kids Room',
        category: 'Kids Room',
        image: '/projects/kids-room-map-ceiling.jpg',
        description: 'Playful kids room with world map ceiling feature.'
    },
];

export default function PortfolioPage() {
    return (
        <div className="bg-[var(--color-cream)]">
            {/* ===== HERO SECTION ===== */}
            <section className="relative py-24 bg-[var(--color-charcoal)] text-[var(--color-cream)]">
                <div className="container-custom text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 animate-fade-in-down">
                        Our Work
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] mb-6 animate-fade-in">
                        Portfolio Showcase
                    </h1>
                    <p className="text-lg text-[var(--color-sand)] max-w-2xl mx-auto animate-fade-in-up">
                        A curated collection of our finest interior design projects,
                        reflecting our passion for creating beautiful, functional spaces.
                    </p>
                </div>
            </section>

            {/* ===== GALLERY SECTION ===== */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-[var(--color-ivory)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/20 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)] block mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-walnut)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-taupe)]">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-20">
                        <h2 className="text-3xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Inspired by what you see?
                        </h2>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
