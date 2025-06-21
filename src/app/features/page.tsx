import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import QRCodeLogoPreview from '../components/QRCodeLogoPreview';

export const metadata: Metadata = {
    title: 'QR Code Generator Features - Free Online QR Code Creator | QRCodeHub',
    description: 'Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates. Fast, secure, and completely free with unlimited QR code generation.',
    keywords: 'QR code features, custom QR codes, QR code generator features, free QR code maker, QR code customization, branded QR codes, QR code design, QR code formats, dot styles, QR code frames, QR code templates',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "QR Code Generator Features - Free Online QR Code Creator",
        description: "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        url: "https://qrcodehub.net/features",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-features.png",
                width: 1200,
                height: 630,
                alt: "QR Code Generator Features - Custom QR Codes"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator Features - Free Online QR Code Creator",
        description: "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-features.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/features",
    },
};

export default function FeaturesPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "QR Code Generator Features",
        "description": "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        "url": "https://qrcodehub.net/features",
        "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "QRCodeHub QR Code Generator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "featureList": [
                "Free QR Code Generation",
                "Custom Colors and Design",
                "Logo Integration",
                "Multiple Dot Styles",
                "Frame Templates",
                "Size Customization",
                "Pre-built Templates",
                "High Resolution Output",
                "Built-in QR Scanner",
                "Privacy Protection",
                "Instant Generation"
            ]
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://qrcodehub.net"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Features",
                    "item": "https://qrcodehub.net/features"
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
            
            <main className="flex-grow relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-12">
                        <div className="max-w-6xl mx-auto space-y-20">
                            {/* 页面标题 - 现代化 */}
                            <header className="text-center fade-in-up">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 subtle-bounce">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                                    Powerful QR Code Generator Features
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    Discover why our free QR code generator is the best choice for creating professional, 
                                    customizable QR codes with advanced styling options for all your needs.
                                </p>
                            </header>

                            {/* 核心功能特点 - 升级卡片设计 */}
                            <section className="scale-in" style={{ animationDelay: '0.2s' }}>
                                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
                                    Why Choose Our QR Code Generator?
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">🆓</span>
                                        </div>
                                        <h3 className="font-bold text-blue-800 mb-4 text-xl">Completely Free</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Create unlimited QR codes without any cost. No hidden fees, no subscription required. 
                                            Generate as many QR codes as you need, completely free forever.
                                        </p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">⚡</span>
                                        </div>
                                        <h3 className="font-bold text-green-800 mb-4 text-xl">Instant Generation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Generate QR codes instantly with our lightning-fast QR code generator. 
                                            Create professional QR codes in seconds, not minutes.
                                        </p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">🎨</span>
                                        </div>
                                        <h3 className="font-bold text-purple-800 mb-4 text-xl">Advanced Customization</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Customize your QR codes with colors, logos, dot styles, frames, and templates. 
                                            Create branded QR codes that match your business identity perfectly.
                                        </p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">📱</span>
                                        </div>
                                        <h3 className="font-bold text-orange-800 mb-4 text-xl">Built-in QR Scanner</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Test your QR codes instantly with our built-in QR code scanner. 
                                            Verify that your generated QR codes work perfectly before using them.
                                        </p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">🔒</span>
                                        </div>
                                        <h3 className="font-bold text-red-800 mb-4 text-xl">Secure & Private</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Your data stays completely private. We don&apos;t store your QR code content 
                                            on our servers. Generate QR codes with complete privacy and security.
                                        </p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">📊</span>
                                        </div>
                                        <h3 className="font-bold text-teal-800 mb-4 text-xl">High Quality Output</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Generate high-resolution QR codes suitable for both digital and print use. 
                                            Download in multiple formats including PNG, JPG, SVG, and PDF.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Dot Styles 功能 - 现代化设计 */}
                            <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
                                    Advanced Dot Style Customization
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="card-enhanced rounded-3xl p-8 text-center group border-l-4 border-blue-500">
                                        <div className="text-5xl mb-4">⬜</div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Square Dots</h3>
                                        <p className="text-gray-600 text-sm">Classic square dots for traditional QR codes with professional appearance</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group border-l-4 border-green-500">
                                        <div className="text-5xl mb-4">⭕</div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Circle Dots</h3>
                                        <p className="text-gray-600 text-sm">Smooth circular dots for modern appearance and contemporary design</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group border-l-4 border-purple-500">
                                        <div className="text-5xl mb-4">💧</div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Fluid Style</h3>
                                        <p className="text-gray-600 text-sm">Organic fluid shapes that intelligently connect for smooth visual effects</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group border-l-4 border-orange-500">
                                        <div className="text-5xl mb-4">💎</div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Diamond Style</h3>
                                        <p className="text-gray-600 text-sm">Elegant diamond shapes for premium and luxury brand appearances</p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <div className="glass-effect rounded-3xl p-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                        Ready to Create Your QR Code?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Start creating professional QR codes with all these amazing features completely free
                                    </p>
                                    <Link 
                                        href="/qr-generator" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                        Create QR Code Now
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 