import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy - QRCodeHub | Data Protection & Privacy',
    description: 'Learn about QRCodeHub privacy policy, how we protect your data, and our commitment to user privacy. We never store personal information and ensure complete data security.',
    keywords: 'privacy policy, data protection, QR code privacy, user data security, GDPR compliance, privacy protection, QRCodeHub privacy',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Privacy Policy - QRCodeHub | Data Protection & Privacy",
        description: "Learn about QRCodeHub privacy policy, how we protect your data, and our commitment to user privacy.",
        url: "https://qrcodehub.net/privacy",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-privacy.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub Privacy Policy - Data Protection"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy - QRCodeHub | Data Protection & Privacy",
        description: "Learn about QRCodeHub privacy policy, how we protect your data, and our commitment to user privacy.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-privacy.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/privacy",
    },
};

export default function PrivacyPage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "QRCodeHub privacy policy and data protection information",
        "url": "https://qrcodehub.net/privacy",
        "mainEntity": {
            "@type": "Article",
            "name": "Privacy Policy",
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                                    Privacy Policy
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Your privacy is our priority. Learn how we protect your data and ensure complete security.
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    Last updated: January 1, 2024
                                </p>
                            </header>

                            {/* Privacy Commitment */}
                            <section className="mb-16">
                                <div className="glass-effect rounded-3xl p-8 md:p-12 border border-green-200/30">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Our Privacy Commitment</h2>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        At QRCodeHub, we believe that your privacy is fundamental. We are committed to protecting your personal information 
                                        and ensuring that you have complete control over your data. Our platform is designed with privacy-first principles, 
                                        meaning we collect minimal data and never store your QR code content on our servers.
                                    </p>
                                </div>
                            </section>

                            {/* Information We Collect */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Information We Collect</h2>
                                <div className="space-y-8">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Information You Provide</h3>
                                        <div className="space-y-3 text-gray-600">
                                            <p>We collect minimal information that you voluntarily provide:</p>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>QR code content (processed locally, never stored)</li>
                                                <li>Customization preferences (temporary session data)</li>
                                                <li>Contact information (only if you choose to contact us)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Automatically Collected Information</h3>
                                        <div className="space-y-3 text-gray-600">
                                            <p>We automatically collect certain technical information:</p>
                                            <ul className="list-disc list-inside space-y-2 ml-4">
                                                <li>Device information (browser type, operating system)</li>
                                                <li>Usage analytics (page views, feature usage)</li>
                                                <li>IP address (for security and analytics purposes)</li>
                                                <li>Cookies and similar technologies (for functionality)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* How We Use Information */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">How We Use Your Information</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">⚙️</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Service Provision</h3>
                                        <p className="text-gray-600">
                                            To provide and maintain our QR code generation service, improve functionality, 
                                            and ensure optimal user experience.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">🔒</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Security & Safety</h3>
                                        <p className="text-gray-600">
                                            To protect against fraud, abuse, and security threats, and to maintain 
                                            the integrity of our platform.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">📊</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics & Improvement</h3>
                                        <p className="text-gray-600">
                                            To analyze usage patterns, improve our services, and develop new features 
                                            that better serve our users.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                                            <span className="text-xl">📞</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Communication</h3>
                                        <p className="text-gray-600">
                                            To respond to your inquiries, provide customer support, and send 
                                            important service updates when necessary.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Data Protection */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Data Protection & Security</h2>
                                <div className="space-y-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Client-Side Processing</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            All QR code generation happens in your browser using client-side processing. 
                                            This means your QR code content never leaves your device and is never stored 
                                            on our servers. Your data stays completely private and under your control.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Encryption & Security</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We use industry-standard encryption (HTTPS/TLS) to protect all data 
                                            transmitted between your device and our servers. Our infrastructure 
                                            follows security best practices to ensure your information remains secure.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">No Data Storage</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We do not store your QR code content, personal information, or any 
                                            sensitive data on our servers. All processing is temporary and 
                                            occurs only during your active session.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Your Rights */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Your Privacy Rights</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Right to Access</h3>
                                        <p className="text-gray-600">
                                            You have the right to request information about what data we collect 
                                            and how we use it.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Right to Deletion</h3>
                                        <p className="text-gray-600">
                                            You can request the deletion of any personal information we may have 
                                            collected about you.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Right to Control</h3>
                                        <p className="text-gray-600">
                                            You have complete control over your data and can choose what 
                                            information to share with us.
                                        </p>
                                    </div>
                                    
                                    <div className="glass-effect rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Right to Object</h3>
                                        <p className="text-gray-600">
                                            You can object to certain types of data processing and request 
                                            that we stop using your information.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Cookies Policy */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Cookies & Tracking</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Essential Cookies</h3>
                                            <p className="text-gray-600">
                                                We use essential cookies to ensure our website functions properly. 
                                                These cookies are necessary for basic site functionality and cannot be disabled.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics Cookies</h3>
                                            <p className="text-gray-600">
                                                We use analytics cookies to understand how users interact with our platform. 
                                                This helps us improve our services and provide better user experiences.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Cookie Management</h3>
                                            <p className="text-gray-600">
                                                You can control cookie settings through your browser preferences. 
                                                However, disabling certain cookies may affect site functionality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Third-Party Services */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Third-Party Services</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        We may use third-party services for analytics, security, and functionality. 
                                        These services have their own privacy policies, and we recommend reviewing them:
                                    </p>
                                    <ul className="space-y-3 text-gray-600">
                                        <li>• <strong>Google Analytics:</strong> Website usage analytics and performance monitoring</li>
                                        <li>• <strong>Google AdSense:</strong> Advertising services (when applicable)</li>
                                        <li>• <strong>Cloudflare:</strong> Security and content delivery services</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Us</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        If you have any questions about this Privacy Policy or our data practices, 
                                        please contact us:
                                    </p>
                                    <div className="space-y-3">
                                        <p className="text-gray-600">
                                            <strong>Email:</strong> <a href="mailto:lmkbnb0@gmail.com" className="text-blue-600 hover:underline">lmkbnb0@gmail.com</a>
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Updates to Policy */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 gradient-text">Updates to This Policy</h2>
                                <div className="glass-effect rounded-2xl p-8">
                                    <p className="text-gray-600 leading-relaxed">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices 
                                        or applicable laws. We will notify users of any material changes by posting the updated 
                                        policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review 
                                        this policy periodically to stay informed about how we protect your information.
                                    </p>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="text-center">
                                <div className="glass-effect rounded-3xl p-8 md:p-12">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                                        Ready to Create QR Codes Securely?
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Start generating professional QR codes with complete privacy protection. 
                                        Your data stays secure and private.
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