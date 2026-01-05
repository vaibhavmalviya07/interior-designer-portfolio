import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Aria Interiors | Premium Interior Design",
    description: "Transform your space with Aria Interiors. We create sophisticated, timeless interiors for high-end residential and commercial clients. Book a consultation today.",
    keywords: ["interior design", "luxury interiors", "residential design", "commercial design", "interior decorator", "home design"],
    authors: [{ name: "Aria Interiors" }],
    openGraph: {
        title: "Aria Interiors | Premium Interior Design",
        description: "Transform your space with Aria Interiors. We create sophisticated, timeless interiors for high-end residential and commercial clients.",
        type: "website",
        locale: "en_IN",
        siteName: "Aria Interiors",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aria Interiors | Premium Interior Design",
        description: "Transform your space with Aria Interiors. We create sophisticated, timeless interiors.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="antialiased">
                <Header />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
