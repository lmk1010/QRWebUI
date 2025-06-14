import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
    title: 'QR Code Generator FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about our free QR code generator. Learn about QR code creation, customization, formats, and best practices.',
    keywords: 'QR code FAQ, QR code questions, QR code help, QR code generator support, QR code troubleshooting',
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* 页面标题 */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Find answers to common questions about our free QR code generator. 
                            Can't find what you're looking for? Contact us for more help.
                        </p>
                    </header>

                    {/* FAQ分类 */}
                    <div className="mb-12">
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-6 bg-blue-50 rounded-lg">
                                <div className="text-3xl mb-3">🆓</div>
                                <h3 className="font-semibold text-blue-800">Free Usage</h3>
                                <p className="text-sm text-gray-600">Questions about pricing and limits</p>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-lg">
                                <div className="text-3xl mb-3">🎨</div>
                                <h3 className="font-semibold text-green-800">Customization</h3>
                                <p className="text-sm text-gray-600">Design and branding options</p>
                            </div>
                            <div className="text-center p-6 bg-purple-50 rounded-lg">
                                <div className="text-3xl mb-3">📱</div>
                                <h3 className="font-semibold text-purple-800">Technical</h3>
                                <p className="text-sm text-gray-600">Scanning and compatibility issues</p>
                            </div>
                        </div>
                    </div>

                    {/* 基础问题 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            General Questions
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Is this QR code generator really free?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes! Our QR code generator is completely free to use. You can create unlimited QR codes 
                                    without any registration, hidden costs, or subscription fees. We believe in providing 
                                    free access to essential digital tools for everyone.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Do I need to register or create an account?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    No registration required! You can start creating QR codes immediately without providing 
                                    any personal information. Simply visit our homepage and begin generating QR codes right away.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    What types of QR codes can I create?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You can create QR codes for various purposes:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Website URLs and links</li>
                                    <li>Plain text messages</li>
                                    <li>Email addresses with pre-filled content</li>
                                    <li>Phone numbers for direct calling</li>
                                    <li>SMS messages</li>
                                    <li>WiFi network credentials</li>
                                    <li>Social media profiles</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    How do I scan QR codes?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Most modern smartphones can scan QR codes using their built-in camera app. Simply open 
                                    your camera, point it at the QR code, and tap the notification that appears. You can also 
                                    use our built-in QR code scanner or download dedicated QR scanner apps from your app store.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 定制和设计问题 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Customization & Design
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Can I customize my QR code design?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Absolutely! You can customize colors, add logos, change patterns, and adjust the design 
                                    to match your brand or preferences. Our customization options include foreground and 
                                    background colors, logo integration, and various style patterns.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Can I add my company logo to QR codes?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes! You can upload your company logo and embed it in the center of your QR code. 
                                    We support PNG, JPG, and SVG formats. Keep in mind that the logo should not be too large 
                                    (recommended maximum 20% of the QR code size) to ensure reliable scanning.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    What colors work best for QR codes?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    High contrast combinations work best for reliable scanning. Dark colors (like black, dark blue, 
                                    or dark green) on light backgrounds (white, light gray, or light colors) are recommended. 
                                    Avoid using light colors on light backgrounds or very similar color combinations.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Will customized QR codes still work properly?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes, when done correctly! QR codes have built-in error correction that allows for some 
                                    customization without affecting functionality. However, it's important to test your 
                                    customized QR codes before using them to ensure they scan properly across different devices.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 技术问题 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Technical Questions
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    What file formats can I download?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You can download your QR codes in multiple formats:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li><strong>PNG:</strong> Best for web use and digital applications</li>
                                    <li><strong>JPG:</strong> Smaller file size, good for general use</li>
                                    <li><strong>SVG:</strong> Vector format, perfect for scalable graphics</li>
                                    <li><strong>PDF:</strong> Ideal for professional printing and documents</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    What's the minimum size for a QR code to work?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The minimum recommended size is 2cm x 2cm (about 0.8 x 0.8 inches) for reliable scanning. 
                                    However, the optimal size depends on the scanning distance and the amount of data encoded. 
                                    For business cards, 1.5-2cm works well, while for posters, larger sizes (5-10cm) are better.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Why won't my QR code scan?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Common reasons why QR codes don't scan:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Poor contrast between foreground and background colors</li>
                                    <li>QR code is too small or too large for the scanning distance</li>
                                    <li>Damaged or distorted QR code (wrinkled, curved surface)</li>
                                    <li>Logo or customization blocking too much of the code</li>
                                    <li>Poor lighting conditions during scanning</li>
                                    <li>Camera focus issues or dirty camera lens</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Do QR codes expire?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    QR codes themselves don't expire - they're just encoded data. However, if your QR code 
                                    links to a website or online content, that content might become unavailable over time. 
                                    Static QR codes (like text or contact info) will work indefinitely as long as the 
                                    physical code remains readable.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Is my data stored on your servers?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    No! We prioritize your privacy. All QR code generation happens in your browser, and we 
                                    don't store your QR code content on our servers. Your data remains completely private 
                                    and secure throughout the entire process.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 使用和最佳实践 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                            Usage & Best Practices
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Where should I place QR codes for best results?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Place QR codes on flat, smooth surfaces at eye level when possible. Ensure good lighting 
                                    and avoid reflective surfaces. Include a clear call-to-action like "Scan for menu" or 
                                    "Scan to visit website" to encourage scanning. Consider the scanning distance when 
                                    determining size.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    Can I use QR codes for commercial purposes?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Yes! You can use our QR code generator for any commercial purpose, including business 
                                    cards, marketing materials, product packaging, and advertising campaigns. There are no 
                                    restrictions on commercial use of the QR codes you create.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    How should I test my QR codes?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Always test your QR codes before using them! Use multiple devices and QR scanner apps 
                                    to ensure compatibility. Test in different lighting conditions and from various distances. 
                                    You can use our built-in QR scanner or your smartphone's camera to verify functionality.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                    What's the maximum amount of data I can encode?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    QR codes can store different amounts of data depending on the type: up to 4,296 alphanumeric 
                                    characters, 7,089 numeric characters, or 2,953 bytes of binary data. However, more data 
                                    creates more complex codes that are harder to scan, so keep content concise when possible.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 联系支持 */}
                    <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Can't find the answer you're looking for? We're here to help!
                        </p>
                        <div className="space-x-4">
                            <a 
                                href="/" 
                                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                            >
                                Try QR Generator
                            </a>
                            <a 
                                href="/guide" 
                                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                            >
                                View Guide
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
} 