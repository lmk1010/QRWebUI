import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaFileAlt, FaArrowLeft, FaPlay, FaCheck, FaLightbulb, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Text QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for sharing messages, instructions or any text content.',
    keywords: 'text QR code, text QR code creation, text QR code tutorial, how to make text QR code, text QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Text QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/text",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-text-guide.png",
                width: 1200,
                height: 630,
                alt: "Text QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Text QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-text-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/text",
    },
};

export default function TextQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Text QR Code",
        "description": "Detailed text QR code creation tutorial, including step-by-step instructions, use cases, best practices and FAQ.",
        "image": "https://qrcodehub.net/text-qr-guide-image.png",
        "totalTime": "PT5M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Computer or mobile device"
            },
            {
                "@type": "HowToSupply", 
                "name": "Network connection"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub Text QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Text Type",
                "text": "Open the QR code generator and click the \"Text\" option in the left function area to enter text QR code mode.",
                "image": "https://qrcodehub.net/step1-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Enter Text Content",
                "text": "Enter the content you want to encode in the text input box. Supports English, numbers, symbols, etc.",
                "image": "https://qrcodehub.net/step2-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style (Optional)",
                "text": "Click the \"Customize\" button to adjust colors, add a logo, or modify the style to personalize your QR code.",
                "image": "https://qrcodehub.net/step3-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click the \"Generate QR Code\" button to instantly create your text QR code. Then select the download format (PNG, JPG, SVG, PDF).",
                "image": "https://qrcodehub.net/step4-text.png"
            }
        ],
        "author": {
            "@type": "Organization",
            "name": "QRCodeHub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "QRCodeHub"
        }
    };

    const useCases = [
        {
            title: "Welcome Message",
            description: "Create a welcome message for a store, restaurant, or event",
            example: "Welcome to our coffee shop! Scan the QR code for today's special offers.",
            icon: "🏪"
        },
        {
            title: "Product Description",
            description: "Add detailed information on product packaging",
            example: "Product Name: Organic Green Tea\nOrigin: Hangzhou, Zhejiang\nShelf Life: 24 months\nUsage Method: Brew with 80°C water for 3-5 minutes",
            icon: "📦"
        },
        {
            title: "Event Details",
            description: "Share event information and participation methods",
            example: "2024 Spring Photography Contest\nTime: March 15 - April 15\nTheme: Spring Colors\nParticipation Method: Send your work to photo@example.com",
            icon: "📸"
        },
        {
            title: "Discount Coupon Code",
            description: "Provide a discount code or promotional information",
            example: "Discount Coupon Code: SPRING2024\nDiscount: Full Store 20% Off\nValidity Period: March 31, 2024\nUsage Method: Enter the code at checkout to enjoy the discount",
            icon: "🎫"
        },
        {
            title: "Contact Information",
            description: "Share contact information",
            example: "Customer Service Hotline: 400-123-4567\nWork Hours: Monday to Friday 9:00-18:00\nEmail: service@example.com\nAddress: No. xxx, xxx Street, Business District",
            icon: "📞"
        },
        {
            title: "Usage Instructions",
            description: "Provide product usage instructions",
            example: "Smartwatch Usage Instructions:\n1. Press the power button to turn on\n2. Download the accompanying APP\n3. Scan the QR code to pair with the device\n4. Start using various functions",
            icon: "📱"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
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
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 subtle-bounce">
                                    <FaFileAlt className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    Text QR Code Tutorial
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn how to create QR codes for plain text messages, instructions, or any text content. 
                                    Perfect for sharing information quickly and efficiently.
                                </p>
                            </div>

                            {/* Quick Action */}
                            <div className="text-center mb-16">
                                <Link
                                    href="/qr-generator?type=text"
                                    className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Create Text QR Code Now
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Select Text Type</h3>
                                    <p className="text-gray-600 text-sm">Open the QR generator and choose "Text" from the options menu</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Your Text</h3>
                                    <p className="text-gray-600 text-sm">Type or paste the text content you want to encode</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Design</h3>
                                    <p className="text-gray-600 text-sm">Add colors, logos, and adjust styling to match your brand</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Generate & Download</h3>
                                    <p className="text-gray-600 text-sm">Create your QR code and download in your preferred format</p>
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
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group border-l-4 border-blue-500">
                                        <div className="text-4xl mb-4">{useCase.icon}</div>
                                        <h3 className="font-bold text-gray-800 text-xl mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Example:</h4>
                                            <p className="text-gray-600 text-sm whitespace-pre-line">{useCase.example}</p>
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
                                            Keep text concise and clear
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Test QR code before publishing
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use high contrast colors
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Include context about the content
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
                                            Don't use extremely long text
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Avoid low contrast color combinations
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Don't make QR codes too small
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            Avoid special characters that may not scan
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="glass-effect rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    Ready to Create Your Text QR Code?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Start creating professional text QR codes now with our free generator
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link 
                                        href="/qr-generator?type=text" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <FaFileAlt className="w-5 h-5" />
                                        Create Text QR Code
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