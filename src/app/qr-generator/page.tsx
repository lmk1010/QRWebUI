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
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <Navbar />

            {/* Main Content with Modern Background */}
            <main className="flex-grow relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <QRGeneratorClient />
                </div>
            </main>
        </div>
    );
}