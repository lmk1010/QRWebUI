import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaTwitter, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for linking to personal profiles or posting preset tweets.',
    keywords: 'Twitter QR code, Twitter QR code creation, Twitter QR code tutorial, how to make Twitter QR code, Twitter QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/twitter",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-twitter-guide.png",
                width: 1200,
                height: 630,
                alt: "Twitter QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-twitter-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/twitter",
    },
};

export default function TwitterQRGuidePage() {
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Twitter QR Code",
        "description": "Detailed Twitter QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/twitter-qr-guide-image.png",
        "totalTime": "PT6M",
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
                "name": "Network Connection"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub Twitter QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Twitter Type",
                "text": "Open the QR code generator and click the &quot;Twitter&quot; option in the left function area to enter Twitter QR code mode.",
                "image": "https://qrcodehub.net/step1-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Select Function Type",
                "text": "Choose &quot;Profile Link&quot; or &quot;Tweet&quot; function. Profile link will redirect to your Twitter homepage, tweet will preset tweet content.",
                "image": "https://qrcodehub.net/step2-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Enter Twitter Information",
                "text": "If you select profile link, enter your Twitter username (no @ needed). If you select tweet, enter the tweet content you want to preset.",
                "image": "https://qrcodehub.net/step3-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click the &quot;Generate QR Code&quot; button to instantly create your Twitter QR code. Then select the download format (PNG, JPG, SVG, PDF).",
                "image": "https://qrcodehub.net/step4-twitter.png"
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

    const twitterFeatures = [
        {
            title: "Profile Link",
            description: "Scan to directly jump to your Twitter profile page",
            icon: "👤",
            benefits: ["Quick Follow", "Personal Branding", "Fan Growth"]
        },
        {
            title: "Tweet",
            description: "Scan to automatically open Twitter and preset tweet content",
            icon: "📝",
            benefits: ["Content Sharing", "Topic Promotion", "Interactive Guidance"]
        }
    ];

    const useCases = [
        {
            title: "Personal Branding",
            description: "Add Twitter profile QR code to business cards, resumes, or promotional materials",
            example: "Username: @yourusername",
            icon: "📄"
        },
        {
            title: "Event Promotion",
            description: "Create QR code with event-related tweets to guide users to share",
            example: "Tweet: Join our event! #event #share",
            icon: "📸"
        },
        {
            title: "Product Promotion",
            description: "Create QR code with product promotion tweets to increase product exposure",
            example: "Tweet: New product! Limited time offer, hurry up and grab it #new #discount",
            icon: "🛍️"
        },
        {
            title: "Topic Tag Promotion",
            description: "Create QR code with tweets containing specific topic tags",
            example: "Tweet: Share your thoughts #innovation #technology #future",
            icon: "🏷️"
        }
    ];

    const bestPractices = [
        {
            title: "Use Short and Memorable Usernames",
            description: "Choose short and easy-to-remember Twitter usernames for users to input",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test the QR Code",
            description: "Test the QR code with different devices and Twitter apps before publishing",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Keep tweets within 280 characters for best compatibility",
            description: "Keep your tweet content within 280 characters for best results",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "Keep tweets within 280 characters for best compatibility",
        "Use relevant and trending hashtags to increase exposure"
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
                <section className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-sky-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Tutorial Home
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaTwitter className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        Twitter QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-sky-100 text-lg">
                                        Learn how to create Twitter QR codes, linking to personal profiles or posting preset tweets
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Create Twitter QR Code Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
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
                        {/* What is a Twitter QR Code */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a Twitter QR Code?</h2>
                            <div className="bg-sky-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Twitter QR codes are specifically designed for the Twitter platform. They help users quickly access your Twitter profile page,
                                    or automatically open the Twitter app and preset tweet content. This makes Twitter QR codes perfect for social media marketing and personal branding.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">👤</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Profile Link</h4>
                                        <p className="text-sm text-gray-600">Jump to profile page</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📝</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Tweet</h4>
                                        <p className="text-sm text-gray-600">Preset tweet content</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📈</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Fan Growth</h4>
                                        <p className="text-sm text-gray-600">Increase follower count</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Twitter Function Types */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Twitter Function Types</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {twitterFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{feature.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{feature.description}</p>
                                        <div className="space-y-2">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Creation Steps */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Create a Twitter QR Code</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select Twitter Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Open the QR code generator and click the &quot;Twitter&quot; option in the left function area to enter Twitter QR code creation mode.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Tip:</strong> Twitter type is specifically designed for creating Twitter-related QR codes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Select Function Type</h3>
                                        <p className="text-gray-700 mb-3">
                                            Choose &quot;Profile Link&quot; or &quot;Tweet&quot; function. Profile link will redirect to your Twitter homepage, tweet will preset tweet content.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Recommendation:</strong> Profile link is suitable for personal branding, tweet is suitable for event promotion.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Enter Twitter Information</h3>
                                        <p className="text-gray-700 mb-3">
                                            If you select profile link, enter your Twitter username (no @ needed). If you select tweet, enter the tweet content you want to preset.
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Example:</strong> Username: yourusername or Tweet: Join our event! #event #share
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Generate and Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Click the &quot;Generate QR Code&quot; button to instantly create your Twitter QR code. Then select the download format (PNG, JPG, SVG, PDF).
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
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{useCase.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{useCase.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-sm text-sky-600 font-mono">{useCase.example}</p>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Do Twitter usernames need to include the @ symbol?</h3>
                                    <p className="text-gray-700">
                                        A: No! When entering Twitter username, just enter the username itself, no need to include the @ symbol.
                                        For example: If your username is @yourusername, just enter yourusername.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Is there a length limit for tweet content?</h3>
                                    <p className="text-gray-700">
                                        A: Yes, Twitter tweets have a 280 character limit. It&apos;s recommended to keep tweet content within 280 characters,
                                        so users can post directly after scanning without modification.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Can I add hashtags in tweets?</h3>
                                    <p className="text-gray-700">
                                        A: Yes! You can add hashtags (#tags) in tweet content to increase tweet exposure.
                                        It&apos;s recommended to use relevant and trending hashtags.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Will it automatically follow after scanning?</h3>
                                    <p className="text-gray-700">
                                        A: No automatic following. After scanning a profile link QR code, it will redirect to your Twitter profile page,
                                        and users need to manually click the follow button to follow you.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center py-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to create your Twitter QR code?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Start creating professional Twitter QR codes now to enhance your social media influence
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Start Creating Now
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
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