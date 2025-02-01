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

    // 定义联系人信息状态
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        mobile: '',
        email: '',
        website: '',
        company: '',
        jobTitle: '',
        fax: '',
        address: '',
        city: '',
        postCode: '',
        country: '',
    });

    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
    };

    const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleGenerate = () => {
        if (!selectedMainType) {
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
        } else if (selectedMainType === 'file') {
            // 处理PDF文件内容
            if (customText && customText.startsWith('data:application/pdf')) {
                value = customText; // 直接使用Base64编码的PDF内容
            } else {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                return;
            }
        } else if (selectedMainType === 'contact') {
            // 获取联系人的字段值
    
            // 生成 contact 类型的二维码值
            const formatVCardValue = (value: string) => {
                return value ? value.replace(/[\n\r]/g, '').trim() : '';
            };

            const formattedName = `${formatVCardValue(contactInfo.firstName)} ${formatVCardValue(contactInfo.lastName)}`.trim();
            const formattedAddress = [contactInfo.address, contactInfo.city, contactInfo.country, contactInfo.postCode]
                .filter(Boolean)
                .join(', ');

            const vCardLines = [
                'BEGIN:VCARD',
                'VERSION:3.0',
                formattedName && `FN:${formattedName}`,
                contactInfo.phone && `TEL;TYPE=WORK:${formatVCardValue(contactInfo.phone)}`,
                contactInfo.mobile && `TEL;TYPE=CELL:${formatVCardValue(contactInfo.mobile)}`,
                contactInfo.email && `EMAIL:${formatVCardValue(contactInfo.email)}`,
                contactInfo.website && `URL:${formatVCardValue(contactInfo.website)}`,
                contactInfo.company && `ORG:${formatVCardValue(contactInfo.company)}`,
                contactInfo.jobTitle && `TITLE:${formatVCardValue(contactInfo.jobTitle)}`,
                contactInfo.fax && `TEL;TYPE=FAX:${formatVCardValue(contactInfo.fax)}`,
                formattedAddress && `ADR:;;${formattedAddress}`,
                'END:VCARD'
            ].filter(Boolean).join('\n');

            value = vCardLines;
    
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
                    {selectedMainType === 'contact' ? (
                        // Contact input form
                        <div className="space-y-4">
                            {/* Name Fields - Side by side */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter First Name"
                                        value={contactInfo.firstName}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Last Name"
                                        value={contactInfo.lastName}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Contact Fields - 2 columns */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Phone Number"
                                        value={contactInfo.phone}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Mobile"
                                        value={contactInfo.mobile}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Online Contact - 2 columns */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Email"
                                        value={contactInfo.email}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Website (URL)</label>
                                    <input
                                        type="text"
                                        name="website"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Website"
                                        value={contactInfo.website}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Work Information - 2 columns */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Company"
                                        value={contactInfo.company}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Job Title"
                                        value={contactInfo.jobTitle}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Address Information */}
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Address"
                                    value={contactInfo.address}
                                    onChange={(e) => handleContactInputChange(e)}
                                />
                            </div>

                            {/* Location Details - 3 columns */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-700">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter City"
                                        value={contactInfo.city}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Post Code</label>
                                    <input
                                        type="text"
                                        name="postCode"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Post Code"
                                        value={contactInfo.postCode}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Country"
                                        value={contactInfo.country}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Optional Fields */}
                            <div>
                                <label className="block text-gray-700">Fax</label>
                                <input
                                    type="text"
                                    name="fax"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Fax"
                                    value={contactInfo.fax}
                                    onChange={(e) => handleContactInputChange(e)}
                                />
                            </div>
                        </div>
                    ) : (
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none text-base"
                            placeholder={selectedMainType === 'url' ? "Enter URL..." : "Enter content..."}
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
