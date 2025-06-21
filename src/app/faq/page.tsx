import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaRocket, FaQuestionCircle, FaArrowRight, FaCheck, FaLock } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'QR Code Generator FAQ - Frequently Asked Questions | QRCodeHub',
    description: 'Find answers to common questions about our free QR code generator. Learn about QR code creation, customization, formats, troubleshooting, and best practices. Get help with QR code scanning and usage.',
    keywords: 'QR code FAQ, QR code questions, QR code help, QR code generator support, QR code troubleshooting, QR code problems, QR code answers, QR code assistance',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "QR Code Generator FAQ - Frequently Asked Questions",
        description: "Find answers to common questions about our free QR code generator. Learn about QR code creation, customization, formats, and best practices.",
        url: "https://qrcodehub.net/faq",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-faq.png",
                width: 1200,
                height: 630,
                alt: "QR Code Generator FAQ - Get Answers to Your Questions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator FAQ - Frequently Asked Questions",
        description: "Find answers to common questions about our free QR code generator. Learn about QR code creation, customization, and best practices.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-faq.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/faq",
    },
};

export default function FAQPage() {
    // FAQ structured data
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this QR code generator really free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our QR code generator is completely free to use. You can create unlimited QR codes without any registration, hidden costs, or subscription fees. We believe in providing free access to essential digital tools for everyone."
                }
            },
            {
                "@type": "Question",
                "name": "What features are included in the free version?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our free version includes: Unlimited QR code generation, Multiple QR code types (URL, text, email, phone, WiFi, contact), Basic customization options (colors, logo upload), Multiple download formats (PNG, JPG, SVG, PDF), No registration required, Privacy-focused (no data storage), and Commercial usage rights."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to register or create an account?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No registration required! You can start creating QR codes immediately without providing any personal information. Simply visit our homepage and begin generating QR codes right away. For advanced features and Pro version, login will be required."
                }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData)
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
                            {/* Hero Section */}
                            <header className="text-center fade-in-up">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 subtle-bounce">
                                    <FaQuestionCircle className="text-white text-3xl" />
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                                    Frequently Asked Questions
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    Everything you need to know about our free QR code generator. 
                                    Can&apos;t find what you&apos;re looking for? Check our detailed guides or contact us.
                                </p>
                            </header>

                            {/* Free Version Features Highlight */}
                            <section className="scale-in" style={{ animationDelay: '0.2s' }}>
                                <div className="glass-effect rounded-3xl p-8 md:p-12 border border-green-200/30">
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
                                            <FaRocket className="text-white text-2xl" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Free Version Features</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">Unlimited QR Codes</h3>
                                                <p className="text-gray-600 text-sm">Create as many QR codes as you need</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">Multiple Types</h3>
                                                <p className="text-gray-600 text-sm">URL, text, email, phone, WiFi, contact</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">Basic Customization</h3>
                                                <p className="text-gray-600 text-sm">Colors, logo upload, style options</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">Multiple Formats</h3>
                                                <p className="text-gray-600 text-sm">PNG, JPG, SVG, PDF downloads</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">No Registration</h3>
                                                <p className="text-gray-600 text-sm">Start creating immediately</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-2">Privacy Focused</h3>
                                                <p className="text-gray-600 text-sm">No data stored on servers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-yellow-50/80 border border-yellow-200/50 rounded-2xl">
                                        <div className="flex items-center">
                                            <FaLock className="text-yellow-600 mr-3 text-xl" />
                                            <p className="text-yellow-800 font-medium">
                                                <strong>Pro Version:</strong> Advanced features like analytics, dynamic QR codes, 
                                                bulk generation, and team collaboration require login and Pro subscription.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Quick Navigation Cards */}
                            <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Quick Navigation</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <Link href="/qr-generator" className="group h-full">
                                        <div className="card-enhanced rounded-3xl p-8 text-white group h-full flex flex-col relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-2xl font-bold">Create QR Code</h3>
                                                    <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                                                </div>
                                                <p className="text-blue-100 mb-6 flex-grow leading-relaxed">
                                                    Start creating your custom QR codes right now. Choose from multiple types and customize to match your brand.
                                                </p>
                                                <div className="flex items-center text-blue-100 mt-auto">
                                                    <span className="font-semibold">Get Started</span>
                                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    <Link href="/guide" className="group h-full">
                                        <div className="card-enhanced rounded-3xl p-8 text-white group h-full flex flex-col relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-2xl font-bold">View Tutorials</h3>
                                                    <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                                                </div>
                                                <p className="text-purple-100 mb-6 flex-grow leading-relaxed">
                                                    Learn how to create different types of QR codes with our comprehensive step-by-step guides.
                                                </p>
                                                <div className="flex items-center text-purple-100 mt-auto">
                                                    <span className="font-semibold">Learn More</span>
                                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Main FAQ Content */}
                            <section className="scale-in" style={{ animationDelay: '0.6s' }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Common Questions & Answers</h2>
                                <div className="space-y-6">
                                    {/* FAQ Items with modern card design */}
                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            🆓 Is this QR code generator really free?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Yes! Our QR code generator is completely free to use. You can create unlimited QR codes without any registration, 
                                            hidden costs, or subscription fees. We believe in providing free access to essential digital tools for everyone.
                                        </p>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            ⚙️ What features are included in the free version?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Our free version includes everything you need to create professional QR codes:
                                        </p>
                                        <ul className="text-gray-600 space-y-2 ml-4">
                                            <li>• Unlimited QR code generation</li>
                                            <li>• Multiple QR code types (URL, text, email, phone, WiFi, contact)</li>
                                            <li>• Basic customization options (colors, logo upload)</li>
                                            <li>• Multiple download formats (PNG, JPG, SVG, PDF)</li>
                                            <li>• No registration required</li>
                                            <li>• Privacy-focused (no data storage)</li>
                                            <li>• Commercial usage rights</li>
                                        </ul>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            👤 Do I need to register or create an account?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            No registration required! You can start creating QR codes immediately without providing any personal information. 
                                            Simply visit our homepage and begin generating QR codes right away. For advanced Pro features, an account will be required.
                                        </p>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            🎨 Can I customize my QR codes?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Absolutely! You can customize colors, upload logos, choose different dot styles, add frames, 
                                            and select from various templates. Our customization options help you create QR codes that match your brand identity.
                                        </p>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            📱 How do I scan QR codes?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Most modern smartphones can scan QR codes using the built-in camera app. We also provide a built-in QR code scanner 
                                            on our website for testing purposes. Simply point your camera at the QR code and follow the prompt.
                                        </p>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            📄 What file formats can I download?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            You can download your QR codes in multiple high-quality formats: PNG (best for web use), 
                                            JPG (universal compatibility), SVG (vector format for scaling), and PDF (print-ready format).
                                        </p>
                                    </div>

                                    <div className="card-enhanced rounded-3xl p-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            🔒 Is my data stored on your servers?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            No! All QR code generation happens locally in your browser. We don&apos;t store your QR code content, 
                                            personal information, or any data on our servers. Your privacy is completely protected.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
                                <div className="glass-effect rounded-3xl p-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                        Ready to Create Your QR Code?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Start creating professional QR codes now with all our free features
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