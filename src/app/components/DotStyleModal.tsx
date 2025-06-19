import React, { useState } from 'react';
import { CustomOptions } from './CustomizationModal';

interface DotStyleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (dotStyle: CustomOptions['dotStyle'], outerEyeStyle: CustomOptions['outerEyeStyle'], innerEyeStyle: CustomOptions['innerEyeStyle']) => void;
    currentDotStyle?: CustomOptions['dotStyle'];
    currentOuterEyeStyle?: CustomOptions['outerEyeStyle'];
    currentInnerEyeStyle?: CustomOptions['innerEyeStyle'];
}

const DotStyleModal: React.FC<DotStyleModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentDotStyle = 'squares',
    currentOuterEyeStyle = 'squares',
    currentInnerEyeStyle = 'squares'
}) => {
    const [selectedStyle, setSelectedStyle] = useState<CustomOptions['dotStyle']>(currentDotStyle as CustomOptions['dotStyle']);
    const [selectedOuterStyle, setSelectedOuterStyle] = useState<CustomOptions['outerEyeStyle']>(currentOuterEyeStyle);
    const [selectedInnerStyle, setSelectedInnerStyle] = useState<CustomOptions['innerEyeStyle']>(currentInnerEyeStyle);

    const dotStyles = [
        { 
            id: 'squares', 
            name: 'Square', 
            description: 'Classic square dots for traditional QR codes',
            icon: '⬜',
            preview: 'squares'
        },
        { 
            id: 'dots', 
            name: 'Circle', 
            description: 'Smooth circular dots for modern appearance',
            icon: '⭕',
            preview: 'circles'
        },
        { 
            id: 'fluid', 
            name: 'Fluid', 
            description: 'Organic fluid shapes for creative designs',
            icon: '💧',
            preview: 'fluid'
        },
        { 
            id: 'hexagon', 
            name: 'Hexagon', 
            description: 'Geometric hexagon patterns for tech look',
            icon: '⬡',
            preview: 'hexagons'
        },
        { 
            id: 'star', 
            name: 'Star', 
            description: 'Star-shaped dots for decorative QR codes',
            icon: '⭐',
            preview: 'stars'
        },
        { 
            id: 'diamond', 
            name: 'Diamond', 
            description: 'Diamond patterns for elegant appearance',
            icon: '💎',
            preview: 'diamonds'
        },
        { 
            id: 'heart', 
            name: 'Heart', 
            description: 'Heart-shaped dots for romantic themes',
            icon: '❤️',
            preview: 'hearts'
        }
    ];

    const outerEyeStyles = [
        { 
            id: 'squares', 
            name: 'Square', 
            description: 'Traditional square corner markers',
            icon: '⬜',
            preview: 'squares'
        },
        { 
            id: 'rounded', 
            name: 'Rounded Square', 
            description: 'Soft rounded square corners',
            icon: '🔲',
            preview: 'rounded'
        },
        { 
            id: 'circle', 
            name: 'Circle', 
            description: 'Circular corner markers',
            icon: '⭕',
            preview: 'circles'
        }
    ];

    const innerEyeStyles = [
        { 
            id: 'squares', 
            name: 'Square', 
            description: 'Classic square inner markers',
            icon: '⬜',
            preview: 'squares'
        },
        { 
            id: 'dots', 
            name: 'Circle', 
            description: 'Circular inner markers',
            icon: '⭕',
            preview: 'circles'
        },
        { 
            id: 'fluid', 
            name: 'Fluid', 
            description: 'Organic fluid inner markers',
            icon: '💧',
            preview: 'fluid'
        },
        { 
            id: 'hexagon', 
            name: 'Hexagon', 
            description: 'Hexagonal inner markers',
            icon: '⬡',
            preview: 'hexagons'
        },
        { 
            id: 'star', 
            name: 'Star', 
            description: 'Star-shaped inner markers',
            icon: '⭐',
            preview: 'stars'
        },
        { 
            id: 'diamond', 
            name: 'Diamond', 
            description: 'Diamond inner markers',
            icon: '💎',
            preview: 'diamonds'
        },
        { 
            id: 'heart', 
            name: 'Heart', 
            description: 'Heart-shaped inner markers',
            icon: '❤️',
            preview: 'hearts'
        }
    ];

    // 渲染点样式预览
    const renderDotPreview = (style: string) => {
        const baseClass = "w-2 h-2 bg-gray-800";
        
        switch (style) {
            case 'squares':
                return <div className={`${baseClass} rounded-sm`} />;
            case 'circles':
                return <div className={`${baseClass} rounded-full`} />;
            case 'fluid':
                return (
                    <div className="relative">
                        {/* 基础流体形状 */}
                        <div className={`${baseClass} rounded-full opacity-90`} style={{ transform: 'scale(0.9)' }} />
                        {/* 添加连接效果指示 */}
                        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                    </div>
                );
            case 'hexagons':
                return (
                    <svg width="8" height="8" viewBox="0 0 8 8" className="fill-gray-800">
                        <polygon points="4,0 7,2 7,6 4,8 1,6 1,2" />
                    </svg>
                );
            case 'stars':
                return (
                    <svg width="8" height="8" viewBox="0 0 8 8" className="fill-gray-800">
                        <polygon points="4,0 5,3 8,4 5,5 4,8 3,5 0,4 3,3" />
                    </svg>
                );
            case 'diamonds':
                return (
                    <svg width="8" height="8" viewBox="0 0 8 8" className="fill-gray-800">
                        <polygon points="4,0 8,4 4,8 0,4" />
                    </svg>
                );
            case 'hearts':
                return (
                    <svg width="8" height="8" viewBox="0 0 8 8" className="fill-gray-800">
                        <path d="M4,7 C4,7 1,5 1,3 C1,1.5 2,1 3,1 C3.5,1 4,1.5 4,2 C4,1.5 4.5,1 5,1 C6,1 7,1.5 7,3 C7,5 4,7 4,7 Z" />
                    </svg>
                );
            case 'rounded':
                return <div className={`${baseClass} rounded-md`} />;
            default:
                return <div className={`${baseClass} rounded-sm`} />;
        }
    };

    // 渲染定位点预览
    const renderEyePreview = (style: string, isOuter: boolean = false) => {
        const size = isOuter ? 16 : 12;
        const baseClass = `bg-gray-800`;
        
        switch (style) {
            case 'squares':
                return <div className={`${baseClass} rounded-sm`} style={{ width: size, height: size }} />;
            case 'circles':
                return <div className={`${baseClass} rounded-full`} style={{ width: size, height: size }} />;
            case 'fluid':
                return (
                    <div className="relative">
                        {/* 基础流体形状 */}
                        <div className={`${baseClass} rounded-full opacity-90`} style={{ transform: 'scale(0.9)' }} />
                        {/* 添加连接效果指示 */}
                        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-gray-800 rounded-full opacity-60" />
                    </div>
                );
            case 'hexagons':
                return (
                    <svg width={size} height={size} viewBox="0 0 16 16" className="fill-gray-800">
                        <polygon points="8,0 14,4 14,12 8,16 2,12 2,4" />
                    </svg>
                );
            case 'stars':
                return (
                    <svg width={size} height={size} viewBox="0 0 16 16" className="fill-gray-800">
                        <polygon points="8,0 10,6 16,8 10,10 8,16 6,10 0,8 6,6" />
                    </svg>
                );
            case 'diamonds':
                return (
                    <svg width={size} height={size} viewBox="0 0 16 16" className="fill-gray-800">
                        <polygon points="8,0 16,8 8,16 0,8" />
                    </svg>
                );
            case 'hearts':
                return (
                    <svg width={size} height={size} viewBox="0 0 16 16" className="fill-gray-800">
                        <path d="M8,14 C8,14 2,10 2,6 C2,3 4,2 6,2 C7,2 8,3 8,4 C8,3 9,2 10,2 C12,2 14,3 14,6 C14,10 8,14 8,14 Z" />
                    </svg>
                );
            case 'rounded':
                return <div className={`${baseClass} rounded-md`} style={{ width: size, height: size }} />;
            default:
                return <div className={`${baseClass} rounded-sm`} style={{ width: size, height: size }} />;
        }
    };

    // 处理普通点样式选择 - 立即生效
    const handleDotStyleSelect = (styleId: CustomOptions['dotStyle']) => {
        const newSelectedStyle = styleId;
        setSelectedStyle(newSelectedStyle);
        onConfirm(newSelectedStyle, selectedOuterStyle, selectedInnerStyle);
    };

    // 处理外部定位点样式选择 - 立即生效
    const handleOuterEyeStyleSelect = (styleId: CustomOptions['outerEyeStyle']) => {
        const newSelectedOuterStyle = styleId;
        setSelectedOuterStyle(newSelectedOuterStyle);
        onConfirm(selectedStyle, newSelectedOuterStyle, selectedInnerStyle);
    };

    // 处理内部定位点样式选择 - 立即生效
    const handleInnerEyeStyleSelect = (styleId: CustomOptions['innerEyeStyle']) => {
        const newSelectedInnerStyle = styleId;
        setSelectedInnerStyle(newSelectedInnerStyle);
        onConfirm(selectedStyle, selectedOuterStyle, newSelectedInnerStyle);
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

                {/* Tip */}
                <div className="absolute top-4 right-12 bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm border border-blue-200">
                    💡 Click any style for instant preview
                </div>

                <h2 className="text-xl font-semibold mb-6 pr-8">🎨 QR Code Style Settings</h2>

                {/* Regular dots style */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Regular Dots Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {dotStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`border-2 p-4 rounded-lg cursor-pointer transition-all duration-200 min-h-[160px] ${
                                    selectedStyle === style.id 
                                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                }`}
                                onClick={() => handleDotStyleSelect(style.id as CustomOptions['dotStyle'])}
                            >
                                {/* 预览区域 */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center relative">
                                        {/* 模拟二维码网格 */}
                                        <div className="grid grid-cols-6 gap-1 p-2">
                                            {Array.from({ length: 36 }).map((_, index) => {
                                                // 创建更真实的二维码图案
                                                const isCorner = (
                                                    (index < 7 || index > 29) && (index % 6 < 2 || index % 6 > 3) ||
                                                    (index >= 6 && index <= 11) || 
                                                    (index >= 24 && index <= 29)
                                                );
                                                const shouldFill = isCorner || Math.random() > 0.4;
                                                
                                                return (
                                                    <div key={index} className="flex items-center justify-center">
                                                        {shouldFill && renderDotPreview(style.preview)}
                                                    </div>
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

                {/* Outer positioning point style */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Outer Position Marker Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {outerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`border-2 p-4 rounded-lg cursor-pointer transition-all duration-200 min-h-[160px] ${
                                    selectedOuterStyle === style.id 
                                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                }`}
                                onClick={() => handleOuterEyeStyleSelect(style.id as CustomOptions['outerEyeStyle'])}
                            >
                                {/* 预览区域 */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center relative">
                                        {/* 模拟二维码的四个角 */}
                                        <div className="grid grid-cols-3 gap-1 p-2 w-full h-full">
                                            {/* 左上角 */}
                                            <div className="col-span-2 row-span-2 flex items-center justify-center">
                                                {renderEyePreview(style.preview, true)}
                                            </div>
                                            {/* 右上角 */}
                                            <div className="col-span-1 row-span-2 flex items-center justify-center">
                                                {renderEyePreview(style.preview, true)}
                                            </div>
                                            {/* 左下角 */}
                                            <div className="col-span-2 row-span-1 flex items-center justify-center">
                                                {renderEyePreview(style.preview, true)}
                                            </div>
                                            {/* 右下角 */}
                                            <div className="col-span-1 row-span-1 flex items-center justify-center">
                                                {renderEyePreview(style.preview, true)}
                                            </div>
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

                {/* Inner positioning point style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Inner Position Marker Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {innerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`border-2 p-4 rounded-lg cursor-pointer transition-all duration-200 min-h-[160px] ${
                                    selectedInnerStyle === style.id 
                                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                }`}
                                onClick={() => handleInnerEyeStyleSelect(style.id as CustomOptions['innerEyeStyle'])}
                            >
                                {/* 预览区域 */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center relative">
                                        {/* 模拟二维码的中心定位点 */}
                                        <div className="grid grid-cols-3 gap-1 p-2 w-full h-full">
                                            {/* 中心区域 */}
                                            <div className="col-span-3 row-span-3 flex items-center justify-center">
                                                {renderEyePreview(style.preview, false)}
                                            </div>
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

                {/* 使用说明 */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 text-blue-500 mr-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-800 mb-1">QR Code Style Customization Guide</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• <strong>Regular Dots:</strong> The main data pattern of your QR code, choose from various geometric and decorative shapes</li>
                                <li>• <strong>Outer Position Markers:</strong> The three corner squares that help scanners locate and orient the QR code</li>
                                <li>• <strong>Inner Position Markers:</strong> The center pattern that provides additional positioning reference</li>
                                <li>• <strong>Style Combinations:</strong> Mix and match different styles for unique, personalized QR codes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DotStyleModal;