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
        <div className="flex flex-col min-h-screen">
            {/* 导航栏 */}
            <Navbar />

            {/* 主体内容容器 */}
            <main className="flex-grow relative prevent-horizontal-scroll">
                {/* 背景装饰元素 */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                </div>

                {/* 内容区域 */}
                <div className="relative z-10">
                    <div className="container mx-auto px-4 pt-8 md:pt-16 pb-8 main-container ipad-safe-area">
                        {/* Hero区域 - 整合了标题和CTA的区域 */}
                        <div className="scale-in mb-8 md:mb-16" style={{ animationDelay: '0.2s' }}>
                            <ClientHomePage />
                        </div>
                        
                        {/* 功能展示区域 */}
                        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <SEOContent showOnlyContent={true} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
