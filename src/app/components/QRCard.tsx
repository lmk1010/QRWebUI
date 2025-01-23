import React, { useState } from "react";
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import { mainCategories } from './Categories';
import { CustomOptions } from './CustomizationModal';
import LogoModal from './LogoModal';
import DotStyleModal from './DotStyleModal';
import ColorModal from './ColorModal';

interface QRCardProps {
    onGenerateResult: (value: string) => void;
    onLogoChange?: (logo: string | null) => void;
    onCustomOptionsChange?: (options: CustomOptions) => void;
}

const DEFAULT_MAIN_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
    onGenerateResult,
    onLogoChange,
    onCustomOptionsChange,
}) => {
    const [selectedMainType, setSelectedMainType] = useState<string | null>(DEFAULT_MAIN_TYPE);
    const [customText, setCustomText] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDotStyleModalOpen, setIsDotStyleModalOpen] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedConfig, setSelectedConfig] = useState<string>('');
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const [logoFile, setLogoFile] = useState<string | null>(null);
    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        content: customText,
        dotStyle: 'squares',
        fgColor: '#000000',
        bgColor: '#ffffff',
        logoFile: null,
        size: 200,
        margin: 4
    });

    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
    };

    const handleGenerate = () => {
        if (!selectedMainType || !customText.trim()) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // 3秒后自动隐藏提示
            return;
        }
        const value = `[${selectedMainType}] ${customText}`;
        onGenerateResult(value);
    };

    const handleLogoConfirm = (newLogo: string | null) => {
        setLogoFile(newLogo);
        setIsLogoModalOpen(false);
        // 更新父组件的logoFile状态
        onLogoChange?.(newLogo);
        // 更新customOptions中的logoFile，并触发CustomizationModal的onConfirm回调
        const updatedOptions = { ...customOptions, logoFile: newLogo };
        setCustomOptions(updatedOptions);
    };

    const handleDotStyleConfirm = (newDotStyle: 'dots' | 'squares' | 'fluid') => {
        setIsDotStyleModalOpen(false);
        // 更新customOptions中的dotStyle
        const updatedOptions = { ...customOptions, dotStyle: newDotStyle };
        setCustomOptions(updatedOptions);
        // 通知父组件customOptions已更新
        onCustomOptionsChange?.(updatedOptions);
    };

    const handleColorConfirm = (fgColor: string, bgColor: string) => {
        // 更新customOptions中的颜色
        const updatedOptions = { ...customOptions, fgColor, bgColor };
        setCustomOptions(updatedOptions);
        // 通知父组件customOptions已更新
        onCustomOptionsChange?.(updatedOptions);
    };

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full h-full"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* Alert Message */}
            {showAlert && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed left-0 right-0 top-4 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
                >
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105">
                        Please enter content first
                    </div>
                </motion.div>
            )}

            {/* Category selection */}
            <div className="w-full">
                <div className="flex justify-between border-b border-gray-200 mb-4">
                    {mainCategories.map((cat) => (
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            isActive={selectedMainType === cat.type}
                            onClick={() => handleSelectMainCategory(cat.type)}
                        />
                    ))}
                </div>
            </div>

            {/* Input form */}
            {selectedMainType && (
                <div className="w-full mt-4">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none text-base"
                        placeholder="Please enter the content to generate QR code..."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                    />
                    <button
                        className="mt-4 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        onClick={handleGenerate}
                    >
                        Generate QR Code
                    </button>

                    {/* Configuration Grid */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        {/* Row 1 */}
                        <button 
                            onClick={() => {
                                setSelectedConfig('点类型');
                                setIsDotStyleModalOpen(true);
                            }} 
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">点类型</div>
                            <div className="text-xs text-gray-400 mt-1">方形/圆形</div>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedConfig('风格');
                                setIsModalOpen(true);
                            }}
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">风格</div>
                            <div className="text-xs text-gray-400 mt-1">经典/现代</div>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedConfig('Logo');
                                setIsLogoModalOpen(true);
                            }}
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">Logo</div>
                            <div className="text-xs text-gray-400 mt-1">上传/编辑</div>
                        </button>
                        {/* Row 2 */}
                        <button 
                            onClick={() => {
                                setSelectedConfig('颜色');
                                setIsColorModalOpen(true);
                            }}
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">颜色</div>
                            <div className="text-xs text-gray-400 mt-1">自定义配色</div>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedConfig('结构');
                                setIsModalOpen(true);
                            }}
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">结构</div>
                            <div className="text-xs text-gray-400 mt-1">布局设置</div>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedConfig('样式');
                                setIsModalOpen(true);
                            }}
                            className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-sm font-medium text-gray-600">样式</div>
                            <div className="text-xs text-gray-400 mt-1">外观定制</div>
                        </button>
                    </div>
                </div>
            )}

            {/* Color Modal */}
            <ColorModal
                isOpen={isColorModalOpen}
                onClose={() => setIsColorModalOpen(false)}
                onConfirm={handleColorConfirm}
                currentFgColor={customOptions.fgColor}
                currentBgColor={customOptions.bgColor}
            />
            {/* DotStyle Modal */}
            <DotStyleModal
                isOpen={isDotStyleModalOpen}
                onClose={() => setIsDotStyleModalOpen(false)}
                onConfirm={handleDotStyleConfirm}
                currentDotStyle={customOptions.dotStyle}
            />
            {/* Logo Modal */}
            <LogoModal
                isOpen={isLogoModalOpen}
                onClose={() => setIsLogoModalOpen(false)}
                onConfirm={handleLogoConfirm}
                currentLogo={logoFile}
            />
        </motion.div>
    );
};

export default QRCard;
