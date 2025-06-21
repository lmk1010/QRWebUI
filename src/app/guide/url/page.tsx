import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaLink, FaArrowLeft, FaPlay, FaCheck, FaArrowRight, FaGlobe } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'URL QR Code Creation Tutorial - Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create URL QR codes for websites, landing pages, and online content. Includes best practices, use cases, and detailed instructions.',
    keywords: 'URL QR code, website QR code, link QR code, QR code for website, URL QR code tutorial',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "URL QR Code Creation Tutorial - Step-by-Step Guide",
        description: "Learn how to create URL QR codes for websites, landing pages, and online content. Includes best practices and use cases.",
        url: "https://qrcodehub.net/guide/url",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-url-guide.png",
                width: 1200,
                height: 630,
                alt: "URL QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "URL QR Code Creation Tutorial - Step-by-Step Guide",
        description: "Learn how to create URL QR codes for websites, landing pages, and online content.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-url-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/url",
    },
};

export default function URLQRGuidePage() {
    const useCases = [
        {
            title: "Business Website",
            description: "Direct customers to your company homepage or specific landing pages",
            example: "https://www.yourcompany.com",
            icon: "🏢"
        },
        {
            title: "Product Pages",
            description: "Link directly to specific product or service pages",
            example: "https://shop.example.com/products/premium-coffee",
            icon: "🛍️"
        },
        {
            title: "Social Media Profiles",
            description: "Share your social media profiles and pages",
            example: "https://www.instagram.com/yourcompany",
            icon: "📱"
        },
        {
            title: "Event Registration",
            description: "Direct people to event registration or information pages",
            example: "https://events.example.com/spring-conference-2024",
            icon: "🎟️"
        },
        {
            title: "Online Menus",
            description: "Share restaurant menus or digital catalogs",
            example: "https://menu.restaurant.com/digital-menu",
            icon: "📋"
        },
        {
            title: "Contact Forms",
            description: "Link to contact forms or support pages",
            example: "https://support.company.com/contact",
            icon: "📞"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto fade-in-up">
                            {/* Breadcrumb */}
                            <div className="flex items-center mb-8">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Guide Home
                                </Link>
                            </div>
                            
                            {/* Title Section */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-6 subtle-bounce">
                                    <FaLink className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    URL QR Code Tutorial
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn how to create QR codes for websites, landing pages, and online content. 
                                    Perfect for driving traffic and sharing links effortlessly.
                                </p>
                            </div>

                            {/* Quick Action */}
                            <div className="text-center mb-16">
                                <Link
                                    href="/qr-generator?type=url"
                                    className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Create URL QR Code Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 pb-16">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Step by Step Guide */}
                        <section className="scale-in" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Step-by-Step Guide
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Select URL Type</h3>
                                    <p className="text-gray-600 text-sm">Choose "URL" or "Website" from the QR code type options</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Website URL</h3>
                                    <p className="text-gray-600 text-sm">Paste the complete website URL including https://</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Design</h3>
                                    <p className="text-gray-600 text-sm">Add your brand colors, logo, and styling options</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Generate & Test</h3>
                                    <p className="text-gray-600 text-sm">Create your QR code and test it before downloading</p>
                                </div>
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Popular Use Cases
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group border-l-4 border-green-500">
                                        <div className="text-4xl mb-4">{useCase.icon}</div>
                                        <h3 className="font-bold text-gray-800 text-xl mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Example URL:</h4>
                                            <p className="text-blue-600 text-sm font-mono break-all">{useCase.example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section className="scale-in" style={{ animationDelay: '0.6s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Best Practices & Tips
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Do's</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Always include https:// in your URL
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Test the QR code on multiple devices
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use short, memorable URLs when possible
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Ensure your website is mobile-friendly
                                        </li>
                                    </ul>
                                </div>
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Don'ts</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Don't use broken or expired links
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Avoid extremely long URLs
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Don't link to pages requiring login
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Avoid URLs with special characters
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* URL Tips Section */}
                        <section className="fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                        <FaGlobe className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">URL Formatting Tips</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-3">✅ Correct Format</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="font-mono bg-green-50 p-2 rounded">https://www.example.com</li>
                                            <li className="font-mono bg-green-50 p-2 rounded">https://shop.example.com/products</li>
                                            <li className="font-mono bg-green-50 p-2 rounded">https://example.com/contact</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-3">❌ Incorrect Format</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="font-mono bg-red-50 p-2 rounded">www.example.com</li>
                                            <li className="font-mono bg-red-50 p-2 rounded">example.com</li>
                                            <li className="font-mono bg-red-50 p-2 rounded">http://broken-site.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center fade-in-up" style={{ animationDelay: '1s' }}>
                            <div className="glass-effect rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    Ready to Create Your URL QR Code?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Start driving traffic to your website with professional URL QR codes
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link 
                                        href="/qr-generator?type=url" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <FaLink className="w-5 h-5" />
                                        Create URL QR Code
                                    </Link>
                                    <Link 
                                        href="/guide" 
                                        className="inline-flex items-center gap-3 text-gray-600 border-2 border-gray-300 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                                    >
                                        <FaArrowRight className="w-5 h-5" />
                                        View All Tutorials
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 