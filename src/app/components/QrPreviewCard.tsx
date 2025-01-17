import React, { useRef, useMemo } from 'react';
import { toPng } from 'html-to-image';
import { QRCode } from 'react-qrcode-logo';  // <-- 改为 react-qrcode-logo
import { CustomOptions } from './CustomizationModal';

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

    // 生成 logo 图片的临时 URL（如果上传了文件）
    const logoSrc = useMemo(() => {
        if (customOptions.logoFile) {
            // 如果 logoFile 是 Base64 字符串
            if (typeof customOptions.logoFile === "string" && customOptions.logoFile.startsWith("data:")) {
                return customOptions.logoFile; // 直接使用 Base64 字符串
            }

            // 如果 logoFile 是 Blob 或 File 对象
            // @ts-expect-error The following line is expected to cause a
            if (customOptions.logoFile instanceof Blob) {
                return URL.createObjectURL(customOptions.logoFile); // 使用 Blob 创建临时 URL
            }
        }
        return undefined;
    }, [customOptions.logoFile]);

    // 如果没有生成内容，则不显示卡片
    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                尚未生成二维码，请在左侧先选择大类、子功能并输入内容。
            </div>
        );
    }

    // @ts-expect-error The following line is expected to cause a
    const isCircle = customOptions.dotStyle === 'circle';
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
            <div
                style={{
                    padding: customOptions.margin,
                    borderRadius: isCircle ? '50%' : '0%',
                    backgroundColor: customOptions.bgColor,
                }}
            >
                <QRCode
                    // 必选：二维码内容
                    value={generatedValue}
                    // 颜色与尺寸
                    fgColor={customOptions.fgColor}
                    bgColor={customOptions.bgColor}
                    size={customOptions.size}
                    // 让二维码本身也能呈现圆形外观
                    style={{
                        borderRadius: isCircle ? '50%' : '0%',
                    }}
                    // ======== 以下是 react-qrcode-logo 提供的专有属性 ========
                    logoImage={logoSrc}         // 传入 Logo 的图片URL
                    logoWidth={customOptions.size * 0.25} // Logo 宽度为二维码大小的25%
                    removeQrCodeBehindLogo      // 移除 Logo 背后的二维码区域（防止重叠影响识别）
                    // ecLevel={customOptions.errorCorrectionLevel} // 纠错级别
                    quietZone={customOptions.margin} // 边距作为静态区域
                />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {customOptions.size}×{customOptions.size}px , 纠错级别:
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
