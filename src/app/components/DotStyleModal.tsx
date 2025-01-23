import React, { useState } from 'react';
import { CustomOptions } from './CustomizationModal';

interface DotStyleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (dotStyle: CustomOptions['dotStyle']) => void;
    currentDotStyle?: CustomOptions['dotStyle'];
}

const DotStyleModal: React.FC<DotStyleModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentDotStyle = 'squares'
}) => {
    const [selectedStyle, setSelectedStyle] = useState<CustomOptions['dotStyle']>(currentDotStyle as CustomOptions['dotStyle']);

    const dotStyles = [
        { id: 'squares', name: '方形', image: '/assets/dot_styles/square.png' },
        { id: 'dots', name: '圆形', image: '/assets/dot_styles/dots.png' },
        { id: 'fluid', name: '流体', image: '/assets/dot_styles/fluid.png' },
        { id: 'hexagon', name: '六边形', image: '/assets/dot_styles/hexagon.png' },
        { id: 'star', name: '星形', image: '/assets/dot_styles/star.png' },
        { id: 'diamond', name: '菱形', image: '/assets/dot_styles/diamond.png' },
        { id: 'heart', name: '心形', image: '/assets/dot_styles/heart.png' }
    ];

    const handleConfirm = () => {
        onConfirm(selectedStyle);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">选择点类型样式</h2>

                {/* 样式网格 */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {dotStyles.map((style) => (
                        <div
                            key={style.id}
                            className={`aspect-square border rounded-lg p-2 cursor-pointer transition-colors ${selectedStyle === style.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                            onClick={() => setSelectedStyle(style.id as CustomOptions['dotStyle'])}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <img
                                    src={style.image}
                                    alt={style.name}
                                    className="w-full h-full object-contain mb-2"
                                />
                                <span className="text-sm text-gray-600">{style.name}</span>
                            </div>
                        </div>
                    ))}
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