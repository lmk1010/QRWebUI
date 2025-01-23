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
        { id: 'squares', name: '方形', image: '/assets/dot_styles/square.png' },
        { id: 'dots', name: '圆形', image: '/assets/dot_styles/dots.png' },
        { id: 'fluid', name: '流体', image: '/assets/dot_styles/fluid.png' },
        { id: 'hexagon', name: '六边形', image: '/assets/dot_styles/hexagon.png' },
        { id: 'star', name: '星形', image: '/assets/dot_styles/star.png' },
        { id: 'diamond', name: '菱形', image: '/assets/dot_styles/diamond.png' },
        { id: 'heart', name: '心形', image: '/assets/dot_styles/heart.png' }
    ];

    const outerEyeStyles = [
        { id: 'squares', name: '方形', image: '/assets/dot_styles/square.png' },
        { id: 'rounded', name: '圆角方形', image: '/assets/dot_styles/rounded.png' },
        { id: 'circle', name: '圆形', image: '/assets/dot_styles/circle.png' },
        { id: 'three-rounded', name: '三角圆形', image: '/assets/dot_styles/three-rounded.png' },
        { id: 'two-rounded', name: '双角圆形', image: '/assets/dot_styles/two-rounded.png' },
        { id: 'one-rounded', name: '单角圆形', image: '/assets/dot_styles/one-rounded.png' }
    ];

    const innerEyeStyles = [
        { id: 'squares', name: '方形', image: '/assets/dot_styles/square.png' },
        { id: 'dots', name: '圆形', image: '/assets/dot_styles/dots.png' },
        { id: 'fluid', name: '流体', image: '/assets/dot_styles/fluid.png' },
        { id: 'hexagon', name: '六边形', image: '/assets/dot_styles/hexagon.png' },
        { id: 'star', name: '星形', image: '/assets/dot_styles/star.png' },
        { id: 'diamond', name: '菱形', image: '/assets/dot_styles/diamond.png' },
        { id: 'heart', name: '心形', image: '/assets/dot_styles/heart.png' },
        { id: 'cloud', name: '云形', image: '/assets/dot_styles/cloud.png' },
        { id: 'tag', name: '标签', image: '/assets/dot_styles/tag.png' },
        { id: 'crown', name: '皇冠', image: '/assets/dot_styles/crown.png' },
        { id: 'pentagon', name: '五边形', image: '/assets/dot_styles/pentagon.png' },
        { id: 'triangle', name: '三角形', image: '/assets/dot_styles/triangle.png' },
        { id: 'leaf', name: '叶形', image: '/assets/dot_styles/leaf.png' },
        { id: 'circle', name: '圆环', image: '/assets/dot_styles/circle.png' },
        { id: 'cross', name: '十字', image: '/assets/dot_styles/cross.png' },
        { id: 'shield', name: '盾牌', image: '/assets/dot_styles/shield.png' }
    ];

    const handleConfirm = () => {
        onConfirm(selectedStyle, selectedOuterStyle, selectedInnerStyle);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
                <h2 className="text-xl font-semibold mb-4">二维码样式设置</h2>

                {/* 普通点样式 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">普通点样式</h3>
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

                {/* 外部定位点样式 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">外部定位点样式</h3>
                    <div className="grid grid-cols-6 gap-2">
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

                {/* 内部定位点样式 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">内部定位点样式</h3>
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
                        取消
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        确认
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DotStyleModal;