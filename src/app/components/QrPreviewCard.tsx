import React, { useRef, useEffect, useCallback } from 'react';
import { CustomOptions } from './CustomizationModal';
import QRCodeJS from 'qrcode';
import jsPDF from 'jspdf';
import { FaDownload, FaFileImage, FaFilePdf, FaVectorSquare, FaFileCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

    // 创建一个统一的下载功能，包含Frame和Logo
    const createDownloadCanvas = async (size: number): Promise<HTMLCanvasElement> => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Cannot get canvas context');

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

        // 根据frameStyle和QR码大小动态确定画布尺寸
        const hasFrame = customOptions.frameStyle !== 'none';
        // 根据QR码大小动态计算边距，保持合理比例
        const scaleRatio = size / 200; // 以200px为基准进行缩放
        // 调整无边框时的边距，让它也有适当的留白，看起来更美观
        const frameMargin = hasFrame ? Math.max(30, size * 0.15) : Math.max(10, size * 0.08);
        
        // 为装饰元素预留额外空间（在边框外面）
        const decorationLabelHeight = hasFrame ? Math.max(20, 26 * scaleRatio) : 0;
        const extraSpaceTop = hasFrame ? decorationLabelHeight : 0;
        const extraSpaceBottom = hasFrame ? decorationLabelHeight : 0;
        
        canvas.width = size + frameMargin * 2;
        canvas.height = size + frameMargin * 2 + extraSpaceTop + extraSpaceBottom;

        // 绘制Frame背景和装饰
        if (hasFrame) {
            await drawFrameDecoration(ctx, canvas.width, canvas.height, size, frameMargin);
        } else {
            // 无边框时也添加一个很微妙的阴影背景，提升视觉效果
            ctx.fillStyle = customOptions.bgColor || '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // 绘制QR码，调整位置让QR码居中且更大
        const qrX = frameMargin;
        const qrY = frameMargin + extraSpaceTop; // 根据缩放比例调整顶部空间
        
        await drawQRCodeToCanvas(ctx, qrX, qrY, size);

        return canvas;
    };

    // 绘制Frame装饰，与预览样式保持一致，支持动态缩放
    const drawFrameDecoration = async (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, qrSize: number, frameMargin: number): Promise<void> => {
        // 根据QR码大小计算缩放比例
        const scaleRatio = qrSize / 200; // 以200px为基准
        // 设置Frame背景色，与预览CSS保持一致
        let frameBgColor = '#ffffff';
        switch (customOptions.frameStyle) {
            case 'scan':
                frameBgColor = '#fffbeb';
                break;
            case 'pay':
                frameBgColor = '#f0fdf4';
                break;
            case 'this':
                frameBgColor = '#eff6ff';
                break;
            case 'common':
                frameBgColor = '#fef2f2';
                break;
            case 'modern':
                frameBgColor = '#f9fafb';
                break;
        }
        
        // 绘制背景
        ctx.fillStyle = frameBgColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // 绘制Frame边框，根据缩放比例调整
        const baseBorderWidth = customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'common' ? 4 :
                               customOptions.frameStyle === 'pay' ? 5 :
                               customOptions.frameStyle === 'this' ? 4 :
                               customOptions.frameStyle === 'modern' ? 2 : 3;
        const borderWidth = Math.max(1, baseBorderWidth * scaleRatio);
        
        ctx.strokeStyle = customOptions.frameColor || '#000000';
        ctx.lineWidth = borderWidth;
        
        // 绘制圆角矩形边框，根据缩放比例调整
        const baseBorderRadius = customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'common' ? 16 : 10;
        const borderRadius = baseBorderRadius * scaleRatio;
        const borderMargin = Math.max(5, 10 * scaleRatio); // 边框距离也要缩放
        // 为装饰元素预留的空间
        const decorationSpace = Math.max(20, 26 * scaleRatio);
        
        // 边框位置考虑装饰元素空间
        const frameX = borderMargin;
        const frameY = decorationSpace + borderMargin;
        const frameWidth = canvasWidth - borderMargin * 2;
        const frameHeight = canvasHeight - decorationSpace * 2 - borderMargin * 2;
        
        ctx.beginPath();
        ctx.roundRect(frameX, frameY, frameWidth, frameHeight, borderRadius);
        ctx.stroke();
        
        // 绘制装饰元素，与预览中的位置和样式保持一致
        await drawFrameDecorationElements(ctx, canvasWidth, canvasHeight, qrSize, frameMargin, scaleRatio);
    };

    // 绘制Frame装饰元素
    const drawFrameDecorationElements = async (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, qrSize: number, frameMargin: number, scaleRatio: number): Promise<void> => {
        let decorationColor = customOptions.frameColor || '#000000';
        let textColor = '#000000';
        let decorationText = '';
        let decorationIcon = '';
        let decorationBgColor = '#ffffff';
        
        // 根据不同Frame样式设置装饰元素，与预览保持一致
        switch (customOptions.frameStyle) {
            case 'scan':
                decorationText = 'SCAN ME';
                decorationIcon = '📱';
                decorationBgColor = customOptions.frameColor || '#F4D03F';
                decorationColor = customOptions.frameColor || '#F4D03F';
                textColor = '#000000';
                break;
            case 'pay':
                decorationText = 'PAY HERE';
                decorationIcon = '💳';
                decorationBgColor = customOptions.frameColor || '#58D68D';
                textColor = '#ffffff';
                break;
            case 'this':
                decorationText = 'THIS WAY';
                decorationIcon = '👉';
                decorationBgColor = customOptions.frameColor || '#5DADE2';
                textColor = '#ffffff';
                break;
            case 'modern':
                decorationText = 'MODERN';
                decorationIcon = '✨';
                decorationBgColor = '#ffffff';
                decorationColor = customOptions.frameColor || '#9E9E9E';
                textColor = customOptions.frameColor || '#9E9E9E';
                break;
            case 'common':
                decorationText = 'WELCOME';
                decorationIcon = '🎯';
                decorationBgColor = customOptions.frameColor || '#EC7063';
                decorationColor = customOptions.frameColor || '#EC7063';
                textColor = '#ffffff';
                break;
        }

        // 绘制装饰标签，根据缩放比例调整大小和位置
        const baseLabelWidth = 130;
        const baseLabelHeight = 26;
        const labelWidth = baseLabelWidth * scaleRatio;
        const labelHeight = baseLabelHeight * scaleRatio;
        const labelX = (canvasWidth - labelWidth) / 2;
        
        // 计算边框和装饰元素的实际位置
        const borderMargin = Math.max(5, 10 * scaleRatio);
        // 现在画布有额外的顶部和底部空间给装饰元素
        const decorationSpaceTop = Math.max(20, 26 * scaleRatio);
        const frameTop = decorationSpaceTop + borderMargin;
        const frameBottom = canvasHeight - decorationSpaceTop - borderMargin;
        
        let labelY;
        // 某些样式的装饰在顶部外面（-top-4 等价于在边框上方）
        if (customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'modern' || customOptions.frameStyle === 'common') {
            labelY = frameTop - labelHeight / 2; // 在边框上方，标签中心在边框线上
        }
        // 某些样式的装饰在底部外面（-bottom-8 等价于在边框下方）
        else if (customOptions.frameStyle === 'pay' || customOptions.frameStyle === 'this') {
            labelY = frameBottom - labelHeight / 2; // 在边框下方，标签中心在边框线上
        }
        else {
            labelY = decorationSpaceTop; // 默认位置在顶部装饰区域
        }

        // 绘制装饰背景（圆角矩形），根据缩放调整
        ctx.fillStyle = decorationBgColor;
        ctx.beginPath();
        const labelRadius = Math.max(8, 15 * scaleRatio);
        ctx.roundRect(labelX, labelY, labelWidth, labelHeight, labelRadius);
        ctx.fill();

        // 绘制装饰边框，根据缩放调整
        ctx.strokeStyle = decorationColor;
        ctx.lineWidth = Math.max(1, 1 * scaleRatio);
        ctx.beginPath();
        ctx.roundRect(labelX, labelY, labelWidth, labelHeight, labelRadius);
        ctx.stroke();

        // 绘制装饰文字，根据缩放调整字体大小
        ctx.fillStyle = textColor;
        const fontSize = Math.max(10, 13 * scaleRatio);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // 组合图标和文字
        const combinedText = `${decorationIcon} ${decorationText}`;
        ctx.fillText(combinedText, canvasWidth / 2, labelY + labelHeight / 2);
    };

    // 绘制QR码到指定位置
    const drawQRCodeToCanvas = async (ctx: CanvasRenderingContext2D, x: number, y: number, size: number): Promise<void> => {
        // 生成QR码数据
        const qrData = QRCodeJS.create(generatedValue, {
            errorCorrectionLevel: customOptions.errorCorrectionLevel || 'H',
        });
        const modules = qrData.modules;
        const moduleCount = modules.size;
        const moduleSize = size / moduleCount;

        // 绘制背景
        ctx.fillStyle = customOptions.bgColor;
        ctx.fillRect(x, y, size, size);

        // 绘制QR码模块
        ctx.fillStyle = customOptions.fgColor;
        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount; col++) {
                if (modules.data[row * moduleCount + col] === 1) {
                    const moduleX = x + col * moduleSize;
                    const moduleY = y + row * moduleSize;
                    
                    // 应用点样式
                    drawQRModule(ctx, moduleX, moduleY, moduleSize, customOptions.dotStyle);
                }
            }
        }

        // 绘制Logo
        if (customOptions.logoFile) {
            await drawLogo(ctx, x, y, size);
        }
    };

    // 绘制QR码模块
    const drawQRModule = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, style: string) => {
        ctx.fillStyle = customOptions.fgColor;
        
        switch (style) {
            case 'dots':
                ctx.beginPath();
                ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'fluid':
                ctx.beginPath();
                ctx.arc(x + size / 2, y + size / 2, size * 0.6, 0, Math.PI * 2);
                ctx.fill();
                break;
            default:
                ctx.fillRect(x, y, size, size);
                break;
        }
    };

    // 简单的Logo嵌入，无背景无边框
    const drawIntegratedLogo = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, logoX: number, logoY: number, logoSize: number) => {
        // 直接绘制Logo，保持正方形，无背景无边框
        ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
    };

    // 绘制Logo，增加错误处理和超时机制
    const drawLogo = async (ctx: CanvasRenderingContext2D, qrX: number, qrY: number, qrSize: number): Promise<void> => {
        if (!customOptions.logoFile) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const img = new Image();
            let isCompleted = false;
            
            // 设置5秒超时
            const timeout = setTimeout(() => {
                if (!isCompleted) {
                    isCompleted = true;
                    console.warn('Logo加载超时，跳过Logo绘制');
                    resolve(); // 即使Logo加载失败也继续执行
                }
            }, 5000);
            
            img.onload = () => {
                if (isCompleted) return;
                isCompleted = true;
                clearTimeout(timeout);
                
                                try {
                    const logoSize = qrSize * 0.22; // Logo大小为QR码的22%，稍微大一点
                    const logoX = qrX + (qrSize - logoSize) / 2;
                    const logoY = qrY + (qrSize - logoSize) / 2;
                    
                    // 简单绘制Logo
                    drawIntegratedLogo(ctx, img, logoX, logoY, logoSize);
                    resolve();
                } catch (error) {
                    console.error('Logo绘制失败:', error);
                    resolve(); // 即使绘制失败也继续执行
                }
            };
            
            img.onerror = (error) => {
                if (isCompleted) return;
                isCompleted = true;
                clearTimeout(timeout);
                console.error('Logo加载失败:', error);
                resolve(); // 即使Logo加载失败也继续执行，不阻断下载
            };

            // 设置crossOrigin以处理跨域图片
            img.crossOrigin = 'anonymous';
            
            try {
                img.src = customOptions.logoFile!;
            } catch (error) {
                if (isCompleted) return;
                isCompleted = true;
                clearTimeout(timeout);
                console.error('Logo URL无效:', error);
                resolve();
            }
        });
    };

    const handleDownloadPNG = async () => {
        try {
            const canvas = await createDownloadCanvas(customOptions.downloadSize);
            const link = document.createElement('a');
            link.download = `qrcode-${Date.now()}.png`;
            link.href = canvas.toDataURL();
            link.click();
        } catch (error) {
            console.error('PNG下载失败:', error);
        }
    };

    // 修复其他下载函数也使用相同的Canvas生成逻辑
    const handleDownloadPDF = async () => {
        try {
            const canvas = await createDownloadCanvas(customOptions.downloadSize);
            const dataUrl = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });
            
            pdf.addImage(dataUrl, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('qrcode.pdf');
        } catch (error) {
            console.error('PDF下载失败:', error);
        }
    };

    // SVG下载功能
    const handleDownloadSVG = async () => {
        try {
            const canvas = await createDownloadCanvas(customOptions.downloadSize);
            const svg = await canvasToSVG(canvas);
            
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qrcode.svg';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('SVG下载失败:', error);
        }
    };

    // 将Canvas转换为SVG
    const canvasToSVG = async (canvas: HTMLCanvasElement): Promise<string> => {
        const dataURL = canvas.toDataURL();
        return `<svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg">
            <image href="${dataURL}" width="${canvas.width}" height="${canvas.height}"/>
        </svg>`;
    };

    // EPS下载功能（转换Canvas为EPS）
    const handleDownloadEPS = async () => {
        try {
            const canvas = await createDownloadCanvas(customOptions.downloadSize);
            const eps = await canvasToEPS(canvas);
            
            const blob = new Blob([eps], { type: 'application/postscript' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qrcode.eps';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('EPS下载失败:', error);
        }
    };

    // 将Canvas转换为EPS
    const canvasToEPS = async (canvas: HTMLCanvasElement): Promise<string> => {
        const width = canvas.width;
        const height = canvas.height;
        
        return `%!PS-Adobe-3.0 EPSF-3.0
%%BoundingBox: 0 0 ${width} ${height}
%%Pages: 1
%%DocumentData: Clean7Bit
%%LanguageLevel: 2
%%EndComments
%%BeginDefaults
%%EndDefaults
%%BeginProlog
%%EndProlog
%%BeginSetup
%%EndSetup
%%Page: 1 1
gsave
${width} ${height} scale
% Image data would be here - simplified for EPS
grestore
showpage
%%EOF`;
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
    
        // 配置二维码生成选项 - 使用下载尺寸
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
                                case 'fluid': {
                                    // 流体样式 - 检测相邻点并创建流畅连接
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const fluidRadius = size * 0.6; // 流体半径
                                    
                                    // 检测相邻的点
                                    const hasLeft = col > 0 && modules.data[row * moduleCount + (col - 1)] === 1;
                                    const hasRight = col < moduleCount - 1 && modules.data[row * moduleCount + (col + 1)] === 1;
                                    const hasTop = row > 0 && modules.data[(row - 1) * moduleCount + col] === 1;
                                    const hasBottom = row < moduleCount - 1 && modules.data[(row + 1) * moduleCount + col] === 1;
                                    
                                    // 检测对角点
                                    const hasTopLeft = row > 0 && col > 0 && modules.data[(row - 1) * moduleCount + (col - 1)] === 1;
                                    const hasTopRight = row > 0 && col < moduleCount - 1 && modules.data[(row - 1) * moduleCount + (col + 1)] === 1;
                                    const hasBottomLeft = row < moduleCount - 1 && col > 0 && modules.data[(row + 1) * moduleCount + (col - 1)] === 1;
                                    const hasBottomRight = row < moduleCount - 1 && col < moduleCount - 1 && modules.data[(row + 1) * moduleCount + (col + 1)] === 1;
                                    
                                    ctx.beginPath();
                                    
                                    // 如果有相邻点，创建连接效果
                                    if (hasLeft || hasRight || hasTop || hasBottom || hasTopLeft || hasTopRight || hasBottomLeft || hasBottomRight) {
                                        // 创建流体连接形状
                                        const connectionRadius = moduleSize * 0.8;
                                        
                                        // 基础圆形
                                        ctx.arc(centerX, centerY, fluidRadius, 0, Math.PI * 2);
                                        
                                        // 添加连接扩展
                                        if (hasLeft) {
                                            ctx.arc(centerX - moduleSize, centerY, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasRight) {
                                            ctx.arc(centerX + moduleSize, centerY, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasTop) {
                                            ctx.arc(centerX, centerY - moduleSize, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasBottom) {
                                            ctx.arc(centerX, centerY + moduleSize, connectionRadius, 0, Math.PI * 2);
                                        }
                                        
                                        // 对角连接
                                        if (hasTopLeft) {
                                            ctx.arc(centerX - moduleSize, centerY - moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasTopRight) {
                                            ctx.arc(centerX + moduleSize, centerY - moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasBottomLeft) {
                                            ctx.arc(centerX - moduleSize, centerY + moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasBottomRight) {
                                            ctx.arc(centerX + moduleSize, centerY + moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                    } else {
                                        // 没有相邻点时，绘制独立的流体形状
                                        ctx.arc(centerX, centerY, fluidRadius, 0, Math.PI * 2);
                                    }
                                    
                                    ctx.fill();
                                    break;
                                }
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
                                    // 流体样式 - 检测相邻点并创建流畅连接
                                    const centerX = x + moduleSize / 2;
                                    const centerY = y + moduleSize / 2;
                                    const fluidRadius = size * 0.6; // 流体半径
                                    
                                    // 检测相邻的点
                                    const hasLeft = col > 0 && modules.data[row * moduleCount + (col - 1)] === 1;
                                    const hasRight = col < moduleCount - 1 && modules.data[row * moduleCount + (col + 1)] === 1;
                                    const hasTop = row > 0 && modules.data[(row - 1) * moduleCount + col] === 1;
                                    const hasBottom = row < moduleCount - 1 && modules.data[(row + 1) * moduleCount + col] === 1;
                                    
                                    // 检测对角点
                                    const hasTopLeft = row > 0 && col > 0 && modules.data[(row - 1) * moduleCount + (col - 1)] === 1;
                                    const hasTopRight = row > 0 && col < moduleCount - 1 && modules.data[(row - 1) * moduleCount + (col + 1)] === 1;
                                    const hasBottomLeft = row < moduleCount - 1 && col > 0 && modules.data[(row + 1) * moduleCount + (col - 1)] === 1;
                                    const hasBottomRight = row < moduleCount - 1 && col < moduleCount - 1 && modules.data[(row + 1) * moduleCount + (col + 1)] === 1;
                                    
                                    ctx.beginPath();
                                    
                                    // 如果有相邻点，创建连接效果
                                    if (hasLeft || hasRight || hasTop || hasBottom || hasTopLeft || hasTopRight || hasBottomLeft || hasBottomRight) {
                                        // 创建流体连接形状
                                        const connectionRadius = moduleSize * 0.8;
                                        
                                        // 基础圆形
                                        ctx.arc(centerX, centerY, fluidRadius, 0, Math.PI * 2);
                                        
                                        // 添加连接扩展
                                        if (hasLeft) {
                                            ctx.arc(centerX - moduleSize, centerY, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasRight) {
                                            ctx.arc(centerX + moduleSize, centerY, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasTop) {
                                            ctx.arc(centerX, centerY - moduleSize, connectionRadius, 0, Math.PI * 2);
                                        }
                                        if (hasBottom) {
                                            ctx.arc(centerX, centerY + moduleSize, connectionRadius, 0, Math.PI * 2);
                                        }
                                        
                                        // 对角连接
                                        if (hasTopLeft) {
                                            ctx.arc(centerX - moduleSize, centerY - moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasTopRight) {
                                            ctx.arc(centerX + moduleSize, centerY - moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasBottomLeft) {
                                            ctx.arc(centerX - moduleSize, centerY + moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                        if (hasBottomRight) {
                                            ctx.arc(centerX + moduleSize, centerY + moduleSize, connectionRadius * 0.7, 0, Math.PI * 2);
                                        }
                                    } else {
                                        // 没有相邻点时，绘制独立的流体形状
                                        ctx.arc(centerX, centerY, fluidRadius, 0, Math.PI * 2);
                                    }
                                    
                                    ctx.fill();
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
    
                // 如果有Logo，绘制集成式Logo
                if (customOptions.logoFile) {
                    const img = new Image();
                    img.onload = () => {
                        const logoSize = customOptions.logoWidth || customOptions.size * 0.22;
                        const logoX = (customOptions.size - logoSize) / 2;
                        const logoY = (customOptions.size - logoSize) / 2;
    
                        // 简单绘制Logo
                        drawIntegratedLogo(ctx, img, logoX, logoY, logoSize);
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
            className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl p-6 w-full max-w-sm flex flex-col items-center h-full overflow-hidden"
            ref={cardRef}
        >
            {/* 玻璃效果光晕 */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            {/* 内容容器 */}
            <div className="relative z-10 w-full h-full flex flex-col items-center">
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
            <div className="w-full bg-gray-50 rounded-lg p-3 mb-6">
                <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center flex flex-col justify-between h-16">
                        <div className="text-gray-500 mb-1 flex items-center justify-center gap-1">
                            <span>📏</span>
                            <span>Size</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="font-semibold text-gray-800 text-sm">{customOptions.downloadSize || customOptions.size}×{customOptions.downloadSize || customOptions.size}</div>
                        </div>
                    </div>
                    <div className="text-center flex flex-col justify-between h-16">
                        <div className="text-gray-500 mb-1 flex items-center justify-center gap-1">
                            <span>🎨</span>
                            <span>Style</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="font-semibold text-gray-800 capitalize">{customOptions.dotStyle}</div>
                        </div>
                    </div>
                    <div className="text-center flex flex-col justify-between h-16">
                        <div className="text-gray-500 mb-1 flex items-center justify-center gap-1">
                            <span>🖼️</span>
                            <span>Frame</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="font-semibold text-gray-800 capitalize">
                                {customOptions.frameStyle === 'none' ? 'None' :
                                 customOptions.frameStyle === 'scan' ? 'SCAN' :
                                 customOptions.frameStyle === 'pay' ? 'PAY' :
                                 customOptions.frameStyle === 'this' ? 'THIS' :
                                 customOptions.frameStyle === 'modern' ? 'MODERN' :
                                 customOptions.frameStyle === 'common' ? 'COMMON' : 'None'}
                            </div>
                        </div>
                    </div>
                    <div className="text-center flex flex-col justify-between h-16">
                        <div className="text-gray-500 mb-1 flex items-center justify-center gap-1">
                            <span>📐</span>
                            <span>Margin</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="font-semibold text-gray-800">{customOptions.margin}px</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 二维码显示区域 - 居中显示 */}
            <div className="flex-1 flex items-center justify-center w-full">
                <div
                    className={`relative transition-all duration-300 ${
                        customOptions.frameStyle === 'none' ? 
                            'bg-white shadow-md hover:shadow-lg border border-gray-100 rounded-xl p-4 md:p-6 backdrop-blur-sm' :
                        customOptions.frameStyle === 'scan' ? 'bg-yellow-50 rounded-xl p-6 relative' :
                        customOptions.frameStyle === 'pay' ? 'bg-green-50 rounded-lg p-6 relative' :
                        customOptions.frameStyle === 'this' ? 'bg-blue-50 rounded-lg p-6 relative' :
                        customOptions.frameStyle === 'modern' ? 'bg-gray-50 rounded-lg p-6 relative' :
                        customOptions.frameStyle === 'common' ? 'bg-red-50 rounded-xl p-6 relative' :
                        'bg-white shadow-md hover:shadow-lg border border-gray-100 rounded-xl p-4 md:p-6 backdrop-blur-sm'
                    }`}
                    style={{
                        backgroundColor: customOptions.frameStyle === 'scan' ? '#fffbeb' : 
                                       customOptions.frameStyle === 'pay' ? '#f0fdf4' :
                                       customOptions.frameStyle === 'this' ? '#eff6ff' :
                                       customOptions.frameStyle === 'common' ? '#fef2f2' :
                                       customOptions.frameStyle === 'none' ? '#ffffff' :
                                       customOptions.bgColor,
                        borderColor: customOptions.frameStyle !== 'none' ? customOptions.frameColor || '#000000' : '#f1f5f9',
                        borderWidth: customOptions.frameStyle === 'scan' || customOptions.frameStyle === 'common' ? '4px' : 
                                    customOptions.frameStyle === 'pay' ? '5px' :
                                    customOptions.frameStyle === 'this' ? '4px' :
                                    customOptions.frameStyle === 'modern' ? '2px' : 
                                    customOptions.frameStyle === 'none' ? '1px' : undefined,
                        borderStyle: 'solid',
                        // 无边框时添加微妙的渐变效果
                        backgroundImage: customOptions.frameStyle === 'none' ? 
                            'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' : undefined,
                        boxShadow: customOptions.frameStyle === 'none' ? 
                            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' : 
                            undefined
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
                
                {/* 无边框模式的微妙装饰 */}
                {customOptions.frameStyle === 'none' && (
                    <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full flex items-center justify-center w-8 h-8 shadow-lg shadow-indigo-500/25 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
                            <span className="text-[10px] font-bold">QR</span>
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
            </div>

            {/* 下载区域 */}
            <div className="w-full mt-6">
                <div className="flex flex-col w-full space-y-2">
                    <div className="text-center mb-3">
                        <h3 className="text-gray-700 font-semibold text-sm mb-2">Download Format Selection</h3>
                        <div className="w-full h-px bg-gray-200"></div>
                    </div>
                    
                    {/* 下载按钮网格布局 */}
                    <div className="grid grid-cols-2 gap-3">
                        <motion.button
                            onClick={handleDownloadPNG}
                            className="relative overflow-hidden flex items-center justify-center gap-2 
                                     backdrop-blur-xl bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-cyan-500/80
                                     text-white px-4 py-3 rounded-xl font-semibold text-sm
                                     shadow-lg hover:shadow-blue-500/40 border border-white/20
                                     transition-all duration-300 ease-out group"
                            whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 20px 30px -8px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            {/* 玻璃背景层 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-xl"></div>
                            
                            {/* 悬浮光效 */}
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-pulse rounded-xl"></div>
                            </motion.div>
                            
                            {/* 边框高光 */}
                            <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                            
                            {/* 内容 */}
                            <div className="relative flex items-center gap-2 z-10">
                                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                    <FaFileImage className="text-sm" />
                                </motion.div>
                                <span className="font-semibold">PNG</span>
                            </div>
                            
                            {/* 底部反射 */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </motion.button>
                        
                        <motion.button
                            onClick={handleDownloadSVG}
                            className="relative overflow-hidden flex items-center justify-center gap-2 
                                     backdrop-blur-xl bg-gradient-to-r from-purple-500/80 via-violet-600/80 to-indigo-500/80
                                     text-white px-4 py-3 rounded-xl font-semibold text-sm
                                     shadow-lg hover:shadow-purple-500/40 border border-white/20
                                     transition-all duration-300 ease-out group"
                            whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 20px 30px -8px rgba(147, 51, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            {/* 玻璃背景层 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-xl"></div>
                            
                            {/* 悬浮光效 */}
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-pulse rounded-xl"></div>
                            </motion.div>
                            
                            {/* 边框高光 */}
                            <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                            
                            {/* 内容 */}
                            <div className="relative flex items-center gap-2 z-10">
                                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                                    <FaVectorSquare className="text-sm" />
                                </motion.div>
                                <span className="font-semibold">SVG</span>
                            </div>
                            
                            {/* 底部反射 */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </motion.button>
                        
                        <motion.button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden flex items-center justify-center gap-2 
                                     backdrop-blur-xl bg-gradient-to-r from-red-500/80 via-rose-600/80 to-pink-500/80
                                     text-white px-4 py-3 rounded-xl font-semibold text-sm
                                     shadow-lg hover:shadow-red-500/40 border border-white/20
                                     transition-all duration-300 ease-out group"
                            whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 20px 30px -8px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            {/* 玻璃背景层 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-xl"></div>
                            
                            {/* 悬浮光效 */}
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-pulse rounded-xl"></div>
                            </motion.div>
                            
                            {/* 边框高光 */}
                            <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                            
                            {/* 内容 */}
                            <div className="relative flex items-center gap-2 z-10">
                                <motion.div 
                                    whileHover={{ y: -2 }} 
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaFilePdf className="text-sm" />
                                </motion.div>
                                <span className="font-semibold">PDF</span>
                            </div>
                            
                            {/* 底部反射 */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </motion.button>
                        
                        <motion.button
                            onClick={handleDownloadEPS}
                            className="relative overflow-hidden flex items-center justify-center gap-2 
                                     backdrop-blur-xl bg-gradient-to-r from-orange-500/80 via-amber-600/80 to-yellow-500/80
                                     text-white px-4 py-3 rounded-xl font-semibold text-sm
                                     shadow-lg hover:shadow-orange-500/40 border border-white/20
                                     transition-all duration-300 ease-out group"
                            whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 20px 30px -8px rgba(249, 115, 22, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            {/* 玻璃背景层 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-xl"></div>
                            
                            {/* 悬浮光效 */}
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-pulse rounded-xl"></div>
                            </motion.div>
                            
                            {/* 边框高光 */}
                            <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                            
                            {/* 内容 */}
                            <div className="relative flex items-center gap-2 z-10">
                                <motion.div 
                                    whileHover={{ rotate: [0, -10, 10, 0] }} 
                                    transition={{ duration: 0.4 }}
                                >
                                    <FaFileCode className="text-sm" />
                                </motion.div>
                                <span className="font-semibold">EPS</span>
                            </div>
                            
                            {/* 底部反射 */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </motion.button>
                    </div>
                    
                    {/* 一键下载所有格式 */}
                    <motion.button
                        onClick={async () => {
                            try {
                                await handleDownloadPNG();
                                await new Promise(resolve => setTimeout(resolve, 500));
                                await handleDownloadSVG();
                                await new Promise(resolve => setTimeout(resolve, 500));
                                await handleDownloadPDF();
                                await new Promise(resolve => setTimeout(resolve, 500));
                                await handleDownloadEPS();
                            } catch (error) {
                                console.error('批量下载失败:', error);
                            }
                        }}
                        className="relative overflow-hidden flex items-center justify-center gap-3 
                                 backdrop-blur-xl bg-gradient-to-r from-emerald-500/80 via-green-600/80 to-teal-500/80
                                 text-white px-4 py-3 rounded-xl font-bold text-sm
                                 shadow-xl hover:shadow-emerald-500/40 border border-white/30
                                 transition-all duration-300 ease-out group mt-3"
                        whileHover={{ 
                            scale: 1.03,
                            y: -3,
                            boxShadow: "0 25px 40px -10px rgba(16, 185, 129, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
                        }}
                        whileTap={{ 
                            scale: 0.97,
                            transition: { duration: 0.1 }
                        }}
                        animate={{
                            boxShadow: [
                                "0 8px 20px -6px rgba(16, 185, 129, 0.3)",
                                "0 12px 25px -6px rgba(34, 197, 94, 0.3)",
                                "0 8px 20px -6px rgba(16, 185, 129, 0.3)"
                            ]
                        }}
                        transition={{
                            boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        {/* 主玻璃背景层 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/10 to-white/5 rounded-xl"></div>
                        
                        {/* 内层光效 */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent rounded-xl"></div>
                        
                        {/* 动态光线效果 */}
                        <motion.div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse rounded-xl"></div>
                        </motion.div>
                        
                        {/* 边框高光 */}
                        <div className="absolute inset-0 rounded-xl border border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>
                        
                        {/* 内容 */}
                        <div className="relative flex items-center gap-3 z-10">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <FaDownload className="text-sm" />
                            </motion.div>
                            <span className="font-bold tracking-wide">Download All Formats</span>
                        </div>
                        
                        {/* 底部反射光 */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-b-xl"></div>
                        
                        {/* 顶部高光 */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-xl"></div>
                    </motion.button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default QrPreviewCard;
