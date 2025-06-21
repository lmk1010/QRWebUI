import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft, FaPlay, FaCheck, FaArrowRight, FaPaperPlane } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Email QR Code Creation Tutorial - Quick Contact Setup Guide | QRCodeHub',
    description: 'Learn how to create email QR codes for quick contact and communication. Includes step-by-step instructions, use cases, and best practices.',
    keywords: 'email QR code, mailto QR code, contact QR code, email address QR code, business email QR code',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Email QR Code Creation Tutorial - Quick Contact Setup Guide",
        description: "Learn how to create email QR codes for quick contact and communication. Step-by-step instructions included.",
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
        title: "Email QR Code Creation Tutorial - Quick Contact Setup Guide",
        description: "Learn how to create email QR codes for quick contact and communication.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-email-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/email",
    },
};

export default function EmailQRGuidePage() {
    const useCases = [
        {
            title: "Business Cards",
            description: "Add email QR codes to business cards for instant contact",
            example: "Email: john.doe@company.com\nSubject: Business Inquiry\nMessage: Hi, I'd like to discuss...",
            icon: "💼"
        },
        {
            title: "Customer Support",
            description: "Provide easy access to support email addresses",
            example: "Email: support@company.com\nSubject: Support Request\nMessage: Please describe your issue...",
            icon: "🎧"
        },
        {
            title: "Event Registration",
            description: "Allow quick email registration for events and newsletters",
            example: "Email: events@company.com\nSubject: Event Registration\nMessage: I'd like to register for...",
            icon: "📅"
        },
        {
            title: "Feedback Collection",
            description: "Gather customer feedback through email",
            example: "Email: feedback@restaurant.com\nSubject: Customer Feedback\nMessage: Please share your experience...",
            icon: "📝"
        },
        {
            title: "Sales Inquiries",
            description: "Direct potential customers to sales team",
            example: "Email: sales@company.com\nSubject: Product Inquiry\nMessage: I'm interested in your products...",
            icon: "💰"
        },
        {
            title: "Newsletter Signup",
            description: "Easy subscription to newsletters and updates",
            example: "Email: newsletter@company.com\nSubject: Newsletter Subscription\nMessage: Please add me to your mailing list",
            icon: "📧"
        }
    ];

    const emailFields = [
        { field: "Email Address", required: true, description: "The recipient's email address" },
        { field: "Subject Line", required: false, description: "Pre-filled email subject" },
        { field: "Message Body", required: false, description: "Pre-written email content" },
        { field: "CC/BCC", required: false, description: "Additional recipients (advanced)" }
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
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6 subtle-bounce">
                                    <FaEnvelope className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    Email QR Code Tutorial
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn how to create email QR codes for quick contact and communication. 
                                    Perfect for business cards, customer support, and professional networking.
                                </p>
                            </div>

                            {/* Quick Action */}
                            <div className="text-center mb-16">
                                <Link
                                    href="/qr-generator?type=email"
                                    className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Create Email QR Code Now
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Select Email Type</h3>
                                    <p className="text-gray-600 text-sm">Choose &quot;Email&quot; from the QR code type options</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Email Details</h3>
                                    <p className="text-gray-600 text-sm">Input email address, subject, and message content</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Design</h3>
                                    <p className="text-gray-600 text-sm">Add colors, logos, and styling to match your brand</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Generate & Share</h3>
                                    <p className="text-gray-600 text-sm">Create your email QR code and share it</p>
                                </div>
                            </div>
                        </section>

                        {/* Email Fields */}
                        <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Email QR Code Fields
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {emailFields.map((field, index) => (
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                                <FaPaperPlane className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-xl">{field.field}</h3>
                                                {field.required && (
                                                    <span className="text-red-600 text-sm font-medium">Required</span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{field.description}</p>
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
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group border-l-4 border-red-500">
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
                                Best Practices & Tips
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Email Best Practices</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use professional email addresses
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Write clear, descriptive subject lines
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Keep pre-written messages concise
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Include contact context in subject
                                        </li>
                                    </ul>
                                </div>
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaEnvelope className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">QR Code Tips</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Test email QR code before printing
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Add context labels near QR code
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Use on business cards and flyers
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Consider mobile email app compatibility
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How Email QR Codes Work */}
                        <section className="scale-in" style={{ animationDelay: '1s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                                    How Email QR Codes Work
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">1</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Scan QR Code</h3>
                                        <p className="text-gray-600 text-sm">User scans the email QR code with their device</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">2</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Open Email App</h3>
                                        <p className="text-gray-600 text-sm">Device opens default email app with pre-filled information</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">3</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Send Email</h3>
                                        <p className="text-gray-600 text-sm">User can edit and send the email immediately</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Email Format Examples */}
                        <section className="fade-in-up" style={{ animationDelay: '1.2s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                                    Email Format Examples
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4">Basic Email QR Code</h3>
                                        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
                                            <p className="text-gray-700">mailto:contact@company.com</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4">Complete Email QR Code</h3>
                                        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
                                            <p className="text-gray-700">mailto:support@company.com</p>
                                            <p className="text-gray-700">?subject=Support Request</p>
                                            <p className="text-gray-700">&body=Please describe your issue...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center fade-in-up" style={{ animationDelay: '1.4s' }}>
                            <div className="glass-effect rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    Ready to Create Your Email QR Code?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Start connecting with customers and contacts instantly with professional email QR codes
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link 
                                        href="/qr-generator?type=email" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <FaEnvelope className="w-5 h-5" />
                                        Create Email QR Code
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