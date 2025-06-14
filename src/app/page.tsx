// src/app/page.tsx
"use client";
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import SEOContent from './components/SEOContent';
import InteractiveContent, { InteractiveContentRef } from './components/InteractiveContent';

export default function Page() {
    const interactiveRef = useRef<InteractiveContentRef>(null);

    const handleStartQRCode = () => {
        if (interactiveRef.current) {
            interactiveRef.current.showQRPage();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 导航栏 */}
            <Navbar />

            {/* 主体内容 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* SEO内容 - 只包含标题和主要CTA按钮 */}
                <SEOContent onStartQRCode={handleStartQRCode} showOnlyHeader={true} />
                
                {/* 交互式内容 - 紧跟在标题后面 */}
                <InteractiveContent ref={interactiveRef} />
                
                {/* SEO内容的其余部分 - 功能介绍等 */}
                <SEOContent showOnlyContent={true} />
            </main>
        </div>
    );
}
