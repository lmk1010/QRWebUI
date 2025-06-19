import React, { useState } from 'react';
import { CustomOptions } from './CustomizationModal';

interface FrameModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (frameStyle: CustomOptions['frameStyle'], frameColor: string) => void;
    currentFrameStyle?: CustomOptions['frameStyle'];
    currentFrameColor?: string;
}

const FrameModal: React.FC<FrameModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentFrameStyle = 'none',
    currentFrameColor = '#000000'
}) => {
    const [selectedStyle, setSelectedStyle] = useState<CustomOptions['frameStyle']>(currentFrameStyle);
    const [selectedColor, setSelectedColor] = useState<string>(currentFrameColor);

    const frameStyles = [
        { 
            id: 'none', 
            name: 'No Frame', 
            description: 'Classic clean QR code without external decoration',
            preview: 'border-0 bg-white',
            icon: '🚫'
        },
        { 
            id: 'scan', 
            name: 'SCAN Frame', 
            description: '📱 Designed for scanning scenarios with "Scan Me" prompt',
            preview: 'border-4 border-yellow-400 bg-yellow-50 rounded-xl',
            icon: '📱',
            defaultColor: '#F4D03F'
        },
        { 
            id: 'pay', 
            name: 'PAY Frame', 
            description: '💳 Business payment style with bold border for trust',
            preview: 'border-4 border-green-500 bg-green-50 rounded-lg',
            icon: '💳',
            defaultColor: '#58D68D'
        },
        { 
            id: 'this', 
            name: 'THIS Frame', 
            description: '👉 Directional guide design for navigation and guidance',
            preview: 'border-4 border-blue-500 bg-blue-50 rounded-lg',
            icon: '👉',
            defaultColor: '#5DADE2'
        },
        { 
            id: 'modern', 
            name: 'MODERN Frame', 
            description: '✨ Simple modern style suitable for premium brands',
            preview: 'border-2 border-gray-500 bg-gray-50 rounded-lg',
            icon: '✨',
            defaultColor: '#9E9E9E'
        },
        { 
            id: 'common', 
            name: 'COMMON Frame', 
            description: '🎯 Classic universal design suitable for various occasions',
            preview: 'border-4 border-red-400 bg-red-50 rounded-xl',
            icon: '🎯',
            defaultColor: '#EC7063'
        }
    ];

    const handleStyleSelect = (styleId: CustomOptions['frameStyle']) => {
        setSelectedStyle(styleId);
        // 如果选择了有默认颜色的样式，使用默认颜色
        const style = frameStyles.find(s => s.id === styleId);
        const color = style?.defaultColor || selectedColor;
        setSelectedColor(color);
        onConfirm(styleId, color);
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        onConfirm(selectedStyle, color);
    };

    // 点击外部关闭弹窗
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
                {/* 关闭按钮 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* 提示 */}
                <div className="absolute top-4 right-12 bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm border border-blue-200">
                    💡 Select any Frame style for instant preview
                </div>

                <h2 className="text-xl font-semibold mb-6 pr-8">🎁 QR Code Frame Settings</h2>

                {/* 边框样式选择 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Select Frame Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {frameStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`border-2 p-4 rounded-lg cursor-pointer transition-all duration-200 min-h-[180px] ${
                                    selectedStyle === style.id 
                                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                }`}
                                onClick={() => handleStyleSelect(style.id as CustomOptions['frameStyle'])}
                            >
                                {/* 预览区域 */}
                                <div className="flex justify-center mb-4">
                                    <div className={`w-20 h-20 flex items-center justify-center relative ${style.preview}`}
                                         style={{ 
                                             borderColor: style.id !== 'none' ? (style.defaultColor || selectedColor) : 'transparent'
                                         }}>
                                        
                                        {/* 特殊装饰效果 */}
                                        {style.id === 'scan' && (
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                                                <div 
                                                    className="text-black text-[8px] font-bold rounded-full flex items-center justify-center px-2 py-0.5 border shadow-sm"
                                                    style={{ 
                                                        backgroundColor: style.defaultColor || '#F4D03F',
                                                        borderColor: style.defaultColor || '#F4D03F',
                                                        fontSize: '6px'
                                                    }}
                                                >
                                                    📱 SCAN
                                                </div>
                                            </div>
                                        )}

                                        {style.id === 'pay' && (
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <div 
                                                    className="text-white text-[6px] font-bold rounded flex items-center justify-center px-1 py-0.5"
                                                    style={{ 
                                                        backgroundColor: style.defaultColor || '#58D68D',
                                                        fontSize: '6px'
                                                    }}
                                                >
                                                    💳 PAY
                                                </div>
                                            </div>
                                        )}

                                        {style.id === 'this' && (
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <div 
                                                    className="text-white text-[6px] font-bold rounded flex items-center justify-center px-1 py-0.5"
                                                    style={{ 
                                                        backgroundColor: style.defaultColor || '#5DADE2',
                                                        fontSize: '6px'
                                                    }}
                                                >
                                                    👉 THIS
                                                </div>
                                            </div>
                                        )}

                                        {style.id === 'modern' && (
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                                                <div 
                                                    className="text-gray-800 text-[6px] font-medium rounded-full flex items-center justify-center px-1 py-0.5 border shadow-sm"
                                                    style={{ 
                                                        borderColor: style.defaultColor || '#9E9E9E',
                                                        backgroundColor: 'white',
                                                        color: style.defaultColor || '#9E9E9E',
                                                        fontSize: '6px'
                                                    }}
                                                >
                                                    ✨ MOD
                                                </div>
                                            </div>
                                        )}

                                        {style.id === 'common' && (
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                                                <div 
                                                    className="text-white text-[6px] font-bold rounded-full flex items-center justify-center px-1 py-0.5 border shadow-sm"
                                                    style={{ 
                                                        backgroundColor: style.defaultColor || '#EC7063',
                                                        borderColor: style.defaultColor || '#EC7063',
                                                        color: 'white',
                                                        fontSize: '6px'
                                                    }}
                                                >
                                                    🎯 WELC
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* 模拟二维码 - 更精细的网格 */}
                                        <div className="grid grid-cols-6 gap-px">
                                            {Array.from({ length: 36 }).map((_, index) => {
                                                // 创建更真实的二维码图案
                                                const isCorner = (
                                                    (index < 7 || index > 29) && (index % 6 < 2 || index % 6 > 3) ||
                                                    (index >= 6 && index <= 11) || 
                                                    (index >= 24 && index <= 29)
                                                );
                                                const shouldFill = isCorner || Math.random() > 0.4;
                                                
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`w-1 h-1 ${shouldFill ? 'bg-gray-800' : 'bg-transparent'}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 样式信息 */}
                                <div className="text-center space-y-2">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-lg">{style.icon}</span>
                                        <h4 className="font-medium text-gray-800 text-sm">{style.name}</h4>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed px-1">{style.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 边框颜色选择 */}
                {selectedStyle !== 'none' && (
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">Frame Color Customization</h3>
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-sm text-gray-600 mb-2">Select Border Color:</label>
                                <input
                                    type="color"
                                    value={selectedColor}
                                    onChange={(e) => handleColorChange(e.target.value)}
                                    className="w-full h-10 cursor-pointer rounded border border-gray-300"
                                />
                            </div>
                            <div className="flex gap-2">
                                {/* 预设颜色 */}
                                {['#F4D03F', '#58D68D', '#5DADE2', '#9E9E9E', '#EC7063', '#000000'].map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => handleColorChange(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                                            selectedColor === color ? 'border-gray-600 scale-110' : 'border-gray-300'
                                        }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 使用说明 */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 text-blue-500 mr-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-800 mb-1">Frame Feature Usage Guide</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• <strong>📱 SCAN Frame:</strong> Designed for scanning scenarios with "Scan Me" prompt, suitable for WeChat and Alipay scanning</li>
                                <li>• <strong>💳 PAY Frame:</strong> Business payment style with bold border to enhance trust, specifically for payment scenarios</li>
                                <li>• <strong>👉 THIS Frame:</strong> Directional guide design for navigation and guidance, suitable for locations requiring user direction</li>
                                <li>• <strong>✨ MODERN Frame:</strong> Simple modern style with minimal decorative elements, suitable for premium brands and modern scenarios</li>
                                <li>• <strong>🎯 COMMON Frame:</strong> Classic universal design with traditional gift box elements, suitable for various general occasions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameModal; 