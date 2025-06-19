import React, { useRef, useEffect, useCallback } from 'react';
import { CustomOptions } from './CustomizationModal';
import QRCodeJS from 'qrcode';
import jsPDF from 'jspdf';
import { FaDownload, FaFileImage, FaFilePdf, FaVectorSquare, FaFileCode } from 'react-icons/fa';

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
            frameStyle: 'none',
            frameColor: '#000000',
        };
        onCustomOptionsChange(defaultOptions);
    };

    const cardRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleDownloadPNG = async () => {
        if (!canvasRef.current) return;

        // 创建下载用的画布
        const downloadCanvas = document.createElement('canvas');
        const downloadSize = customOptions.downloadSize;
        downloadCanvas.width = downloadSize;
        downloadCanvas.height = downloadSize;

        // 根据Frame样式处理下载
        if (customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'pay' || 
            customOptions.frameStyle === 'this' || customOptions.frameStyle === 'common') {
            // 使用Canvas绘制的Frame
            await handleDownloadWithCanvasFrame(downloadSize);
        } else {
            // 普通样式
            drawQRCodeForDownload(downloadCanvas, downloadSize);
            
            const link = document.createElement('a');
            link.download = `qrcode-${Date.now()}.png`;
            link.href = downloadCanvas.toDataURL();
            link.click();
        }
    };

    // 新的Canvas Frame下载处理函数
    const handleDownloadWithCanvasFrame = async (downloadSize: number) => {
        // 这里可以集成GiftBoxCanvas的绘制逻辑
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = downloadSize + 200; // 增加空间用于Frame装饰
        canvas.height = downloadSize + 250;

        // 简化的Frame绘制逻辑（基于GiftBoxCanvas）
        ctx.fillStyle = customOptions.bgColor;
        ctx.fillRect(50, 50, downloadSize + 100, downloadSize + 150);
        
        // 绘制QR码
        const qrCanvas = document.createElement('canvas');
        drawQRCodeForDownload(qrCanvas, downloadSize);
        
        const qrX = (canvas.width - downloadSize) / 2;
        const qrY = (canvas.height - downloadSize) / 2 + 25;
        ctx.drawImage(qrCanvas, qrX, qrY);

        // 添加文字
        ctx.fillStyle = customOptions.fgColor;
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        const textY = qrY - 30;
        
        switch (customOptions.frameStyle) {
            case 'scan':
                ctx.fillText('SCAN ME', canvas.width / 2, textY);
                break;
            case 'pay':
                ctx.fillText('PAY HERE', canvas.width / 2, textY);
                break;
            case 'this':
                ctx.fillText('THIS WAY', canvas.width / 2, textY);
                break;
            case 'common':
                ctx.fillText('WELCOME', canvas.width / 2, textY);
                break;
        }

        const link = document.createElement('a');
        link.download = `qrcode-frame-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };

    // SVG下载功能
    const handleDownloadSVG = async () => {
        try {
            const downloadSize = customOptions.downloadSize || customOptions.size;
            const svg = generateSVGQRCode(downloadSize);
            
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qrcode.svg';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('SVG download failed:', error);
        }
    };

    // PDF下载功能
    const handleDownloadPDF = async () => {
        try {
            const downloadSize = customOptions.downloadSize || customOptions.size;
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = downloadSize;
            tempCanvas.height = downloadSize;
            
            drawQRCodeForDownload(tempCanvas, downloadSize);
            
            // 等待绘制完成
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const dataUrl = tempCanvas.toDataURL('image/png');
            
            // 创建PDF，尺寸按照二维码实际大小
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [downloadSize, downloadSize]
            });
            
            pdf.addImage(dataUrl, 'PNG', 0, 0, downloadSize, downloadSize);
            pdf.save('qrcode.pdf');
        } catch (error) {
            console.error('PDF download failed:', error);
        }
    };

    // EPS下载功能（转换SVG为EPS）
    const handleDownloadEPS = async () => {
        try {
            const downloadSize = customOptions.downloadSize || customOptions.size;
            const svg = generateSVGQRCode(downloadSize);
            
            // 将SVG转换为EPS格式
            const eps = convertSVGToEPS(svg, downloadSize);
            
            const blob = new Blob([eps], { type: 'application/postscript' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qrcode.eps';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('EPS download failed:', error);
        }
    };

    // 生成SVG格式的二维码
    const generateSVGQRCode = (size: number): string => {
        const qrData = QRCodeJS.create(generatedValue, {
            errorCorrectionLevel: customOptions.errorCorrectionLevel || 'H',
        });
        const modules = qrData.modules;
        const moduleCount = modules.size;
        const moduleSize = size / moduleCount;

        let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
        svg += `<rect width="${size}" height="${size}" fill="${customOptions.bgColor}"/>`;

        // 绘制二维码模块
        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount; col++) {
                if (modules.data[row * moduleCount + col] === 1) {
                    const x = col * moduleSize;
                    const y = row * moduleSize;
                    
                    if (customOptions.dotStyle === 'dots') {
                        const cx = x + moduleSize / 2;
                        const cy = y + moduleSize / 2;
                        const r = moduleSize / 2;
                        svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${customOptions.fgColor}"/>`;
                    } else {
                        svg += `<rect x="${x}" y="${y}" width="${moduleSize}" height="${moduleSize}" fill="${customOptions.fgColor}"/>`;
                    }
                }
            }
        }

        svg += '</svg>';
        return svg;
    };

    // 将SVG转换为EPS格式
    const convertSVGToEPS = (svg: string, size: number): string => {
        const eps = `%!PS-Adobe-3.0 EPSF-3.0
%%BoundingBox: 0 0 ${size} ${size}
%%Creator: QRCodeHub
%%Title: QR Code
%%CreationDate: ${new Date().toISOString()}
%%EndComments

% 设置坐标系
0 ${size} translate
1 -1 scale

% 绘制背景
newpath
0 0 moveto
${size} 0 lineto
${size} ${size} lineto
0 ${size} lineto
closepath
${hexToRGB(customOptions.bgColor)} setrgbcolor
fill

% 绘制二维码
${hexToRGB(customOptions.fgColor)} setrgbcolor
${svg.match(/<rect[^>]*>/g)?.map(rect => {
    const x = rect.match(/x="([^"]*)"/) ? parseFloat(rect.match(/x="([^"]*)"/)![1]) : 0;
    const y = rect.match(/y="([^"]*)"/) ? parseFloat(rect.match(/y="([^"]*)"/)![1]) : 0;
    const width = rect.match(/width="([^"]*)"/) ? parseFloat(rect.match(/width="([^"]*)"/)![1]) : 0;
    const height = rect.match(/height="([^"]*)"/) ? parseFloat(rect.match(/height="([^"]*)"/)![1]) : 0;
    
    return `newpath
${x} ${y} moveto
${x + width} ${y} lineto
${x + width} ${y + height} lineto
${x} ${y + height} lineto
closepath
fill`;
}).join('\n') || ''}

showpage
%%EOF`;
        return eps;
    };

    // 将十六进制颜色转换为RGB
    const hexToRGB = (hex: string): string => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
    };

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
            className="bg-white shadow-md rounded-md p-4 w-full max-w-sm flex flex-col items-center h-full"
            ref={cardRef}
        >
            {/* 顶部标题和重置区域 */}
            <div className="mb-4 text-gray-700 text-sm self-start flex items-center justify-between w-full">
                <div>
                    <div className="text-base font-semibold text-gray-800 mb-1">QR Code Preview</div>
                    <div className="text-xs text-gray-500">Real-time preview of your QR code</div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleReset}
                        className="text-gray-500 hover:text-gray-700 transition-colors text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* 二维码信息卡片 */}
            <div className="w-full bg-gray-50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-5 gap-2 text-xs">
                    <div className="text-center">
                        <div className="text-gray-500 mb-1">Size</div>
                        <div className="font-semibold text-gray-800">{customOptions.size}×{customOptions.size}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-500 mb-1">Style</div>
                        <div className="font-semibold text-gray-800 capitalize">{customOptions.dotStyle}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-500 mb-1">Frame</div>
                        <div className="font-semibold text-gray-800 capitalize">
                            {customOptions.frameStyle === 'none' ? 'None' :
                             customOptions.frameStyle === 'scan' ? 'SCAN' :
                             customOptions.frameStyle === 'pay' ? 'PAY' :
                             customOptions.frameStyle === 'this' ? 'THIS' :
                             customOptions.frameStyle === 'modern' ? 'MODERN' :
                             customOptions.frameStyle === 'common' ? 'COMMON' : 'None'}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-500 mb-1">Error Level</div>
                        <div className="font-semibold text-gray-800">{customOptions.errorCorrectionLevel}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-500 mb-1">Margin</div>
                        <div className="font-semibold text-gray-800">{customOptions.margin}px</div>
                    </div>
                </div>
            </div>

            {/* 二维码显示区域 */}
            <div
                className={`relative mb-4 shadow-inner ${
                    customOptions.frameStyle === 'none' ? 'bg-white border-2 border-gray-200 rounded-lg p-3' :
                    customOptions.frameStyle === 'scan' ? 'bg-yellow-50 rounded-xl p-6 relative' :
                    customOptions.frameStyle === 'pay' ? 'bg-green-50 rounded-lg p-6 relative' :
                    customOptions.frameStyle === 'this' ? 'bg-blue-50 rounded-lg p-6 relative' :
                    customOptions.frameStyle === 'modern' ? 'bg-gray-50 rounded-lg p-6 relative' :
                    customOptions.frameStyle === 'common' ? 'bg-red-50 rounded-xl p-6 relative' :
                    'bg-white border-2 border-gray-200 rounded-lg p-3'
                }`}
                style={{
                    backgroundColor: customOptions.frameStyle === 'scan' ? '#fffbeb' : 
                                   customOptions.frameStyle === 'pay' ? '#f0fdf4' :
                                   customOptions.frameStyle === 'this' ? '#eff6ff' :
                                   customOptions.frameStyle === 'common' ? '#fef2f2' :
                                   customOptions.bgColor,
                    borderColor: customOptions.frameStyle !== 'none' ? customOptions.frameColor || '#000000' : undefined,
                    borderWidth: customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'common' ? '4px' : 
                                customOptions.frameStyle === 'pay' ? '5px' :
                                customOptions.frameStyle === 'this' ? '4px' :
                                customOptions.frameStyle === 'modern' ? '2px' : undefined,
                    borderStyle: customOptions.frameStyle !== 'none' ? 'solid' : undefined,
                }}
                ref={qrCodeRef}
            >
                {/* Frame装饰元素 */}
                {customOptions.frameStyle === 'scan' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div 
                            className="text-black text-xs font-bold rounded-full flex items-center justify-center px-3 py-1 border shadow-sm"
                            style={{ 
                                backgroundColor: customOptions.frameColor || '#F4D03F',
                                borderColor: customOptions.frameColor || '#F4D03F',
                                color: '#000'
                            }}
                        >
                            📱 SCAN ME
                        </div>
                    </div>
                )}
                
                {customOptions.frameStyle === 'pay' && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div 
                            className="text-white text-sm font-bold rounded flex items-center justify-center px-4 py-2"
                            style={{ 
                                backgroundColor: customOptions.frameColor || '#58D68D',
                            }}
                        >
                            💳 PAY HERE
                        </div>
                    </div>
                )}

                {customOptions.frameStyle === 'this' && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div 
                            className="text-white text-sm font-bold rounded flex items-center justify-center px-4 py-2"
                            style={{ 
                                backgroundColor: customOptions.frameColor || '#5DADE2',
                            }}
                        >
                            👉 THIS WAY
                        </div>
                    </div>
                )}

                {customOptions.frameStyle === 'modern' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div 
                            className="text-gray-800 text-xs font-medium rounded-full flex items-center justify-center px-3 py-1 border shadow-sm"
                            style={{ 
                                borderColor: customOptions.frameColor || '#9E9E9E',
                                backgroundColor: 'white',
                                color: customOptions.frameColor || '#9E9E9E'
                            }}
                        >
                            ✨ MODERN
                        </div>
                    </div>
                )}

                {customOptions.frameStyle === 'common' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div 
                            className="text-white text-xs font-bold rounded-full flex items-center justify-center px-3 py-1 border shadow-sm"
                            style={{ 
                                backgroundColor: customOptions.frameColor || '#EC7063',
                                borderColor: customOptions.frameColor || '#EC7063',
                                color: 'white'
                            }}
                        >
                            🎯 WELCOME
                        </div>
                    </div>
                )}
                
                {/* 二维码canvas容器 */}
                <div className="flex items-center justify-center">
                    <canvas ref={canvasRef} />
                </div>
            </div>

            {/* 下载区域 */}
            <div className="w-full flex-1 flex flex-col justify-end">
                {/* 功能提示区域 - 确保与左侧配置网格对齐 */}
                <div className="mb-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <div className="text-sm font-medium text-blue-800 mb-2">💡 Download Tips</div>
                    <div className="text-xs text-blue-600 space-y-0.5">
                        <div>• PNG: Suitable for web and social media use</div>
                        <div>• SVG: Vector format, infinitely scalable</div>
                        <div>• PDF: Suitable for printing and document embedding</div>
                        <div>• EPS: Professional printing and design software</div>
                    </div>
                </div>
                
                <div className="flex flex-col w-full space-y-2">
                    <div className="text-center mb-3">
                        <h3 className="text-gray-700 font-semibold text-sm mb-2">Download Format Selection</h3>
                        <div className="w-full h-px bg-gray-200"></div>
                    </div>
                    
                    {/* 下载按钮网格布局 */}
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={handleDownloadPNG}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                            <FaFileImage className="text-sm" />
                            <span className="text-sm font-medium">PNG</span>
                        </button>
                        
                        <button
                            onClick={handleDownloadSVG}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                            <FaVectorSquare className="text-sm" />
                            <span className="text-sm font-medium">SVG</span>
                        </button>
                        
                        <button
                            onClick={handleDownloadPDF}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                            <FaFilePdf className="text-sm" />
                            <span className="text-sm font-medium">PDF</span>
                        </button>
                        
                        <button
                            onClick={handleDownloadEPS}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                            <FaFileCode className="text-sm" />
                            <span className="text-sm font-medium">EPS</span>
                        </button>
                    </div>
                    
                    {/* 一键下载所有格式 */}
                    <button
                        onClick={async () => {
                            await handleDownloadPNG();
                            await new Promise(resolve => setTimeout(resolve, 500));
                            await handleDownloadSVG();
                            await new Promise(resolve => setTimeout(resolve, 500));
                            await handleDownloadPDF();
                            await new Promise(resolve => setTimeout(resolve, 500));
                            await handleDownloadEPS();
                        }}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-md mt-3"
                    >
                        <FaDownload className="text-sm" />
                        <span className="text-sm font-medium">Download All Formats</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QrPreviewCard;
