import React, { useState } from 'react';

interface ColorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (fgColor: string, bgColor: string) => void;
    currentFgColor?: string;
    currentBgColor?: string;
}

const colors = [
    '#000000', '#1F2937', '#374151', '#4B5563', '#6B7280', '#9CA3AF',
    '#D1D5DB', '#E5E7EB', '#F3F4F6', '#F9FAFB', '#FFFFFF',
    '#DC2626', '#EA580C', '#D97706', '#CA8A04', '#65A30D', '#16A34A',
    '#059669', '#0D9488', '#0891B2', '#0284C7', '#2563EB', '#4F46E5',
    '#7C3AED', '#9333EA', '#C026D3', '#DB2777', '#E11D48'
];

const colorGroups = [
    { title: '灰度', colors: colors.slice(0, 11) },
    { title: '彩色', colors: colors.slice(11) }
];

const ColorModal: React.FC<ColorModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentFgColor = '#000000',
    currentBgColor = '#ffffff'
}) => {
    const [selectedFgColor, setSelectedFgColor] = useState<string>(currentFgColor);
    const [selectedBgColor, setSelectedBgColor] = useState<string>(currentBgColor);

    const handleFgColorSelect = (color: string) => {
        setSelectedFgColor(color);
        onConfirm(color, selectedBgColor);
    };

    const handleBgColorSelect = (color: string) => {
        setSelectedBgColor(color);
        onConfirm(selectedFgColor, color);
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="关闭"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-xl font-semibold mb-4">选择颜色</h2>

                {/* 前景色选择 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">二维码颜色</h3>
                    {colorGroups.map((group) => (
                        <div key={group.title} className="mb-4">
                            <h4 className="text-sm font-medium text-gray-600 mb-2 pb-2 border-b border-gray-200">{group.title}</h4>
                            <div className="grid grid-cols-11 gap-3 p-2">
                                {group.colors.map((color) => (
                                    <button
                                        key={`fg-${color}`}
                                        className={`w-10 h-10 rounded-md border-2 transition-all ${selectedFgColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:ring-1 hover:ring-blue-300 hover:scale-110'}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleFgColorSelect(color)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 背景色选择 */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">背景颜色</h3>
                    {colorGroups.map((group) => (
                        <div key={group.title} className="mb-4">
                            <h4 className="text-sm font-medium text-gray-600 mb-2 pb-2 border-b border-gray-200">{group.title}</h4>
                            <div className="grid grid-cols-9 gap-3 p-2">
                                {group.colors.map((color) => (
                                    <button
                                        key={`bg-${color}`}
                                        className={`w-10 h-10 rounded-md border-2 transition-all ${selectedBgColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:ring-1 hover:ring-blue-300 hover:scale-110'}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleBgColorSelect(color)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ColorModal;