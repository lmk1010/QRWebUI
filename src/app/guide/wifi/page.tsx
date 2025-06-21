import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaWifi, FaArrowLeft, FaPlay, FaCheck, FaArrowRight, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'WiFi QR Code Creation Tutorial - Easy Network Sharing Guide | QRCodeHub',
    description: 'Learn how to create WiFi QR codes for easy network sharing. Includes step-by-step instructions, security tips, and best practices for WiFi QR codes.',
    keywords: 'WiFi QR code, WiFi sharing QR code, network QR code, WiFi password QR code, wireless network QR code',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "WiFi QR Code Creation Tutorial - Easy Network Sharing Guide",
        description: "Learn how to create WiFi QR codes for easy network sharing. Includes step-by-step instructions and security tips.",
        url: "https://qrcodehub.net/guide/wifi",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-wifi-guide.png",
                width: 1200,
                height: 630,
                alt: "WiFi QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "WiFi QR Code Creation Tutorial - Easy Network Sharing Guide",
        description: "Learn how to create WiFi QR codes for easy network sharing. Step-by-step instructions included.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-wifi-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/wifi",
    },
};

export default function WiFiQRGuidePage() {
    const useCases = [
        {
            title: "Home Network",
            description: "Share your home WiFi password with guests easily",
            example: "Network: MyHomeWiFi\nPassword: SecurePassword123\nSecurity: WPA2",
            icon: "🏠"
        },
        {
            title: "Business WiFi",
            description: "Provide customer WiFi access in cafes, restaurants, and shops",
            example: "Network: CafeGuest\nPassword: Welcome2024\nSecurity: WPA2",
            icon: "☕"
        },
        {
            title: "Event Networks",
            description: "Share temporary network access for conferences and events",
            example: "Network: Conference2024\nPassword: EventGuest\nSecurity: WPA2",
            icon: "🎪"
        },
        {
            title: "Office Guest Network",
            description: "Provide secure guest access for visitors and clients",
            example: "Network: OfficeGuest\nPassword: Visitor123\nSecurity: WPA2",
            icon: "🏢"
        },
        {
            title: "Hotel WiFi",
            description: "Simplify WiFi access for hotel guests",
            example: "Network: HotelGuest\nPassword: Room2024\nSecurity: WPA2",
            icon: "🏨"
        },
        {
            title: "Shared Spaces",
            description: "WiFi sharing in co-working spaces and libraries",
            example: "Network: CoWorkSpace\nPassword: Shared2024\nSecurity: WPA2",
            icon: "📚"
        }
    ];

    const securityTypes = [
        { type: "WPA2", description: "Most common and secure option", recommended: true },
        { type: "WPA3", description: "Latest security standard, most secure", recommended: true },
        { type: "WEP", description: "Older standard, less secure", recommended: false },
        { type: "None", description: "Open network, no password required", recommended: false }
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
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-6 subtle-bounce">
                                    <FaWifi className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    WiFi QR Code Tutorial
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn how to create WiFi QR codes for easy network sharing. 
                                    Perfect for homes, businesses, events, and guest networks.
                                </p>
                            </div>

                            {/* Quick Action */}
                            <div className="text-center mb-16">
                                <Link
                                    href="/qr-generator?type=wifi"
                                    className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Create WiFi QR Code Now
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Select WiFi Type</h3>
                                    <p className="text-gray-600 text-sm">Choose "WiFi" from the QR code type options</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Network Details</h3>
                                    <p className="text-gray-600 text-sm">Input network name, password, and security type</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Design</h3>
                                    <p className="text-gray-600 text-sm">Add colors, logos, and styling to match your brand</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Generate & Share</h3>
                                    <p className="text-gray-600 text-sm">Create your WiFi QR code and share with guests</p>
                                </div>
                            </div>
                        </section>

                        {/* Security Types */}
                        <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                WiFi Security Types
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {securityTypes.map((security, index) => (
                                    <div key={index} className={`card-enhanced rounded-3xl p-8 group border-l-4 ${security.recommended ? 'border-green-500' : 'border-orange-500'}`}>
                                        <div className="flex items-center mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${security.recommended ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}>
                                                <FaShieldAlt className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-xl">{security.type}</h3>
                                                {security.recommended && (
                                                    <span className="text-green-600 text-sm font-medium">Recommended</span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{security.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section className="scale-in" style={{ animationDelay: '0.6s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Popular Use Cases
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group border-l-4 border-purple-500">
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
                        <section className="fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Best Practices & Security Tips
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Security Best Practices</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use WPA2 or WPA3 security protocols
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Create strong, unique passwords
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use separate guest networks
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Regularly update network passwords
                                        </li>
                                    </ul>
                                </div>
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaWifi className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">QR Code Tips</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Test QR code before sharing
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Print in high quality for clarity
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Place QR codes in visible locations
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Include network name as text label
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How WiFi QR Codes Work */}
                        <section className="scale-in" style={{ animationDelay: '1s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                                    How WiFi QR Codes Work
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">1</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Scan QR Code</h3>
                                        <p className="text-gray-600 text-sm">User scans the WiFi QR code with their device camera</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">2</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Auto Connection</h3>
                                        <p className="text-gray-600 text-sm">Device automatically detects WiFi network information</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">3</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Connected</h3>
                                        <p className="text-gray-600 text-sm">User is connected to the network without typing password</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center fade-in-up" style={{ animationDelay: '1.2s' }}>
                            <div className="glass-effect rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    Ready to Create Your WiFi QR Code?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Start sharing your WiFi network easily and securely with professional QR codes
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link 
                                        href="/qr-generator?type=wifi" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <FaWifi className="w-5 h-5" />
                                        Create WiFi QR Code
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