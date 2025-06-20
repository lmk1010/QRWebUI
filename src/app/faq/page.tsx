import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaRocket, FaShieldAlt, FaPalette, FaDownload, FaQuestionCircle, FaArrowRight, FaStar, FaCheck, FaLock } from 'react-icons/fa';

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
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData)
                }}
            />
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <header className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                            <FaQuestionCircle className="text-white text-2xl" />
                        </div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Everything you need to know about our free QR code generator. 
                            Can't find what you're looking for? Check our detailed guides or contact us.
                        </p>
                    </header>

                    {/* Free Version Features Highlight */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                            <div className="flex items-center mb-6">
                                <FaRocket className="text-green-600 text-3xl mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Free Version Features</h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Unlimited QR Codes</h3>
                                        <p className="text-gray-600 text-sm">Create as many QR codes as you need</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Multiple Types</h3>
                                        <p className="text-gray-600 text-sm">URL, text, email, phone, WiFi, contact</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Basic Customization</h3>
                                        <p className="text-gray-600 text-sm">Colors, logo upload, style options</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Multiple Formats</h3>
                                        <p className="text-gray-600 text-sm">PNG, JPG, SVG, PDF downloads</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">No Registration</h3>
                                        <p className="text-gray-600 text-sm">Start creating immediately</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Privacy Focused</h3>
                                        <p className="text-gray-600 text-sm">No data stored on servers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div className="flex items-center">
                                    <FaLock className="text-yellow-600 mr-3" />
                                    <p className="text-yellow-800">
                                        <strong>Pro Version:</strong> Advanced features like analytics, dynamic QR codes, 
                                        bulk generation, and team collaboration require login and Pro subscription.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Navigation Cards */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Navigation</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link href="/qr-generator" className="group h-full">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold">Create QR Code</h3>
                                        <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-blue-100 mb-6 flex-grow">
                                        Start creating your custom QR codes right now. Choose from multiple types and customize to match your brand.
                                    </p>
                                    <div className="flex items-center text-blue-100 mt-auto">
                                        <span className="font-semibold">Get Started</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                            
                            <Link href="/guide" className="group h-full">
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold">View Tutorials</h3>
                                        <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-purple-100 mb-6 flex-grow">
                                        Learn how to create different types of QR codes with our comprehensive step-by-step guides.
                                    </p>
                                    <div className="flex items-center text-purple-100 mt-auto">
                                        <span className="font-semibold">Learn More</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* FAQ Categories */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaRocket className="text-blue-600 text-2xl" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">Getting Started</h3>
                            <p className="text-gray-600">Basic questions about using our free QR code generator</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaPalette className="text-green-600 text-2xl" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">Customization</h3>
                            <p className="text-gray-600">Design and branding options for your QR codes</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaShieldAlt className="text-purple-600 text-2xl" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">Technical & Security</h3>
                            <p className="text-gray-600">Scanning issues, formats, and privacy concerns</p>
                        </div>
                    </div>

                    {/* Getting Started FAQ */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Getting Started</h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center">
                                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
                                    Is this QR code generator really free?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Yes! Our QR code generator is completely free to use. You can create unlimited QR codes 
                                    without any registration, hidden costs, or subscription fees. We believe in providing 
                                    free access to essential digital tools for everyone.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-blue-800 text-sm">
                                        <strong>Free Features:</strong> Unlimited QR codes, multiple types, basic customization, 
                                        multiple download formats, no registration required, privacy-focused.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center">
                                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600 font-bold">2</span>
                                    Do I need to register or create an account?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    No registration required! You can start creating QR codes immediately without providing 
                                    any personal information. Simply visit our homepage and begin generating QR codes right away.
                                </p>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-yellow-800 text-sm">
                                        <strong>Note:</strong> Advanced features like analytics, dynamic QR codes, and team 
                                        collaboration require Pro version login.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center">
                                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-600 font-bold">3</span>
                                    What types of QR codes can I create?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You can create QR codes for various purposes:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Website URLs and links</li>
                                        <li>Plain text messages</li>
                                        <li>Email addresses with pre-filled content</li>
                                        <li>Phone numbers for direct calling</li>
                                    </ul>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>SMS messages</li>
                                        <li>WiFi network credentials</li>
                                        <li>Contact information (vCard)</li>
                                        <li>Social media profiles</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <Link href="/guide" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                                        <span>View detailed tutorials for each type</span>
                                        <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Customization FAQ */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Customization & Design</h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">Can I customize my QR code design?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Absolutely! You can customize colors, add logos, change patterns, and adjust the design 
                                    to match your brand or preferences. Our customization options include:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Foreground and background colors</li>
                                        <li>Logo integration (PNG, JPG, SVG)</li>
                                        <li>Various style patterns</li>
                                        <li>Frame options</li>
                                    </ul>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Dot style customization</li>
                                        <li>Size adjustments</li>
                                        <li>Error correction levels</li>
                                        <li>Border and padding options</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-green-800 text-sm">
                                        <strong>Pro Tip:</strong> Keep logos small (max 20% of QR code size) to ensure reliable scanning.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">What colors work best for QR codes?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    High contrast combinations work best for reliable scanning:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-green-600 mb-2">✅ Recommended</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Black on white</li>
                                            <li>Dark blue on light gray</li>
                                            <li>Dark green on white</li>
                                            <li>Any dark color on light background</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-600 mb-2">❌ Avoid</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Light colors on light backgrounds</li>
                                            <li>Very similar color combinations</li>
                                            <li>Red on green (colorblind issues)</li>
                                            <li>Low contrast combinations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical FAQ */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical & Security</h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">What file formats can I download?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You can download your QR codes in multiple formats:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                                            <span className="font-bold text-blue-600 mr-3">PNG</span>
                                            <span className="text-gray-700">Best for web use and digital applications</span>
                                        </div>
                                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                            <span className="font-bold text-green-600 mr-3">JPG</span>
                                            <span className="text-gray-700">Smaller file size, good for general use</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                                            <span className="font-bold text-purple-600 mr-3">SVG</span>
                                            <span className="text-gray-700">Vector format, perfect for scalable graphics</span>
                                        </div>
                                        <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                            <span className="font-bold text-orange-600 mr-3">PDF</span>
                                            <span className="text-gray-700">Ideal for professional printing and documents</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">Why won't my QR code scan?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Common reasons why QR codes don't scan:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-red-600 mb-3">Common Issues</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Poor contrast between colors</li>
                                            <li>QR code too small or too large</li>
                                            <li>Damaged or distorted surface</li>
                                            <li>Logo blocking too much code</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-600 mb-3">Solutions</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use high contrast colors</li>
                                            <li>Test different sizes</li>
                                            <li>Ensure flat, clean surface</li>
                                            <li>Keep logos small (max 20%)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">Is my data stored on your servers?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    No! We prioritize your privacy. All QR code generation happens in your browser, and we 
                                    don't store your QR code content on our servers. Your data remains completely private 
                                    and secure throughout the entire process.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-green-800 text-sm">
                                        <strong>Privacy First:</strong> Your QR code content never leaves your device. 
                                        We use client-side generation for maximum security.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-gray-800 mb-4 text-xl">Do QR codes expire?</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    QR codes themselves don't expire - they're just encoded data. However, if your QR code 
                                    links to a website or online content, that content might become unavailable over time. 
                                    Static QR codes (like text or contact info) will work indefinitely as long as the 
                                    physical code remains readable.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-blue-800 text-sm">
                                        <strong>Pro Version:</strong> Dynamic QR codes with analytics and content updates 
                                        are available in our Pro version.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
                        <h2 className="text-4xl font-bold mb-6">Ready to Create Your QR Code?</h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Start generating professional QR codes in minutes. No registration required!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/qr-generator" 
                                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                            >
                                <FaRocket className="mr-2" />
                                Create QR Code Now
                            </Link>
                            <Link
                                href="/guide" 
                                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                            >
                                <FaQuestionCircle className="mr-2" />
                                View Tutorials
                            </Link>
                        </div>
                        <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl">
                            <p className="text-blue-100">
                                <strong>Need advanced features?</strong> Check out our Pro version for analytics, 
                                dynamic QR codes, bulk generation, and team collaboration.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
} 