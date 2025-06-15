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
        { id: 'squares', name: 'Square', image: '/assets/dot_styles/square.png' },
        { id: 'dots', name: 'Circle', image: '/assets/dot_styles/dots.png' },
        { id: 'fluid', name: 'Fluid', image: '/assets/dot_styles/fluid.png' },
        { id: 'hexagon', name: 'Hexagon', image: '/assets/dot_styles/hexagon.png' },
        { id: 'star', name: 'Star', image: '/assets/dot_styles/star.png' },
        { id: 'diamond', name: 'Diamond', image: '/assets/dot_styles/diamond.png' },
        { id: 'heart', name: 'Heart', image: '/assets/dot_styles/heart.png' }
    ];

    const outerEyeStyles = [
        { id: 'squares', name: 'Square', image: '/assets/dot_styles/square.png' },
        { id: 'rounded', name: 'Rounded Square', image: '/assets/out_style/roundom.png' },
        { id: 'circle', name: 'Circle', image: '/assets/out_style/circle.png' }
    ];

    const innerEyeStyles = [
        { id: 'squares', name: 'Square', image: '/assets/dot_styles/square.png' },
        { id: 'dots', name: 'Circle', image: '/assets/dot_styles/dots.png' },
        { id: 'fluid', name: 'Fluid', image: '/assets/dot_styles/fluid.png' },
        { id: 'hexagon', name: 'Hexagon', image: '/assets/dot_styles/hexagon.png' },
        { id: 'star', name: 'Star', image: '/assets/dot_styles/star.png' },
        { id: 'diamond', name: 'Diamond', image: '/assets/dot_styles/diamond.png' },
        { id: 'heart', name: 'Heart', image: '/assets/dot_styles/heart.png' }
    ];

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
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
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

                <h2 className="text-xl font-semibold mb-4 pr-8">QR Code Style Settings</h2>

                {/* Regular dots style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Regular Dots Style</h3>
                    <div className="grid grid-cols-5 gap-3">
                        {dotStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-2 cursor-pointer transition-colors ${selectedStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => handleDotStyleSelect(style.id as CustomOptions['dotStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-8 h-8 object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600 text-center">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outer positioning point style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Outer Position Marker Style</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {outerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-2 cursor-pointer transition-colors ${selectedOuterStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => handleOuterEyeStyleSelect(style.id as CustomOptions['outerEyeStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-10 h-10 object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600 text-center">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inner positioning point style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Inner Position Marker Style</h3>
                    <div className="grid grid-cols-5 gap-3">
                        {innerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-2 cursor-pointer transition-colors ${selectedInnerStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => handleInnerEyeStyleSelect(style.id as CustomOptions['innerEyeStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-8 h-8 object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600 text-center">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DotStyleModal;