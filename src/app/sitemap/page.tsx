import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap - QRCodeHub | Complete Site Navigation',
    description: 'Explore QRCodeHub complete sitemap with all pages, features, and resources. Find everything you need for QR code generation and related services.',
    keywords: 'sitemap, site navigation, QR code generator pages, QRCodeHub structure, website map',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Sitemap - QRCodeHub | Complete Site Navigation",
        description: "Explore QRCodeHub complete sitemap with all pages, features, and resources.",
        url: "https://qrcodehub.net/sitemap",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-sitemap.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub Sitemap - Complete Navigation"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Sitemap - QRCodeHub | Complete Site Navigation",
        description: "Explore QRCodeHub complete sitemap with all pages, features, and resources.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-sitemap.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/sitemap",
    },
};

export default function SitemapPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Sitemap",
        "description": "QRCodeHub complete sitemap and navigation",
        "url": "https://qrcodehub.net/sitemap",
        "mainEntity": {
            "@type": "SiteNavigationElement",
            "name": "QRCodeHub Navigation"
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
                        <div className="max-w-6xl mx-auto">
                            {/* Header */}
                            <header className="text-center mb-16">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                                    Site Map
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Complete navigation guide to all pages and features on QRCodeHub
                                </p>
                            </header>

                            {/* Main Pages */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Main Pages</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <Link href="/" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Home</h3>
                                            <p className="text-gray-600 text-sm">Main landing page with QR code generator overview</p>
                                        </div>
                                    </Link>

                                    <Link href="/qr-generator" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">QR Generator</h3>
                                            <p className="text-gray-600 text-sm">Main QR code creation tool with all features</p>
                                        </div>
                                    </Link>

                                    <Link href="/features" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Features</h3>
                                            <p className="text-gray-600 text-sm">Detailed overview of all QR code generator features</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Guide</h3>
                                            <p className="text-gray-600 text-sm">Complete tutorial and usage guide for QR codes</p>
                                        </div>
                                    </Link>

                                    <Link href="/faq" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">FAQ</h3>
                                            <p className="text-gray-600 text-sm">Frequently asked questions and answers</p>
                                        </div>
                                    </Link>

                                    <Link href="/about" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">About</h3>
                                            <p className="text-gray-600 text-sm">Learn about QRCodeHub company and mission</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Legal Pages */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Legal & Policy</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Link href="/privacy" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">Privacy Policy</h3>
                                            <p className="text-gray-600 text-sm">How we protect your data and privacy</p>
                                        </div>
                                    </Link>

                                    <Link href="/terms" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">Terms of Service</h3>
                                            <p className="text-gray-600 text-sm">Usage terms and conditions</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Guide Subpages */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text text-center">QR Code Guides</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <Link href="/guide/text" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">T</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Text QR Codes</h3>
                                            <p className="text-gray-600 text-sm">How to create text-based QR codes</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide/url" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">U</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">URL QR Codes</h3>
                                            <p className="text-gray-600 text-sm">Creating QR codes for websites</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide/email" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">E</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Email QR Codes</h3>
                                            <p className="text-gray-600 text-sm">QR codes for email addresses</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide/contact" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">C</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Contact QR Codes</h3>
                                            <p className="text-gray-600 text-sm">Business card QR codes</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide/wifi" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">W</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">WiFi QR Codes</h3>
                                            <p className="text-gray-600 text-sm">Network connection QR codes</p>
                                        </div>
                                    </Link>

                                    <Link href="/guide/twitter" className="group">
                                        <div className="glass-effect rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4">
                                                <span className="text-white font-bold">X</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">Twitter QR Codes</h3>
                                            <p className="text-gray-600 text-sm">Social media QR codes</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Quick Links */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Quick Links</h2>
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <Link href="/qr-generator" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • Create QR Code
                                        </Link>
                                        <Link href="/features" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • View Features
                                        </Link>
                                        <Link href="/guide" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • Read Guide
                                        </Link>
                                        <Link href="/faq" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • FAQ
                                        </Link>
                                        <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • About Us
                                        </Link>
                                        <Link href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • Privacy Policy
                                        </Link>
                                        <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • Terms of Service
                                        </Link>
                                        <Link href="mailto:lmkbnb0@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                            • Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="text-center">
                                <div className="glass-effect rounded-3xl p-8 md:p-12">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                                        Ready to Create Your QR Code?
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Now that you&apos;ve explored our complete site structure, 
                                        start creating professional QR codes with our free generator!
                                    </p>
                                    <Link 
                                        href="/qr-generator" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                        Start Creating Now
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