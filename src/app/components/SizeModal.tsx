import React, { useState } from 'react';

interface SizeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (size: number) => void;
    currentSize: number;
}

interface SizeOption {
    size: number;
    label: string;
    description: string;
    category: string;
}

const SizeModal: React.FC<SizeModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentSize
}) => {
    const [selectedSize, setSelectedSize] = useState(currentSize);

    const sizeOptions: SizeOption[] = [
        // Small size options
        { size: 128, label: '128x128', description: 'Suitable for icons and small applications', category: 'Small Size' },
        { size: 200, label: '200x200', description: 'Standard preview size', category: 'Small Size' },
        { size: 256, label: '256x256', description: 'Recommended for web display', category: 'Small Size' },
        
        // Medium size options
        { size: 400, label: '400x400', description: 'Recommended for business card printing', category: 'Medium Size' },
        { size: 512, label: '512x512', description: 'High-definition web use', category: 'Medium Size' },
        { size: 600, label: '600x600', description: 'Social media sharing', category: 'Medium Size' },
        
        // Large size options
        { size: 800, label: '800x800', description: 'Brochure printing', category: 'Large Size' },
        { size: 1000, label: '1000x1000', description: 'Poster printing', category: 'Large Size' },
        { size: 1200, label: '1200x1200', description: 'High-resolution printing', category: 'Large Size' },
        
        // Extra large size options
        { size: 1500, label: '1500x1500', description: 'Professional printing', category: 'Extra Large Size' },
        { size: 2000, label: '2000x2000', description: 'Banners and large displays', category: 'Extra Large Size' }
    ];

    const categories = ['Small Size', 'Medium Size', 'Large Size', 'Extra Large Size'];

    // 处理尺寸选择 - 立即生效
    const handleSizeSelect = (size: number) => {
        setSelectedSize(size);
        onConfirm(size);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Select Download Size</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                        ×
                    </button>
                </div>

                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-blue-800 text-sm">
                            <strong>Note:</strong> Clicking on a size option will immediately apply the setting. Size selection only affects the size of the downloaded image; the preview window remains unchanged.
                        </p>
                    </div>
                </div>

                {categories.map((category) => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-3 pb-2 border-b border-gray-200">
                            {category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {sizeOptions
                                .filter(option => option.category === category)
                                .map((option) => (
                                <div
                                    key={option.size}
                                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                                        selectedSize === option.size
                                            ? 'border-blue-500 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-blue-300'
                                    }`}
                                    onClick={() => handleSizeSelect(option.size)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-800">{option.label}</span>
                                        <div className={`w-4 h-4 rounded-full border-2 ${
                                            selectedSize === option.size 
                                                ? 'border-blue-500 bg-blue-500' 
                                                : 'border-gray-300'
                                        }`}>
                                            {selectedSize === option.size && (
                                                <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{option.description}</p>
                                    <div className="mt-2 text-xs text-gray-500">
                                        {option.size}px × {option.size}px
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* 提示信息 */}
                <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                        点击尺寸选项即可立即应用设置
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SizeModal; 