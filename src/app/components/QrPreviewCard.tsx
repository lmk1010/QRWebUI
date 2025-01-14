// src/components/QrPreviewCard.tsx
import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import { CustomOptions } from './CustomizationModal';
// 如果使用 html-to-image
import { toPng } from 'html-to-image';

interface QrPreviewCardProps {
    generatedValue: string;         // 生成的二维码内容
    customOptions: CustomOptions;   // 定制化设置（颜色、尺寸、等）
    onUploadLogo?: () => void;      // 上传Logo回调
    onBeautify?: () => void;        // 美化二维码回调
}

const QrPreviewCard: React.FC<QrPreviewCardProps> = ({
                                                         generatedValue,
                                                         customOptions,
                                                         onUploadLogo,
                                                         onBeautify,
                                                     }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // 下载二维码图片
    const handleDownloadImage = async () => {
        if (!cardRef.current) return;
        try {
            const dataUrl = await toPng(cardRef.current);
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('下载失败:', error);
        }
    };

    // 如果没有生成内容，则不显示卡片
    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                尚未生成二维码，请在左侧先选择大类、子功能并输入内容。
            </div>
        );
    }

    return (
        <div
            className="bg-white shadow-md rounded-md p-4 w-full max-w-sm flex flex-col items-center"
            ref={cardRef}
        >
            {/* 标题行 */}
            <div className="mb-12 text-gray-700 text-sm self-start">
                标签样式：<span className="font-bold">基本样式</span>
                <a href="#" className="text-blue-500 ml-2">
                    切换 &gt;
                </a>
            </div>

            {/* 二维码展示 */}
            <QRCode
                value={generatedValue}
                fgColor={customOptions.fgColor}
                bgColor={customOptions.bgColor}
                size={customOptions.size}
            />
            <p className="text-gray-500 text-xs mt-6">
                QR Code, {customOptions.size}×{customOptions.size}px
            </p>

            {/* 功能按钮 */}
            <div className="mt-10 flex flex-col w-full space-y-2">
                <button
                    onClick={onUploadLogo}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    上传Logo
                </button>
                <button
                    onClick={onBeautify}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    二维码美化
                </button>
                <button
                    onClick={handleDownloadImage}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    下载图片
                </button>
            </div>

            {/* 更多功能示例 */}
            <div className="mt-4 text-sm flex flex-wrap gap-2 justify-center">
                <button className="text-blue-600 underline">
                    排版到A4纸上
                </button>
                <button className="text-blue-600 underline">
                    下载其他格式
                </button>
            </div>
        </div>
    );
};

export default QrPreviewCard;
