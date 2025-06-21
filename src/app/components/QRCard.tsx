import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaFileAlt, FaLink, FaAddressBook, FaPalette, FaClone, FaRulerCombined, FaFile, FaEnvelope, FaWifi, FaSquare, FaLayerGroup, FaEdit } from 'react-icons/fa';

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
    onGenerateResult: (value: string, shouldScroll?: boolean) => void;
    onLogoChange?: (logo: string | null) => void;
    onCustomOptionsChange?: (options: CustomOptions) => void;
    customOptions: CustomOptions;
    templateType?: string | null;
}

const DEFAULT_MAIN_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
    onGenerateResult,
    onLogoChange,
    onCustomOptionsChange,
    customOptions,
    templateType,
}) => {
    // 映射URL参数template到实际的tab类型
    const mapTemplateToTabType = (template: string | null | undefined): string => {
        const templateMap: Record<string, string> = {
            'text': 'text',
            'url': 'url',
            'contact': 'contact',
            'file': 'file',
            'twitter': 'app',  // 将twitter映射到app类型
            'email': 'batch',  // 将email映射到batch类型
            'wifi': 'video',   // 将wifi映射到video类型
            'app': 'app'       // 保持向后兼容
        };
        
        return template ? (templateMap[template] || DEFAULT_MAIN_TYPE) : DEFAULT_MAIN_TYPE;
    };
    
    const [selectedMainType, setSelectedMainType] = useState<string | null>(mapTemplateToTabType(templateType));
    const [customText, setCustomText] = useState('qrcodehub');
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

    // 根据模板类型预设内容
    useEffect(() => {
        if (templateType) {
            // Set preset example content
            interface ContactInfo {
                firstName: string;
                lastName: string;
                phone: string;
                mobile: string;
                email: string;
                website: string;
                company: string;
                jobTitle: string;
                fax: string;
                address: string;
                city: string;
                postCode: string;
                country: string;
            }

            interface TwitterInfo {
                profileSelected: boolean;
                tweetSelected: boolean;
                username: string;
                tweetText: string;
            }

            interface EmailInfo {
                email: string;
                subject: string;
                message: string;
            }

            interface WifiInfo {
                networkName: string;
                password: string;
                encryption: string;
                hidden: boolean;
            }

            interface TemplateExample {
                customText?: string;
                contactInfo?: ContactInfo;
                twitterInfo?: TwitterInfo;
                emailInfo?: EmailInfo;
                wifiInfo?: WifiInfo;
            }

            const templateExamples: Record<string, TemplateExample> = {
                'text': {
                    customText: 'Welcome to our coffee shop! Scan this QR code for today\'s special offers.',
                },
                'url': {
                    customText: 'https://www.example.com',
                },
                'contact': {
                    contactInfo: {
                        firstName: 'John',
                        lastName: 'Smith',
                        phone: '+1 (555) 123-4567',
                        mobile: '+1 (555) 987-6543',
                        email: 'john.smith@example.com',
                        website: 'https://www.johnsmith.com',
                        company: 'Example Tech Company',
                        jobTitle: 'Product Manager',
                        fax: '+1 (555) 123-4568',
                        address: '123 Main Street, Suite 100',
                        city: 'New York',
                        postCode: '10001',
                        country: 'United States',
                    }
                },
                'app': {
                    twitterInfo: {
                        profileSelected: true,
                        tweetSelected: false,
                        username: 'example_user',
                        tweetText: 'Check out our amazing product! #innovation #technology #QRCode',
                    }
                },
                'batch': {
                    emailInfo: {
                        email: 'support@example.com',
                        subject: 'Customer Inquiry',
                        message: 'Hello, I would like to learn more about your services.',
                    }
                },
                'video': {
                    wifiInfo: {
                        networkName: 'Guest_WiFi',
                        password: 'welcome123',
                        encryption: 'WPA',
                        hidden: false,
                    }
                }
            };

            const template = templateExamples[templateType];
            if (template) {
                if (template.customText) {
                    setCustomText(template.customText);
                }
                if (template.contactInfo) {
                    setContactInfo(template.contactInfo);
                }
                if (template.twitterInfo) {
                    setTwitterInfo(template.twitterInfo);
                }
                if (template.emailInfo) {
                    setEmailInfo(template.emailInfo);
                }
                if (template.wifiInfo) {
                    setWifiInfo(template.wifiInfo);
                }
            }
            
            // 为Twitter模板设置默认logo和颜色
            if (templateType === 'app') {
                // 设置Twitter品牌颜色
                const twitterColors = {
                    fgColor: '#1DA1F2', // Twitter蓝色
                    bgColor: '#ffffff'
                };
                
                // 更新自定义选项
                if (onCustomOptionsChange) {
                    onCustomOptionsChange({
                        ...customOptions,
                        ...twitterColors
                    });
                }
                
                // 暂时不设置logo，因为Twitter logo文件不存在
                // 可以后续添加Twitter logo文件到 public/assets/logo_default/icons8-twitter-480.png
            }
        }
    }, [templateType, onCustomOptionsChange, onLogoChange, customOptions]);

    // 自动生成默认二维码
    useEffect(() => {
        // 只在组件首次加载且没有特定模板时生成默认二维码，不触发滚动
        if (!templateType && customText === 'qrcodehub' && selectedMainType === 'text') {
            onGenerateResult(customText, false); // 传递 false 表示不滚动
        }
    }, []); // 空依赖数组确保只在组件挂载时执行一次

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
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main Layout Container */}
            <div className="flex flex-col lg:flex-row gap-4 h-full">
                {/* Left Sidebar - Customization Panel */}
                <div className="w-full lg:w-64 flex-shrink-0">
                    {/* Advanced Customization Panel */}
                    <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/20 rounded-2xl p-4 shadow-2xl h-full flex flex-col">
                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4wNSI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IndoaXRlIi8+CjwvZz4KPHN2Zz4K')] opacity-20"></div>
                        
                        {/* Header */}
                        <div className="relative mb-4 flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <FaPalette className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">Customization</h3>
                                    <p className="text-xs text-gray-500">Personalize QR code</p>
                                </div>
                            </div>
                        </div>

                        {/* Vertical Layout for Customization Options - 填满剩余空间 */}
                        <div className="relative flex-1 flex flex-col justify-center space-y-3">
                            {/* Dot Style */}
                            <motion.button
                                onClick={() => setIsDotStyleModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaRulerCombined className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Dot Style</div>
                                        <div className="text-xs text-gray-500">Customize patterns</div>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Logo */}
                            <motion.button
                                onClick={() => setIsLogoModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaFile className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Logo</div>
                                        <div className="text-xs text-gray-500">Add brand logo</div>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Colors */}
                            <motion.button
                                onClick={() => setIsColorModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaPalette className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Colors</div>
                                        <div className="text-xs text-gray-500">Theme colors</div>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Frame */}
                            <motion.button
                                onClick={() => setIsFrameModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaSquare className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Frame</div>
                                        <div className="text-xs text-gray-500">Border styles</div>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Template */}
                            <motion.button
                                onClick={() => setIsTemplateModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaClone className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Template</div>
                                        <div className="text-xs text-gray-500">Quick presets</div>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Size */}
                            <motion.button
                                onClick={() => setIsSizeModalOpen(true)}
                                className="group relative overflow-hidden backdrop-blur-lg bg-white/25 hover:bg-white/35 border border-white/30 hover:border-white/50 rounded-lg p-3 transition-all duration-300 shadow-md hover:shadow-lg w-full"
                                whileHover={{ x: 2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="relative flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                                        <FaRulerCombined className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">Size</div>
                                        <div className="text-xs text-gray-500">Download size</div>
                                    </div>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Right Content Area - QR Type & Form */}
                <div className="flex-1">
                    <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/20 rounded-2xl p-4 shadow-2xl h-full">
                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4wNSI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IndoaXRlIi8+CjwvZz4KPHN2Zz4K')] opacity-20"></div>
                        
                        {/* QR Type Selection - Horizontal */}
                        <div className="relative mb-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <FaLayerGroup className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">QR Type</h3>
                                    <p className="text-xs text-gray-500">Choose content type</p>
                                </div>
                            </div>
                            
                            {/* Horizontal Tab container */}
                            <div className="relative grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-3">
                                {mainCategories.map((cat, index) => (
                                    <FeatureCard
                                        key={cat.type}
                                        title={cat.title}
                                        isActive={selectedMainType === cat.type}
                                        onClick={() => handleSelectMainCategory(cat.type)}
                                        icon={cat.type === 'text' ? <FaFileAlt />
                                            : cat.type === 'url' ? <FaLink />
                                                : cat.type === 'contact' ? <FaAddressBook />
                                                    : cat.type === 'file' ? <FaFile />
                                                        : cat.type === 'app' ? <span style={{ fontSize: '14px' }}>𝕏</span>
                                                            : cat.type === 'batch' ? <FaEnvelope />
                                                                : cat.type === 'video' ? <FaWifi />
                                                                    : null}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <FaEdit className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">Content</h3>
                                    <p className="text-xs text-gray-500">Enter your information</p>
                                </div>
                            </div>

                            {/* Input form */}
                            {selectedMainType && (
                                <div className="relative flex flex-col h-full">
                                    <div className="flex-1 pb-20">
                                        {selectedMainType === 'contact' ? (
                                            // Contact input form - simplified
                                            <div className="space-y-3">
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

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-gray-700 text-sm">Phone</label>
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                                            placeholder="Enter Phone"
                                                            value={contactInfo.phone}
                                                            onChange={(e) => handleContactInputChange(e)}
                                                        />
                                                    </div>
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
                                                </div>

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
                                            </div>
                                        ) : selectedMainType === 'app' ? (
                                            // Twitter input form - simplified
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="block text-gray-700 mb-2 font-medium text-sm">Choose an option</label>
                                                    <div className="grid grid-cols-2 gap-2">
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
                                                                Link to profile
                                                            </label>
                                                        </div>
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
                                                                Post a tweet
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
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
                                                    </div>
                                                )}
                                            </div>
                                        ) : selectedMainType === 'batch' ? (
                                            // Email form - simplified
                                            <div className="space-y-2">
                                                <div>
                                                    <label className="block text-gray-700 mb-1 font-medium text-xs">Email Address <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                                        placeholder="example@gmail.com"
                                                        value={emailInfo.email}
                                                        onChange={(e) => handleEmailInputChange(e)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 mb-1 font-medium text-xs">Subject</label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                                        placeholder="Email subject"
                                                        value={emailInfo.subject}
                                                        onChange={(e) => handleEmailInputChange(e)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 mb-1 font-medium text-xs">Message</label>
                                                    <textarea
                                                        name="message"
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[60px] resize-none text-xs"
                                                        placeholder="Your message..."
                                                        value={emailInfo.message}
                                                        onChange={(e) => handleEmailInputChange(e)}
                                                    />
                                                </div>
                                            </div>
                                        ) : selectedMainType === 'video' ? (
                                            // WiFi form - simplified
                                            <div className="space-y-2">
                                                <div>
                                                    <label className="block text-gray-700 font-medium text-xs">Network Name <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        name="networkName"
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                                        placeholder="WiFi Name"
                                                        value={wifiInfo.networkName}
                                                        onChange={(e) => handleWifiInputChange(e)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 mb-1 font-medium text-xs">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                                                        placeholder="WiFi password"
                                                        value={wifiInfo.password}
                                                        onChange={(e) => handleWifiInputChange(e)}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <textarea
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[200px] resize-none text-base"
                                                    placeholder={selectedMainType === 'url' ? "Enter URL..." : "Enter content..."}
                                                    value={customText}
                                                    onChange={(e) => setCustomText(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Generate Button - Fixed at bottom */}
                                    <div className="absolute bottom-0 left-4 right-4">
                                        <motion.button
                                            className="w-full relative overflow-hidden
                                                     backdrop-blur-xl bg-gradient-to-r from-blue-500/90 via-blue-600/90 to-indigo-600/90 
                                                     text-white px-6 py-4 rounded-xl font-semibold text-base
                                                     shadow-lg hover:shadow-xl border border-white/20
                                                     transition-all duration-300 ease-in-out
                                                     hover:from-blue-600/90 hover:via-blue-700/90 hover:to-indigo-700/90
                                                     active:scale-95"
                                            onClick={handleGenerate}
                                            whileHover={{ 
                                                y: -2,
                                                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {/* Glass effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-xl"></div>
                                            
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                                            </div>
                                            
                                            {/* Button content */}
                                            <div className="relative flex items-center justify-center space-x-2">
                                                <span>Generate QR Code</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                        </motion.button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
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
