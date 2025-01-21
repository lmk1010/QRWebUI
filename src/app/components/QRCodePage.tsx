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
    // 保存二维码内容
    const [qrValue, setQrValue] = useState('');
    // 保存定制化配置
    const [customOptions] = useState<CustomOptions>({
        content: "",
        dotStyle: "square",
        fgColor: '#000000',
        bgColor: '#ffffff',
        logoFile: null,
        size: 200,
        margin: 4
    });

    const handleUploadLogo = () => {
        alert('上传Logo逻辑待实现');
    };

    const handleBeautify = () => {};

    // 生成二维码的回调
    const handleGenerateResult = (value: string) => {
        setQrValue(value);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center relative">
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full shadow transition"
                    aria-label="返回或关闭"
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
                    />
                </div>

                {/* 右侧：二维码预览卡片或提示信息 */}
                <div className="w-full max-w-sm flex">
                    {qrValue ? (
                        <QrPreviewCard
                            generatedValue={qrValue}
                            customOptions={customOptions}
                            onUploadLogo={handleUploadLogo}
                            onBeautify={handleBeautify}
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
