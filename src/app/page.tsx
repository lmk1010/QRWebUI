// src/app/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Navbar from './components/Navbar';
import SEOContent from './components/SEOContent';
import ClientHomePage from './components/ClientHomePage';

// 首页专用的metadata
export const metadata: Metadata = {
    title: "Free QR Code Generator - Create Custom QR Codes Online | QRCodeHub",
    description: "Generate professional QR codes instantly with our free online QR code generator. Create custom QR codes for websites, text, WiFi, email, phone, SMS and more. No registration required - completely free forever!",
    keywords: "free QR code generator, create QR code online, custom QR code maker, QR code creator, generate QR code, QR code scanner, online QR generator, QR code tool, business QR codes",
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Free QR Code Generator - Create Custom QR Codes Online",
        description: "Generate professional QR codes instantly! Create custom QR codes for websites, text, WiFi, and more. Fast, secure, and completely free QR code generator.",
        url: "https://qrcodehub.net",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-home.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub - Free QR Code Generator Homepage"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Free QR Code Generator - Create Custom QR Codes Online",
        description: "Generate professional QR codes instantly! Create custom QR codes for websites, text, WiFi, and more.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-home.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net",
    },
    other: {
        "google-site-verification": "your-google-verification-code-here",
    },
};

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 导航栏 */}
            <Navbar />

            {/* 主体内容 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* SEO内容 - 只包含标题和主要CTA按钮 */}
                <SEOContent showOnlyHeader={true} />
                
                {/* 客户端交互内容 */}
                <ClientHomePage />
                
                {/* SEO内容的其余部分 - 功能介绍等 */}
                <SEOContent showOnlyContent={true} />
            </main>
        </div>
    );
}
