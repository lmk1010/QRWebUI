// src/app/QRCodePage.tsx
import React, { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QrPreviewCard from '../components/QrPreviewCard';
import QRCard from '../components/QRCard';
import { CustomOptions } from '../components/CustomizationModal';

// 提取使用useSearchParams的逻辑到单独的组件
function QRCodeContent({ onGenerateResult, onCustomOptionsChange, customOptions }: {
    onGenerateResult: (value: string, shouldScroll?: boolean) => void;
    onCustomOptionsChange: (options: CustomOptions) => void;
    customOptions: CustomOptions;
}) {
    const searchParams = useSearchParams();
    const previewRef = useRef<HTMLDivElement>(null);
    
    // Get template type from URL parameters
    const templateType = searchParams.get('template');
    
    // QR code generation callback
    const handleGenerateResult = (value: string, shouldScroll: boolean = true) => {
        onGenerateResult(value, shouldScroll);
        
        // Only scroll if explicitly requested (not for initial load)
        if (shouldScroll) {
            // Delay scrolling to preview area to ensure DOM update is complete
            setTimeout(() => {
                if (previewRef.current) {
                    previewRef.current.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 100);
        }
    };

    return (
        <>


            {/* Main content area - iPad优化布局 */}
            <div className="flex flex-col xl:flex-row gap-4 items-stretch qr-layout-tablet mt-8">
                {/* Left side: Configure and generate QR code */}
                <div className="flex-1 flex qr-input-section">
                    <QRCard
                        onGenerateResult={handleGenerateResult}
                        onLogoChange={(logo: string | null) => {
                            onCustomOptionsChange({ ...customOptions, logoFile: logo });
                        }}
                        onCustomOptionsChange={onCustomOptionsChange}
                        customOptions={customOptions}
                        templateType={templateType}
                    />
                </div>

                {/* Right side: QR code preview card */}
                <div ref={previewRef} className="w-full xl:w-96 flex qr-preview-section">
                    {customOptions.content ? (
                        <QrPreviewCard
                            generatedValue={customOptions.content}
                            customOptions={customOptions}
                            onCustomOptionsChange={onCustomOptionsChange}
                        />
                    ) : (
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow text-center text-gray-500 w-full flex flex-col justify-center card-tablet-optimized">
                            <div className="mb-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-lg mx-auto flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6V4H4zM4 14v6h6v-6H4zM17 17h3v3h-3v-3z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-700 mb-2 text-tablet-base">QR Code Preview</h3>
                            <p className="text-sm text-tablet-sm">Please select a category and function on the left and enter content to generate a QR code</p>
                            
                            {/* 占位内容，确保高度一致 */}
                            <div className="mt-4 md:mt-6 space-y-3 opacity-30 flex-1 flex flex-col justify-center">
                                <div className="bg-gray-100 h-3 rounded"></div>
                                <div className="bg-gray-100 h-3 rounded w-3/4 mx-auto"></div>
                                <div className="bg-gray-100 h-12 md:h-16 rounded"></div>
                                <div className="bg-gray-100 h-3 rounded w-1/2 mx-auto"></div>
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                    <div className="bg-gray-100 h-5 md:h-6 rounded"></div>
                                    <div className="bg-gray-100 h-5 md:h-6 rounded"></div>
                                    <div className="bg-gray-100 h-5 md:h-6 rounded"></div>
                                    <div className="bg-gray-100 h-5 md:h-6 rounded"></div>
                                </div>
                                <div className="bg-gray-100 h-6 md:h-8 rounded mt-3"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default function QRCodePage() {
    // Save QR code content and configuration state
    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        content: "qrcodehub",
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

    // QR code generation callback
    const handleGenerateResult = (value: string) => {
        setCustomOptions(prev => ({ ...prev, content: value }));
    };

    const handleCustomOptionsChange = (newOptions: CustomOptions) => {
        setCustomOptions(newOptions);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-2 md:py-4">
            <div className="container mx-auto px-3 md:px-4 main-container">
                <Suspense fallback={
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                }>
                    <QRCodeContent 
                        onGenerateResult={handleGenerateResult}
                        onCustomOptionsChange={handleCustomOptionsChange}
                        customOptions={customOptions}
                    />
                </Suspense>
            </div>
        </div>
    );
}
