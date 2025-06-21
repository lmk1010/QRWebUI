"use client";
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import InteractiveContent, { InteractiveContentRef } from './InteractiveContent';

const ClientHomePage: React.FC = () => {
    const router = useRouter();
    const interactiveRef = useRef<InteractiveContentRef>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleStartQRCode = () => {
        // Navigate to dedicated QR code generator page
        router.push('/qr-generator');
    };

    return (
        <>
            {/* Hero区域 - 自然布局，调整顶部间距 */}
            <div className="max-w-5xl mx-auto mb-20 text-center pt-8">
                {/* 主标题区域 */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
                        Free QR Code Generator
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Create custom QR codes instantly with our professional generator. 
                        Support for URLs, text, WiFi, email and more - completely free forever.
                    </p>
                </div>

                {/* CTA按钮区域 */}
                <div className="space-y-8">
                    <button 
                        onClick={handleStartQRCode}
                        className="btn-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 inline-flex items-center gap-4"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                        Create QR Code Free
                    </button>

                    {/* 简洁的特点标签 */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">100% Free</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="font-medium">Privacy Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="font-medium">Instant Generation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 保留原有的交互内容 */}
            <div ref={contentRef}>
                <InteractiveContent ref={interactiveRef} />
            </div>
        </>
    );
};

export default ClientHomePage; 