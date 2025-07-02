import React from 'react';
import Link from 'next/link';

interface SEOContentProps {
    showOnlyHeader?: boolean;
    showOnlyContent?: boolean;
}

const SEOContent: React.FC<SEOContentProps> = ({ showOnlyContent }) => {
    // 如果只显示内容部分，不显示标题
    if (showOnlyContent) {
        return (
            <div className="max-w-6xl mx-auto space-y-20">
                {/* 功能特点预览 - 与主要CTA区域保持协调 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            Why Choose Our QR Code Generator?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Professional-grade features, enterprise-level quality, completely free to use
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🆓</span>
                            </div>
                            <h3 className="font-bold text-blue-800 mb-4 text-lg">Completely Free</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Create unlimited QR codes with no hidden fees or subscriptions
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="font-bold text-green-800 mb-4 text-lg">Instant Generation</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Generate high-quality QR codes in seconds, no waiting required
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h3 className="font-bold text-purple-800 mb-4 text-lg">Custom Design</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Completely customize colors, logos, and styles to create branded QR codes
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">📱</span>
                            </div>
                            <h3 className="font-bold text-orange-800 mb-4 text-lg">Built-in Scanner</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Real-time scanning and verification to ensure perfect QR code functionality
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🔒</span>
                            </div>
                            <h3 className="font-bold text-red-800 mb-4 text-lg">Secure & Private</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Complete data privacy - we don&apos;t store any personal information
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">📊</span>
                            </div>
                            <h3 className="font-bold text-teal-800 mb-4 text-lg">High Quality</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Vector-level high-definition output suitable for any scenario
                            </p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <Link 
                            href="/features" 
                            className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            View All Features
                        </Link>
                    </div>
                </section>

                {/* QR码类型预览 - 保持协调的样式 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            Supported QR Code Types
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From URLs to WiFi, covering all your needs
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Website URLs</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Direct links to websites and landing pages</p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Plain Text</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Share text information and descriptions</p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Pre-set recipient and email subject</p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Phone Numbers</h3>
                            </div>
                            <p className="text-gray-600 text-sm">One-click dialing without manual input</p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-pink-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">SMS</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Pre-set SMS content for quick sending</p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group border-l-4 border-teal-500 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-2xl">🌐</span>
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">WiFi Password</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Share WiFi credentials for instant connection</p>
                        </div>
                    </div>
                </section>

                {/* 快速指南链接 - 保持协调的样式 */}
                <section>
                    <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                QR Code Beginner&apos;s Guide
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Learn how to create professional QR codes from scratch with detailed step-by-step instructions
                            </p>
                            <Link 
                                href="/guide" 
                                className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                View Complete Guide
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ部分 - 协调的样式 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Everything you need to know about our QR code generator
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="glass-effect rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-sm">Q</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-3">Are QR codes free to use?</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Yes, our QR code generator is completely free. You can create unlimited QR codes with no hidden fees or subscriptions required.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-sm">Q</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-3">Do QR codes expire?</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">No, QR codes generated by our tool never expire. They will work as long as the content they link to is still available.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-sm">Q</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-3">Can I customize QR code appearance?</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">Yes, you can customize colors, add logos, and choose from different styles to match your brand requirements.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-sm">Q</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-3">What file formats are supported?</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">You can download QR codes in PNG, SVG, and PDF formats in high resolution for print and digital use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <Link 
                            href="/faq" 
                            className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                        >
                            View All FAQ
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </section>

                {/* 底部CTA - 与整体风格协调 */}
                <section>
                    <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                Ready to Create Your First QR Code?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Join thousands of users who trust our platform for their QR code needs
                            </p>
                            <Link 
                                href="/qr-generator" 
                                className="btn-primary inline-flex items-center gap-4 text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                Start Creating Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 新增：行业应用案例 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            QR Code Applications Across Industries
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Discover how businesses and organizations use QR codes to enhance their operations and customer experience
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🏢</span>
                            </div>
                            <h3 className="font-bold text-blue-800 mb-4 text-lg">Business & Marketing</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                QR codes revolutionize business operations by enabling instant access to product information, 
                                contactless payments, and seamless customer engagement. Businesses use QR codes for:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Product catalogs and pricing</li>
                                <li>• Customer feedback collection</li>
                                <li>• Loyalty program integration</li>
                                <li>• Event registration and check-ins</li>
                            </ul>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🏥</span>
                            </div>
                            <h3 className="font-bold text-green-800 mb-4 text-lg">Healthcare & Safety</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                In healthcare settings, QR codes provide quick access to patient information, 
                                medication details, and safety protocols. Applications include:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Patient identification systems</li>
                                <li>• Medication tracking and verification</li>
                                <li>• Emergency contact information</li>
                                <li>• Health and safety guidelines</li>
                            </ul>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <h3 className="font-bold text-purple-800 mb-4 text-lg">Education & Training</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                Educational institutions leverage QR codes to enhance learning experiences 
                                and streamline administrative processes. Common uses include:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Interactive learning materials</li>
                                <li>• Student attendance tracking</li>
                                <li>• Library resource access</li>
                                <li>• Campus navigation assistance</li>
                            </ul>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🚚</span>
                            </div>
                            <h3 className="font-bold text-orange-800 mb-4 text-lg">Logistics & Supply Chain</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                QR codes optimize supply chain operations by providing real-time tracking 
                                and inventory management capabilities. Key applications:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Package tracking and delivery</li>
                                <li>• Inventory management systems</li>
                                <li>• Quality control documentation</li>
                                <li>• Asset tracking and maintenance</li>
                            </ul>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎫</span>
                            </div>
                            <h3 className="font-bold text-red-800 mb-4 text-lg">Events & Entertainment</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                Event organizers use QR codes to streamline ticketing, enhance attendee 
                                experience, and gather valuable data. Popular implementations:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Digital ticket validation</li>
                                <li>• Event information access</li>
                                <li>• Networking and contact sharing</li>
                                <li>• Interactive event experiences</li>
                            </ul>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🏠</span>
                            </div>
                            <h3 className="font-bold text-teal-800 mb-4 text-lg">Smart Home & IoT</h3>
                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                QR codes enable seamless integration of smart home devices and IoT systems, 
                                providing convenient access to device controls and information:
                            </p>
                            <ul className="text-gray-600 text-sm space-y-1">
                                <li>• Device setup and configuration</li>
                                <li>• WiFi network sharing</li>
                                <li>• Smart appliance controls</li>
                                <li>• Home automation triggers</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 新增：技术深度内容 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            Understanding QR Code Technology
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Learn about the technical aspects of QR codes and how they work
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">How QR Codes Work</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    QR codes (Quick Response codes) are two-dimensional barcodes that can store 
                                    significantly more information than traditional barcodes. They use a matrix 
                                    of black and white squares arranged in a square grid.
                                </p>
                                <p className="leading-relaxed">
                                    The technology behind QR codes includes error correction capabilities, 
                                    allowing them to remain readable even when partially damaged or obscured. 
                                    This makes them highly reliable for various applications.
                                </p>
                                <p className="leading-relaxed">
                                    Modern QR codes can store up to 2,953 bytes of data, including text, 
                                    URLs, contact information, and even binary data. This versatility makes 
                                    them suitable for countless use cases.
                                </p>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">QR Code Standards & Compatibility</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    QR codes follow international standards (ISO/IEC 18004) ensuring 
                                    compatibility across different devices and applications worldwide. 
                                    This standardization guarantees that QR codes work consistently 
                                    regardless of the scanning device or software used.
                                </p>
                                <p className="leading-relaxed">
                                    The error correction levels in QR codes (L, M, Q, H) determine how 
                                    much damage the code can sustain while remaining readable. Higher 
                                    error correction levels allow for more customization but reduce data capacity.
                                </p>
                                <p className="leading-relaxed">
                                    Our generator automatically optimizes error correction levels based on 
                                    your content and customization choices, ensuring the best balance 
                                    between reliability and visual appeal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 新增：最佳实践指南 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            QR Code Best Practices
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Follow these guidelines to create effective and user-friendly QR codes
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">📏</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Optimal Size</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensure QR codes are at least 1 inch (2.5 cm) in size for easy scanning. 
                                Larger codes are more reliable and user-friendly.
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">🎨</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Color Contrast</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Maintain high contrast between QR code elements and background. 
                                Dark codes on light backgrounds work best for optimal scanning.
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">📍</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Strategic Placement</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Position QR codes where users naturally look and can easily access. 
                                Consider lighting conditions and accessibility factors.
                            </p>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">📱</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3">Mobile Optimization</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensure linked content is mobile-friendly. Most QR code scans happen 
                                on smartphones, so optimize for mobile viewing experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 新增：SEO和营销价值内容 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            QR Codes for Digital Marketing & SEO
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Discover how QR codes can enhance your digital marketing strategy and improve SEO performance
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Digital Marketing Benefits</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    QR codes bridge the gap between offline and online marketing, providing 
                                    measurable engagement metrics and enhanced customer interaction opportunities.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Trackable Analytics:</strong> Monitor scan rates, user behavior, and 
                                    conversion metrics to optimize your marketing campaigns and understand 
                                    customer preferences.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Enhanced Customer Experience:</strong> Provide instant access to 
                                    product information, reviews, and purchasing options, reducing friction 
                                    in the customer journey.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Cost-Effective Marketing:</strong> Once created, QR codes require 
                                    no ongoing costs and can be used across multiple marketing channels 
                                    and materials.
                                </p>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">SEO and Web Traffic</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    QR codes can significantly impact your website&apos;s SEO performance by 
                                    driving targeted traffic and improving user engagement metrics.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Direct Traffic Generation:</strong> QR codes create direct pathways 
                                    to your website, increasing organic traffic and reducing bounce rates 
                                    through targeted content delivery.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Mobile-First Optimization:</strong> Since most QR code scans occur 
                                    on mobile devices, they naturally drive mobile traffic, which is 
                                    increasingly important for SEO rankings.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Content Distribution:</strong> Use QR codes to distribute 
                                    high-value content, landing pages, and promotional materials, 
                                    improving overall site engagement and time-on-site metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 新增：安全性和隐私保护 */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            QR Code Security & Privacy
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Understanding security considerations and best practices for safe QR code usage
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Security Best Practices</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    While QR codes themselves are secure, it&apos;s important to follow best 
                                    practices to protect users and maintain trust in your brand.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>URL Verification:</strong> Always verify that QR codes link to 
                                    legitimate, secure websites (HTTPS) and avoid suspicious or 
                                    unfamiliar domains.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Content Validation:</strong> Regularly check that your QR codes 
                                    still point to active, relevant content and haven&apos;t been 
                                    compromised or redirected.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>User Education:</strong> Inform users about safe scanning practices 
                                    and encourage them to preview URLs before visiting linked content.
                                </p>
                            </div>
                        </div>
                        
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Privacy Protection</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    Our platform prioritizes user privacy and data protection in all 
                                    QR code generation processes.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>No Data Storage:</strong> We never store your QR code content 
                                    or personal information on our servers. All generation happens 
                                    locally when possible.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Secure Processing:</strong> Our platform uses industry-standard 
                                    security measures to protect any temporary data during the 
                                    generation process.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Transparent Practices:</strong> We maintain complete transparency 
                                    about our data handling practices and provide users with full 
                                    control over their information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // 默认显示主标题区域
    return (
        <div className="text-center mb-16 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
                Free QR Code Generator
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Create custom QR codes instantly with our professional generator. 
                Support for URLs, text, WiFi, email and more - completely free forever.
            </p>
        </div>
    );
};

export default SEOContent; 