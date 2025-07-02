import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;re here to help! Get in touch with our team for support, questions, or feedback about our QR code generator.
                </p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Contact Information Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* General Inquiries */}
                        <div className="glass-effect rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">General Inquiries</h2>
                            <p className="text-gray-600 mb-6">
                                Questions about our services, features, or general information about QRCodeHub.
                            </p>
                            <a href="mailto:lmkbnb0@gmail.com" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                lmkbnb0@gmail.com
                            </a>
                        </div>

                        {/* Technical Support */}
                        <div className="glass-effect rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Support</h2>
                            <p className="text-gray-600 mb-6">
                                Need help with QR code generation, technical issues, or platform functionality?
                            </p>
                            <a href="mailto:lmkbnb0@gmail.com" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                                lmkbnb0@gmail.com
                            </a>
                        </div>

                        {/* Business Partnerships */}
                        <div className="glass-effect rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Partnerships</h2>
                            <p className="text-gray-600 mb-6">
                                Interested in partnerships, integrations, or enterprise solutions for your organization.
                            </p>
                            <a href="mailto:lmkbnb0@gmail.com" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                                lmkbnb0@gmail.com
                            </a>
                        </div>
                    </section>

                    {/* Response Time Information */}
                    <section className="glass-effect rounded-3xl p-8 md:p-12 mb-16">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Response Time</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Response</h3>
                                    <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🌍</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Global Support</h3>
                                    <p className="text-gray-600">We provide support to users worldwide in multiple languages.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">💬</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Help</h3>
                                    <p className="text-gray-600">We provide comprehensive solutions and follow-up support.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Additional Resources */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Additional Resources</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-effect rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Self-Help Resources</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p>Before contacting us, you might find answers in our comprehensive resources:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <Link href="/faq" className="text-blue-600 hover:text-blue-800 transition-colors">Frequently Asked Questions</Link>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <Link href="/guide" className="text-blue-600 hover:text-blue-800 transition-colors">Complete User Guide</Link>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <Link href="/features" className="text-blue-600 hover:text-blue-800 transition-colors">Feature Documentation</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="glass-effect rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Community & Feedback</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p>We value your feedback and suggestions for improving our platform:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Feature requests and suggestions</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Bug reports and technical issues</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>User experience feedback</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="text-center">
                        <div className="glass-effect rounded-3xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Don&apos;t wait! Start creating professional QR codes right now with our free generator.
                            </p>
                            <Link 
                                href="/qr-generator" 
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                Create QR Code Now
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Contact;
