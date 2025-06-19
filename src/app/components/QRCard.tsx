import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FaFileAlt, FaLink, FaAddressBook, FaPalette, FaClone, FaRulerCombined, FaFile, FaEnvelope, FaWifi, FaSquare } from 'react-icons/fa';

import FeatureCard from './FeatureCard';
import { mainCategories } from './Categories';
import { CustomOptions } from './CustomizationModal';
import LogoModal from './LogoModal';
import DotStyleModal from './DotStyleModal';
import ColorModal from './ColorModal';
import SizeModal from './SizeModal';
import TemplateModal from './TemplateModal';
import FrameModal from './FrameModal';

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
    const [showEmailAlert, setShowEmailAlert] = useState(false);
    const [isDotStyleModalOpen, setIsDotStyleModalOpen] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
    const [isFrameModalOpen, setIsFrameModalOpen] = useState(false);
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

    // 定义Twitter信息状态
    const [twitterInfo, setTwitterInfo] = useState({
        profileSelected: true, // Link to your profile
        tweetSelected: false,  // Post a tweet
        username: '',
        tweetText: '',
    });

    // 定义Email信息状态
    const [emailInfo, setEmailInfo] = useState({
        email: '',
        subject: '',
        message: '',
    });

    // 定义WiFi信息状态
    const [wifiInfo, setWifiInfo] = useState({
        networkName: '',
        password: '',
        encryption: 'WPA',
        hidden: false,
    });

    // Add email address format validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

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

    const handleTwitterInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            
            // 实现单选逻辑
            if (name === 'profileSelected' && checked) {
                setTwitterInfo((prevState) => ({
                    ...prevState,
                    profileSelected: true,
                    tweetSelected: false, // 取消另一个选项
                }));
            } else if (name === 'tweetSelected' && checked) {
                setTwitterInfo((prevState) => ({
                    ...prevState,
                    profileSelected: false, // 取消另一个选项
                    tweetSelected: true,
                }));
            } else {
                // 如果取消勾选，保持当前状态
                setTwitterInfo((prevState) => ({
                    ...prevState,
                    [name]: checked,
                }));
            }
        } else {
            setTwitterInfo((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleWifiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setWifiInfo((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
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
        } else if (selectedMainType === 'app') {
            // 处理Twitter类型
            if (twitterInfo.profileSelected && !twitterInfo.username.trim()) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                return;
            }

            if (twitterInfo.profileSelected) {
                const username = twitterInfo.username.replace('@', ''); // 移除@符号
                value = `https://twitter.com/${username}`;
            } else if (twitterInfo.tweetSelected) {
                if (twitterInfo.tweetText.trim()) {
                    value = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterInfo.tweetText)}`;
                } else {
                    value = `https://twitter.com/intent/tweet`;
                }
            }
        } else if (selectedMainType === 'batch') {
            // 处理Email类型 - 优化的mailto: URI格式
            const emailAddress = emailInfo.email.trim();
            
            // Validate email address format
            if (!emailAddress) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                return;
            }
            
            if (!validateEmail(emailAddress)) {
                setShowEmailAlert(true); 
                setTimeout(() => setShowEmailAlert(false), 3000);
                return;
            }

            // 构建标准的mailto: URI
            let mailtoURI = `mailto:${emailAddress}`;
            const urlParams = [];
            
            // 添加主题参数
            if (emailInfo.subject.trim()) {
                urlParams.push(`subject=${encodeURIComponent(emailInfo.subject.trim())}`);
            }
            
            // 添加正文参数
            if (emailInfo.message.trim()) {
                urlParams.push(`body=${encodeURIComponent(emailInfo.message.trim())}`);
            }
            
            // 拼接参数
            if (urlParams.length > 0) {
                mailtoURI += `?${urlParams.join('&')}`;
            }
            
            // Debug output for generated mailto URI format
            console.log('Generated email QR code content (mailto URI):', mailtoURI);
            
            value = mailtoURI;
        } else if (selectedMainType === 'video') {
            // 处理WiFi类型
            const networkName = wifiInfo.networkName.trim();
            
            if (!networkName) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                return;
            }

            // 构建WiFi二维码格式: WIFI:T:<encryption>;S:<SSID>;P:<password>;H:<hidden>;;
            let wifiString = `WIFI:T:${wifiInfo.encryption};S:${networkName}`;
            
            // 添加密码（如果有）
            if (wifiInfo.password.trim()) {
                wifiString += `;P:${wifiInfo.password.trim()}`;
            } else {
                wifiString += `;P:`;
            }
            
            // 添加隐藏网络标识
            wifiString += `;H:${wifiInfo.hidden ? 'true' : 'false'};;`;
            
            // Debug output for generated WiFi QR code content
            console.log('Generated WiFi QR code content:', wifiString);
            
            value = wifiString;
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

    const handleSizeConfirm = (downloadSize: number) => {
        setIsSizeModalOpen(false);
        onCustomOptionsChange?.({ ...customOptions, downloadSize });
    };

    const handleTemplateSelect = (templateOptions: Partial<CustomOptions>) => {
        // 合并模版选项到当前的自定义选项中
        const updatedOptions = { ...customOptions, ...templateOptions };
        onCustomOptionsChange?.(updatedOptions);
        setIsTemplateModalOpen(false);
    };

    const handleFrameConfirm = (frameStyle: CustomOptions['frameStyle'], frameColor: string) => {
        setIsFrameModalOpen(false);
        onCustomOptionsChange?.({ ...customOptions, frameStyle, frameColor });
    };

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full h-full"
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

            {/* Alert for Email Format */}
            {showEmailAlert && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed left-0 right-0 top-4 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
                >
                    <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105">
                        Invalid email format. Please enter a valid email address, e.g.: example@gmail.com
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
                                            : cat.type === 'app' ? <span className="mr-2">𝕏</span>
                                                : cat.type === 'batch' ? <FaEnvelope className="mr-2" />
                                                    : cat.type === 'video' ? <FaWifi className="mr-2" />
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
                        <div className="space-y-3">
                            {/* Name Fields - Side by side */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-700 text-sm">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter First Name"
                                        value={contactInfo.firstName}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Last Name"
                                        value={contactInfo.lastName}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Contact Fields - 2 columns */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-700 text-sm">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Phone Number"
                                        value={contactInfo.phone}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Mobile"
                                        value={contactInfo.mobile}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Online Contact - 2 columns */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-700 text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Email"
                                        value={contactInfo.email}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Website (URL)</label>
                                    <input
                                        type="text"
                                        name="website"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Website"
                                        value={contactInfo.website}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Work Information - 2 columns */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-700 text-sm">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Company"
                                        value={contactInfo.company}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Job Title</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Job Title"
                                        value={contactInfo.jobTitle}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Address Information */}
                            <div>
                                <label className="block text-gray-700 text-sm">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Address"
                                    value={contactInfo.address}
                                    onChange={(e) => handleContactInputChange(e)}
                                />
                            </div>

                            {/* Location Details - 3 columns */}
                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-gray-700 text-sm">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter City"
                                        value={contactInfo.city}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Post Code</label>
                                    <input
                                        type="text"
                                        name="postCode"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Post Code"
                                        value={contactInfo.postCode}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm">Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter Country"
                                        value={contactInfo.country}
                                        onChange={(e) => handleContactInputChange(e)}
                                    />
                                </div>
                            </div>

                            {/* Optional Fields */}
                            <div>
                                <label className="block text-gray-700 text-sm">Fax</label>
                                <input
                                    type="text"
                                    name="fax"
                                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Fax"
                                    value={contactInfo.fax}
                                    onChange={(e) => handleContactInputChange(e)}
                                />
                            </div>
                        </div>
                    ) : selectedMainType === 'app' ? (
                        // Twitter input form
                        <div className="space-y-3">
                            {/* Choose an option - 横向布局 */}
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium text-sm">Choose an option</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {/* Link to your profile checkbox */}
                                    <div className="flex items-center p-2.5 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="profileSelected"
                                            id="profileSelected"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
                                            checked={twitterInfo.profileSelected}
                                            onChange={(e) => handleTwitterInputChange(e)}
                                        />
                                        <label htmlFor="profileSelected" className="text-gray-700 text-xs font-medium cursor-pointer flex-1">
                                            <div className="flex items-center">
                                                <span className="mr-1">🔗</span>
                                                Link to your profile
                                            </div>
                                        </label>
                                    </div>
                                    
                                    {/* Post a tweet checkbox */}
                                    <div className="flex items-center p-2.5 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="tweetSelected"
                                            id="tweetSelected"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
                                            checked={twitterInfo.tweetSelected}
                                            onChange={(e) => handleTwitterInputChange(e)}
                                        />
                                        <label htmlFor="tweetSelected" className="text-gray-700 text-xs font-medium cursor-pointer flex-1">
                                            <div className="flex items-center">
                                                <span className="mr-1">𝕏</span>
                                                Post a tweet
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Username input - only show when Link to your profile is selected */}
                            {twitterInfo.profileSelected && (
                                <div>
                                    <label className="block text-gray-700 mb-1 font-medium text-sm">Username</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="username"
                                            className="w-full p-2.5 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            placeholder="username"
                                            value={twitterInfo.username}
                                            onChange={(e) => handleTwitterInputChange(e)}
                                        />
                                        <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">@</span>
                                    </div>
                                </div>
                            )}
                            
                            {/* Tweet text input - only show when Post a tweet is selected */}
                            {twitterInfo.tweetSelected && (
                                <div>
                                    <label className="block text-gray-700 mb-1 font-medium text-sm">Tweet Text</label>
                                    <textarea
                                        name="tweetText"
                                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[60px] resize-none text-sm"
                                        placeholder="What's happening?"
                                        value={twitterInfo.tweetText}
                                        onChange={(e) => handleTwitterInputChange(e)}
                                    />
                                    <div className="text-xs text-gray-500 mt-1">
                                        {280 - twitterInfo.tweetText.length} characters remaining
                                    </div>
                                </div>
                            )}

                            {/* Twitter Tips Section */}
                            <div className="mt-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-100">
                                <div className="flex items-center mb-2">
                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-blue-600 text-xs">𝕏</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-800">Twitter QR Code Tips</h3>
                                </div>
                                
                                <div className="space-y-2">
                                    <div className="flex items-start space-x-2">
                                        <div className="w-4 h-4 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-cyan-600 text-xs">🔗</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Profile Link</h4>
                                            <p className="text-xs text-gray-600">Generate QR code that directly opens your Twitter profile. Perfect for business cards and networking.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-2">
                                        <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-purple-600 text-xs">✍️</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Pre-filled Tweet</h4>
                                            <p className="text-xs text-gray-600">Create QR code with pre-written tweet content. Great for event hashtags and campaigns.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-2">
                                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-600 text-xs">📱</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Mobile Optimized</h4>
                                            <p className="text-xs text-gray-600">QR codes automatically open Twitter app on mobile devices for seamless user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-2 p-2 bg-white/60 rounded-lg border border-blue-200">
                                    <div className="flex items-center text-xs text-blue-700">
                                        <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">Pro Tip:</span>
                                        <span className="ml-1">Choose the option that best fits your needs - profile sharing or tweet creation!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : selectedMainType === 'batch' ? (
                        // Email input form
                        <div className="space-y-2">
                            {/* Email Address */}
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium text-xs">Recipient Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                    placeholder="example@gmail.com"
                                    value={emailInfo.email}
                                    onChange={(e) => handleEmailInputChange(e)}
                                />
                            </div>
                            
                            {/* Subject */}
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium text-xs">Email Subject <span className="text-gray-400 text-xs">(Optional)</span></label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                    placeholder="Enter email subject, e.g.: Product Inquiry"
                                    value={emailInfo.subject}
                                    onChange={(e) => handleEmailInputChange(e)}
                                />
                            </div>
                            
                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium text-xs">Email Message <span className="text-gray-400 text-xs">(Optional)</span></label>
                                <textarea
                                    name="message"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[60px] resize-none text-xs"
                                    placeholder="Enter your message content, e.g.: Hello, I would like to know more about..."
                                    value={emailInfo.message}
                                    onChange={(e) => handleEmailInputChange(e)}
                                />
                            </div>

                            {/* Email Tips Section */}
                            <div className="mt-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2.5 border border-green-100">
                                <div className="flex items-center mb-1.5">
                                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1.5">
                                        <span className="text-green-600 text-xs">📧</span>
                                    </div>
                                    <h3 className="text-xs font-semibold text-gray-800">Email QR Code Guide</h3>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-xs">📬</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Auto-Fill Email</h4>
                                            <p className="text-xs text-gray-600 leading-tight">QR code automatically opens email client with pre-filled content</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-purple-600 text-xs">📱</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Cross-Platform Compatible</h4>
                                            <p className="text-xs text-gray-600 leading-tight">Works with Gmail, Outlook, Apple Mail, and more</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-orange-600 text-xs">⚡</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Quick Contact</h4>
                                            <p className="text-xs text-gray-600 leading-tight">Perfect for business cards and marketing campaigns</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-1.5 p-1.5 bg-white/60 rounded-lg border border-green-200">
                                    <div className="flex items-center text-xs text-green-700">
                                        <svg className="w-2.5 h-2.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">Pro Tip:</span>
                                        <span className="ml-1">Only email address is required!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : selectedMainType === 'video' ? (
                        // WiFi input form
                        <div className="space-y-2">
                            {/* Network Name */}
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="block text-gray-700 font-medium text-xs">Network Name <span className="text-red-500">*</span></label>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="hidden"
                                            id="hidden"
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1 mr-1"
                                            checked={wifiInfo.hidden}
                                            onChange={(e) => handleWifiInputChange(e)}
                                        />
                                        <label htmlFor="hidden" className="text-xs text-gray-600">Hidden</label>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="networkName"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                    placeholder="SSID"
                                    value={wifiInfo.networkName}
                                    onChange={(e) => handleWifiInputChange(e)}
                                />
                            </div>
                            
                            {/* Password */}
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium text-xs">Password <span className="text-gray-400 text-xs">(Optional)</span></label>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                    placeholder="Enter WiFi password"
                                    value={wifiInfo.password}
                                    onChange={(e) => handleWifiInputChange(e)}
                                />
                            </div>
                            
                            {/* Encryption */}
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium text-xs">Encryption</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="flex items-center p-2 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                                        <input
                                            type="radio"
                                            name="encryption"
                                            value="nopass"
                                            id="none"
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1 mr-1.5"
                                            checked={wifiInfo.encryption === 'nopass'}
                                            onChange={(e) => handleWifiInputChange(e)}
                                        />
                                        <label htmlFor="none" className="text-xs font-medium cursor-pointer text-gray-700">None</label>
                                    </div>
                                    
                                    <div className="flex items-center p-2 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                                        <input
                                            type="radio"
                                            name="encryption"
                                            value="WPA"
                                            id="wpa"
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1 mr-1.5"
                                            checked={wifiInfo.encryption === 'WPA'}
                                            onChange={(e) => handleWifiInputChange(e)}
                                        />
                                        <label htmlFor="wpa" className="text-xs font-medium cursor-pointer text-gray-700">WPA/WPA2</label>
                                    </div>
                                    
                                    <div className="flex items-center p-2 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                                        <input
                                            type="radio"
                                            name="encryption"
                                            value="WEP"
                                            id="wep"
                                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-1 mr-1.5"
                                            checked={wifiInfo.encryption === 'WEP'}
                                            onChange={(e) => handleWifiInputChange(e)}
                                        />
                                        <label htmlFor="wep" className="text-xs font-medium cursor-pointer text-gray-700">WEP</label>
                                    </div>
                                </div>
                            </div>

                            {/* WiFi Tips Section */}
                            <div className="mt-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-2.5 border border-purple-100">
                                <div className="flex items-center mb-1.5">
                                    <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center mr-1.5">
                                        <span className="text-purple-600 text-xs">📶</span>
                                    </div>
                                    <h3 className="text-xs font-semibold text-gray-800">WiFi QR Code Guide</h3>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-600 text-xs">📱</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Auto Connect</h4>
                                            <p className="text-xs text-gray-600 leading-tight">Scan to automatically connect to WiFi network</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-blue-600 text-xs">🔒</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Secure Sharing</h4>
                                            <p className="text-xs text-gray-600 leading-tight">Share WiFi credentials securely without revealing password</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-1.5">
                                        <div className="w-3 h-3 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-orange-600 text-xs">🌐</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 text-xs mb-0.5">Cross Platform</h4>
                                            <p className="text-xs text-gray-600 leading-tight">Works on Android and iOS devices</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-1.5 p-1.5 bg-white/60 rounded-lg border border-purple-200">
                                    <div className="flex items-center text-xs text-purple-700">
                                        <svg className="w-2.5 h-2.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">Pro Tip:</span>
                                        <span className="ml-1">Perfect for guest access and business networks!</span>
                                    </div>
                                </div>
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
                        className="mt-3 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        onClick={handleGenerate}
                    >
                        Generate QR Code
                    </button>

                    {/* Configuration Grid */}
                    <div className="mt-4 grid grid-rows-2 gap-3">
                        {/* Row 1 */}
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => {
                                    setIsDotStyleModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaRulerCombined className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Dot Style</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Square/Circle</div>
                                </div>
                            </button>
                            <button
                                onClick={() => {
                                    setIsLogoModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaFile className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Logo</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Upload/Edit</div>
                                </div>
                            </button>
                            <button
                                onClick={() => {
                                    setIsColorModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaPalette className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Color</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Custom Colors</div>
                                </div>
                            </button>
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => {
                                    setIsFrameModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaSquare className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Frame</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Frame Style</div>
                                </div>
                            </button>
                            <button
                                onClick={() => {
                                    setIsTemplateModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaClone className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Template</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Select Template</div>
                                </div>
                            </button>
                            <button
                                onClick={() => {
                                    setIsSizeModalOpen(true);
                                }}
                                className="p-2.5 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <FaRulerCombined className="text-gray-600 mb-1" />
                                    <div className="text-sm font-medium text-gray-600">Size</div>
                                    <div className="text-xs text-gray-400 mt-0.5">Adjust Size</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* 功能提示区域 - 仅在text和url类型下显示 */}
                    {(selectedMainType === 'text' || selectedMainType === 'url') && (
                        <div className="mt-8 mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
                            <div className="flex items-center mb-2">
                                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-800">Customization Features</h3>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                    <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaRulerCombined className="w-2 h-2 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 text-xs mb-0.5">Dot Style</h4>
                                        <p className="text-xs text-gray-600">Choose QR code data point shapes: squares, circles, and more styles.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-2">
                                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaFile className="w-2 h-2 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 text-xs mb-0.5">Logo Embedding</h4>
                                        <p className="text-xs text-gray-600">Add your brand logo to the center of QR code for better recognition.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-2">
                                    <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaPalette className="w-2 h-2 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 text-xs mb-0.5">Color Customization</h4>
                                        <p className="text-xs text-gray-600">Freely choose foreground and background colors to create professional QR codes.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-2 p-2 bg-white/60 rounded-lg border border-blue-200">
                                <div className="flex items-center text-xs text-blue-700">
                                    <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span className="font-medium">Tip:</span>
                                    <span className="ml-1">All custom settings will be reflected in the preview on the right in real time.</span>
                                </div>
                            </div>
                        </div>
                    )}
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
            {/* Size Modal */}
            <SizeModal
                isOpen={isSizeModalOpen}
                onClose={() => setIsSizeModalOpen(false)}
                onConfirm={handleSizeConfirm}
                currentSize={customOptions.downloadSize || customOptions.size}
            />
            {/* Template Modal */}
            <TemplateModal
                isOpen={isTemplateModalOpen}
                onClose={() => setIsTemplateModalOpen(false)}
                onTemplateSelect={handleTemplateSelect}
            />
            {/* Frame Modal */}
            <FrameModal
                isOpen={isFrameModalOpen}
                onClose={() => setIsFrameModalOpen(false)}
                onConfirm={handleFrameConfirm}
                currentFrameStyle={customOptions.frameStyle}
                currentFrameColor={customOptions.frameColor}
            />
        </motion.div>
    );
};

export default QRCard;
