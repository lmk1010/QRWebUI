import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaFileAlt, FaLink, FaAddressBook, FaTwitter, FaEnvelope, FaWifi, FaArrowRight, FaPlay, FaPalette } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'QR Code Generation Tutorial - Complete User Guide | QRCodeHub',
    description: 'Learn how to create various types of QR codes. Includes detailed tutorials and usage methods for text, URL, contact, Twitter, email, WiFi and other types. Suitable for beginners and professionals.',
    keywords: 'QR code tutorial, QR code user guide, how to make QR code, QR code generation steps, QR code usage instructions, QR code help, learn QR codes',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "QR Code Generation Tutorial - Complete User Guide",
        description: "Learn how to create various types of QR codes. Includes detailed tutorials for text, URL, contact, Twitter, email, WiFi and other types.",
        url: "https://qrcodehub.net/guide",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-guide.png",
                width: 1200,
                height: 630,
                alt: "QR Code Generation Tutorial - Detailed Guide"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generation Tutorial - Complete User Guide",
        description: "Learn how to create various types of QR codes. Includes detailed tutorials for text, URL, contact, Twitter, email, WiFi and other types.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide",
    },
};

// QR Code Type Data
const qrCodeTypes = [
    {
        type: 'text',
        title: 'Text QR Code',
        description: 'Create QR codes containing plain text information, suitable for sharing messages, instructions, or any text content',
        icon: <FaFileAlt className="w-8 h-8" />,
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        examples: ['Welcome Message', 'Product Description', 'Event Details', 'Coupon Code'],
        features: ['Supports All Characters', 'No Length Limit', 'Fast Scanning', 'High Compatibility']
    },
    {
        type: 'url',
        title: 'URL QR Code',
        description: 'Generate QR codes pointing to websites, web pages, or online content. Users can directly jump to the specified URL after scanning',
        icon: <FaLink className="w-8 h-8" />,
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        examples: ['Company Website', 'Product Page', 'Event Registration', 'Online Store'],
        features: ['Auto Redirect', 'HTTPS Support', 'Mobile Optimized', 'Access Statistics']
    },
    {
        type: 'contact',
        title: 'Contact QR Code',
        description: 'Create QR codes containing complete contact information that can be directly added to phone contacts after scanning',
        icon: <FaAddressBook className="w-8 h-8" />,
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        examples: ['Business Card', 'Personal Contact', 'Team Information', 'Customer Service'],
        features: ['One-Click Save', 'Complete Information', 'Multi-Platform Compatible', 'Professional Display']
    },
    {
        type: 'twitter',
        title: 'Twitter QR Code',
        description: 'Generate Twitter-related QR codes that can link to personal profiles or post preset tweets',
        icon: <FaTwitter className="w-8 h-8" />,
        color: 'from-sky-500 to-sky-600',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200',
        examples: ['Personal Profile', 'Tweet Sharing', 'Hashtag Promotion', 'Follow Guide'],
        features: ['Quick Follow', 'Tweet Preset', 'Topic Promotion', 'Social Interaction']
    },
    {
        type: 'email',
        title: 'Email QR Code',
        description: 'Create email QR codes that automatically open email clients and fill in recipients and subjects after scanning',
        icon: <FaEnvelope className="w-8 h-8" />,
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        examples: ['Customer Service', 'Business Cooperation', 'Feedback', 'Subscription Service'],
        features: ['Auto Fill', 'Preset Subject', 'Quick Contact', 'Professional Communication']
    },
    {
        type: 'wifi',
        title: 'WiFi QR Code',
        description: 'Generate WiFi network connection QR codes that allow guests to directly connect to your WiFi network after scanning',
        icon: <FaWifi className="w-8 h-8" />,
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        examples: ['Home WiFi', 'Office Network', 'Coffee Shop', 'Hotel WiFi'],
        features: ['One-Click Connect', 'Password Protection', 'Network Information', 'Easy Sharing']
    }
];

export default function GuidePage() {
    // Structured Data - HowTo Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "QR Code Generation Tutorial - Complete Guide",
        "description": "Learn how to create various types of QR codes. Includes detailed tutorials for text, URL, contact, Twitter, email, WiFi and other types.",
        "image": "https://qrcodehub.net/guide-hero-image.png",
        "totalTime": "PT10M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Computer or Mobile Device"
            },
            {
                "@type": "HowToSupply", 
                "name": "Internet Connection"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub Free QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Choose QR Code Type",
                "text": "Select the appropriate QR code type based on your needs, such as text, URL, contact, etc.",
                "image": "https://qrcodehub.net/step1-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Enter Content",
                "text": "Enter the content or information you want to encode in the corresponding input field.",
                "image": "https://qrcodehub.net/step2-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style",
                "text": "Choose colors, add logos, or modify designs to create personalized QR codes.",
                "image": "https://qrcodehub.net/step3-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click the generate button to create QR codes, then download in your preferred format.",
                "image": "https://qrcodehub.net/step4-image.png"
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
                    {/* Page Title Section */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 text-center fade-in-up">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 subtle-bounce">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                                QR Code Generation Tutorial
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                                Learn how to create various types of professional QR codes, from basic to advanced, master the complete production process
                            </p>
                            <Link 
                                href="/qr-generator"
                                className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                            >
                                <FaPlay className="w-5 h-5" />
                                Start Creating Now
                            </Link>
                        </div>
                    </section>

                    <div className="container mx-auto px-4 py-12">
                        <div className="max-w-7xl mx-auto space-y-20">
                            {/* Quick Start Guide */}
                            <section className="scale-in" style={{ animationDelay: '0.2s' }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                    Quick Start Guide
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-2xl">1</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Choose Type</h3>
                                        <p className="text-gray-600 text-sm">Select the QR code type that best fits your needs</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-2xl">2</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Content</h3>
                                        <p className="text-gray-600 text-sm">Input the information you want to encode</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-2xl">3</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Style</h3>
                                        <p className="text-gray-600 text-sm">Add colors, logos, and personalize your design</p>
                                    </div>
                                    <div className="card-enhanced rounded-3xl p-8 text-center group">
                                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-2xl">4</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-3">Download</h3>
                                        <p className="text-gray-600 text-sm">Generate and download in your preferred format</p>
                                    </div>
                                </div>
                            </section>

                            {/* QR Code Types Section */}
                            <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                    QR Code Types & Tutorials
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {qrCodeTypes.map((type) => (
                                        <Link key={type.type} href={`/guide/${type.type}`} className="group">
                                            <div className="card-enhanced rounded-3xl p-8 h-full group-hover:scale-105 transition-all duration-300 border-l-4" style={{borderLeftColor: `rgb(${type.color.includes('blue') ? '59 130 246' : type.color.includes('green') ? '34 197 94' : type.color.includes('purple') ? '147 51 234' : type.color.includes('sky') ? '14 165 233' : type.color.includes('orange') ? '249 115 22' : '239 68 68'})`}}>
                                                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                    <div className="text-white">
                                                        {type.icon}
                                                    </div>
                                                </div>
                                                <h3 className="font-bold text-gray-800 text-xl mb-4 group-hover:text-blue-600 transition-colors">
                                                    {type.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6 leading-relaxed">
                                                    {type.description}
                                                </p>
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-gray-700 mb-3">Examples:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {type.examples.map((example, i) => (
                                                            <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                                                {example}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-gray-700 mb-3">Features:</h4>
                                                    <ul className="space-y-1">
                                                        {type.features.map((feature, i) => (
                                                            <li key={i} className="text-gray-600 text-sm flex items-center">
                                                                <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                                                        Learn More
                                                    </span>
                                                    <FaArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Best Practices Section */}
                            <section className="scale-in" style={{ animationDelay: '0.6s' }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                    Best Practices & Tips
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="glass-effect rounded-3xl p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Design Tips</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Use high contrast colors (dark on light)
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Keep logos small (max 20% of code size)
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Test QR codes before printing or sharing
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Choose appropriate size for intended use
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="glass-effect rounded-3xl p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Usage Guidelines</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                Include clear scanning instructions
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                Position QR codes at eye level when possible
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                Ensure clean, flat surfaces for printing
                                            </li>
                                            <li className="text-gray-600 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                Add context about what the code does
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
                                <div className="glass-effect rounded-3xl p-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                        Ready to Create Your First QR Code?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Put your new knowledge to use and start creating professional QR codes today
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link 
                                            href="/qr-generator" 
                                            className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                            </svg>
                                            Create QR Code Now
                                        </Link>
                                        <Link 
                                            href="/features" 
                                            className="inline-flex items-center gap-3 text-gray-600 border-2 border-gray-300 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                                        >
                                            <FaPalette className="w-5 h-5" />
                                            View All Features
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 