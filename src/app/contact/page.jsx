'use client';

import { useState } from 'react';
import Image from 'next/image';

// Contact Info Data
const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'We are in',
        details: ['Chapra, Bihar,', 'India, 841401'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: 'Call Us',
        details: ['+91 9229242421', '+91 8102668500'],
        links: ['tel:+919229242421', 'tel:+918102668500'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Email Us',
        details: ['hello@boffodecor.com', 'projects@boffodecor.com'],
        links: ['mailto:hello@boffodecor.com', 'mailto:projects@boffodecor.com'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Working Hours',
        details: ['Monday - Friday: 10am - 7pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'],
    },
];

// Social Links
const socialLinks = [
    { href: 'https://www.instagram.com/boffodecor/', label: 'Instagram' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Using Web3Forms for email delivery
            // Visit https://web3forms.com to generate your free Access Key
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "b393c9af-9d6d-4a8e-9a09-cfc2688bd600", // <--- REPLACE THIS WITH YOUR KEY
                    subject: `New Request: ${formData.projectType} from ${formData.name}`,
                    from_name: "Boffo Decor Website",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    projectType: '',
                    budget: '',
                    timeline: '',
                    message: '',
                });
            } else {
                console.error("Form submission failed:", result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Reset success status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative py-32 bg-[var(--color-cream)]">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                            Get In Touch
                        </p>
                        <h1 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-6">
                            Let's Start Your<br />Design Journey
                        </h1>
                        <div className="divider" />
                        <p className="text-lg text-[var(--color-walnut)] leading-relaxed">
                            Ready to transform your space? Fill out the form below and we'll
                            get back to you within 24 hours to schedule a consultation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <section className="section-padding bg-[var(--color-ivory)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white p-8 md:p-12 shadow-lg">
                                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-[var(--color-charcoal)] mb-8">
                                    Send Us a Message
                                </h2>

                                {submitStatus === 'success' && (
                                    <div className="mb-8 p-4 bg-[var(--color-sage)]/20 border border-[var(--color-sage)] text-[var(--color-charcoal)]">
                                        <p className="font-medium">Thank you for reaching out!</p>
                                        <p className="text-sm mt-1">We've received your message and will get back to you within 24 hours.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700">
                                        <p className="font-medium">Something went wrong.</p>
                                        <p className="text-sm mt-1">Please try again later or contact us directly via phone.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="form-label">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="form-label">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="form-label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    {/* Project Type & Budget Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="projectType" className="form-label">
                                                Project Type *
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                                className="form-select"
                                            >
                                                <option value="">Select project type</option>
                                                <option value="residential-new">Residential - New Build</option>
                                                <option value="residential-renovation">Residential - Renovation</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="hospitality">Hospitality</option>
                                                <option value="consultation">Design Consultation</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="form-label">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="form-select"
                                            >
                                                <option value="">Select budget range</option>
                                                <option value="10-25">₹10 - 25 Lakhs</option>
                                                <option value="25-50">₹25 - 50 Lakhs</option>
                                                <option value="50-100">₹50 Lakhs - 1 Crore</option>
                                                <option value="100+">₹1 Crore+</option>
                                                <option value="undecided">Not Yet Decided</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label htmlFor="timeline" className="form-label">
                                            Preferred Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="immediate">Immediate (Within 1 month)</option>
                                            <option value="1-3months">1 - 3 Months</option>
                                            <option value="3-6months">3 - 6 Months</option>
                                            <option value="6months+">6+ Months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="form-label">
                                            Tell Us About Your Project *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="form-textarea"
                                            placeholder="Describe your project, goals, and any specific requirements..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Contact Cards */}
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-walnut)]">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[var(--color-charcoal)] mb-2">
                                            {info.title}
                                        </h3>
                                        {info.details.map((detail, i) => (
                                            <p key={i} className="text-sm text-[var(--color-walnut)]">
                                                {info.links ? (
                                                    <a
                                                        href={info.links[i]}
                                                        className="hover:text-[var(--color-gold)] transition-colors"
                                                    >
                                                        {detail}
                                                    </a>
                                                ) : (
                                                    detail
                                                )}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Social Links */}
                            <div className="p-6 bg-[var(--color-charcoal)] text-[var(--color-cream)]">
                                <h3 className="font-medium mb-4">Follow Us</h3>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-[var(--color-walnut)] text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)] hover:border-[var(--color-gold)] transition-colors"
                                        >
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="section-padding bg-[var(--color-cream)]">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                                FAQ
                            </p>
                            <h2 className="font-[family-name:var(--font-heading)] text-[var(--color-charcoal)]">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: 'What is your design process?',
                                    a: 'Our process begins with an initial consultation to understand your vision and requirements. We then develop concept designs, followed by detailed drawings and material specifications. After your approval, we oversee the implementation to ensure every detail is executed perfectly.',
                                },
                                {
                                    q: 'How long does a typical project take?',
                                    a: 'Project timelines vary based on scope and complexity. A single room redesign typically takes 4-6 weeks, while a complete home can take 3-6 months. We provide detailed timelines during our initial consultation.',
                                },
                                {
                                    q: 'Do you work with specific budget ranges?',
                                    a: 'We work across various budget levels and are transparent about costs from the start. We tailor our approach to maximize value within your budget.',
                                },
                                {
                                    q: 'Can you work with my existing furniture?',
                                    a: 'Absolutely! We love incorporating meaningful pieces into new designs. During our consultation, we assess your existing items and suggest how they can be integrated or refreshed within the new design concept.',
                                },
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-6">
                                    <h3 className="font-medium text-[var(--color-charcoal)] mb-3">
                                        {faq.q}
                                    </h3>
                                    <p className="text-[var(--color-walnut)] leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
