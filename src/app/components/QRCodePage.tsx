"use client";

import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import QrPreviewCard from '../components/QrPreviewCard';
import QRCard from '../components/QRCard';
import { CustomOptions } from '../components/CustomizationModal';

interface QRCodePageProps {
    onClose?: () => void;
}

export default function QRCodePage({ onClose }: QRCodePageProps) {
    const [qrValue, setQrValue] = useState('');
    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        shapeStyle: 'square',
        fgColor: '#000000',
        bgColor: '#ffffff',
        logoFile: null,
        size: 200,
        margin: 4,
    });

    const handleUploadLogo = () => {
        alert('上传Logo逻辑待实现');
    };

    const handleBeautify = () => {
        alert('二维码美化逻辑待实现');
    };

    const handleGenerateResult = (value: string) => {
        setQrValue(value);
    };

    const handleCustomizationChange = (opts: CustomOptions) => {
        setCustomOptions(opts);
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

            {/* 标题部分 */}
            <h1 className="text-2xl font-bold mt-8 mb-12">二维码生成示例 (QRCodePage)</h1>

            <div className="flex flex-row gap-8 w-full px-4">
                {/* 左侧：配置并生成二维码 */}
                <div className="flex-grow w-full">
                    <QRCard
                        onClose={() => console.log('也可以在这里处理关闭')}
                        onGenerateResult={handleGenerateResult}
                        onCustomizationChange={handleCustomizationChange}
                        customOptions={customOptions}
                    />
                </div>

                {/* 右侧：二维码预览卡片或提示信息 */}
                <div className="w-full max-w-sm flex items-center justify-center">
                    {qrValue ? (
                        <QrPreviewCard
                            generatedValue={qrValue}
                            customOptions={customOptions}
                            onUploadLogo={handleUploadLogo}
                            onBeautify={handleBeautify}
                        />
                    ) : (
                        <div className="text-gray-500 text-sm text-center flex flex-col items-center justify-center">
                            <p>尚未生成二维码</p>
                            <p>请在左侧选择大类、子功能并输入内容。</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
