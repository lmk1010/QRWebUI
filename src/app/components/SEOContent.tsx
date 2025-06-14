import React from 'react';
import Link from 'next/link';

interface SEOContentProps {
    showOnlyHeader?: boolean;
    showOnlyContent?: boolean;
}

const SEOContent: React.FC<SEOContentProps> = ({ showOnlyHeader, showOnlyContent }) => {
    // 如果只显示内容部分，不显示标题
    if (showOnlyContent) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-white">
                {/* 功能特点预览 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Why Choose Our QR Code Generator?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-800 mb-2 text-lg">🆓 Completely Free</h3>
                            <p className="text-gray-700">
                                Create unlimited QR codes without any cost. No hidden fees or subscription required.
                            </p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-green-800 mb-2 text-lg">⚡ Instant Generation</h3>
                            <p className="text-gray-700">
                                Generate QR codes instantly with our fast QR code generator. Create QR codes in seconds.
                            </p>
                        </div>
                        <div className="p-6 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-purple-800 mb-2 text-lg">🎨 Custom Design</h3>
                            <p className="text-gray-700">
                                Customize your QR codes with colors, logos, and different styles to match your brand.
                            </p>
                        </div>
                        <div className="p-6 bg-orange-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-orange-800 mb-2 text-lg">📱 QR Code Scanner</h3>
                            <p className="text-gray-700">
                                Built-in QR code scanner to test and verify your generated QR codes work perfectly.
                            </p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-red-800 mb-2 text-lg">🔒 Secure & Private</h3>
                            <p className="text-gray-700">
                                Your data stays private. We don't store your QR code content on our servers.
                            </p>
                        </div>
                        <div className="p-6 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-teal-800 mb-2 text-lg">📊 High Quality</h3>
                            <p className="text-gray-700">
                                Generate high-resolution QR codes suitable for both digital and print use.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link 
                            href="/features" 
                            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                        >
                            View All Features
                        </Link>
                    </div>
                </section>

                {/* QR码类型预览 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Types of QR Codes You Can Create
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">📱 Website URL</h3>
                            <p className="text-gray-600">Link directly to websites and landing pages.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">📝 Text Messages</h3>
                            <p className="text-gray-600">Share plain text and information instantly.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">📧 Email</h3>
                            <p className="text-gray-600">Pre-compose emails with recipients and subjects.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">📞 Phone Numbers</h3>
                            <p className="text-gray-600">Enable direct dialing with one scan.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">💬 SMS</h3>
                            <p className="text-gray-600">Send pre-written text messages easily.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h3 className="font-semibold text-gray-800 mb-2">🌐 WiFi</h3>
                            <p className="text-gray-600">Share WiFi credentials for instant connection.</p>
                        </div>
                    </div>
                </section>

                {/* 快速指南链接 */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            New to QR Codes?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Learn how to create professional QR codes with our step-by-step guide.
                        </p>
                        <Link 
                            href="/guide" 
                            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                        >
                            View Complete Guide
                        </Link>
                    </div>
                </section>

                {/* FAQ预览 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Common Questions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-3">
                                Is this QR code generator really free?
                            </h3>
                            <p className="text-gray-700">
                                Yes! Create unlimited QR codes without any registration or hidden costs.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-3">
                                Can I customize my QR code design?
                            </h3>
                            <p className="text-gray-700">
                                Absolutely! Add colors, logos, and custom styles to match your brand.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-3">
                                What file formats can I download?
                            </h3>
                            <p className="text-gray-700">
                                Download in PNG, JPG, SVG, and PDF formats for any use case.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-3">
                                Is my data stored on your servers?
                            </h3>
                            <p className="text-gray-700">
                                No! All generation happens in your browser. Your data stays private.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link 
                            href="/faq" 
                            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
                        >
                            View All FAQ
                        </Link>
                    </div>
                </section>

                {/* 底部SEO文本 */}
                <section className="text-center pt-8 border-t">
                    <p className="text-gray-600 leading-relaxed">
                        QRCodeHub.net is your go-to free QR code generator for creating professional QR codes online. 
                        Whether you need a QR code scanner, want to create QR codes for business, or generate custom 
                        QR codes for personal use, our tool makes it simple and fast. Start creating your free QR codes today!
                    </p>
                </section>
            </div>
        );
    }

    // 默认显示标题部分（或者如果指定了showOnlyHeader）
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            {/* 主标题 - 包含核心关键词 */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Free QR Code Generator - Create Custom QR Codes Online
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Generate professional QR codes instantly with our free online QR code generator. 
                    Create custom QR codes for websites, text, WiFi, social media, and more. 
                    No registration required - start creating QR codes now!
                </p>
            </header>
        </div>
    );
};

export default SEOContent; 