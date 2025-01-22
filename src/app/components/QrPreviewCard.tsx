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
                                                         onBeautify,
                                                     }) => {
    const [options, setCustomOptions] = useState<CustomOptions>(customOptions); // 初始化 customOptions 状态
    const [logoFile, setLogoFile] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  // 控制弹框是否打开
    const cardRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null);

    const handleDownloadImage = async () => {
        if (!qrCodeRef.current) return;
        try {
            const dataUrl = await toPng(qrCodeRef.current, {
                backgroundColor: '#ffffff' // 强制设置白色背景
            });
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
        return logoFile || (options.logoFile && typeof options.logoFile === 'string' ? options.logoFile : undefined);
    }, [logoFile, options.logoFile]);

    const isCircle = options.dotStyle === 'dots';

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
        setCustomOptions(newOptions); // 更新 customOptions 状态
        onBeautify?.(); // 如果有外部 beautify 事件，触发它
        closeCustomizationModal();
    };

    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                QR code not generated yet
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
                    padding: options.margin,
                    borderRadius: isCircle ? '50%' : '0%',
                    backgroundColor: options.bgColor,
                }}
                ref={qrCodeRef}
            >
                <QRCode
                    value={generatedValue}
                    fgColor={options.fgColor}
                    bgColor={options.bgColor}
                    size={options.size}
                    style={{ borderRadius: isCircle ? '50%' : '0%' }}
                    logoImage={logoSrc}
                    logoWidth={options.size * 0.25}
                    removeQrCodeBehindLogo
                    quietZone={options.margin}
                />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {options.size}×{options.size}px, Error correction level:
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


            {/* Customization Modal */}
            <CustomizationModal
                customOptions={options} // 将当前的 options 传递给 CustomizationModal
                isOpen={isModalOpen}  // 控制是否显示的逻辑
                onClose={closeCustomizationModal}
                onConfirm={handleCustomizationConfirm} // 传递更新选项的回调函数
            />
        </div>
    );
};

export default QrPreviewCard;
