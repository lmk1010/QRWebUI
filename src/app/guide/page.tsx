import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Create QR Code - Complete Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create QR codes with our comprehensive guide. Step-by-step instructions for generating custom QR codes for websites, text, WiFi, email, phone, SMS and more. Perfect for beginners and professionals.',
    keywords: 'how to create QR code, QR code tutorial, QR code guide, make QR code, generate QR code step by step, QR code instructions, QR code help, learn QR codes',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "How to Create QR Code - Complete Step-by-Step Guide",
        description: "Learn how to create QR codes with our comprehensive guide. Step-by-step instructions for generating custom QR codes for websites, text, WiFi, and more.",
        url: "https://qrcodehub.net/guide",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-guide.png",
                width: 1200,
                height: 630,
                alt: "QR Code Creation Guide - Step by Step Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Create QR Code - Complete Step-by-Step Guide",
        description: "Learn how to create QR codes with our comprehensive guide. Step-by-step instructions for generating custom QR codes.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide",
    },
};

export default function GuidePage() {
    // 结构化数据 - HowTo Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create QR Code - Complete Guide",
        "description": "Learn how to create QR codes with our comprehensive step-by-step guide",
        "image": "https://qrcodehub.net/guide-hero-image.png",
        "totalTime": "PT5M",
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
                "name": "Enter Your Content",
                "text": "Type or paste the text, URL, or information you want to encode in the QR code generator.",
                "image": "https://qrcodehub.net/step1-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Customize (Optional)",
                "text": "Choose colors, add your logo, or modify the design to create a custom QR code.",
                "image": "https://qrcodehub.net/step2-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Generate QR Code",
                "text": "Click the generate button to create your QR code instantly.",
                "image": "https://qrcodehub.net/step3-image.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Download & Use",
                "text": "Download your QR code in your preferred format and start using it.",
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
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* 页面标题 */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            How to Create QR Code - Complete Guide
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Follow our step-by-step guide to create professional QR codes in minutes. 
                            Perfect for beginners and advanced users alike.
                        </p>
                    </header>

                    {/* 快速开始 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Quick Start - Create Your First QR Code
                        </h2>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Enter Your Content</h3>
                                        <p className="text-gray-700">
                                            Type or paste the text, URL, or information you want to encode in the QR code generator. 
                                            This could be a website URL, plain text, email address, or phone number.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize (Optional)</h3>
                                        <p className="text-gray-700">
                                            Choose colors, add your logo, or modify the design to create a custom QR code 
                                            that matches your brand or personal style.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate QR Code</h3>
                                        <p className="text-gray-700">
                                            Click the generate button to create your QR code instantly. 
                                            Our fast generator will create your QR code in seconds.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Download & Use</h3>
                                        <p className="text-gray-700">
                                            Download your QR code in your preferred format (PNG, JPG, SVG, PDF) 
                                            and start using it in your projects, marketing materials, or anywhere you need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link
                                href="/" 
                                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                            >
                                Start Creating QR Code Now
                            </Link>
                        </div>
                    </section>

                    {/* 详细指南 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Detailed QR Code Creation Guide
                        </h2>
                        
                        {/* 选择QR码类型 */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 1: Choose Your QR Code Type</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 border-l-4 border-blue-500 bg-blue-50">
                                    <h4 className="font-semibold text-blue-800 mb-3">📱 URL/Website QR Code</h4>
                                    <p className="text-gray-700 mb-3">
                                        Perfect for directing users to your website, landing page, or online content.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Example:</strong> https://www.yourwebsite.com
                                    </p>
                                </div>
                                <div className="p-6 border-l-4 border-green-500 bg-green-50">
                                    <h4 className="font-semibold text-green-800 mb-3">📝 Text QR Code</h4>
                                    <p className="text-gray-700 mb-3">
                                        Great for sharing messages, instructions, or any text information.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Example:</strong> Welcome to our store! Show this QR code for 10% discount.
                                    </p>
                                </div>
                                <div className="p-6 border-l-4 border-purple-500 bg-purple-50">
                                    <h4 className="font-semibold text-purple-800 mb-3">📧 Email QR Code</h4>
                                    <p className="text-gray-700 mb-3">
                                        Automatically opens email client with pre-filled recipient and subject.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Format:</strong> mailto:email@example.com?subject=Hello
                                    </p>
                                </div>
                                <div className="p-6 border-l-4 border-orange-500 bg-orange-50">
                                    <h4 className="font-semibold text-orange-800 mb-3">🌐 WiFi二维码</h4>
                                    <p className="text-gray-700 mb-3">
                                        允许客人立即连接到您的WiFi网络。
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>格式：</strong> WIFI:T:WPA;S:网络名称;P:密码;;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 定制选项 */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 2: Customize Your QR Code</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-3">🎨 Colors and Style</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Choose foreground and background colors that contrast well</li>
                                        <li>Ensure sufficient contrast for reliable scanning</li>
                                        <li>Dark colors on light backgrounds work best</li>
                                        <li>Test your QR code after changing colors</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-3">🖼️ Adding Logos</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Upload your logo in PNG, JPG, or SVG format</li>
                                        <li>Keep logo size reasonable (not more than 20% of QR code)</li>
                                        <li>Use high-contrast logos for better visibility</li>
                                        <li>Test scanning after adding logo to ensure functionality</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-3">📐 Size and Format</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Choose appropriate size based on usage (business card vs poster)</li>
                                        <li>PNG for web use, SVG for scalable graphics</li>
                                        <li>PDF for professional printing</li>
                                        <li>Minimum size: 2cm x 2cm for reliable scanning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 最佳实践 */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 3: Best Practices for QR Codes</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-green-800 text-lg">✅ Do&apos;s</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>Test your QR code before using it</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>Use high contrast colors</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>Keep URLs short and simple</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>Add a call-to-action near the QR code</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>Ensure adequate size for scanning distance</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-red-800 text-lg">❌ Don&apos;ts</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span>Don&apos;t use low contrast color combinations</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span>Don&apos;t make QR codes too small to scan</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span>Don&apos;t add too large logos that block data</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span>Don&apos;t place QR codes on curved or wrinkled surfaces</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            <span>Don&apos;t forget to test before printing/publishing</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 使用场景 */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Common Use Cases</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 bg-blue-50 rounded-lg text-center">
                                    <div className="text-4xl mb-4">💼</div>
                                    <h4 className="font-semibold text-blue-800 mb-3">Business Cards</h4>
                                    <p className="text-gray-700 text-sm">
                                        Add QR codes to business cards for easy contact sharing and website access.
                                    </p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-lg text-center">
                                    <div className="text-4xl mb-4">📱</div>
                                    <h4 className="font-semibold text-green-800 mb-3">Marketing</h4>
                                    <p className="text-gray-700 text-sm">
                                        Use in flyers, posters, and ads to drive traffic to websites or promotions.
                                    </p>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-lg text-center">
                                    <div className="text-4xl mb-4">🏪</div>
                                    <h4 className="font-semibold text-purple-800 mb-3">Restaurants</h4>
                                    <p className="text-gray-700 text-sm">
                                        Digital menus, WiFi sharing, and contactless ordering systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA部分 */}
                    <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Ready to Create Your QR Code?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Follow our guide and create professional QR codes in minutes!
                        </p>
                        <Link
                            href="/" 
                            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg mr-4"
                        >
                            Create QR Code Now
                        </Link>
                        <Link
                            href="/faq" 
                            className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
                        >
                            View FAQ
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
} 