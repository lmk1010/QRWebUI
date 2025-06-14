import React from 'react';

const SEOContent: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            {/* 主标题 - 包含核心关键词 */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Free QR Code Generator - Create Custom QR Codes Online
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Generate professional QR codes instantly with our free online QR code generator. 
                    Create custom QR codes for websites, text, WiFi, social media, and more. 
                    No registration required - completely free QR code maker tool.
                </p>
            </header>

            {/* 功能特点 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why Choose Our QR Code Generator?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">🆓 Completely Free</h3>
                        <p className="text-gray-700">
                            Create unlimited QR codes without any cost. No hidden fees or subscription required.
                        </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">⚡ Instant Generation</h3>
                        <p className="text-gray-700">
                            Generate QR codes instantly with our fast QR code generator. Create QR codes in seconds.
                        </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">🎨 Custom Design</h3>
                        <p className="text-gray-700">
                            Customize your QR codes with colors, logos, and different styles to match your brand.
                        </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">📱 QR Code Scanner</h3>
                        <p className="text-gray-700">
                            Built-in QR code scanner to test and verify your generated QR codes work perfectly.
                        </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-2">🔒 Secure & Private</h3>
                        <p className="text-gray-700">
                            Your data stays private. We don&apos;t store your QR code content on our servers.
                        </p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg">
                        <h3 className="font-semibold text-teal-800 mb-2">📊 High Quality</h3>
                        <p className="text-gray-700">
                            Generate high-resolution QR codes suitable for both digital and print use.
                        </p>
                    </div>
                </div>
            </section>

            {/* QR码类型 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Types of QR Codes You Can Create
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📱 Website URL QR Code</h3>
                        <p className="text-gray-600">Create QR codes that link directly to your website or landing page.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📝 Text QR Code</h3>
                        <p className="text-gray-600">Generate QR codes containing plain text messages or information.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📧 Email QR Code</h3>
                        <p className="text-gray-600">Create QR codes that automatically compose emails with preset recipients.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📞 Phone Number QR Code</h3>
                        <p className="text-gray-600">Generate QR codes that dial phone numbers when scanned.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📱 SMS QR Code</h3>
                        <p className="text-gray-600">Create QR codes that send pre-written text messages.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">🌐 WiFi QR Code</h3>
                        <p className="text-gray-600">Generate QR codes for easy WiFi network sharing and connection.</p>
                    </div>
                </div>
            </section>

            {/* FAQ部分 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Is this QR code generator really free?
                        </h3>
                        <p className="text-gray-700">
                            Yes! Our QR code generator is completely free to use. You can create unlimited QR codes 
                            without any registration or hidden costs.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            How do I scan QR codes?
                        </h3>
                        <p className="text-gray-700">
                            You can use our built-in QR code scanner or any smartphone camera app. Most modern 
                            phones automatically detect and scan QR codes through the camera.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Can I customize my QR code design?
                        </h3>
                        <p className="text-gray-700">
                            Yes! You can customize colors, add logos, change patterns, and adjust the design 
                            to match your brand or preferences.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            What file formats can I download?
                        </h3>
                        <p className="text-gray-700">
                            You can download your QR codes in various formats including PNG, JPG, SVG, and PDF 
                            for both digital and print use.
                        </p>
                    </div>
                </div>
            </section>

            {/* 使用指南 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    How to Create QR Code - Step by Step Guide
                </h2>
                <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                        <p className="text-gray-700">
                            <strong>Enter Your Content:</strong> Type or paste the text, URL, or information you want to encode in the QR code generator.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                        <p className="text-gray-700">
                            <strong>Customize (Optional):</strong> Choose colors, add your logo, or modify the design to create a custom QR code.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                        <p className="text-gray-700">
                            <strong>Generate QR Code:</strong> Click the generate button to create your QR code instantly.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                        <p className="text-gray-700">
                            <strong>Download & Use:</strong> Download your QR code in your preferred format and start using it.
                        </p>
                    </div>
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
};

export default SEOContent; 