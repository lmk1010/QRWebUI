import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
    title: "QRCodeHub Pro - Coming Soon",
    description: "QRCodeHub Pro version is coming soon. Stay tuned for advanced features.",
    keywords: "QR code generator pro, coming soon, advanced features",
};

export default function ProPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
                    <div className="text-center fade-in-up">
                        {/* Logo Section */}
                        <div className="inline-flex items-center gap-3 mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                                QRCodeHub
                            </h1>
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg">
                                Pro
                            </span>
                        </div>
                        
                        {/* Main Content Card */}
                        <div className="glass-effect rounded-3xl p-12 max-w-2xl mx-auto">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 subtle-bounce">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            
                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                Coming Soon
                            </h2>
                            
                            {/* Description */}
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                The Pro version is under active development. Stay tuned for exciting new features!
                            </p>
                            
                            {/* Features Preview */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-center text-gray-500">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Advanced Analytics & Tracking
                                </div>
                                <div className="flex items-center justify-center text-gray-500">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Dynamic QR Code Management
                                </div>
                                <div className="flex items-center justify-center text-gray-500">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Bulk QR Code Generation
                                </div>
                                <div className="flex items-center justify-center text-gray-500">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Team Collaboration Tools
                                </div>
                            </div>
                            
                            {/* Status Badge */}
                            <div className="mt-8 inline-block bg-blue-50 text-blue-700 px-6 py-3 rounded-2xl border border-blue-200">
                                <span className="font-medium">More premium features coming soon...</span>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12">
                            <p className="text-gray-600 mb-6">
                                While you wait, enjoy our free version with unlimited QR code generation!
                            </p>
                            <a 
                                href="/qr-generator" 
                                className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                Create QR Code Free
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 