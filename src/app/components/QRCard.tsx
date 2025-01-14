// QRCard.tsx
import React, {useState} from 'react';
import {motion} from 'framer-motion';

import FeatureCard from './FeatureCard';
import CustomizationModal, {CustomOptions} from './CustomizationModal';
import {mainCategories, subCategories, SubCategory} from './categories';

interface QRCardProps {
    onGenerateResult: (value: string) => void;
    onCustomizationChange: (opts: CustomOptions) => void;
    customOptions: CustomOptions;
}

// 假设在 categories.ts 中，
//   大类 "基础功能" 的 type 值是 "basic"
//   子功能 "文本" 的 type 值是 "text"
//   若实际不一致，请替换为你的真实值
const DEFAULT_MAIN_TYPE = 'basic';
const DEFAULT_SUB_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
                                           onGenerateResult,
                                           onCustomizationChange,
                                           customOptions
                                       }) => {
    // 进入后默认就是 选中“基础功能” + “文本”
    const [selectedMainType, setSelectedMainType] = useState<string | null>(DEFAULT_MAIN_TYPE);
    const [selectedSubType, setSelectedSubType] = useState<string | null>(DEFAULT_SUB_TYPE);
    const [customText, setCustomText] = useState('');
    const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

    // 选择大类
    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
        setSelectedSubType(null);
    };

    // 当前子功能列表
    const currentSubCategories: SubCategory[] = selectedMainType
        ? subCategories[selectedMainType] || []
        : [];

    // 点击生成二维码
    const handleGenerate = () => {
        if (!selectedMainType || !selectedSubType) return;
        const value = `[${selectedMainType}-${selectedSubType}] ${customText}`;
        onGenerateResult(value);
    };

    // 用户确认定制化设置
    const handleConfirmCustomization = (opts: CustomOptions) => {
        onCustomizationChange(opts);
    };

    return (
        <motion.div
            // 如果要与右侧等高，可在父级设 `items-stretch`
            // 或者让此卡片自己 h-full：
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full h-full"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            // 如果不需要动画可去掉以下 motion 属性
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            transition={{duration: 0.5}}
        >
            {/* 去掉关闭按钮 */}

            {/* 大类选择 */}
            <div className="mt-1 w-full mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold mt-4 mb-2">请选择二维码大类</h2>
                    <hr className="mx-auto w-1/4 border-b-2 border-blue-500" />
                </div>
                <div className="grid grid-cols-4 gap-4">
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
            <div className="mt-1 w-full mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold mt-4 mb-2">子功能选择</h2>
                    <hr className="mx-auto w-1/4 border-b-2 border-blue-500" />
                </div>
                <div className="grid grid-cols-4 gap-4">
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


            {/* 输入表单 */}
            {selectedSubType && (
                <div className="w-full max-w-md mb-6 mt-8">
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
