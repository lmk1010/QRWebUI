import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaFileAlt, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

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
                "text": "Open the QR code generator and click the &quot;Text&quot; option in the left function area to enter text QR code mode.",
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
                "text": "Click the &quot;Customize&quot; button to adjust colors, add a logo, or modify the style to personalize your QR code.",
                "image": "https://qrcodehub.net/step3-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click the &quot;Generate QR Code&quot; button to instantly create your text QR code. Then select the download format (PNG, JPG, SVG, PDF).",
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
            example: "Welcome to our coffee shop! Scan the QR code for today&apos;s special offers.",
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
            example: "Discount Coupon Code: SPRING2024\nDiscount: Full Store 80% Off\nValidity Period: March 31, 2024\nUsage Method: Enter the code at checkout to enjoy the discount",
            icon: "🎫"
        },
        {
            title: "Contact Information",
            description: "Share contact information",
            example: "Customer Service Hotline: 400-123-4567\nWork Hours: Monday to Friday 9:00-18:00\nEmail: service@example.com\nAddress: No. xxx, xxx Street, Chaoyang District, Beijing",
            icon: "📞"
        },
        {
            title: "Usage Instructions",
            description: "Provide product usage instructions",
            example: "Smartwatch Usage Instructions:\n1. Press the power button to turn on\n2. Download the accompanying APP\n3. Scan the QR code to pair with the device\n4. Start using various functions",
            icon: "📱"
        }
    ];

    const bestPractices = [
        {
            title: "Use High Contrast",
            description: "Ensure the QR code is easy to scan by using dark foreground and light background.",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test on Multiple Devices",
            description: "Test the QR code with different devices and apps before publishing.",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "Keep the text concise for better scanning and display.",
        "Avoid using special characters that may not be supported by all scanners."
    ];

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
                {/* Page Title */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaFileAlt className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        Text QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-blue-100 text-lg">
                                        Learn how to create text QR codes, share messages, instructions, or any text content
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator?template=text"
                                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create Text QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    View Other Type Tutorials
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* What is a Text QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a Text QR Code?</h2>
                            <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A text QR code is a type of QR code that contains only text information. When a user scans this QR code, it will directly display the text content without redirecting to a website or performing other operations. This makes text QR codes ideal for sharing messages, instructions, contact information, etc.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📝</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Pure Text Content</h4>
                                        <p className="text-sm text-gray-600">Directly display text information</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">No Network Required</h4>
                                        <p className="text-sm text-gray-600">Can be used offline</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">High Compatibility</h4>
                                        <p className="text-sm text-gray-600">All devices can scan</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Create a Text QR Code</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select Text Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;Text&quot; option in the left function area to enter text QR code mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> Text type is the default option, usually no extra selection is needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Enter Text Content</h3>
                                        <p className="text-gray-700 mb-3">
                                            Enter the content you want to encode in the text input box. Supports English, numbers, symbols, etc.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Example:</strong> &quot;Welcome to our coffee shop! Scan the QR code for today&apos;s special offers.&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize Style (Optional)</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Customize&quot; button to adjust colors, add a logo, or modify the style to personalize your QR code.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> Keep high contrast for better scanning. Logo size should not exceed 20% of the QR code area.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button to instantly create your text QR code. Then select the download format (PNG, JPG, SVG, PDF).
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Format Selection:</strong> PNG for web, SVG for vector, PDF for print.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Use Cases</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{useCase.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{useCase.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4 flex-grow">{useCase.description}</p>
                                        <div className="bg-gray-50 rounded-lg p-3 mt-auto">
                                            <p className="text-sm text-gray-700 font-mono whitespace-pre-line">{useCase.example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Practices</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {bestPractices.map((practice, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        {practice.icon}
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{practice.title}</h4>
                                            <p className="text-gray-600 text-sm">{practice.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Tips */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips</h2>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaLightbulb className="w-6 h-6 text-yellow-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Tips</h3>
                                </div>
                                <ul className="space-y-3">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <span className="text-yellow-600 mt-1">•</span>
                                            <span className="text-gray-700">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">FAQ</h2>
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Is there a length limit for text QR codes?</h3>
                                    <p className="text-gray-700">A: There is no strict limit, but it is recommended to keep it within 1000 characters for best results.</p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Can I use special characters?</h3>
                                    <p className="text-gray-700">A: Most common characters are supported, but avoid rare or complex symbols for maximum compatibility.</p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to create your text QR code?</h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Start now and share your information, instructions, or messages with a professional text QR code.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator?template=text"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    View Other Tutorials
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 