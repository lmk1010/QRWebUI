// src/app/QRCodePage.tsx
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import QrPreviewCard from '../components/QrPreviewCard';
import QRCard from '../components/QRCard';
import { CustomOptions } from '../components/CustomizationModal';

interface QRCodePageProps {
    onClose?: () => void;
}

export default function QRCodePage({ onClose }: QRCodePageProps) {
    // 保存二维码内容和配置状态
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
        margin: 4,
        errorCorrectionLevel: 'H'
    });

    // 生成二维码的回调
    const handleGenerateResult = (value: string) => {
        setQrValue(value);
        setCustomOptions(prev => ({ ...prev, content: value }));
    };

    const handleCustomOptionsChange = (newOptions: CustomOptions) => {
        setCustomOptions(newOptions);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center relative">
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full shadow transition"
                    aria-label="Back or Close"
                >
                    <FiArrowLeft size={20} />
                </button>
            )}

            <div className="text-center mt-8 mb-12">
                <h1 className="text-2xl font-bold">QR Code Generation</h1>
                <hr className="mt-4 w-200 mx-auto border-b-2 border-blue-500" />
            </div>

            {/* Flex container: Use row layout on large screens, column layout on small screens */}
            <div className="flex flex-col sm:flex-row items-stretch gap-8 w-full px-4">
                {/* 左侧：配置并生成二维码 */}
                <div className="flex-grow w-full">
                    <QRCard
                        onGenerateResult={handleGenerateResult}
                        onLogoChange={(logo: string | null) => {
                            setCustomOptions(prev => ({ ...prev, logoFile: logo }));
                        }}
                        onCustomOptionsChange={handleCustomOptionsChange}
                        customOptions={customOptions}
                    />
                </div>

                {/* 右侧：二维码预览卡片或提示信息 */}
                <div className="w-full max-w-sm flex">
                    {qrValue ? (
                        <QrPreviewCard
                            generatedValue={qrValue}
                            customOptions={customOptions}
                            onCustomOptionsChange={handleCustomOptionsChange}
                        />
                    ) : (
                        <div className="text-gray-500 text-sm text-center flex flex-col items-center justify-center">
                            <p>QR code not generated yet</p>
                            <p>Please select a category and subfunction on the left and enter the content.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
