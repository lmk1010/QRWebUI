'use client';

import React from 'react';

const QRCodeLogoPreview: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 280;
        const moduleSize = 10;
        const modules = Math.floor(size / moduleSize);
        
        canvas.width = size;
        canvas.height = size;

        // 清空画布
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, size, size);

        // 生成二维码模式
        const qrPattern: boolean[][] = [];
        for (let i = 0; i < modules; i++) {
            qrPattern[i] = [];
            for (let j = 0; j < modules; j++) {
                // 定位点 (左上、右上、左下)
                const isFinderPattern = 
                    (i < 9 && j < 9) || // 左上
                    (i < 9 && j >= modules - 9) || // 右上
                    (i >= modules - 9 && j < 9); // 左下

                // 时钟模式
                const isTimingPattern = (i === 6 || j === 6) && !isFinderPattern;

                // 暗模块
                const isDarkModule = (i + j) % 2 === 0;

                if (isFinderPattern) {
                    // 定位点模式
                    const inOuter = (i < 7 && j < 7) || 
                                   (i < 7 && j >= modules - 7) || 
                                   (i >= modules - 7 && j < 7);
                    const inInner = (i >= 2 && i <= 4 && j >= 2 && j <= 4) ||
                                   (i >= 2 && i <= 4 && j >= modules - 5 && j <= modules - 3) ||
                                   (i >= modules - 5 && i <= modules - 3 && j >= 2 && j <= 4);
                    qrPattern[i][j] = inOuter && (i === 0 || i === 6 || j === 0 || j === 6 || inInner);
                } else if (isTimingPattern) {
                    qrPattern[i][j] = isDarkModule;
                } else {
                    // 数据区域，使用更真实的模式
                    qrPattern[i][j] = Math.random() > 0.5;
                }
            }
        }

        // 绘制二维码
        ctx.fillStyle = '#1f2937';
        for (let i = 0; i < modules; i++) {
            for (let j = 0; j < modules; j++) {
                if (qrPattern[i][j]) {
                    // 圆形点样式
                    const x = j * moduleSize + moduleSize / 2;
                    const y = i * moduleSize + moduleSize / 2;
                    const radius = moduleSize * 0.35;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        }

        // 绘制中心Logo区域
        const logoSize = 80;
        const logoX = (size - logoSize) / 2;
        const logoY = (size - logoSize) / 2;

        // Logo背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(logoX - 10, logoY - 10, logoSize + 20, logoSize + 20);
        
        // Logo边框
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.strokeRect(logoX - 10, logoY - 10, logoSize + 20, logoSize + 20);

        // 尝试加载并绘制真实的Logo图片
        const logoImg = new Image();
        logoImg.onload = () => {
            // 清除Logo区域
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);
            
            // 绘制Logo图片
            ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
        };
        
        logoImg.onerror = () => {
            // 如果图片加载失败，绘制自定义Logo设计
            const gradient = ctx.createLinearGradient(logoX, logoY, logoX + logoSize, logoY + logoSize);
            gradient.addColorStop(0, '#3b82f6');
            gradient.addColorStop(1, '#8b5cf6');
            
            ctx.fillStyle = gradient;
            // 绘制圆角矩形
            const radius = 12;
            ctx.beginPath();
            ctx.moveTo(logoX + radius, logoY);
            ctx.lineTo(logoX + logoSize - radius, logoY);
            ctx.quadraticCurveTo(logoX + logoSize, logoY, logoX + logoSize, logoY + radius);
            ctx.lineTo(logoX + logoSize, logoY + logoSize - radius);
            ctx.quadraticCurveTo(logoX + logoSize, logoY + logoSize, logoX + logoSize - radius, logoY + logoSize);
            ctx.lineTo(logoX + radius, logoY + logoSize);
            ctx.quadraticCurveTo(logoX, logoY + logoSize, logoX, logoY + logoSize - radius);
            ctx.lineTo(logoX, logoY + radius);
            ctx.quadraticCurveTo(logoX, logoY, logoX + radius, logoY);
            ctx.closePath();
            ctx.fill();

            // 绘制现代化的图标
            ctx.fillStyle = '#ffffff';
            
            // 绘制一个类似品牌的图标
            const centerX = logoX + logoSize / 2;
            const centerY = logoY + logoSize / 2;
            
            // 外圆
            ctx.beginPath();
            ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
            ctx.fill();
            
            // 内部设计
            ctx.fillStyle = '#3b82f6';
            ctx.beginPath();
            ctx.arc(centerX, centerY, 18, 0, 2 * Math.PI);
            ctx.fill();
            
            // 中心点
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
            ctx.fill();

            // Brand名称
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('LOGO', centerX, centerY + 35);
        };
        
        // 尝试加载一个示例logo
        logoImg.src = '/assets/logo.png';

    }, []);

    return (
        <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <canvas 
                    ref={canvasRef}
                    className="rounded-lg"
                    style={{ maxWidth: '280px', maxHeight: '280px' }}
                />
            </div>
            <p className="text-gray-600 mt-4 text-sm font-medium">Example: QR Code with integrated logo</p>
            <div className="mt-2 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>PNG/JPG/SVG Support</span>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Smart Sizing</span>
                </div>
            </div>
        </div>
    );
};

export default QRCodeLogoPreview; 