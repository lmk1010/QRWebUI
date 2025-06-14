import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import QRGeneratorClient from '../components/QRGeneratorClient';

// QR Code Generator page metadata
export const metadata: Metadata = {
    title: "QR Code Generator - Create Custom QR Codes Online | QRCodeHub",
    description: "Professional QR code generator tool. Create custom QR codes for websites, text, WiFi, email, phone, SMS and more. Advanced customization options with logo support.",
    keywords: "QR code generator, create QR code, custom QR code, QR code maker, generate QR code online, QR code with logo, professional QR codes",
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "QR Code Generator - Create Custom QR Codes Online",
        description: "Professional QR code generator with advanced customization options. Create QR codes with logos, custom colors, and styles.",
        url: "https://qrcodehub.net/qr-generator",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-generator.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub - QR Code Generator Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator - Create Custom QR Codes Online",
        description: "Professional QR code generator with advanced customization options.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-generator.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/qr-generator",
    },
};

export default function QRGeneratorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <QRGeneratorClient />
            </main>
        </div>
    );
} 