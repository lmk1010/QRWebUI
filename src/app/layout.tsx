// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Free QR Code Generator - Create QR Codes Online | QRCodeHub.net",
    description: "Free online QR code generator and scanner. Create custom QR codes instantly for websites, text, WiFi, social media and more. Fast, secure and completely free QR code maker tool.",
    keywords: [
        "qr code generator",
        "free qr code generator", 
        "qr code scanner",
        "create qr code",
        "qr code maker",
        "online qr generator",
        "custom qr code",
        "qr code creator",
        "generate qr code",
        "qr code tool"
    ],
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
        title: "Free QR Code Generator - Create QR Codes Online",
        description: "Generate free QR codes instantly! Create custom QR codes for websites, text, WiFi, and more. Fast, secure, and easy-to-use QR code generator.",
        url: "https://qrcodehub.net",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free QR Code Generator - Create QR Codes Online",
        description: "Generate free QR codes instantly! Create custom QR codes for websites, text, WiFi, and more.",
        site: "@qrcodehub",
    },
    alternates: {
        canonical: "https://qrcodehub.net",
    },
    other: {
        "google-site-verification": "your-google-verification-code-here",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "QRCodeHub - Free QR Code Generator",
        "description": "Free online QR code generator and scanner. Create custom QR codes instantly.",
        "url": "https://qrcodehub.net",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "QR Code Generator",
            "QR Code Scanner", 
            "Custom QR Codes",
            "Free Online Tool"
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
