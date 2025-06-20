import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Email QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for customer service, business cooperation and other scenarios.',
    keywords: 'email QR code, email QR code creation, email QR code tutorial, how to make email QR code, email QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Email QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/email",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-email-guide.png",
                width: 1200,
                height: 630,
                alt: "Email QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Email QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-email-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/email",
    },
};

export default function EmailQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create an Email QR Code",
        "description": "Detailed email QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/email-qr-guide-image.png",
        "totalTime": "PT6M",
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
                "name": "QRCodeHub Email QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Email Type",
                "text": "Choose 'Email' type in the QR code generator",
                "image": "https://qrcodehub.net/step1-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Fill Email Information",
                "text": "Enter recipient email, subject and content",
                "image": "https://qrcodehub.net/step2-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Customize Style",
                "text": "Choose colors, add logo and other personalized settings",
                "image": "https://qrcodehub.net/step3-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click generate button to create QR code and download",
                "image": "https://qrcodehub.net/step4-email.png"
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

    const emailFields = [
        {
            field: "Recipient Email",
            required: true,
            description: "Email address of the recipient",
            example: "contact@example.com"
        },
        {
            field: "Email Subject",
            required: false,
            description: "Subject title of the email",
            example: "Business Cooperation Inquiry"
        },
        {
            field: "Email Content",
            required: false,
            description: "Body content of the email",
            example: "Hello, I&apos;m interested in your products and would like to learn more information."
        }
    ];

    const useCases = [
        {
            title: "Customer Service",
            description: "Provide customer service email contact for easy customer inquiries",
            example: {
                email: "service@company.com",
                subject: "Customer Service Inquiry",
                content: "Hello, I need help with the following issue:"
            },
            icon: "🎧"
        },
        {
            title: "Business Cooperation",
            description: "Share business cooperation email for partner contact",
            example: {
                email: "business@company.com",
                subject: "Business Cooperation Proposal",
                content: "Hello, we hope to establish a cooperative relationship with your company."
            },
            icon: "🤝"
        },
        {
            title: "Feedback",
            description: "Collect user opinions and feedback to improve products and services",
            example: {
                email: "feedback@company.com",
                subject: "Product Feedback",
                content: "Hello, I would like to make the following suggestions for the product:"
            },
            icon: "💬"
        },
        {
            title: "Subscription Service",
            description: "Provide subscription email for users to subscribe to latest news",
            example: {
                email: "subscribe@company.com",
                subject: "Subscription Service",
                content: "Hello, I would like to subscribe to your company&apos;s latest news and promotional information."
            },
            icon: "📧"
        }
    ];

    const bestPractices = [
        {
            title: "Use Professional Email",
            description: "Use company domain email to enhance professional image and credibility",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Set Clear Subject",
            description: "Preset clear email subject to help recipients quickly understand email content",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Provide Template Content",
            description: "Preset email template content to reduce user input burden",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Regular Email Check",
            description: "Ensure email works properly and respond to user emails promptly",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "Email QR codes use mailto protocol and are compatible with all mainstream email clients",
        "You can use placeholders in email content, such as {user name}, to let users personalize the content",
        "It&apos;s recommended to add &apos;Scan to send email&apos; instructions near the QR code",
        "You can create multiple email QR codes for different purposes, such as customer service, business, feedback, etc."
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
                <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaEnvelope className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        Email QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-orange-100 text-lg">
                                        Learn how to create email QR codes that automatically open email clients and preset recipients and content when scanned
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator?template=email"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create Email QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
                        {/* What is an Email QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is an Email QR Code?</h2>
                            <div className="bg-orange-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    An email QR code is a type of QR code that contains email information. When users scan this QR code, it automatically opens the email client on their phone or computer and presets the recipient email, subject, and content. This makes email QR codes perfect for customer service contact, business cooperation, feedback, and other scenarios.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📧</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Auto Fill</h4>
                                        <p className="text-sm text-gray-600">Preset recipient and content</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">⚡</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Quick Contact</h4>
                                        <p className="text-sm text-gray-600">One-click open email client</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">💼</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Professional Communication</h4>
                                        <p className="text-sm text-gray-600">Improve communication efficiency</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Email Field Description */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Email Field Description</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Email Information Fields</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {emailFields.map((field, index) => (
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

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Creation Steps</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select Email Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;Email&quot; option in the left function area to enter email QR code creation mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> Email type will display a specialized email information form.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Fill Email Information</h3>
                                        <p className="text-gray-700 mb-3">
                                            Fill in recipient email, email subject, and email content in the email information form. Recipient email is required.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> Presetting email subject and content can improve user experience and reduce input burden.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Customize Style (Optional)</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Customize&quot; button to adjust colors, add a logo, modify styles, etc., to make your QR code more personalized.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> You can add a company logo to enhance professional image.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button, and the system will immediately create your email QR code. Then select the download format (PNG, JPG, SVG, PDF).
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
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>Recipient:</strong> {useCase.example.email}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>Subject:</strong> {useCase.example.subject}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>Content:</strong> {useCase.example.content}
                                                </p>
                                            </div>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Which email clients do email QR codes support?</h3>
                                    <p className="text-gray-700">
                                        A: Email QR codes use standard mailto protocol and are compatible with all mainstream email clients, including Gmail, Outlook, Apple Mail, and mobile email applications.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Are email subject and content required?</h3>
                                    <p className="text-gray-700">
                                        A: No, they are not required. Only recipient email is required. Email subject and content are optional, but it&apos;s recommended to preset this information to improve user experience.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Can I use special characters in email content?</h3>
                                    <p className="text-gray-700">
                                        A: Yes! Chinese characters, English, numbers, symbols, etc. are supported. However, it&apos;s recommended to avoid overly complex special characters to ensure correct display in all email clients.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: How to ensure emails are replied to promptly?</h3>
                                    <p className="text-gray-700">
                                        A: It&apos;s recommended to set up email auto-reply to inform users that emails have been received and will be replied to within a specified time. Also check emails regularly to ensure timely handling of user emails.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to create your email QR code?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Start creating professional email QR codes now to improve customer communication efficiency
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator?template=email"
                                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Creating Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
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