import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import CustomizationModal, { CustomOptions } from './CustomizationModal';
import QRCodeJS from 'qrcode';

interface QrPreviewCardProps {
    generatedValue: string;
    customOptions: CustomOptions;
}

const QrPreviewCard: React.FC<QrPreviewCardProps> = ({
    generatedValue,
    customOptions,
}) => {
    const [options, setCustomOptions] = useState<CustomOptions>(customOptions);

    const defaultOptions: CustomOptions = {
        content: generatedValue,
        dotStyle: 'squares',  // 选择默认点样式
        fgColor: '#000000',   // 前景色
        bgColor: '#ffffff',   // 背景色
        logoFile: null,       // logo 文件
        size: 200,            // 二维码大小
        margin: 4             // 边距
    };

    useEffect(() => {
        setCustomOptions(customOptions);
    }, [customOptions]);

    const handleReset = () => {
        setCustomOptions(defaultOptions);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleDownloadImage = async () => {
        if (!canvasRef.current) return;
        try {
            const dataUrl = await toPng(canvasRef.current, {
                backgroundColor: '#ffffff',
            });
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const openCustomizationModal = () => {
        setIsModalOpen(true);
    };

    const closeCustomizationModal = () => {
        setIsModalOpen(false);
    };

    const handleCustomizationConfirm = (newOptions: CustomOptions) => {
        setCustomOptions(newOptions);
        closeCustomizationModal();
    };

    const drawQRCodeWithCustomDots = (canvas: HTMLCanvasElement) => {
        if (!canvas) return;

        // 配置二维码生成选项
        const qrOptions = {
            width: options.size,
            margin: options.margin,
            color: {
                dark: options.fgColor,
                light: options.bgColor,
            },
            errorCorrectionLevel: options.errorCorrectionLevel || 'H',
            type: 'canvas',
        };

        // 生成二维码
        QRCodeJS.toCanvas(canvas, generatedValue, qrOptions, (error) => {
            if (error) {
                console.error('QR Code generation failed:', error);
                return;
            }

            // 如果有Logo，绘制Logo
            if (options.logoFile) {
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                const img = new Image();
                img.onload = () => {
                    const logoSize = options.logoWidth || options.size * 0.2; // Logo默认大小为二维码的20%
                    const logoX = (options.size - logoSize) / 2;
                    const logoY = (options.size - logoSize) / 2;

                    // 清除Logo区域的二维码
                    ctx.fillStyle = options.bgColor;
                    ctx.fillRect(logoX, logoY, logoSize, logoSize);

                    // 绘制Logo
                    ctx.globalAlpha = options.logoOpacity || 1;
                    ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
                    ctx.globalAlpha = 1;
                };
                img.src = options.logoFile;
            }
        });
    };

    useEffect(() => {
        if (canvasRef.current) {
            drawQRCodeWithCustomDots(canvasRef.current);
        }
    }, [options, generatedValue]);

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
            <div className="mb-12 text-gray-700 text-sm self-start flex items-center justify-between w-full">
                <div>
                    Style: <span className="font-bold">Basic Style</span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-blue-500" onClick={openCustomizationModal}>
                        Switch &gt;
                    </a>
                    <button
                        onClick={handleReset}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div
                style={{
                    padding: options.margin,
                    backgroundColor: options.bgColor,
                }}
                ref={qrCodeRef}
            >
                <canvas ref={canvasRef} />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {options.size}×{options.size}px, Error correction level:
            </p>

            <div className="mt-10 flex flex-col w-full space-y-2">
                <button
                    onClick={openCustomizationModal}
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

            <CustomizationModal
                customOptions={options}
                isOpen={isModalOpen}
                onClose={closeCustomizationModal}
                onConfirm={handleCustomizationConfirm}
            />
        </div>
    );
};

export default QrPreviewCard;
