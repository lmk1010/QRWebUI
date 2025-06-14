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
            {/* CTA button - placed below the title */}
            <div className="max-w-4xl mx-auto p-6 bg-white text-center mb-8">
                <button 
                    onClick={handleStartQRCode}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                    Create QR Code Now - Free!
                </button>
            </div>

            {/* Interactive content - kept for other features */}
            <div ref={contentRef}>
                <InteractiveContent ref={interactiveRef} />
            </div>
        </>
    );
};

export default ClientHomePage; 