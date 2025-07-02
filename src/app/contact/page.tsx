import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

export const metadata: Metadata = {
    title: 'Contact Us - QRCodeHub | Get Support & Help',
    description: 'Contact QRCodeHub for support, questions, or feedback. Get help with QR code generation, technical issues, or business inquiries. We\'re here to help!',
    keywords: 'contact QRCodeHub, QR code support, customer service, technical help, QR code questions, feedback, contact form',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Contact Us - QRCodeHub | Get Support & Help",
        description: "Contact QRCodeHub for support, questions, or feedback. Get help with QR code generation and technical issues.",
        url: "https://qrcodehub.net/contact",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-contact.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub Contact - Get Support"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - QRCodeHub | Get Support & Help",
        description: "Contact QRCodeHub for support, questions, or feedback. Get help with QR code generation and technical issues.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-contact.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/contact",
    },
};

export default function ContactPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact QRCodeHub",
        "description": "Contact QRCodeHub for support, questions, or feedback",
        "url": "https://qrcodehub.net/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "QRCodeHub",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "lmkbnb0@gmail.com",
                "availableLanguage": "English"
            }
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
            <Contact />
        </div>
    );
} 