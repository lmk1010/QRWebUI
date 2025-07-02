import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service - QRCodeHub | Usage Terms & Conditions',
    description: 'Read QRCodeHub terms of service, usage conditions, and legal agreements. Understand your rights and responsibilities when using our free QR code generator platform.',
    keywords: 'terms of service, terms and conditions, QR code generator terms, usage agreement, legal terms, QRCodeHub terms',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Terms of Service - QRCodeHub | Usage Terms & Conditions",
        description: "Read QRCodeHub terms of service, usage conditions, and legal agreements.",
        url: "https://qrcodehub.net/terms",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-terms.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub Terms of Service - Legal Agreement"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service - QRCodeHub | Usage Terms & Conditions",
        description: "Read QRCodeHub terms of service, usage conditions, and legal agreements.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-terms.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/terms",
    },
};

export default function TermsPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "QRCodeHub terms of service and usage conditions",
        "url": "https://qrcodehub.net/terms",
        "mainEntity": {
            "@type": "Article",
            "name": "Terms of Service",
            "author": {
                "@type": "Organization",
                "name": "QRCodeHub"
            },
            "publisher": {
                "@type": "Organization",
                "name": "QRCodeHub"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01"
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <Navbar />
            
            <main className="flex-grow relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <header className="text-center mb-16">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                                    Terms of Service
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Please read these terms carefully before using our QR code generator service.
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    Last updated: January 1, 2024
                                </p>
                            </header>

                            {/* Acceptance of Terms */}
                            <section className="mb-16">
                                <div className="glass-effect rounded-3xl p-8 md:p-12 border border-blue-200/30">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Acceptance of Terms</h2>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        By accessing and using QRCodeHub&apos;s QR code generator service, you accept and agree to be bound by the terms 
                                        and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                    </p>
                                </div>
                            </section>

                            {/* Service Description */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Service Description</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            QRCodeHub provides a free online QR code generation service that allows users to create custom QR codes 
                                            for various purposes including URLs, text, contact information, WiFi credentials, and more.
                                        </p>
                                        <p className="leading-relaxed">
                                            Our service includes:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Free QR code generation with unlimited usage</li>
                                            <li>Multiple QR code types and formats</li>
                                            <li>Customization options (colors, logos, styles)</li>
                                            <li>High-resolution download options</li>
                                            <li>Built-in QR code scanner for testing</li>
                                            <li>No registration or account required</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* User Responsibilities */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">User Responsibilities</h2>
                                <div className="space-y-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Acceptable Use</h3>
                                        <div className="space-y-3 text-gray-600">
                                            <p>You agree to use our service only for lawful purposes and in accordance with these Terms:</p>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>Generate QR codes for legitimate business and personal use</li>
                                                <li>Respect intellectual property rights</li>
                                                <li>Not use the service for spam, phishing, or malicious activities</li>
                                                <li>Not attempt to disrupt or compromise the service</li>
                                                <li>Comply with all applicable laws and regulations</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Content Responsibility</h3>
                                        <div className="space-y-3 text-gray-600">
                                            <p>You are solely responsible for:</p>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>The content you encode in QR codes</li>
                                                <li>Ensuring your QR codes comply with applicable laws</li>
                                                <li>Verifying the accuracy of information in your QR codes</li>
                                                <li>Obtaining necessary permissions for copyrighted content</li>
                                                <li>The consequences of using generated QR codes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Intellectual Property */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Intellectual Property Rights</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">🏢</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Our Rights</h3>
                                        <p className="text-gray-600">
                                            QRCodeHub retains all rights, title, and interest in and to the service, including all intellectual 
                                            property rights. The service and its original content are protected by copyright and other laws.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">👤</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Your Rights</h3>
                                        <p className="text-gray-600">
                                            You retain ownership of the content you encode in QR codes. Generated QR codes are your property 
                                            and you have full rights to use, modify, and distribute them as you see fit.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Privacy and Data */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Privacy and Data Protection</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            Your privacy is important to us. Our privacy practices are detailed in our 
                                            <Link href="/privacy" className="text-blue-600 hover:underline mx-1">Privacy Policy</Link>
                                            , which is incorporated into these Terms by reference.
                                        </p>
                                        <p className="leading-relaxed">
                                            Key privacy commitments:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>We do not store your QR code content on our servers</li>
                                            <li>All processing happens client-side when possible</li>
                                            <li>We collect minimal data necessary for service operation</li>
                                            <li>Your data is protected with industry-standard security measures</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Disclaimers */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Disclaimers and Limitations</h2>
                                <div className="space-y-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Service Availability</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                                            The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">QR Code Accuracy</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            While we use reliable algorithms for QR code generation, we cannot guarantee that all QR codes 
                                            will scan correctly in all conditions. Users should test their QR codes before widespread use.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Third-Party Content</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            QR codes may link to third-party websites or content. We are not responsible for the content, 
                                            privacy practices, or availability of any third-party sites or services.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Limitation of Liability */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Limitation of Liability</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            To the maximum extent permitted by law, QRCodeHub shall not be liable for any indirect, 
                                            incidental, special, consequential, or punitive damages, including but not limited to:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Loss of profits, data, or business opportunities</li>
                                            <li>Damages resulting from use of generated QR codes</li>
                                            <li>Service interruptions or technical issues</li>
                                            <li>Third-party actions or content</li>
                                        </ul>
                                        <p className="leading-relaxed">
                                            Our total liability shall not exceed the amount paid by you for our services (which is $0 for free users).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Termination */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Termination</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            We may terminate or suspend your access to our service immediately, without prior notice, 
                                            for any reason, including breach of these Terms.
                                        </p>
                                        <p className="leading-relaxed">
                                            Upon termination, your right to use the service will cease immediately. The provisions of these 
                                            Terms that by their nature should survive termination shall survive.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Changes to Terms */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Changes to Terms</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            We reserve the right to modify these Terms at any time. We will notify users of any material 
                                            changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date.
                                        </p>
                                        <p className="leading-relaxed">
                                            Your continued use of the service after any changes constitutes acceptance of the new Terms. 
                                            If you do not agree to the new Terms, you should discontinue using our service.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Governing Law */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Governing Law</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                                            where QRCodeHub operates, without regard to its conflict of law provisions.
                                        </p>
                                        <p className="leading-relaxed">
                                            Any disputes arising from these Terms or your use of the service shall be resolved through 
                                            appropriate legal channels in the applicable jurisdiction.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        If you have any questions about these Terms of Service, please contact us:
                                    </p>
                                    <div className="space-y-3">
                                        <p className="text-gray-600">
                                            <strong>Email:</strong> <a href="mailto:lmkbnb0@gmail.com" className="text-blue-600 hover:underline">lmkbnb0@gmail.com</a>
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="text-center">
                                <div className="glass-effect rounded-3xl p-8 md:p-12">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                                        Ready to Start Using Our Service?
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                        By using our QR code generator, you agree to these terms. 
                                        Start creating professional QR codes today!
                                    </p>
                                    <Link 
                                        href="/qr-generator" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                        Start Creating Now
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 