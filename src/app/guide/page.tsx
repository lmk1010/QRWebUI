import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaFileAlt, FaLink, FaAddressBook, FaTwitter, FaEnvelope, FaWifi, FaArrowRight, FaPlay, FaDownload, FaPalette } from 'react-icons/fa';

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
        features: ['Supports Chinese Characters', 'No Length Limit', 'Fast Scanning', 'High Compatibility']
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
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <Navbar />
            
            <main className="flex-grow">
                {/* Page Title Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            QR Code Generation Tutorial
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            Learn how to create various types of professional QR codes, from basic to advanced, master the complete production process
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/qr-generator"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                <FaPlay className="w-4 h-4" />
                                Start Creating QR Codes
                            </Link>
                            <Link
                                href="/faq"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                View FAQ
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Start Guide */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                                Quick Start - Learn to Create QR Codes in 5 Minutes
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-blue-600 font-bold text-xl">1</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Choose Type</h3>
                                    <p className="text-gray-600 text-sm">Select the appropriate QR code type based on your needs</p>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-green-600 font-bold text-xl">2</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Enter Content</h3>
                                    <p className="text-gray-600 text-sm">Fill in the information or content to be encoded</p>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-purple-600 font-bold text-xl">3</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Customize Style</h3>
                                    <p className="text-gray-600 text-sm">Choose colors, add logos and other personalized settings</p>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-orange-600 font-bold text-xl">4</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Generate & Download</h3>
                                    <p className="text-gray-600 text-sm">Generate QR codes and download for use</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/qr-generator"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Start Creating Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QR Code Type Cards */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            Choose Your QR Code Type
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            We support multiple types of QR code generation, each with its specific purpose and advantages
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {qrCodeTypes.map((qr) => (
                                <div key={qr.type} className={`p-6 rounded-2xl ${qr.bgColor} border ${qr.borderColor} shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl bg-white shadow-md`}>
                                            {qr.icon}
                                        </div>
                                        <FaArrowRight className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{qr.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{qr.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {qr.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${qr.color.replace('from-', 'bg-')}`}></div>
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Use Cases:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {qr.examples.map((example, exampleIndex) => (
                                                <span key={exampleIndex} className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border shadow-sm">
                                                    {example}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        <Link
                                            href={`/guide/${qr.type}`}
                                            className="bg-white text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center shadow-sm border"
                                        >
                                            Detailed Tutorial
                                        </Link>
                                        <Link
                                            href={`/qr-generator?template=${qr.type}`}
                                            className={`text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center shadow-md bg-gradient-to-r ${qr.color} hover:opacity-90`}
                                        >
                                            Create Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advanced Features Showcase */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                                Advanced Features & Customization Options
                            </h2>
                            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                                Beyond basic QR code generation, we also provide rich customization options to meet your professional needs
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                                        <FaPalette className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Color Customization</h3>
                                    <p className="text-gray-600 mb-4">
                                        Customize foreground and background colors to create personalized QR codes that match your brand
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Support for any color selection</li>
                                        <li>• High contrast ensures readability</li>
                                        <li>• Brand color matching</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                                        <FaDownload className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Formats</h3>
                                    <p className="text-gray-600 mb-4">
                                        Support for PNG, JPG, SVG, PDF and other formats to meet different usage scenarios
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• PNG - Transparent background</li>
                                        <li>• SVG - Vector format</li>
                                        <li>• PDF - Print specific</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                                        <FaFileAlt className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Logo Addition</h3>
                                    <p className="text-gray-600 mb-4">
                                        Add your logo to the center of the QR code to enhance brand recognition and professionalism
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Support for multiple image formats</li>
                                        <li>• Smart size adjustment</li>
                                        <li>• Maintains scanning reliability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                                QR Code Usage Best Practices
                            </h2>
                            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                                Follow these best practices to ensure your QR codes can be scanned and used correctly
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-green-800">✅ Recommended Practices</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-3">
                                            <span className="text-green-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Test Your QR Code</span>
                                                <p className="text-gray-600 text-sm mt-1">Test scanning effects with multiple devices before official use</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-green-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Use High Contrast</span>
                                                <p className="text-gray-600 text-sm mt-1">Dark foreground with light background ensures scanning reliability</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-green-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Maintain Appropriate Size</span>
                                                <p className="text-gray-600 text-sm mt-1">Minimum 2cm x 2cm, adjust size based on scanning distance</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-green-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Add Instructions</span>
                                                <p className="text-gray-600 text-sm mt-1">Add usage instructions or call-to-action near the QR code</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-red-800">❌ Practices to Avoid</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-3">
                                            <span className="text-red-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Low Contrast Colors</span>
                                                <p className="text-gray-600 text-sm mt-1">Avoid using similar colors for foreground and background</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-red-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Too Small Size</span>
                                                <p className="text-gray-600 text-sm mt-1">Don&apos;t make QR codes too small, affecting scanning effects</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-red-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Logo Too Large</span>
                                                <p className="text-gray-600 text-sm mt-1">Logo should not exceed 20% of QR code area</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="text-red-500 mt-1">•</span>
                                            <div>
                                                <span className="font-semibold text-gray-800">Curved Surface Placement</span>
                                                <p className="text-gray-600 text-sm mt-1">Avoid placing QR codes on curved or wrinkled surfaces</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Create Your QR Code?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Start creating professional QR codes now to improve your business efficiency and user experience
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/qr-generator?template=text"
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg flex items-center gap-2"
                            >
                                <FaPlay className="w-5 h-5" />
                                Start Creating Now
                            </Link>
                            <Link
                                href="/faq"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                            >
                                View FAQ
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 