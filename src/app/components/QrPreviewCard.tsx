import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import CustomizationModal, { CustomOptions } from './CustomizationModal';
import QRCodeJS from 'qrcode';

interface QrPreviewCardProps {
    generatedValue: string;
    customOptions: CustomOptions;
    onCustomOptionsChange: (options: CustomOptions) => void;
}

const QrPreviewCard: React.FC<QrPreviewCardProps> = ({
    generatedValue,
    customOptions,
    onCustomOptionsChange,
}) => {
    const handleReset = () => {
        const defaultOptions: CustomOptions = {
            content: generatedValue,
            dotStyle: 'squares',
            eyeStyle: 'squares',
            fgColor: '#000000',
            bgColor: '#ffffff',
            logoFile: null,
            size: 200,
            margin: 4,
            errorCorrectionLevel: 'H',
        };
        onCustomOptionsChange(defaultOptions);
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
        onCustomOptionsChange(newOptions);
        closeCustomizationModal();
    };

    const drawQRCodeWithCustomDots = (canvas: HTMLCanvasElement): void => {
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        // 配置二维码生成选项
        const qrOptions = {
            width: customOptions.size,
            margin: customOptions.margin,
            color: {
                dark: customOptions.fgColor,
                light: customOptions.bgColor,
            },
            errorCorrectionLevel: customOptions.errorCorrectionLevel || 'H',
        };
    
        // 生成二维码数据矩阵
        QRCodeJS.toCanvas(canvas, generatedValue, qrOptions, (error) => {
            if (error) {
                console.error('Error generating QR code:', error);
                return;
            }
    
            // 获取生成的二维码数据
            const qrData = QRCodeJS.create(generatedValue, qrOptions);
            const modules = qrData.modules;
            const moduleCount = modules.size;  // 使用 size 属性来获取模块数量
            const moduleSize = customOptions.size / moduleCount;
            const dotScale = customOptions.dotScale || 1;
            const eyeScale = customOptions.eyeScale || 1;
    
            // 清空画布
            ctx.fillStyle = customOptions.bgColor;
            ctx.fillRect(0, 0, customOptions.size, customOptions.size);
    
            // 绘制数据点
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount; col++) {
                    if (modules.data[row * moduleCount + col] === 1) {  // 判断是否为黑色点
                        const isEye = (
                            (row < 7 && col < 7) || // 左上角
                            (row < 7 && col >= moduleCount - 7) || // 右上角
                            (row >= moduleCount - 7 && col < 7) // 左下角
                        );
    
                        const x = col * moduleSize;
                        const y = row * moduleSize;
                        const size = moduleSize * (isEye ? eyeScale : dotScale);
                        const style = isEye ? (customOptions.eyeStyle || customOptions.dotStyle) : customOptions.dotStyle;
    
                        ctx.fillStyle = customOptions.fgColor;
    
                        switch (style) {
                            case 'dots': // 圆形
                                ctx.beginPath();
                                ctx.arc(
                                    x + moduleSize / 2,
                                    y + moduleSize / 2,
                                    size / 2,
                                    0,
                                    Math.PI * 2
                                );
                                ctx.fill();
                                break;
    
                            case 'fluid': // 流体
                                const radius = size / 4;
                                ctx.beginPath();
                                ctx.moveTo(x + radius, y);
                                ctx.lineTo(x + size - radius, y);
                                ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
                                ctx.lineTo(x + size, y + size - radius);
                                ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
                                ctx.lineTo(x + radius, y + size);
                                ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
                                ctx.lineTo(x, y + radius);
                                ctx.quadraticCurveTo(x, y, x + radius, y);
                                ctx.fill();
                                break;
    
                            case 'hexagon': // 六边形
                                const hexSize = size / 2;
                                ctx.beginPath();
                                for (let i = 0; i < 6; i++) {
                                    const angle = Math.PI / 3 * i;
                                    const xPos = x + moduleSize / 2 + hexSize * Math.cos(angle);
                                    const yPos = y + moduleSize / 2 + hexSize * Math.sin(angle);
                                    if (i === 0) {
                                        ctx.moveTo(xPos, yPos);
                                    } else {
                                        ctx.lineTo(xPos, yPos);
                                    }
                                }
                                ctx.closePath();
                                ctx.fill();
                                break;
    
                            case 'star': // 星形
                                const centerX = x + moduleSize / 2;
                                const centerY = y + moduleSize / 2;
                                const spikes = 5;
                                const step = Math.PI / spikes;
                                const outerRadius = size / 2;
                                const innerRadius = size / 4;
                                ctx.beginPath();
                                for (let i = 0; i < spikes * 2; i++) {
                                    const radius = i % 2 === 0 ? outerRadius : innerRadius;
                                    const angle = i * step;
                                    const xPos = centerX + radius * Math.cos(angle);
                                    const yPos = centerY + radius * Math.sin(angle);
                                    if (i === 0) {
                                        ctx.moveTo(xPos, yPos);
                                    } else {
                                        ctx.lineTo(xPos, yPos);
                                    }
                                }
                                ctx.closePath();
                                ctx.fill();
                                break;
    
                            case 'diamond': // 菱形
                                ctx.beginPath();
                                ctx.moveTo(x + moduleSize / 2, y);
                                ctx.lineTo(x + size, y + moduleSize / 2);
                                ctx.lineTo(x + moduleSize / 2, y + size);
                                ctx.lineTo(x, y + moduleSize / 2);
                                ctx.closePath();
                                ctx.fill();
                                break;
    
                            case 'heart': // 心形
                                const heartSize = size / 2;
                                ctx.beginPath();
                                ctx.moveTo(x + moduleSize / 2, y + heartSize);
                                ctx.bezierCurveTo(
                                    x + moduleSize / 2, y,
                                    x + moduleSize, y,
                                    x + moduleSize, y + heartSize
                                );
                                ctx.bezierCurveTo(
                                    x + moduleSize, y + heartSize * 1.5,
                                    x + moduleSize / 2, y + heartSize * 2,
                                    x + moduleSize / 2, y + heartSize * 1.5
                                );
                                ctx.closePath();
                                ctx.fill();
                                break;
    
                            default: // 默认方块
                                ctx.fillRect(x, y, size, size);
                                break;
                        }
                    }
                }
    
                // 如果有Logo，绘制Logo
                if (customOptions.logoFile) {
                    const img = new Image();
                    img.onload = () => {
                        const logoSize = customOptions.logoWidth || customOptions.size * 0.2;
                        const logoX = (customOptions.size - logoSize) / 2;
                        const logoY = (customOptions.size - logoSize) / 2;
    
                        // 清除Logo区域的二维码
                        ctx.fillStyle = customOptions.bgColor;
                        ctx.fillRect(logoX, logoY, logoSize, logoSize);
    
                        // 绘制Logo
                        ctx.globalAlpha = customOptions.logoOpacity || 1;
                        ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
                        ctx.globalAlpha = 1;
                    };
                    img.src = customOptions.logoFile;
                }
            };
        });
    };

    useEffect(() => {
        if (canvasRef.current) {
            drawQRCodeWithCustomDots(canvasRef.current);
        }
    }, [customOptions, generatedValue]);

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
                    padding: customOptions.margin,
                    backgroundColor: customOptions.bgColor,
                }}
                ref={qrCodeRef}
            >
                <canvas ref={canvasRef} />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {customOptions.size}×{customOptions.size}px, Error correction level:
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
                customOptions={customOptions}
                isOpen={isModalOpen}
                onClose={closeCustomizationModal}
                onConfirm={handleCustomizationConfirm}
            />
        </div>
    );
};

export default QrPreviewCard;
