import React from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import { mainCategories, subCategories, SubCategory } from './Categories';

interface QRCategoryCardProps {
    onClose: () => void;
    selectedMainType: string | null;
    selectedSubType: string | null;
    onSelectMainCategory: (mainType: string) => void;
    onSelectSubCategory: (subType: string) => void;
}

const QRCategoryCard: React.FC<QRCategoryCardProps> = ({
                                                           onClose,
                                                           selectedMainType,
                                                           selectedSubType,
                                                           onSelectMainCategory,
                                                           onSelectSubCategory
                                                       }) => {
    // 根据当前大类列出子功能
    const currentSubCategories: SubCategory[] = selectedMainType
        ? subCategories[selectedMainType] || []
        : [];

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full"
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
            <div className="mt-8 w-full mb-6">
                <h2 className="text-xl font-bold mb-6 text-center">请选择二维码大类</h2>
                <div className="grid grid-cols-4 gap-4" style={{ gridAutoRows: '1fr' }}>
                    {mainCategories.map((cat) => (
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            description={cat.description}
                            isActive={selectedMainType === cat.type}
                            onClick={() => {
                                // 选择大类，重置子功能
                                onSelectMainCategory(cat.type);
                                onSelectSubCategory('');
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* 子功能选择 */}
            {selectedMainType && (
                <div className="w-full">
                    <h3 className="text-lg font-semibold text-center mb-6">请选择子功能</h3>
                    <div className="grid grid-cols-4 gap-4 justify-center">
                        {currentSubCategories.map((sub) => (
                            <FeatureCard
                                key={sub.type}
                                title={sub.title}
                                description={sub.description}
                                isActive={selectedSubType === sub.type}
                                onClick={() => onSelectSubCategory(sub.type)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default QRCategoryCard;
