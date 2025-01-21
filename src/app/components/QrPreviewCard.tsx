import React, { useState, useRef, useMemo } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { toPng } from 'html-to-image';
import CustomizationModal, { CustomOptions } from './CustomizationModal';  // 引入 CustomizationModal

interface QrPreviewCardProps {
    generatedValue: string;
    customOptions: CustomOptions;
    onUploadLogo?: () => void;
    onBeautify?: () => void;
}

const QrPreviewCard: React.FC<QrPreviewCardProps> = ({
                                                         generatedValue,
                                                         customOptions,
                                                         onUploadLogo,
                                                         onBeautify,
                                                     }) => {
    const [logoFile, setLogoFile] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  // 状态控制弹框
    const cardRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null);

    const handleDownloadImage = async () => {
        if (!qrCodeRef.current) return;
        try {
            const dataUrl = await toPng(qrCodeRef.current);
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoFile(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const logoSrc = useMemo(() => {
        return logoFile || (customOptions.logoFile && typeof customOptions.logoFile === 'string' ? customOptions.logoFile : undefined);
    }, [logoFile, customOptions.logoFile]);

    const isCircle = customOptions.dotStyle === 'dots';

    // 打开定制化设置弹框
    const openCustomizationModal = () => {
        setIsModalOpen(true);
    };

    // 关闭定制化设置弹框
    const closeCustomizationModal = () => {
        setIsModalOpen(false);
    };

    // 确认定制化选项
    const handleCustomizationConfirm = (newOptions: CustomOptions) => {
        // 更新父组件传入的样式
        onBeautify?.(); // 回调外部事件
        closeCustomizationModal();
    };

    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                QR code not generated yet, please choose the main category, subcategory, and enter content on the left.
            </div>
        );
    }

    return (
        <div
            className="bg-white shadow-md rounded-md p-4 w-full max-w-sm flex flex-col items-center"
            ref={cardRef}
        >
            {/* Title Row */}
            <div className="mb-12 text-gray-700 text-sm self-start">
                Style: <span className="font-bold">Basic Style</span>
                <a href="#" className="text-blue-500 ml-2" onClick={openCustomizationModal}>
                    Switch &gt;
                </a>
            </div>

            {/* QR Code Display */}
            <div
                style={{
                    padding: customOptions.margin,
                    borderRadius: isCircle ? '50%' : '0%',
                    backgroundColor: customOptions.bgColor,
                }}
                ref={qrCodeRef}
            >
                <QRCode
                    value={generatedValue}
                    fgColor={customOptions.fgColor}
                    bgColor={customOptions.bgColor}
                    size={customOptions.size}
                    style={{ borderRadius: isCircle ? '50%' : '0%' }}
                    logoImage={logoSrc}
                    logoWidth={customOptions.size * 0.25}
                    removeQrCodeBehindLogo
                    quietZone={customOptions.margin}
                />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {customOptions.size}×{customOptions.size}px, Error correction level:
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col w-full space-y-2">
                <label
                    htmlFor="logo-upload"
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors text-center"
                >
                    Upload Logo
                </label>
                <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                />
                <button
                    onClick={openCustomizationModal}  // 点击弹出定制化设置弹框
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    Beautify QR Code
                </button>
                <button
                    onClick={handleDownloadImage}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Download Image
                </button>
            </div>

            {/* Additional Features Example */}
            <div className="mt-4 text-sm flex flex-wrap gap-2 justify-center">
                <button className="text-blue-600 underline">
                    Layout on A4 paper
                </button>
                <button className="text-blue-600 underline">
                    Download other formats
                </button>
            </div>

            {/* Customization Modal */}
            <CustomizationModal
                isOpen={isModalOpen}
                onClose={closeCustomizationModal}
                onConfirm={handleCustomizationConfirm}
                customOptions={customOptions}
            />
        </div>
    );
};

export default QrPreviewCard;
