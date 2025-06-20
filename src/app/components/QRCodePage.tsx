// src/app/QRCodePage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { useRouter, useSearchParams } from 'next/navigation';
import QrPreviewCard from '../components/QrPreviewCard';
import QRCard from '../components/QRCard';
import { CustomOptions } from '../components/CustomizationModal';

interface QRCodePageProps {
    onClose?: () => void;
}

export default function QRCodePage({ onClose }: QRCodePageProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Save QR code content and configuration state
    const [qrValue, setQrValue] = useState('Welcome to QR Code Generator');
    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        content: "",
        dotStyle: "squares",
        eyeStyle: "squares",
        outerEyeStyle: "squares",
        innerEyeStyle: "squares",
        fgColor: '#000000',
        bgColor: '#ffffff',
        logoFile: null,
        size: 200,
        downloadSize: 200,
        margin: 4,
        errorCorrectionLevel: 'H'
    });

    // Add ref for scrolling to preview area
    const previewRef = useRef<HTMLDivElement>(null);

    // Get template type from URL parameters
    const templateType = searchParams.get('template');

    // QR code generation callback
    const handleGenerateResult = (value: string) => {
        setQrValue(value);
        setCustomOptions(prev => ({ ...prev, content: value }));
        
        // Delay scrolling to preview area to ensure DOM update is complete
        setTimeout(() => {
            if (previewRef.current) {
                previewRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const handleCustomOptionsChange = (newOptions: CustomOptions) => {
        setCustomOptions(newOptions);
    };

    const handleBackToHome = () => {
        if (onClose) {
            onClose();
        } else {
            router.push('/');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4">
            <div className="container mx-auto px-4">
                {/* Top navigation area */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">QR Code Generator</h1>
                        <p className="text-gray-600 mt-1">Create professional custom QR codes</p>
                    </div>
                    <button
                        onClick={handleBackToHome}
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-600 px-4 py-2 rounded-lg shadow border transition-colors"
                        aria-label="Back to Home"
                    >
                        <FiHome size={16} />
                        Back to Home
                    </button>
                </div>

                {/* Main content area */}
                <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                    {/* Left side: Configure and generate QR code */}
                    <div className="flex-1 flex">
                        <QRCard
                            onGenerateResult={handleGenerateResult}
                            onLogoChange={(logo: string | null) => {
                                setCustomOptions(prev => ({ ...prev, logoFile: logo }));
                            }}
                            onCustomOptionsChange={handleCustomOptionsChange}
                            customOptions={customOptions}
                            templateType={templateType}
                        />
                    </div>

                    {/* Right side: QR code preview card */}
                    <div ref={previewRef} className="w-full lg:w-96 flex">
                        {qrValue ? (
                            <QrPreviewCard
                                generatedValue={qrValue}
                                customOptions={customOptions}
                                onCustomOptionsChange={handleCustomOptionsChange}
                            />
                        ) : (
                            <div className="bg-white rounded-lg p-6 shadow text-center text-gray-500 w-full flex flex-col justify-center">
                                <div className="mb-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6V4H4zM4 14v6h6v-6H4zM17 17h3v3h-3v-3z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-700 mb-2">QR Code Preview</h3>
                                <p className="text-sm">Please select a category and function on the left and enter content to generate a QR code</p>
                                
                                {/* 占位内容，确保高度一致 */}
                                <div className="mt-6 space-y-3 opacity-30 flex-1 flex flex-col justify-center">
                                    <div className="bg-gray-100 h-3 rounded"></div>
                                    <div className="bg-gray-100 h-3 rounded w-3/4 mx-auto"></div>
                                    <div className="bg-gray-100 h-16 rounded"></div>
                                    <div className="bg-gray-100 h-3 rounded w-1/2 mx-auto"></div>
                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                        <div className="bg-gray-100 h-6 rounded"></div>
                                        <div className="bg-gray-100 h-6 rounded"></div>
                                        <div className="bg-gray-100 h-6 rounded"></div>
                                        <div className="bg-gray-100 h-6 rounded"></div>
                                    </div>
                                    <div className="bg-gray-100 h-8 rounded mt-3"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
