import React, { useState, useRef, useEffect, useCallback } from 'react';
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
            downloadSize: 200,
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
        try {
            // 创建临时Canvas用于下载，使用downloadSize
            const tempCanvas = document.createElement('canvas');
            const downloadSize = customOptions.downloadSize || customOptions.size;
            tempCanvas.width = downloadSize;
            tempCanvas.height = downloadSize;
            
            // 使用专门的下载函数绘制二维码
            drawQRCodeForDownload(tempCanvas, downloadSize);
            
            // 等待绘制完成
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const dataUrl = tempCanvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    // 专门用于下载的绘图函数
    const drawQRCodeForDownload = (canvas: HTMLCanvasElement, downloadSize: number): void => {
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 添加 roundRect polyfill 以确保兼容性
        if (!ctx.roundRect) {
            ctx.roundRect = function(x: number, y: number, width: number, height: number, radius: number) {
                this.beginPath();
                this.moveTo(x + radius, y);
                this.lineTo(x + width - radius, y);
                this.quadraticCurveTo(x + width, y, x + width, y + radius);
                this.lineTo(x + width, y + height - radius);
                this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                this.lineTo(x + radius, y + height);
                this.quadraticCurveTo(x, y + height, x, y + height - radius);
                this.lineTo(x, y + radius);
                this.quadraticCurveTo(x, y, x + radius, y);
                this.closePath();
            };
        }
    
        // 配置二维码生成选项 - 使用下载尺寸
        const qrOptions = {
            width: downloadSize,
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
            const moduleCount = modules.size;
            const moduleSize = downloadSize / moduleCount;
            const dotScale = customOptions.dotScale || 1;
            const eyeScale = customOptions.eyeScale || 1;
    
            // 清空画布
            ctx.fillStyle = customOptions.bgColor;
            ctx.fillRect(0, 0, downloadSize, downloadSize);
    
            // 绘制数据点 - 使用与预览相同的逻辑，但使用下载尺寸
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount; col++) {
                    if (modules.data[row * moduleCount + col] === 1) {
                        const isOuterEye = (
                            (row < 7 && col < 7 && (row === 0 || row === 6 || col === 0 || col === 6)) ||
                            (row < 7 && col >= moduleCount - 7 && (row === 0 || row === 6 || col === moduleCount - 1 || col === moduleCount - 7)) ||
                            (row >= moduleCount - 7 && col < 7 && (row === moduleCount - 1 || row === moduleCount - 7 || col === 0 || col === 6))
                        );

                        const isInnerEye = (
                            (row >= 1 && row < 6 && col >= 1 && col < 6) ||
                            (row >= 1 && row < 6 && col >= moduleCount - 6 && col < moduleCount - 1) ||
                            (row >= moduleCount - 6 && row < moduleCount - 1 && col >= 1 && col < 6)
                        );

                        const x = col * moduleSize;
                        const y = row * moduleSize;
                        const size = moduleSize * (isOuterEye || isInnerEye ? eyeScale : dotScale);
                        
                        ctx.fillStyle = customOptions.fgColor;
                        
                        // 应用样式逻辑（简化版，重点是下载功能）
                        if (customOptions.dotStyle === 'dots' && !isOuterEye && !isInnerEye) {
                            ctx.beginPath();
                            ctx.arc(x + moduleSize / 2, y + moduleSize / 2, size / 2, 0, Math.PI * 2);
                            ctx.fill();
                        } else {
                            ctx.fillRect(x, y, size, size);
                        }
                    }
                }
            }
        });
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
    

    const drawQRCodeWithCustomDots = useCallback((canvas: HTMLCanvasElement): void => {
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 添加 roundRect polyfill 以确保兼容性
        if (!ctx.roundRect) {
            ctx.roundRect = function(x: number, y: number, width: number, height: number, radius: number) {
                this.beginPath();
                this.moveTo(x + radius, y);
                this.lineTo(x + width - radius, y);
                this.quadraticCurveTo(x + width, y, x + width, y + radius);
                this.lineTo(x + width, y + height - radius);
                this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                this.lineTo(x + radius, y + height);
                this.quadraticCurveTo(x, y + height, x, y + height - radius);
                this.lineTo(x, y + radius);
                this.quadraticCurveTo(x, y, x + radius, y);
                this.closePath();
            };
        }
    
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
                            
                            // 获取相邻点的信息，用于流体样式的连接
                            const getNeighborExists = (deltaRow: number, deltaCol: number): boolean => {
                                const newRow = row + deltaRow;
                                const newCol = col + deltaCol;
                                if (newRow < 0 || newRow >= moduleCount || newCol < 0 || newCol >= moduleCount) {
                                    return false;
                                }
                                return modules.data[newRow * moduleCount + newCol] === 1;
                            };

                            switch (dotStyle) {
                                case 'squares':
                                    ctx.fillRect(x, y, size, size);
                                    break;
                                    
                                case 'dots':
                                    ctx.beginPath();
                                    ctx.arc(x + moduleSize / 2, y + moduleSize / 2, size / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                    break;
                                    
                                case 'fluid': {
                                    // 流体样式 - 使用完整模块大小，完全消除间隙
                                    // 对于fluid样式，忽略dotScale，使用完整的moduleSize
                                    ctx.fillRect(x, y, moduleSize, moduleSize);
                                    
                                    break;
                                }
                                    
                                case 'hexagon': {
                                    // 改进的六边形样式
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const hexRadius = size * 0.4;
                                    
                                    ctx.beginPath();
                                    for (let i = 0; i < 6; i++) {
                                        const angle = (Math.PI / 3) * i - Math.PI / 2; // 旋转30度使顶点朝上
                                        const xPos = centerX + hexRadius * Math.cos(angle);
                                        const yPos = centerY + hexRadius * Math.sin(angle);
                                        if (i === 0) {
                                            ctx.moveTo(xPos, yPos);
                                        } else {
                                            ctx.lineTo(xPos, yPos);
                                        }
                                    }
                                    ctx.closePath();
                                    ctx.fill();
                                    break;
                                }
                                
                                case 'star': {
                                    // 改进的星形样式
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const spikes = 5;
                                    const step = Math.PI / spikes;
                                    const outerRadius = size * 0.4;
                                    const innerRadius = size * 0.2;
                                    
                                    ctx.beginPath();
                                    for (let i = 0; i < spikes * 2; i++) {
                                        const radius = i % 2 === 0 ? outerRadius : innerRadius;
                                        const angle = i * step - Math.PI / 2; // 旋转使一个尖角朝上
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
                                }
                                
                                case 'diamond': {
                                    // 改进的菱形样式
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const diamondSize = size * 0.4;
                                    
                                    ctx.beginPath();
                                    ctx.moveTo(centerX, centerY - diamondSize); // 上
                                    ctx.lineTo(centerX + diamondSize, centerY); // 右
                                    ctx.lineTo(centerX, centerY + diamondSize); // 下
                                    ctx.lineTo(centerX - diamondSize, centerY); // 左
                                    ctx.closePath();
                                    ctx.fill();
                                    break;
                                }
                                
                                case 'heart': {
                                    // 改进的心形样式
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const heartSize = size * 0.3;
                                    
                                    ctx.beginPath();
                                    // 左半心
                                    ctx.arc(centerX - heartSize / 2, centerY - heartSize / 3, heartSize / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                    
                                    ctx.beginPath();
                                    // 右半心
                                    ctx.arc(centerX + heartSize / 2, centerY - heartSize / 3, heartSize / 2, 0, Math.PI * 2);
                                    ctx.fill();
                                    
                                    ctx.beginPath();
                                    // 心形下半部分
                                    ctx.moveTo(centerX - heartSize, centerY - heartSize / 6);
                                    ctx.lineTo(centerX, centerY + heartSize);
                                    ctx.lineTo(centerX + heartSize, centerY - heartSize / 6);
                                    ctx.fill();
                                    break;
                                }
                                
                                default:
                                    ctx.fillRect(x, y, size, size);
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
    }, [customOptions, generatedValue]);

    useEffect(() => {
        if (canvasRef.current) {
            drawQRCodeWithCustomDots(canvasRef.current);
        }
    }, [drawQRCodeWithCustomDots]);

    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                QR Code has not been generated
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
                        Switch Style &gt;
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
                QR Code Size: {customOptions.size}×{customOptions.size}px, Error Correction Level: {customOptions.errorCorrectionLevel}
            </p>

            <div className="mt-10 flex flex-col w-full space-y-2">
                <button
                    onClick={openCustomizationModal}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    Customize QR Code
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
