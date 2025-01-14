// src/components/QRCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import CustomizationModal, { CustomOptions } from './CustomizationModal';
import { mainCategories, subCategories, SubCategory } from './categories';

interface QRCardProps {
    onClose: () => void;
    onGenerateResult: (value: string) => void; // 必须是函数
    onCustomizationChange: (opts: CustomOptions) => void;
    customOptions: CustomOptions;
}

const QRCard: React.FC<QRCardProps> = ({
                                           onClose,
                                           onGenerateResult,
                                           onCustomizationChange,
                                           customOptions
                                       }) => {
    const [selectedMainType, setSelectedMainType] = useState<string | null>(null);
    const [selectedSubType, setSelectedSubType] = useState<string | null>(null);
    const [customText, setCustomText] = useState('');
    const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

    // 选择大类
    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
        setSelectedSubType(null);
    };

    // 根据当前大类，列出子功能
    const currentSubCategories: SubCategory[] = selectedMainType
        ? subCategories[selectedMainType] || []
        : [];

    // 点击生成二维码
    const handleGenerate = () => {
        if (!selectedMainType || !selectedSubType) return;
        const value = `[${selectedMainType}-${selectedSubType}] ${customText}`;
        // 将生成结果抛给父级
        onGenerateResult(value);
    };

    // 用户确认定制化设置
    const handleConfirmCustomization = (opts: CustomOptions) => {
        onCustomizationChange(opts);
    };

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* 关闭按钮 */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* 大类选择 */}
            <div className="mt-8 w-full">
                <h2 className="text-xl font-bold mb-4 text-center">请选择二维码大类</h2>
                <div className="mb-6 flex flex-row flex-wrap gap-4 justify-center">
                    {mainCategories.map((cat) => (
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            description={cat.description}
                            isActive={selectedMainType === cat.type}
                            onClick={() => handleSelectMainCategory(cat.type)}
                        />
                    ))}
                </div>
            </div>

            {/* 子功能选择 */}
            {selectedMainType && (
                <div className="w-full">
                    <h3 className="text-lg font-semibold text-center mb-4">请选择子功能</h3>
                    <div className="mb-6 flex flex-row flex-wrap gap-4 justify-center">
                        {currentSubCategories.map((sub) => (
                            <FeatureCard
                                key={sub.type}
                                title={sub.title}
                                description={sub.description}
                                isActive={selectedSubType === sub.type}
                                onClick={() => setSelectedSubType(sub.type)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* 输入表单 */}
            {selectedSubType && (
                <div className="w-full max-w-md mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        请输入内容
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        placeholder="如：链接、文本、文件地址、等等..."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                    />
                    <div className="flex space-x-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            onClick={handleGenerate}
                        >
                            生成二维码
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                            onClick={() => setIsCustomizationOpen(true)}
                        >
                            定制化设置
                        </button>
                    </div>
                </div>
            )}

            {/* 定制化弹窗 */}
            <CustomizationModal
                isOpen={isCustomizationOpen}
                defaultOptions={customOptions}
                onClose={() => setIsCustomizationOpen(false)}
                onConfirm={handleConfirmCustomization}
            />
        </motion.div>
    );
};

export default QRCard;
