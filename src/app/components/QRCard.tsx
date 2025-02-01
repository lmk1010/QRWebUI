import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FaFileAlt, FaLink, FaAddressBook, FaPalette, FaClone, FaRulerCombined, FaFile, FaAppStore, FaLayerGroup, FaVideo } from 'react-icons/fa';

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
const [showUrlAlert, setShowUrlAlert] = useState(false);
    const [isDotStyleModalOpen, setIsDotStyleModalOpen] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const [logoFile, setLogoFile] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
    };

    const handleGenerate = () => {
        if (!selectedMainType || !customText.trim()) {
            setShowAlert(true); // 显示文本输入错误提示
            setTimeout(() => setShowAlert(false), 3000); // 提示3秒后消失
            return;
        }
    
        let value = '';
        if (selectedMainType === 'text') {
            value = customText;  // 直接传递文本内容
        } else if (selectedMainType === 'url') {
            let url = customText.trim();
    
            // URL校验：检查是否以http://、https://或www.开头
            const urlPattern = /^(https?:\/\/|www\.)/;
            if (!urlPattern.test(url)) {
                setShowUrlAlert(true); // 显示URL格式错误提示
                setTimeout(() => setShowUrlAlert(false), 3000); // 提示3秒后消失
                return;
            }
    
            // 自动补充http://或https://
            if (!/^https?:\/\//.test(url)) {
                url = `http://${url}`;  // 默认补充http://
            }
    
            value = url;  // 只传递纯 URL，避免带有标签
        }
    
        // 将生成的值传递给父组件
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

            {/* Alert for URL Input */}
{showUrlAlert && (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed left-0 right-0 top-4 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
    >
        <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105">
        The URL format is incorrect. Please enter a valid URL format, such as starting with http:// or https://.
        </div>
    </motion.div>
)}

            {/* Category selection */}
            <div className="w-full">
                <div className="flex justify-between border-b border-gray-200 mb-4">
                    {mainCategories.map((cat) => (
                        // 在FeatureCard组件的渲染部分添加图标
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            isActive={selectedMainType === cat.type}
                            onClick={() => handleSelectMainCategory(cat.type)}
                            icon={cat.type === 'text' ? <FaFileAlt className="mr-2" /> 
                                : cat.type === 'url' ? <FaLink className="mr-2" /> 
                                : cat.type === 'contact' ? <FaAddressBook className="mr-2" />
                                : cat.type === 'file' ? <FaFile className="mr-2" />
                                : cat.type === 'app' ? <FaAppStore className="mr-2" />
                                : cat.type === 'batch' ? <FaLayerGroup className="mr-2" />
                                : cat.type === 'video' ? <FaVideo className="mr-2" />
                                : null}
                        />
                    ))}
                </div>
            </div>

            {/* Input form */}
            {selectedMainType && (
                <div className="w-full mt-4">
                    {selectedMainType === 'file' ? (
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setIsDragging(true);
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                                setIsDragging(false);
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                setIsDragging(false);
                                const file = e.dataTransfer.files[0];
                                if (file) {
                                    setCustomText(file.name);
                                }
                            }}
                            onClick={() => document.getElementById('fileInput')?.click()}
                        >
                            <div className="flex flex-col items-center">
                                <FaFile className="w-12 h-12 text-gray-400 mb-2" />
                                <p className="text-gray-600">点击或拖拽上传文件</p>
                                <p className="text-sm text-gray-500 mt-1">支持所有文件格式</p>
                                {customText && (
                                    <p className="mt-4 text-blue-500">{customText}</p>
                                )}
                            </div>
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setCustomText(file.name);
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none text-base"
                            placeholder={selectedMainType === 'url' ? "请输入URL地址..." : "请输入要生成二维码的内容..."}
                            value={customText}
                            onChange={(e) => setCustomText(e.target.value)}
                        />
                    )}
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
                                <div className="flex flex-col items-center">
                                    <FaRulerCombined className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Dot Style</div>
                                    <div className="text-xs text-gray-400 mt-1">Square/Circle</div>
                                </div>
                            </button>
                            <button 
                                onClick={() => {
                                    setIsLogoModalOpen(true);
                                }}
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaFile className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Logo</div>
                                    <div className="text-xs text-gray-400 mt-1">Upload/Edit</div>
                                </div>
                            </button>
                            <button 
                                onClick={() => {
                                    setIsColorModalOpen(true);
                                }}
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaPalette className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Color</div>
                                    <div className="text-xs text-gray-400 mt-1">Custom Colors</div>
                                </div>
                            </button>
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-3 gap-4">
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaPalette className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Style</div>
                                    <div className="text-xs text-gray-400 mt-1">Custom Style</div>
                                </div>
                            </button>
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaClone className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Template</div>
                                    <div className="text-xs text-gray-400 mt-1">Select Template</div>
                                </div>
                            </button>
                            <button 
                                className="p-3 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaRulerCombined className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Size</div>
                                    <div className="text-xs text-gray-400 mt-1">Adjust Size</div>
                                </div>
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
