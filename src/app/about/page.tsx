import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import About from '../components/About';

export const metadata: Metadata = {
    title: 'About QRCodeHub - Free QR Code Generator | Our Mission & Story',
    description: 'Learn about QRCodeHub, our mission to democratize QR code technology, and our commitment to providing free, accessible, and innovative QR code generation tools for everyone worldwide.',
    keywords: 'about QRCodeHub, QR code generator company, QR code technology, free QR code tools, QR code innovation, QRCodeHub mission, QR code platform',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "About QRCodeHub - Free QR Code Generator | Our Mission & Story",
        description: "Learn about QRCodeHub, our mission to democratize QR code technology, and our commitment to providing free, accessible, and innovative QR code generation tools.",
        url: "https://qrcodehub.net/about",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-about.png",
                width: 1200,
                height: 630,
                alt: "About QRCodeHub - Our Mission and Story"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About QRCodeHub - Free QR Code Generator | Our Mission & Story",
        description: "Learn about QRCodeHub, our mission to democratize QR code technology, and our commitment to providing free, accessible, and innovative QR code generation tools.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-about.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/about",
    },
};

export default function AboutPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QRCodeHub",
        "description": "Free online QR code generator and scanner. Create custom QR codes instantly for websites, text, WiFi, social media and more.",
        "url": "https://qrcodehub.net",
        "logo": "https://qrcodehub.net/logo.png",
        "foundingDate": "2023",
        "mission": "To provide the most user-friendly, feature-rich, and completely free QR code generation platform that empowers individuals and businesses to bridge the gap between physical and digital worlds seamlessly.",
        "slogan": "Empowering Digital Innovation Through Accessible QR Code Technology",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Worldwide"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "lmkbnb0@gmail.com"
        },
        "sameAs": [
            "https://qrcodehub.net"
        ],
        "knowsAbout": [
            "QR Code Generation",
            "Digital Technology",
            "Web Development",
            "User Experience Design",
            "Mobile Applications",
            "Digital Marketing"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "QR Code Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Free QR Code Generator",
                        "description": "Create unlimited QR codes for free"
                    }
                }
            ]
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <Navbar />
            <About />
        </div>
    );
} 