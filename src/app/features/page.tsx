import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
    title: 'QR Code Generator Features - Free Online QR Code Creator',
    description: 'Discover all the powerful features of our free QR code generator. Create custom QR codes with colors, logos, and various formats. Fast, secure, and completely free.',
    keywords: 'QR code features, custom QR codes, QR code generator features, free QR code maker, QR code customization',
};

export default function FeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* 页面标题 */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Powerful QR Code Generator Features
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Discover why our free QR code generator is the best choice for creating professional, 
                            customizable QR codes for all your needs.
                        </p>
                    </header>

                    {/* 主要功能特点 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Why Choose Our QR Code Generator?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🆓</div>
                                <h3 className="font-semibold text-blue-800 mb-3 text-lg">Completely Free</h3>
                                <p className="text-gray-700">
                                    Create unlimited QR codes without any cost. No hidden fees, no subscription required. 
                                    Generate as many QR codes as you need, completely free forever.
                                </p>
                            </div>
                            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="font-semibold text-green-800 mb-3 text-lg">Instant Generation</h3>
                                <p className="text-gray-700">
                                    Generate QR codes instantly with our lightning-fast QR code generator. 
                                    Create professional QR codes in seconds, not minutes.
                                </p>
                            </div>
                            <div className="p-6 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="font-semibold text-purple-800 mb-3 text-lg">Custom Design</h3>
                                <p className="text-gray-700">
                                    Customize your QR codes with colors, logos, and different styles. 
                                    Create branded QR codes that match your business identity perfectly.
                                </p>
                            </div>
                            <div className="p-6 bg-orange-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="font-semibold text-orange-800 mb-3 text-lg">Built-in QR Scanner</h3>
                                <p className="text-gray-700">
                                    Test your QR codes instantly with our built-in QR code scanner. 
                                    Verify that your generated QR codes work perfectly before using them.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="font-semibold text-red-800 mb-3 text-lg">Secure & Private</h3>
                                <p className="text-gray-700">
                                    Your data stays completely private. We don't store your QR code content 
                                    on our servers. Generate QR codes with complete privacy and security.
                                </p>
                            </div>
                            <div className="p-6 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="font-semibold text-teal-800 mb-3 text-lg">High Quality Output</h3>
                                <p className="text-gray-700">
                                    Generate high-resolution QR codes suitable for both digital and print use. 
                                    Download in multiple formats including PNG, JPG, SVG, and PDF.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* QR码类型 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Types of QR Codes You Can Create
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">📱</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">Website URL QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Create QR codes that link directly to your website, landing page, or any URL. 
                                    Perfect for marketing campaigns and business cards.
                                </p>
                            </div>
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">📝</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">Text QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Generate QR codes containing plain text messages, instructions, or any information 
                                    you want to share quickly and easily.
                                </p>
                            </div>
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">📧</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">Email QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Create QR codes that automatically compose emails with preset recipients, 
                                    subject lines, and message content.
                                </p>
                            </div>
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">📞</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">Phone Number QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Generate QR codes that automatically dial phone numbers when scanned. 
                                    Great for business contact information.
                                </p>
                            </div>
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">💬</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">SMS QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Create QR codes that send pre-written text messages to specific phone numbers. 
                                    Perfect for customer support and feedback.
                                </p>
                            </div>
                            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">🌐</span>
                                    <h3 className="font-semibold text-gray-800 text-lg">WiFi QR Code</h3>
                                </div>
                                <p className="text-gray-600">
                                    Generate QR codes for easy WiFi network sharing and connection. 
                                    Let guests connect to your WiFi instantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 定制选项 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Customization Options
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="font-semibold text-blue-800 mb-3">Colors & Styles</h3>
                                <p className="text-gray-700">
                                    Choose from unlimited color combinations and various QR code styles 
                                    to match your brand or personal preference.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                                <div className="text-4xl mb-4">🖼️</div>
                                <h3 className="font-semibold text-green-800 mb-3">Logo Integration</h3>
                                <p className="text-gray-700">
                                    Add your company logo or personal image to the center of your QR code 
                                    for enhanced branding and recognition.
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                                <div className="text-4xl mb-4">📐</div>
                                <h3 className="font-semibold text-purple-800 mb-3">Size & Format</h3>
                                <p className="text-gray-700">
                                    Generate QR codes in various sizes and download in multiple formats 
                                    including PNG, JPG, SVG, and PDF.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA部分 */}
                    <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Ready to Create Your QR Code?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Start generating professional QR codes with all these amazing features - completely free!
                        </p>
                        <a 
                            href="/" 
                            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                        >
                            Create QR Code Now
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
} 