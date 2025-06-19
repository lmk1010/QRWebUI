import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaAddressBook, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for business cards, personal contact information sharing.',
    keywords: 'contact QR code, contact QR code creation, contact QR code tutorial, how to make contact QR code, contact QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/contact",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-contact-guide.png",
                width: 1200,
                height: 630,
                alt: "Contact QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-contact-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/contact",
    },
};

export default function ContactQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Contact QR Code",
        "description": "Detailed contact QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/contact-qr-guide-image.png",
        "totalTime": "PT8M",
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
                "name": "QRCodeHub Contact QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Contact Type",
                "text": "Choose 'Contact' type in the QR code generator",
                "image": "https://qrcodehub.net/step1-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Fill Contact Information",
                "text": "Fill in name, phone, email and other contact information",
                "image": "https://qrcodehub.net/step2-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style",
                "text": "Choose colors, add logo and other personalized settings",
                "image": "https://qrcodehub.net/step3-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click generate button to create QR code and download",
                "image": "https://qrcodehub.net/step4-contact.png"
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

    const contactFields = [
        {
            field: "Name",
            required: true,
            description: "Contact person&apos;s name",
            example: "John Smith"
        },
        {
            field: "Phone",
            required: false,
            description: "Contact phone number",
            example: "13800138000"
        },
        {
            field: "Mobile",
            required: false,
            description: "Mobile phone number",
            example: "13800138000"
        },
        {
            field: "Email",
            required: false,
            description: "Email address",
            example: "contact@example.com"
        },
        {
            field: "Company",
            required: false,
            description: "Company or organization name",
            example: "ABC Technology Co., Ltd."
        },
        {
            field: "Title",
            required: false,
            description: "Job title or position",
            example: "Product Manager"
        },
        {
            field: "Website",
            required: false,
            description: "Personal or company website",
            example: "https://www.example.com"
        },
        {
            field: "Address",
            required: false,
            description: "Detailed address information",
            example: "123 Main Street, Beijing, China"
        }
    ];

    const useCases = [
        {
            title: "Business Card",
            description: "Add QR code to business cards for easy contact information saving",
            icon: "💼",
            benefits: ["One-click save", "Complete information", "Professional image"]
        },
        {
            title: "Personal Contact",
            description: "Share personal contact information, suitable for social occasions",
            icon: "👤",
            benefits: ["Quick exchange", "Accurate information", "Easy management"]
        },
        {
            title: "Team Information",
            description: "Share team member contact information",
            icon: "👥",
            benefits: ["Unified format", "Easy distribution", "Information sync"]
        },
        {
            title: "Customer Service",
            description: "Provide customer service contact information to improve service quality",
            icon: "🎧",
            benefits: ["Quick contact", "Multiple channels", "Professional service"]
        }
    ];

    const bestPractices = [
        {
            title: "Fill Complete Information",
            description: "Fill in all relevant fields as much as possible to provide complete contact information",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Verify Information Accuracy",
            description: "Ensure phone numbers, email addresses and other information are in correct format",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Use Professional Logo",
            description: "Add company logo or personal avatar to enhance professionalism",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test Save Function",
            description: "Test scanning and saving functions after generation to ensure information is imported correctly",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "Contact QR codes use vCard format and are compatible with all mainstream mobile contact applications",
        "You can include multiple phone numbers and email addresses, separated by semicolons",
        "Address information will be automatically formatted and supports multi-line addresses",
        "It&apos;s recommended to add &apos;Scan to save contact&apos; instructions near the QR code"
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
                <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-purple-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaAddressBook className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        Contact QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-purple-100 text-lg">
                                        Learn how to create contact QR codes that can be directly saved to phone contacts when scanned
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create Contact QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
                        {/* What is a Contact QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a Contact QR Code?</h2>
                            <div className="bg-purple-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A contact QR code is a type of QR code that contains complete contact information. When users scan this QR code, it automatically opens the phone contact application and prompts users to save the contact information. This makes contact QR codes perfect for business cards, personal contact information sharing, and other scenarios.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">One-Click Save</h4>
                                        <p className="text-sm text-gray-600">Directly save to contacts after scanning</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📋</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Complete Information</h4>
                                        <p className="text-sm text-gray-600">Contains all contact methods</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Multi-Platform Compatible</h4>
                                        <p className="text-sm text-gray-600">Supports iOS and Android</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Creation Steps</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select Contact Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;Contact&quot; option in the left function area to enter contact QR code creation mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> Contact type will display a specialized contact information form.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Fill Contact Information</h3>
                                        <p className="text-gray-700 mb-3">
                                            Fill in detailed information such as name, phone, email, company, title, etc. in the contact information form. At least the name field is required.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> The more complete information you fill in, the easier it will be for users to contact you after saving.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize Style (Optional)</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Customize&quot; button to adjust colors, add a logo, modify styles, etc., to make your QR code more personalized.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> You can add a company logo or personal avatar to enhance professionalism.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button, and the system will immediately create your contact QR code. Then select the download format (PNG, JPG, SVG, PDF).
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

                        {/* Contact Field Description */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Field Description</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Contact Information Fields</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {contactFields.map((field, index) => (
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

                        {/* Use Cases */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Use Cases</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{useCase.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{useCase.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                                        <div className="space-y-2">
                                            {useCase.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Which mobile systems do contact QR codes support?</h3>
                                    <p className="text-gray-700">
                                        A: Contact QR codes use standard vCard format and are compatible with iOS and Android systems. Almost all modern smartphones can correctly identify and save contact information.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Which fields are required?</h3>
                                    <p className="text-gray-700">
                                        A: Only the name field is required, all other fields are optional. However, it&apos;s recommended to fill in as much information as possible so users can get complete contact information after saving.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Can I include multiple phone numbers?</h3>
                                    <p className="text-gray-700">
                                        A: Yes! You can fill in multiple numbers in the phone and mobile fields, separated by semicolons. For example: 13800138000; 13900139000
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: How to ensure information is saved correctly?</h3>
                                    <p className="text-gray-700">
                                        A: After generating the QR code, it&apos;s recommended to test the scanning and saving functions with multiple devices. Ensure phone number formats are correct and email addresses are valid so users won&apos;t have issues when saving.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to create your contact QR code?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Start creating professional contact QR codes now to let customers easily save your contact information
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Creating Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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