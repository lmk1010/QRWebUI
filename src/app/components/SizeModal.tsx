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
        // 小尺寸选项
        { size: 128, label: '128x128', description: '适合图标和小型应用', category: '小尺寸' },
        { size: 200, label: '200x200', description: '标准预览尺寸', category: '小尺寸' },
        { size: 256, label: '256x256', description: '网页展示推荐', category: '小尺寸' },
        
        // 中等尺寸选项
        { size: 400, label: '400x400', description: '名片印刷推荐', category: '中等尺寸' },
        { size: 512, label: '512x512', description: '高清网页使用', category: '中等尺寸' },
        { size: 600, label: '600x600', description: '社交媒体分享', category: '中等尺寸' },
        
        // 大尺寸选项
        { size: 800, label: '800x800', description: '宣传册印刷', category: '大尺寸' },
        { size: 1000, label: '1000x1000', description: '海报印刷', category: '大尺寸' },
        { size: 1200, label: '1200x1200', description: '高分辨率印刷', category: '大尺寸' },
        
        // 超大尺寸选项
        { size: 1500, label: '1500x1500', description: '专业印刷', category: '超大尺寸' },
        { size: 2000, label: '2000x2000', description: '横幅和大型展示', category: '超大尺寸' }
    ];

    const categories = ['小尺寸', '中等尺寸', '大尺寸', '超大尺寸'];

    const handleConfirm = () => {
        onConfirm(selectedSize);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">选择下载尺寸</h2>
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
                            <strong>注意：</strong> 尺寸选择仅影响下载的图片大小，预览窗口将保持当前大小不变。
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
                                    onClick={() => setSelectedSize(option.size)}
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

                <div className="flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        取消
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        确认选择
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SizeModal; 