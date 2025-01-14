// src/pages/QRCodePage.tsx
"use client"; // 如果你也在 app/ 目录下，需要加

import React, { useState } from 'react';
import QrPreviewCard from '../components/QrPreviewCard';
import QRCard from '../components/QRCard';
import { CustomOptions } from '../components/CustomizationModal';

interface QRCodePageProps {
    onClose?: () => void; // 可选：若想从外部控制“关闭”，就加上
}

export default function QRCodePage({ onClose }: QRCodePageProps) {
    // 存放二维码内容
    const [qrValue, setQrValue] = useState('');
    // 存放定制化选项
    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        shapeStyle: 'square',
        fgColor: '#000000',
        bgColor: '#ffffff',
        logoFile: null,
        size: 200,
        margin: 4,
    });

    // 上传Logo
    const handleUploadLogo = () => {
        alert('上传Logo逻辑待实现');
    };

    // 二维码美化
    const handleBeautify = () => {
        alert('二维码美化逻辑待实现');
    };

    // 用户生成二维码时，更新 qrValue
    const handleGenerateResult = (value: string) => {
        setQrValue(value);
    };

    // 用户修改定制化设置
    const handleCustomizationChange = (opts: CustomOptions) => {
        setCustomOptions(opts);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">二维码生成示例 (QRCodePage)</h1>

            {/* 如果想要一个“关闭”按钮 */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="mb-4 px-4 py-2 rounded bg-red-500 text-white"
                >
                    返回或关闭
                </button>
            )}

            <div className="flex flex-row gap-8">
                {/* 左侧：配置并生成二维码 */}
                <QRCard
                    onClose={() => console.log('也可以在这里处理关闭')}
                    onGenerateResult={handleGenerateResult}
                    onCustomizationChange={handleCustomizationChange}
                    customOptions={customOptions}
                />

                {/* 右侧：二维码预览卡片 */}
                <div className="w-full max-w-sm">
                    <QrPreviewCard
                        generatedValue={qrValue}
                        customOptions={customOptions}
                        onUploadLogo={handleUploadLogo}
                        onBeautify={handleBeautify}
                    />
                </div>
            </div>
        </div>
    );
}
