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
    customOptions: CustomOptions;
}

const DEFAULT_MAIN_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
    onGenerateResult,
    onLogoChange,
    onCustomOptionsChange,
    customOptions,
}) => {
    const [selectedMainType, setSelectedMainType] = useState<string | null>(DEFAULT_MAIN_TYPE);
    const [customText, setCustomText] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isDotStyleModalOpen, setIsDotStyleModalOpen] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const [logoFile, setLogoFile] = useState<string | null>(null);

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
        onLogoChange?.(newLogo);
        onCustomOptionsChange?.({ ...customOptions, logoFile: newLogo });
    };

    const handleDotStyleConfirm = (dotStyle: CustomOptions['dotStyle'], outerEyeStyle: CustomOptions['outerEyeStyle'], innerEyeStyle: CustomOptions['innerEyeStyle']) => {
        setIsDotStyleModalOpen(false);
        onCustomOptionsChange?.({ ...customOptions, dotStyle, outerEyeStyle, innerEyeStyle });
    };

    const handleColorConfirm = (fgColor: string, bgColor: string) => {
        onCustomOptionsChange?.({ ...customOptions, fgColor, bgColor });
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
                    <div className="mt-6 grid grid-rows-2 gap-4">
                        {/* Row 1 */}
                        <div className="grid grid-cols-3 gap-4">
                            <button 
                                onClick={() => {
                                    setIsDotStyleModalOpen(true);
                                }} 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">点类型</div>
                                <div className="text-xs text-gray-400 mt-1">方形/圆形</div>
                            </button>
                            <button 
                                onClick={() => {
                                    setIsLogoModalOpen(true);
                                }}
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">Logo</div>
                                <div className="text-xs text-gray-400 mt-1">上传/编辑</div>
                            </button>
                            <button 
                                onClick={() => {
                                    setIsColorModalOpen(true);
                                }}
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">颜色</div>
                                <div className="text-xs text-gray-400 mt-1">自定义配色</div>
                            </button>
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-3 gap-4">
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">样式</div>
                                <div className="text-xs text-gray-400 mt-1">自定义样式</div>
                            </button>
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">模版</div>
                                <div className="text-xs text-gray-400 mt-1">选择模版</div>
                            </button>
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="text-sm font-medium text-gray-600">尺寸</div>
                                <div className="text-xs text-gray-400 mt-1">调整大小</div>
                            </button>
                        </div>
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
                currentOuterEyeStyle={customOptions.outerEyeStyle}
                currentInnerEyeStyle={customOptions.innerEyeStyle}
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
