'use client';

import React, { useRef, useEffect } from 'react';

interface GiftBoxCanvasProps {
  text?: 'SCAN' | 'PAY' | 'THIS' | 'MODERN' | 'COMMON';
  qrSize?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  frameColor?: string;
  textColor?: string;
  showQR?: boolean;
}

const GiftBoxCanvas: React.FC<GiftBoxCanvasProps> = ({
  text = 'SCAN',
  qrSize = 200,
  width = 400,
  height = 500,
  backgroundColor = '#F7DC6F',
  frameColor = '#F4D03F',
  textColor = '#2C3E50',
  showQR = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 根据不同类型获取相应的文字和样式
  const getTextAndStyle = (type: string) => {
    switch (type) {
      case 'SCAN':
        return {
          mainText: 'SCAN ME',
          subText: '扫一扫',
          icon: '📱',
          style: 'modern'
        };
      case 'PAY':
        return {
          mainText: 'PAY HERE',
          subText: '立即支付',
          icon: '💳',
          style: 'business'
        };
      case 'THIS':
        return {
          mainText: 'THIS WAY',
          subText: '请这边',
          icon: '👉',
          style: 'direction'
        };
      case 'MODERN':
        return {
          mainText: 'QR CODE',
          subText: '现代设计',
          icon: '✨',
          style: 'minimal'
        };
      case 'COMMON':
        return {
          mainText: 'WELCOME',
          subText: '欢迎使用',
          icon: '🎯',
          style: 'classic'
        };
      default:
        return {
          mainText: 'SCAN ME',
          subText: '扫一扫',
          icon: '📱',
          style: 'modern'
        };
    }
  };

  useEffect(() => {
    // 生成更真实的二维码模拟图案
    const generateQRPattern = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const modules = 29; // 29x29的模块网格，更接近真实二维码
      const moduleSize = size / modules;
      
      // 创建固定的二维码模式以保持一致性
      const pattern = Array(modules).fill(0).map((_, i) => 
        Array(modules).fill(0).map((_, j) => {
          // 使用确定性随机数生成器
          const seed = i * modules + j;
          return ((seed * 9301 + 49297) % 233280) / 233280.0 > 0.5;
        })
      );
      
      // 添加定位标记（左上、右上、左下）
      const addPositionMarker = (startX: number, startY: number) => {
        // 外层框
        for (let i = 0; i < 7; i++) {
          for (let j = 0; j < 7; j++) {
            if (startX + i < modules && startY + j < modules) {
              pattern[startX + i][startY + j] = (i === 0 || i === 6 || j === 0 || j === 6);
            }
          }
        }
        // 内层实心方块
        for (let i = 2; i < 5; i++) {
          for (let j = 2; j < 5; j++) {
            if (startX + i < modules && startY + j < modules) {
              pattern[startX + i][startY + j] = true;
            }
          }
        }
      };
      
      // 添加三个主要定位标记
      addPositionMarker(0, 0);
      addPositionMarker(0, modules - 7);
      addPositionMarker(modules - 7, 0);
      
      // 添加对齐图案（右下角附近的小方块）
      const alignX = modules - 7;
      const alignY = modules - 7;
      for (let i = alignX; i < alignX + 5 && i < modules; i++) {
        for (let j = alignY; j < alignY + 5 && j < modules; j++) {
          pattern[i][j] = (i === alignX || i === alignX + 4 || j === alignY || j === alignY + 4) ||
                         (i === alignX + 2 && j === alignY + 2);
        }
      }
      
      // 添加时序图案
      for (let i = 8; i < modules - 8; i++) {
        pattern[6][i] = i % 2 === 0;
        pattern[i][6] = i % 2 === 0;
      }
      
      ctx.fillStyle = textColor;
      // 绘制二维码模块
      for (let i = 0; i < modules; i++) {
        for (let j = 0; j < modules; j++) {
          if (pattern[i][j]) {
            ctx.fillRect(
              x + i * moduleSize, 
              y + j * moduleSize, 
              Math.ceil(moduleSize), 
              Math.ceil(moduleSize)
            );
          }
        }
      }
    };

    const drawGiftBox = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const textInfo = getTextAndStyle(text);

      // 清除画布
      ctx.clearRect(0, 0, width, height);

      // 根据不同样式调整视觉效果
      const isModern = textInfo.style === 'minimal';
      const isClassic = textInfo.style === 'classic';
      const isBusiness = textInfo.style === 'business';

      // 设置全局阴影效果
      ctx.shadowColor = isModern ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.15)';
      ctx.shadowBlur = isModern ? 4 : 8;
      ctx.shadowOffsetX = isModern ? 1 : 3;
      ctx.shadowOffsetY = isModern ? 1 : 3;

      // 绘制礼品盒主体（根据样式调整圆角）
      ctx.fillStyle = backgroundColor;
      ctx.beginPath();
      const borderRadius = isModern ? 8 : isClassic ? 25 : 20;
      ctx.roundRect(40, 100, width - 80, height - 140, borderRadius);
      ctx.fill();

      // 绘制礼品盒边框（多层边框效果）
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = frameColor;
      ctx.lineWidth = isModern ? 2 : isBusiness ? 5 : 4;
      ctx.beginPath();
      ctx.roundRect(40, 100, width - 80, height - 140, borderRadius);
      ctx.stroke();

      // 内层边框（现代风格简化）
      if (!isModern) {
        ctx.strokeStyle = '#E8C547';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(45, 105, width - 90, height - 150, borderRadius - 5);
        ctx.stroke();
      }

      // 绘制蝴蝶结（现代风格简化或隐藏）
      if (!isModern) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // 蝴蝶结主体
        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.ellipse(width / 2 - 15, 120, 12, 8, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(width / 2 + 15, 120, 12, 8, 0, 0, 2 * Math.PI);
        ctx.fill();

        // 蝴蝶结中心
        ctx.fillStyle = '#D4AC0D';
        ctx.beginPath();
        ctx.arc(width / 2, 120, 6, 0, 2 * Math.PI);
        ctx.fill();

        // 蝴蝶结飘带
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width / 2 - 20, 115);
        ctx.quadraticCurveTo(width / 2 - 25, 110, width / 2 - 20, 105);
        ctx.moveTo(width / 2 + 20, 115);
        ctx.quadraticCurveTo(width / 2 + 25, 110, width / 2 + 20, 105);
        ctx.stroke();
      }

      // 绘制主要文字（增强样式）
      ctx.fillStyle = textColor;
      ctx.font = isModern ? 'bold 38px Arial, sans-serif' : 'bold 42px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const mainTextY = isModern ? 130 : 140;
      
      // 文字阴影效果
      if (!isModern) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillText(textInfo.mainText, width / 2 + 2, mainTextY + 2);
      }
      
      // 主文字
      ctx.fillStyle = textColor;
      ctx.fillText(textInfo.mainText, width / 2, mainTextY);

      // 绘制副标题文字
      ctx.font = isModern ? '18px Arial, sans-serif' : '20px Arial, sans-serif';
      ctx.fillStyle = 'rgba(44, 62, 80, 0.7)';
      ctx.fillText(textInfo.subText, width / 2, mainTextY + (isModern ? 25 : 30));

      // 绘制装饰分隔线（根据样式调整）
      const lineY = isModern ? 165 : 175;
      if (isModern) {
        // 现代风格：简单直线
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(80, lineY);
        ctx.lineTo(width - 80, lineY);
        ctx.stroke();
      } else {
        // 传统风格：渐变线条
        const lineGradient = ctx.createLinearGradient(60, lineY, width - 60, lineY);
        lineGradient.addColorStop(0, 'transparent');
        lineGradient.addColorStop(0.2, frameColor);
        lineGradient.addColorStop(0.5, '#D4AC0D');
        lineGradient.addColorStop(0.8, frameColor);
        lineGradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(60, lineY);
        ctx.lineTo(width - 60, lineY);
        ctx.stroke();

        // 添加装饰点
        ctx.fillStyle = frameColor;
        for (let i = 0; i < 5; i++) {
          const dotX = 80 + i * ((width - 160) / 4);
          ctx.beginPath();
          ctx.arc(dotX, lineY, 3, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      // 绘制二维码区域
      if (showQR) {
        const qrX = (width - qrSize) / 2;
        const qrY = isModern ? 185 : 195;
        
        // 二维码外框阴影
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = isModern ? 4 : 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        
        // 二维码背景（白色圆角矩形）
        ctx.fillStyle = 'white';
        ctx.beginPath();
        const qrBorderRadius = isModern ? 6 : 10;
        ctx.roundRect(qrX - 15, qrY - 15, qrSize + 30, qrSize + 30, qrBorderRadius);
        ctx.fill();
        
        // 重置阴影
        ctx.shadowColor = 'transparent';
        
        // 二维码边框
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = isModern ? 2 : 3;
        ctx.beginPath();
        ctx.roundRect(qrX - 15, qrY - 15, qrSize + 30, qrSize + 30, qrBorderRadius);
        ctx.stroke();
        
        if (!isModern) {
          ctx.strokeStyle = '#E8C547';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(qrX - 12, qrY - 12, qrSize + 24, qrSize + 24, qrBorderRadius - 2);
          ctx.stroke();
        }
        
        // 绘制二维码图案
        generateQRPattern(ctx, qrX, qrY, qrSize);
      }

      // 绘制四个角落的装饰元素（现代风格简化）
      if (!isModern) {
        const drawCornerDecoration = (x: number, y: number, rotation: number) => {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);
          
          // 装饰的渐变效果
          const cornerGradient = ctx.createLinearGradient(0, 0, 20, 20);
          cornerGradient.addColorStop(0, frameColor);
          cornerGradient.addColorStop(1, '#E8C547');
          ctx.fillStyle = cornerGradient;
          
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(20, 0);
          ctx.lineTo(18, 4);
          ctx.lineTo(4, 18);
          ctx.lineTo(0, 20);
          ctx.closePath();
          ctx.fill();
          
          // 装饰边框
          ctx.strokeStyle = '#D4AC0D';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          ctx.restore();
        };

        // 四个角落的装饰
        drawCornerDecoration(50, 110, 0);
        drawCornerDecoration(width - 50, 110, Math.PI / 2);
        drawCornerDecoration(width - 50, height - 50, Math.PI);
        drawCornerDecoration(50, height - 50, -Math.PI / 2);

        // 添加一些星形装饰点
        const drawStar = (x: number, y: number, size: number) => {
          ctx.save();
          ctx.translate(x, y);
          ctx.fillStyle = 'rgba(241, 196, 15, 0.6)';
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * 144 - 90) * Math.PI / 180;
            const x = Math.cos(angle) * size;
            const y = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
            
            const innerAngle = ((i + 0.5) * 144 - 90) * Math.PI / 180;
            const innerX = Math.cos(innerAngle) * size * 0.4;
            const innerY = Math.sin(innerAngle) * size * 0.4;
            ctx.lineTo(innerX, innerY);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        };

        // 在礼品盒周围添加一些小星星装饰
        drawStar(70, 130, 6);
        drawStar(width - 70, 130, 6);
        drawStar(70, height - 70, 6);
        drawStar(width - 70, height - 70, 6);
      } else {
        // 现代风格的简约装饰点
        ctx.fillStyle = frameColor;
        const dotSize = 4;
        ctx.beginPath();
        ctx.arc(60, 120, dotSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width - 60, 120, dotSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(60, height - 60, dotSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width - 60, height - 60, dotSize, 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    drawGiftBox();
  }, [text, qrSize, width, height, backgroundColor, frameColor, textColor, showQR]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border-2 border-gray-200 rounded-xl shadow-lg bg-white"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default GiftBoxCanvas; 