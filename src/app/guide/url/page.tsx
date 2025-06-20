import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaLink, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'URL QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for linking to websites, web pages or online content.',
    keywords: 'URL QR code, URL QR code creation, URL QR code tutorial, how to make URL QR code, URL QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "URL QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ.",
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
        title: "URL QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-url-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/url",
    },
};

export default function URLQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a URL QR Code",
        "description": "Detailed URL QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/url-qr-guide-image.png",
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
                "name": "Internet connection"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub URL QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select URL Type",
                "text": "Choose 'URL' type in the QR code generator",
                "image": "https://qrcodehub.net/step1-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Enter URL",
                "text": "Enter the complete URL in the URL input field",
                "image": "https://qrcodehub.net/step2-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style",
                "text": "Choose colors, add logo and other personalized settings",
                "image": "https://qrcodehub.net/step3-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click generate button to create QR code and download",
                "image": "https://qrcodehub.net/step4-url.png"
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
            title: "Company Website",
            description: "Link to corporate official website",
            example: "https://www.company.com",
            icon: "🏢"
        },
        {
            title: "Product Page",
            description: "Link to specific product detail page",
            example: "https://www.store.com/product/123",
            icon: "📦"
        },
        {
            title: "Event Registration",
            description: "Link to event registration page",
            example: "https://www.event.com/register/spring2024",
            icon: "📅"
        },
        {
            title: "Online Store",
            description: "Link to e-commerce platform or product page",
            example: "https://www.shop.com/category/electronics",
            icon: "🛒"
        },
        {
            title: "Social Media",
            description: "Link to social media homepage",
            example: "https://www.instagram.com/yourbrand",
            icon: "📱"
        },
        {
            title: "Download Page",
            description: "Link to APP download or file download page",
            example: "https://www.app.com/download",
            icon: "⬇️"
        }
    ];

    const bestPractices = [
        {
            title: "Use Complete URL",
            description: "Include http:// or https:// protocol to ensure the link is complete and valid",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Prefer HTTPS",
            description: "HTTPS is more secure, users trust it more, and search engines prefer it",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Keep Links Concise",
            description: "Short links are easier to scan and provide better user experience",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test Link Validity",
            description: "Ensure the link is accessible before generating to avoid dead links",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "If your URL is very long, consider using a URL shortener service to shorten it",
        "Ensure the target webpage displays well on mobile devices, as most users will scan with their phones",
        "Regularly check if the link is still valid to avoid QR code failure",
        "You can add UTM parameters to the URL to track the source of QR code visits"
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
                <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-green-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaLink className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        URL QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-green-100 text-lg">
                                        Learn how to create URL QR codes that direct users to specific websites or pages when scanned
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator?template=url"
                                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create URL QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
                        {/* What is a URL QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a URL QR Code?</h2>
                            <div className="bg-green-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A URL QR code is a type of QR code that contains a website link. When users scan this QR code, it automatically opens a browser and redirects to the specified URL. This makes URL QR codes perfect for marketing, promotion, sharing website links, and other scenarios.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Auto Redirect</h4>
                                        <p className="text-sm text-gray-600">Directly opens webpage after scanning</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Mobile Optimized</h4>
                                        <p className="text-sm text-gray-600">Suitable for mobile users</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📊</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Access Statistics</h4>
                                        <p className="text-sm text-gray-600">Track visit data</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Creation Steps</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select URL Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;URL&quot; option in the left function area to enter URL QR code creation mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> URL type is specifically designed for creating QR codes with website links.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Enter Complete URL</h3>
                                        <p className="text-gray-700 mb-3">
                                            Enter the complete URL in the URL input field, including the http:// or https:// protocol. The system will automatically validate the URL format.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Example:</strong> https://www.example.com or https://www.example.com/product/123
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize Style (Optional)</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Customize&quot; button to adjust colors, add a logo, modify styles, etc., to make your QR code more personalized.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> Maintain high contrast for better scanning. Logo size should not exceed 20% of the QR code area.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button, and the system will immediately create your URL QR code. Then select the download format (PNG, JPG, SVG, PDF).
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Format Selection:</strong> PNG for web use, SVG for vector graphics, PDF for printing.
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
                                            <p className="text-sm text-green-600 font-mono break-all">{useCase.example}</p>
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
                                    <h3 className="text-lg font-semibold text-gray-800">Creation Tips</h3>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: What are the URL format requirements?</h3>
                                    <p className="text-gray-700">
                                        A: URL must include the protocol (http:// or https://), for example: https://www.example.com.
                                        The system will automatically validate the URL format and show an error if the format is incorrect.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: What types of URLs are supported?</h3>
                                    <p className="text-gray-700">
                                        A: All standard URL formats are supported, including website homepages, product pages, social media links, download pages, etc.
                                        Any URL that can be accessed normally can be used.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Will long URLs affect scanning performance?</h3>
                                    <p className="text-gray-700">
                                        A: Long URLs will make the QR code more complex, but won&apos;t affect scanning performance. However, it&apos;s recommended to use short links to improve user experience,
                                        you can use URL shortener services like bit.ly, tinyurl, etc.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: How to track QR code visit data?</h3>
                                    <p className="text-gray-700">
                                        A: You can add UTM parameters to the URL to track visit sources, for example:
                                        https://www.example.com?utm_source=qr&utm_medium=print&utm_campaign=spring2024
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to create your URL QR code?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Start creating professional URL QR codes now to guide users to your website
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator?template=url"
                                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Creating Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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