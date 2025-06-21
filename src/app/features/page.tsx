import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import QRCodeLogoPreview from '../components/QRCodeLogoPreview';

export const metadata: Metadata = {
    title: 'QR Code Generator Features - Free Online QR Code Creator | QRCodeHub',
    description: 'Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates. Fast, secure, and completely free with unlimited QR code generation.',
    keywords: 'QR code features, custom QR codes, QR code generator features, free QR code maker, QR code customization, branded QR codes, QR code design, QR code formats, dot styles, QR code frames, QR code templates',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "QR Code Generator Features - Free Online QR Code Creator",
        description: "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        url: "https://qrcodehub.net/features",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-features.png",
                width: 1200,
                height: 630,
                alt: "QR Code Generator Features - Custom QR Codes"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator Features - Free Online QR Code Creator",
        description: "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-features.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/features",
    },
};

export default function FeaturesPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "QR Code Generator Features",
        "description": "Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, dot styles, frames, and various templates.",
        "url": "https://qrcodehub.net/features",
        "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "QRCodeHub QR Code Generator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "featureList": [
                "Free QR Code Generation",
                "Custom Colors and Design",
                "Logo Integration",
                "Multiple Dot Styles",
                "Frame Templates",
                "Size Customization",
                "Pre-built Templates",
                "High Resolution Output",
                "Built-in QR Scanner",
                "Privacy Protection",
                "Instant Generation"
            ]
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://qrcodehub.net"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Features",
                    "item": "https://qrcodehub.net/features"
                }
            ]
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
                <div className="max-w-6xl mx-auto">
                    {/* 页面标题 */}
                    <header className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Powerful QR Code Generator Features
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Discover why our free QR code generator is the best choice for creating professional, 
                            customizable QR codes with advanced styling options for all your needs.
                        </p>
                    </header>

                    {/* 核心功能特点 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Why Choose Our QR Code Generator?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">🆓</div>
                                <h3 className="font-bold text-blue-800 mb-4 text-xl">Completely Free</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Create unlimited QR codes without any cost. No hidden fees, no subscription required. 
                                    Generate as many QR codes as you need, completely free forever.
                                </p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">⚡</div>
                                <h3 className="font-bold text-green-800 mb-4 text-xl">Instant Generation</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Generate QR codes instantly with our lightning-fast QR code generator. 
                                    Create professional QR codes in seconds, not minutes.
                                </p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">🎨</div>
                                <h3 className="font-bold text-purple-800 mb-4 text-xl">Advanced Customization</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Customize your QR codes with colors, logos, dot styles, frames, and templates. 
                                    Create branded QR codes that match your business identity perfectly.
                                </p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">📱</div>
                                <h3 className="font-bold text-orange-800 mb-4 text-xl">Built-in QR Scanner</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Test your QR codes instantly with our built-in QR code scanner. 
                                    Verify that your generated QR codes work perfectly before using them.
                                </p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">🔒</div>
                                <h3 className="font-bold text-red-800 mb-4 text-xl">Secure & Private</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Your data stays completely private. We don&apos;t store your QR code content 
                                    on our servers. Generate QR codes with complete privacy and security.
                                </p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="text-5xl mb-6">📊</div>
                                <h3 className="font-bold text-teal-800 mb-4 text-xl">High Quality Output</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Generate high-resolution QR codes suitable for both digital and print use. 
                                    Download in multiple formats including PNG, JPG, SVG, and PDF.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Dot Styles 功能 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Advanced Dot Style Customization
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">⬜</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Square Dots</h3>
                                    <p className="text-gray-600 text-sm">Classic square dots for traditional QR codes with professional appearance</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">⭕</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Circle Dots</h3>
                                    <p className="text-gray-600 text-sm">Smooth circular dots for modern appearance and contemporary design</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">💧</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Fluid Style</h3>
                                    <p className="text-gray-600 text-sm">Organic fluid shapes that intelligently connect for smooth visual effects</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">⬡</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Hexagon</h3>
                                    <p className="text-gray-600 text-sm">Geometric hexagon patterns for tech look and modern applications</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">⭐</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Star Style</h3>
                                    <p className="text-gray-600 text-sm">Star-shaped dots for decorative QR codes and special occasions</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">💎</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Diamond</h3>
                                    <p className="text-gray-600 text-sm">Diamond patterns for elegant appearance and business applications</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">❤️</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Heart Style</h3>
                                    <p className="text-gray-600 text-sm">Heart-shaped dots for romantic themes and special events</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">🎯</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Custom Eyes</h3>
                                    <p className="text-gray-600 text-sm">Customize position markers with different styles for unique designs</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Frame Templates 功能 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Professional Frame Templates
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-4 border-yellow-400 relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full">
                                        📱 SCAN ME
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-yellow-800 text-xl mb-3">SCAN Frame</h3>
                                    <p className="text-yellow-700 mb-4">Perfect for scanning scenarios with clear &quot;Scan Me&quot; prompts. Ideal for WeChat, Alipay, and general scanning applications.</p>
                                    <div className="text-sm text-yellow-600">
                                        <strong>Best for:</strong> Mobile payments, social media, contact sharing
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-4 border-green-500 relative">
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded">
                                        💳 PAY HERE
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-green-800 text-xl mb-3">PAY Frame</h3>
                                    <p className="text-green-700 mb-4">Business payment style with bold border design to enhance trust and credibility for payment scenarios.</p>
                                    <div className="text-sm text-green-600">
                                        <strong>Best for:</strong> Payment systems, e-commerce, financial services
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-4 border-blue-500 relative">
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded">
                                        👉 THIS WAY
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-blue-800 text-xl mb-3">THIS Frame</h3>
                                    <p className="text-blue-700 mb-4">Directional guide design for navigation and guidance. Perfect for locations requiring user direction.</p>
                                    <div className="text-sm text-blue-600">
                                        <strong>Best for:</strong> Navigation, directions, location-based services
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-500 relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-white text-gray-600 text-sm font-medium px-3 py-1 rounded-full border border-gray-500">
                                        ✨ MODERN
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-gray-800 text-xl mb-3">MODERN Frame</h3>
                                    <p className="text-gray-700 mb-4">Simple modern style with minimal decorative elements. Suitable for premium brands and modern scenarios.</p>
                                    <div className="text-sm text-gray-600">
                                        <strong>Best for:</strong> Premium brands, modern businesses, minimalist design
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border-4 border-red-400 relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-red-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                                        🎯 WELCOME
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-red-800 text-xl mb-3">COMMON Frame</h3>
                                    <p className="text-red-700 mb-4">Classic universal design with traditional gift box elements. Suitable for various general occasions.</p>
                                    <div className="text-sm text-red-600">
                                        <strong>Best for:</strong> General use, events, promotions, welcome messages
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl">
                                <div className="text-center">
                                    <h3 className="font-bold text-gray-800 text-xl mb-3">No Frame</h3>
                                    <p className="text-gray-600 mb-4">Classic clean QR code without external decoration. Perfect for minimal and professional applications.</p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Best for:</strong> Professional documents, minimal design, clean aesthetics
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Template Styles 功能 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Pre-built Template Styles
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">🐦</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Twitter Style</h3>
                                    <p className="text-gray-600 text-sm">Blue theme with circular dots for social media branding</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">📚</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">GitHub Style</h3>
                                    <p className="text-gray-600 text-sm">Classic black and white with square dots for tech projects</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">📷</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Instagram Style</h3>
                                    <p className="text-gray-600 text-sm">Gradient colors with rounded styles for visual content</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">🎵</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Spotify Style</h3>
                                    <p className="text-gray-600 text-sm">Green theme with modern design for music and entertainment</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">💼</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">LinkedIn Style</h3>
                                    <p className="text-gray-600 text-sm">Professional blue with rounded corners for business networking</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">📺</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">YouTube Style</h3>
                                    <p className="text-gray-600 text-sm">Red theme with dynamic design for video content</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">🎨</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Dribbble Style</h3>
                                    <p className="text-gray-600 text-sm">Pink creative design with circular aesthetics for designers</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-white text-2xl">💬</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Slack Style</h3>
                                    <p className="text-gray-600 text-sm">Purple theme with modern office design for team collaboration</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Logo Integration 功能 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Logo Integration & Branding
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                    <h3 className="font-bold text-blue-800 text-xl mb-4">🖼️ Logo Upload</h3>
                                    <p className="text-blue-700 mb-4">Upload your company logo or personal image to the center of your QR code for enhanced branding and recognition.</p>
                                    <ul className="text-blue-600 space-y-2">
                                        <li>• Support for PNG, JPG, SVG formats</li>
                                        <li>• Automatic size optimization</li>
                                        <li>• Maintains QR code readability</li>
                                        <li>• Perfect for brand recognition</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                                    <h3 className="font-bold text-green-800 text-xl mb-4">🎯 Brand Consistency</h3>
                                    <p className="text-green-700 mb-4">Create branded QR codes that perfectly match your business identity and marketing materials.</p>
                                    <ul className="text-green-600 space-y-2">
                                        <li>• Custom color matching</li>
                                        <li>• Professional appearance</li>
                                        <li>• Enhanced brand recognition</li>
                                        <li>• Marketing material integration</li>
                                    </ul>
                                </div>
                            </div>
                            <QRCodeLogoPreview />
                        </div>
                    </section>

                    {/* Size Options 功能 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Flexible Size Options
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-3xl mb-3">📱</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Small Size</h3>
                                    <p className="text-gray-600 text-sm mb-3">128px - 256px</p>
                                    <p className="text-gray-600 text-sm">Perfect for icons, small applications, and web display</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-3xl mb-3">💼</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Medium Size</h3>
                                    <p className="text-gray-600 text-sm mb-3">400px - 600px</p>
                                    <p className="text-gray-600 text-sm">Ideal for business cards, social media, and brochures</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-3xl mb-3">📄</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Large Size</h3>
                                    <p className="text-gray-600 text-sm mb-3">800px - 1200px</p>
                                    <p className="text-gray-600 text-sm">Great for posters, banners, and high-resolution printing</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-3xl mb-3">🏢</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Extra Large</h3>
                                    <p className="text-gray-600 text-sm mb-3">1500px - 2000px</p>
                                    <p className="text-gray-600 text-sm">Professional printing and large displays</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* QR码类型 */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
                            Types of QR Codes You Can Create
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">📱</span>
                                    <h3 className="font-bold text-gray-800 text-xl">Website URL QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Create QR codes that link directly to your website, landing page, or any URL. 
                                    Perfect for marketing campaigns and business cards.
                                </p>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">📝</span>
                                    <h3 className="font-bold text-gray-800 text-xl">Text QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Generate QR codes containing plain text messages, instructions, or any information 
                                    you want to share quickly and easily.
                                </p>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">📧</span>
                                    <h3 className="font-bold text-gray-800 text-xl">Email QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Create QR codes that automatically compose emails with preset recipients, 
                                    subject lines and message content.
                                </p>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">📞</span>
                                    <h3 className="font-bold text-gray-800 text-xl">Phone Number QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Generate QR codes that automatically dial phone numbers when scanned. 
                                    Great for business contact information.
                                </p>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">💬</span>
                                    <h3 className="font-bold text-gray-800 text-xl">SMS QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Create QR codes that send pre-written text messages to specific phone numbers. 
                                    Perfect for customer support and feedback.
                                </p>
                            </div>
                            <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4">🌐</span>
                                    <h3 className="font-bold text-gray-800 text-xl">WiFi QR Code</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Generate WiFi network sharing and connection QR codes. 
                                    Let guests connect to your WiFi instantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA部分 */}
                    <section className="text-center py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Ready to Create Your Custom QR Code?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Start generating professional QR codes with all these amazing features - 
                            dot styles, frames, templates, logo integration, and size options - completely free!
                        </p>
                        <Link
                            href="/qr-generator" 
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Create QR Code Now
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
} 