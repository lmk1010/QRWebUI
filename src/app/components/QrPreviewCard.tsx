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
            outerEyeStyle: 'squares',
            innerEyeStyle: 'squares',
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
                        const isOuterEye = (
                            // 外部定位点边框
                            (row < 7 && col < 7 && (row === 0 || row === 6 || col === 0 || col === 6)) || // 左上角边框
                            (row < 7 && col >= moduleCount - 7 && (row === 0 || row === 6 || col === moduleCount - 1 || col === moduleCount - 7)) || // 右上角边框
                            (row >= moduleCount - 7 && col < 7 && (row === moduleCount - 1 || row === moduleCount - 7 || col === 0 || col === 6)) // 左下角边框
                        );

                        const isInnerEye = (
                            // 内部定位点区域
                            (row >= 1 && row < 6 && col >= 1 && col < 6) || // 左上角内部
                            (row >= 1 && row < 6 && col >= moduleCount - 6 && col < moduleCount - 1) || // 右上角内部
                            (row >= moduleCount - 6 && row < moduleCount - 1 && col >= 1 && col < 6) // 左下角内部
                        );

                        const x = col * moduleSize;
                        const y = row * moduleSize;
                        const size = moduleSize * (isOuterEye || isInnerEye ? eyeScale : dotScale);
                        
                        if (isOuterEye) {
                            // 外部定位点样式处理
                            ctx.fillStyle = customOptions.fgColor;
                            const outerStyle = customOptions.outerEyeStyle || 'squares';  // 获取外部定位点样式，默认是方形
                            const radius = size / 2; // 圆形半径
                        
                            switch (outerStyle) {
                                case 'squares': // 方形
                                    ctx.fillRect(x, y, size, size);
                                    break;
                                case 'rounded': // 圆角矩形（四个角都有圆角）
                                    const roundedRadius = size / 4;
                                    ctx.beginPath();
                                    ctx.moveTo(x + roundedRadius, y);
                                    ctx.lineTo(x + size - roundedRadius, y);
                                    ctx.quadraticCurveTo(x + size, y, x + size, y + roundedRadius);
                                    ctx.lineTo(x + size, y + size - roundedRadius);
                                    ctx.quadraticCurveTo(x + size, y + size, x + size - roundedRadius, y + size);
                                    ctx.lineTo(x + roundedRadius, y + size);
                                    ctx.quadraticCurveTo(x, y + size, x, y + size - roundedRadius);
                                    ctx.lineTo(x, y + roundedRadius);
                                    ctx.quadraticCurveTo(x, y, x + roundedRadius, y);
                                    ctx.fill();
                                    break;
                                case 'circle': // 直接绘制圆形
                                    ctx.beginPath();
                                    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);  // 绘制完整的圆形
                                    ctx.fill();
                                    break;
                                case 'three-rounded': // 三圆角矩形（一个角是直角，其他三个角是圆角）
                                    ctx.beginPath();
                                    ctx.moveTo(x + radius, y);  // 开始点
                                    ctx.lineTo(x + size, y);    // 上边线
                                    ctx.lineTo(x + size, y + size - radius); // 右边线
                                    ctx.arc(x + size - radius, y + size - radius, radius, 0, Math.PI / 2); // 右下角圆角
                                    ctx.lineTo(x + radius, y + size);  // 底边线
                                    ctx.arc(x + radius, y + size - radius, radius, Math.PI / 2, Math.PI); // 左下角圆角
                                    ctx.lineTo(x, y + radius);  // 左边线
                                    ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI); // 左上角圆角
                                    ctx.closePath();
                                    ctx.fill();
                                    break;
                                case 'two-rounded': // 两圆角矩形（两个角是直角，另外两个角是圆角）
                                    ctx.beginPath();
                                    ctx.moveTo(x + radius, y);
                                    ctx.lineTo(x + size - radius, y); // 上边线
                                    ctx.arc(x + size - radius, y + radius, radius, 1.5 * Math.PI, 2 * Math.PI); // 右上角圆角
                                    ctx.lineTo(x + size, y + size); // 右边线
                                    ctx.arc(x + size - radius, y + size - radius, radius, 0, Math.PI / 2); // 右下角圆角
                                    ctx.lineTo(x + radius, y + size); // 底边线
                                    ctx.fill();
                                    break;
                                case 'one-rounded': // 一个圆角矩形（三个角是直角，另外一个角是圆角）
                                    ctx.beginPath();
                                    ctx.moveTo(x, y); // 上边线
                                    ctx.lineTo(x + size - radius, y);
                                    ctx.arc(x + size - radius, y + radius, radius, Math.PI * 1.5, Math.PI * 2); // 右上角圆角
                                    ctx.lineTo(x + size, y + size);  // 右边线
                                    ctx.lineTo(x, y + size);  // 底边线
                                    ctx.fill();
                                    break;
                                default: // 默认是方形
                                    ctx.fillRect(x, y, size, size);
                                    break;
                            }
                        }
                        
                        
                        
                        else if (isInnerEye) {
                            // 内部定位点样式处理
                            ctx.fillStyle = customOptions.fgColor;
                            const innerStyle = customOptions.innerEyeStyle || 'squares';
                            switch (innerStyle) {
                                case 'squares':
                                    ctx.fillRect(x, y, size, size);
                                    break;
                                case 'dots':
                                    ctx.beginPath();
                                    ctx.arc(x + moduleSize / 2, y + moduleSize / 2, size / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                    break;
                                case 'fluid':
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
                                case 'hexagon':
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
                                case 'star':
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
                                case 'diamond':
                                    ctx.beginPath();
                                    ctx.moveTo(x + moduleSize / 2, y);
                                    ctx.lineTo(x + size, y + moduleSize / 2);
                                    ctx.lineTo(x + moduleSize / 2, y + size);
                                    ctx.lineTo(x, y + moduleSize / 2);
                                    ctx.closePath();
                                    ctx.fill();
                                    break;
                                case 'heart':
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
                                default:
                                    ctx.fillRect(x, y, size, size);
                                    break;
                            }
                        } else {
                            // 普通点样式处理
                            ctx.fillStyle = customOptions.fgColor;
                            const dotStyle = customOptions.dotStyle || 'squares';
                            switch (dotStyle) {
                                case 'squares':
                                    ctx.fillRect(x, y, size, size);
                                    break;
                                case 'dots':
                                    ctx.beginPath();
                                    ctx.arc(x + moduleSize / 2, y + moduleSize / 2, size / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                    break;
                                case 'fluid':
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
                                case 'hexagon':
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
                                case 'star':
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
                                case 'diamond':
                                    ctx.beginPath();
                                    ctx.moveTo(x + moduleSize / 2, y);
                                    ctx.lineTo(x + size, y + moduleSize / 2);
                                    ctx.lineTo(x + moduleSize / 2, y + size);
                                    ctx.lineTo(x, y + moduleSize / 2);
                                    ctx.closePath();
                                    ctx.fill();
                                    break;
                                case 'heart':
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
                            }
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
