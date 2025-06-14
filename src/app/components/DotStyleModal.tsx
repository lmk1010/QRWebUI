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
        { id: 'heart', name: 'Heart', image: '/assets/dot_styles/heart.png' },
        { id: 'cloud', name: 'Cloud', image: '/assets/dot_styles/cloud.png' },
        { id: 'tag', name: 'Tag', image: '/assets/dot_styles/tag.png' },
        { id: 'crown', name: 'Crown', image: '/assets/dot_styles/crown.png' },
        { id: 'pentagon', name: 'Pentagon', image: '/assets/dot_styles/pentagon.png' },
        { id: 'triangle', name: 'Triangle', image: '/assets/dot_styles/triangle.png' },
        { id: 'leaf', name: 'Leaf', image: '/assets/dot_styles/leaf.png' },
        { id: 'circle', name: 'Ring', image: '/assets/dot_styles/circle.png' },
        { id: 'cross', name: 'Cross', image: '/assets/dot_styles/cross.png' },
        { id: 'shield', name: 'Shield', image: '/assets/dot_styles/shield.png' }
    ];

    const handleConfirm = () => {
        onConfirm(selectedStyle, selectedOuterStyle, selectedInnerStyle);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
                <h2 className="text-xl font-semibold mb-4">QR Code Style Settings</h2>

                {/* Regular dots style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Regular Dots Style</h3>
                    <div className="grid grid-cols-7 gap-2">
                        {dotStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-1 cursor-pointer transition-colors ${selectedStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => setSelectedStyle(style.id as CustomOptions['dotStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-full h-full object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outer positioning point style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Outer Position Marker Style</h3>
                    <div className="grid grid-cols-7 gap-2">
                        {outerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-1 cursor-pointer transition-colors ${selectedOuterStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => setSelectedOuterStyle(style.id as CustomOptions['outerEyeStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-full h-full object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inner positioning point style */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Inner Position Marker Style</h3>
                    <div className="grid grid-cols-8 gap-2">
                        {innerEyeStyles.map((style) => (
                            <div
                                key={style.id}
                                className={`aspect-square border rounded-lg p-1 cursor-pointer transition-colors ${selectedInnerStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                onClick={() => setSelectedInnerStyle(style.id as CustomOptions['innerEyeStyle'])}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-full h-full object-contain mb-1"
                                    />
                                    <span className="text-xs text-gray-600">{style.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DotStyleModal;