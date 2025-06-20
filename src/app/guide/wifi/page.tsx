import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaWifi, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for home, office, coffee shop and other WiFi sharing scenarios.',
    keywords: 'WiFi QR code, WiFi QR code creation, WiFi QR code tutorial, how to make WiFi QR code, WiFi QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ.",
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
        title: "WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-wifi-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/wifi",
    },
};

export default function WiFiQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a WiFi QR Code",
        "description": "Detailed WiFi QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/wifi-qr-guide-image.png",
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
                "name": "QRCodeHub WiFi QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select WiFi Type",
                "text": "Choose 'WiFi' type in the QR code generator",
                "image": "https://qrcodehub.net/step1-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Fill WiFi Information",
                "text": "Enter network name, password, encryption type and other information",
                "image": "https://qrcodehub.net/step2-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style",
                "text": "Choose colors, add logo and other personalized settings",
                "image": "https://qrcodehub.net/step3-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click generate button to create QR code and download",
                "image": "https://qrcodehub.net/step4-wifi.png"
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

    const wifiFields = [
        {
            field: "Network Name (SSID)",
            required: true,
            description: "Name of the WiFi network",
            example: "MyWiFi_Network"
        },
        {
            field: "Password",
            required: true,
            description: "WiFi network connection password",
            example: "mypassword123"
        },
        {
            field: "Encryption Type",
            required: true,
            description: "WiFi network encryption method",
            example: "WPA/WPA2/WEP"
        },
        {
            field: "Hidden Network",
            required: false,
            description: "Whether it&apos;s a hidden WiFi network",
            example: "Yes/No"
        }
    ];

    const encryptionTypes = [
        {
            type: "WPA",
            description: "WiFi Protected Access, newer encryption standard",
            security: "High",
            compatibility: "Modern devices"
        },
        {
            type: "WPA2",
            description: "WiFi Protected Access 2, currently most commonly used encryption standard",
            security: "Very High",
            compatibility: "All modern devices"
        },
        {
            type: "WPA3",
            description: "Latest WiFi security standard",
            security: "Highest",
            compatibility: "Newer devices"
        },
        {
            type: "WEP",
            description: "Wired Equivalent Privacy, older encryption standard",
            security: "Low",
            compatibility: "All devices"
        }
    ];

    const useCases = [
        {
            title: "Home WiFi",
            description: "Provide convenient WiFi connection for family members and visitors",
            icon: "🏠",
            benefits: ["Visitor convenience", "No need to recite password", "Quick connection"]
        },
        {
            title: "Office Network",
            description: "Provide office WiFi connection for employees and clients",
            icon: "🏢",
            benefits: ["Professional image", "Unified management", "Secure connection"]
        },
        {
            title: "Coffee Shop",
            description: "Provide WiFi service for customers to improve user experience",
            icon: "☕",
            benefits: ["Customer convenience", "Brand display", "Service improvement"]
        },
        {
            title: "Hotel WiFi",
            description: "Provide room WiFi connection information for guests",
            icon: "🏨",
            benefits: ["Room service", "Clear information", "Reduce inquiries"]
        }
    ];

    const bestPractices = [
        {
            title: "Use Strong Password",
            description: "Set complex and secure WiFi password, avoid using simple passwords",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Choose Appropriate Encryption",
            description: "Use WPA2 or WPA3 encryption to ensure network security",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Regular Password Updates",
            description: "Regularly change WiFi password to maintain network security",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test Connection Effect",
            description: "Test scanning and connection functions after generation to ensure normal operation",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "WiFi QR codes use standard WiFi configuration format and are compatible with iOS and Android devices",
        "If password contains special characters, ensure they are entered correctly when generating",
        "It&apos;s recommended to add &apos;Scan to connect WiFi&apos; instructions near the QR code",
        "You can create multiple WiFi QR codes for different purposes, such as guest network, employee network, etc."
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
                <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaWifi className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        WiFi QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-red-100 text-lg">
                                        Learn how to create WiFi QR codes that can directly connect to WiFi networks when scanned
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator?template=wifi"
                                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create WiFi QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
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
                        {/* What is a WiFi QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a WiFi QR Code?</h2>
                            <div className="bg-red-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A WiFi QR code is a type of QR code that contains WiFi network connection information. When users scan this QR code, it automatically retrieves WiFi network information and prompts them to connect to the network. This makes WiFi QR codes perfect for home, office, coffee shop, and other scenarios where WiFi sharing is needed.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🔗</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">One-Click Connect</h4>
                                        <p className="text-sm text-gray-600">Directly connect to WiFi after scanning</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🔒</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Password Protection</h4>
                                        <p className="text-sm text-gray-600">Securely store network password</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Multi-Device Compatible</h4>
                                        <p className="text-sm text-gray-600">Supports iOS and Android</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WiFi Field Description */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">WiFi Field Description</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Required WiFi Information</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {wifiFields.map((field, index) => (
                                        <div key={index} className="px-6 py-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-gray-800">{field.field}</h4>
                                                {field.required && (
                                                    <span className="text-red-500 text-sm font-medium">Required</span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{field.description}</p>
                                            <p className="text-gray-500 text-xs font-mono bg-gray-50 px-2 py-1 rounded">
                                                Example: {field.example}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Encryption Type Description */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Encryption Type Description</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {encryptionTypes.map((encryption, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-semibold text-gray-800">{encryption.type}</h3>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                encryption.security === 'Highest' ? 'bg-green-100 text-green-800' :
                                                encryption.security === 'Very High' ? 'bg-blue-100 text-blue-800' :
                                                encryption.security === 'High' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                Security: {encryption.security}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{encryption.description}</p>
                                        <p className="text-gray-500 text-xs">
                                            Compatibility: {encryption.compatibility}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Creation Steps</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select WiFi Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;WiFi&quot; option in the left function area to enter WiFi QR code creation mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> WiFi type will display a specialized WiFi information form.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Fill WiFi Information</h3>
                                        <p className="text-gray-700 mb-3">
                                            Fill in network name, password, encryption type, and other information in the WiFi information form. Network name and password are required.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Note:</strong> Ensure network name and password are entered correctly, otherwise connection will fail.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize Style (Optional)</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Customize&quot; button to adjust colors, add a logo, modify styles, etc., to make your QR code more personalized.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> You can add a WiFi icon or related logo to make it easily recognizable.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button, and the system will immediately create your WiFi QR code. Then select the download format (PNG, JPG, SVG, PDF).
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
                                        <div className="space-y-2 mt-auto">
                                            {useCase.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Which devices do WiFi QR codes support?</h3>
                                    <p className="text-gray-700">
                                        A: WiFi QR codes use standard WiFi configuration format and are compatible with iOS and Android devices. Almost all modern smartphones can correctly identify and connect to WiFi networks.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: What if the password contains special characters?</h3>
                                    <p className="text-gray-700">
                                        A: If the WiFi password contains special characters (such as @, #, $, etc.), please ensure these characters are entered correctly when generating the QR code. The generated QR code will automatically handle special character encoding.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Will it automatically connect to WiFi after scanning?</h3>
                                    <p className="text-gray-700">
                                        A: After scanning, a WiFi connection prompt will be displayed, and users need to confirm the connection. This is for security reasons to avoid accidentally connecting to unsafe networks.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: How to ensure WiFi network security?</h3>
                                    <p className="text-gray-700">
                                        A: It&apos;s recommended to use WPA2 or WPA3 encryption, set strong passwords, and change passwords regularly. For public WiFi, consider setting up a guest network with limited access permissions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to create your WiFi QR code?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Start creating professional WiFi QR codes now to provide convenient network connection for visitors
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator?template=wifi"
                                    className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Creating Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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