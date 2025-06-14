"use client";
import React, { useRef } from 'react';
import InteractiveContent, { InteractiveContentRef } from './InteractiveContent';

const ClientHomePage: React.FC = () => {
    const interactiveRef = useRef<InteractiveContentRef>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleStartQRCode = () => {
        if (interactiveRef.current) {
            interactiveRef.current.showQRPage();
            
            // 延迟一小段时间后滚动到二维码生成器组件，确保组件已经显示
            setTimeout(() => {
                if (contentRef.current) {
                    contentRef.current.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }, 200);
        }
    };

    return (
        <>
            {/* CTA按钮 - 放在标题下方 */}
            <div className="max-w-4xl mx-auto p-6 bg-white text-center mb-8">
                <button 
                    onClick={handleStartQRCode}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                    Create QR Code Now - Free!
                </button>
            </div>

            {/* 交互式内容 - 紧跟在CTA按钮后面 */}
            <div ref={contentRef}>
                <InteractiveContent ref={interactiveRef} />
            </div>
        </>
    );
};

export default ClientHomePage; 