import React, { useState } from 'react';
import CustomizationModal, { CustomOptions } from './CustomizationModal';

interface QRInputCardProps {
    // 如果需要知道用户选了哪个大类/子功能，可通过 props 传进来
    selectedMainType: string | null;
    selectedSubType: string | null;

    // 生成二维码的回调（原 onGenerateResult）
    onGenerateResult: (value: string) => void;

    // 定制化设置的回调（原 onCustomizationChange）
    onCustomizationChange: (opts: CustomOptions) => void;

    // 已有定制化选项
    customOptions: CustomOptions;
}

const QRInputCard: React.FC<QRInputCardProps> = ({
                                                     selectedMainType,
                                                     selectedSubType,
                                                     onGenerateResult,
                                                     onCustomizationChange,
                                                     customOptions
                                                 }) => {
    const [customText, setCustomText] = useState('');
    const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

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
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-md mx-auto">
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

            {/* 定制化弹窗 */}
            <CustomizationModal
                isOpen={isCustomizationOpen}
                defaultOptions={customOptions}
                onClose={() => setIsCustomizationOpen(false)}
                onConfirm={handleConfirmCustomization}
            />
        </div>
    );
};

export default QRInputCard;
