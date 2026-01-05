import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About | Aria Interiors',
    description: 'Learn about Aria Interiors - our design philosophy, experience, and commitment to creating extraordinary spaces.',
};

// Experience Timeline Data
const timeline = [
    {
        year: '2012',
        title: 'Founded Aria Interiors',
        description: 'Started with a vision to transform residential spaces into personalized sanctuaries.',
    },
    {
        year: '2015',
        title: 'Expanded to Commercial',
        description: 'Extended our expertise to boutique hotels, restaurants, and corporate offices.',
    },
    {
        year: '2018',
        title: 'Award Recognition',
        description: 'Received the Excellence in Interior Design Award from the Indian Design Council.',
    },
    {
        year: '2021',
        title: '100+ Projects Milestone',
        description: 'Celebrated completing over 100 successful residential and commercial projects.',
    },
    {
        year: '2024',
        title: 'National Expansion',
        description: 'Expanded operations to Bangalore, Delhi, and Goa with satellite studios.',
    },
];

// Values Data
const values = [
    {
        title: 'Timeless Design',
        description: 'We create spaces that transcend trends, focusing on enduring beauty and functionality.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Client-Centric',
        description: 'Every project begins with understanding your unique lifestyle, needs, and aspirations.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: 'Attention to Detail',
        description: 'From material selection to final styling, every element is thoughtfully considered.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        title: 'Sustainable Practices',
        description: 'We prioritize eco-friendly materials and sustainable design solutions wherever possible.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

// Credentials Data
const credentials = [
    { value: '12+', label: 'Years of Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '8', label: 'Design Awards' },
];

export default function AboutPage() {
    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative py-32 bg-[var(--color-cream)]">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            About Us
                        </p>
                        <h1 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Creating Spaces That<br />Tell Your Story
                        </h1>
                        <div className="divider" />
                        <p className="text-lg text-[var(--color-walnut)] leading-relaxed">
                            We believe that great design goes beyond aesthetics – it's about creating
                            environments that enhance the way you live, work, and feel.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== BIOGRAPHY SECTION ===== */}
            <section className="section-padding bg-[var(--color-ivory)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                                    alt="Lead Designer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--color-gold)]/20 -z-10" />
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[var(--color-walnut)] -z-10" />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                                Meet the Founder
                            </p>
                            <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                                Aria Kapoor
                            </h2>
                            <div className="divider" />
                            <p className="text-[var(--color-walnut)] mb-6 leading-relaxed">
                                With a Master's degree in Interior Architecture from the prestigious
                                National Institute of Design and over 12 years of experience, I founded
                                Aria Interiors with a simple belief: everyone deserves a space that
                                reflects their unique story.
                            </p>
                            <p className="text-[var(--color-walnut)] mb-6 leading-relaxed">
                                My design journey has taken me from traditional Indian aesthetics to
                                contemporary minimalism, and I've learned that the most beautiful spaces
                                are those that seamlessly blend functionality with personal expression.
                            </p>
                            <p className="text-[var(--color-walnut)] mb-8 leading-relaxed">
                                When I'm not designing, you'll find me exploring artisan markets,
                                visiting architectural landmarks, or experimenting with new textures
                                and materials in my workshop.
                            </p>

                            {/* Signature */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-[2px] bg-[var(--color-gold)]" />
                                <span className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] italic">
                                    Aria Kapoor
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DESIGN PHILOSOPHY ===== */}
            <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            Our Approach
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] mb-6">
                            Design Philosophy
                        </h2>
                        <div className="divider divider-center bg-[var(--color-gold)]" />
                        <p className="text-lg text-[var(--color-taupe)] leading-relaxed">
                            We believe in creating spaces that are not just visually stunning,
                            but deeply meaningful and perfectly functional for the people who
                            inhabit them.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-6 border border-[var(--color-walnut)] hover:border-[var(--color-gold)] transition-colors group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-walnut)] text-[var(--color-cream)] mb-4 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-espresso)] transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-[family-name:var(--font-heading)] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-[var(--color-taupe)] leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CREDENTIALS / STATS ===== */}
            <section className="py-20 bg-[var(--color-gold)]">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {credentials.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-espresso)] mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm uppercase tracking-[0.1em] text-[var(--color-walnut)]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE / JOURNEY ===== */}
            <section className="section-padding bg-[var(--color-ivory)]">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            Our Journey
                        </p>
                        <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Milestones & Achievements
                        </h2>
                        <div className="divider divider-center" />
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-sand)] transform md:-translate-x-1/2" />

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-gold)] transform -translate-x-1/2 md:-translate-x-1/2 mt-1" />

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <span className="text-3xl font-[family-name:var(--font-heading)] text-[var(--color-gold)]">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mt-2 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--color-walnut)]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="section-padding bg-[var(--color-cream)]">
                <div className="container-custom text-center">
                    <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                        Let's Create Something<br />Beautiful Together
                    </h2>
                    <p className="text-[var(--color-walnut)] max-w-2xl mx-auto mb-8">
                        Ready to transform your space? We'd love to hear about your project
                        and explore how we can bring your vision to life.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </>
    );
}
