import React, { useState } from 'react';
import { CustomOptions } from './CustomizationModal';

interface TemplateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onTemplateSelect: (template: Partial<CustomOptions>) => void;
}

// 定义风格化模版
const templates = [
    {
        id: 'twitter',
        name: 'Twitter风格',
        description: '蓝色主题，圆形点样式',
        preview: '/assets/templates/twitter-preview.png',
        options: {
            dotStyle: 'dots' as const,
            outerEyeStyle: 'circle' as const,
            innerEyeStyle: 'dots' as const,
            fgColor: '#1DA1F2',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'github',
        name: 'GitHub风格',
        description: '黑白经典，方形点样式',
        preview: '/assets/templates/github-preview.png',
        options: {
            dotStyle: 'squares' as const,
            outerEyeStyle: 'squares' as const,
            innerEyeStyle: 'squares' as const,
            fgColor: '#24292e',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'instagram',
        name: 'Instagram风格',
        description: '渐变色彩，圆润样式',  
        preview: '/assets/templates/instagram-preview.png',
        options: {
            dotStyle: 'dots' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'dots' as const,
            fgColor: '#E4405F',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'spotify',
        name: 'Spotify风格',
        description: '绿色主题，现代感设计',
        preview: '/assets/templates/spotify-preview.png',
        options: {
            dotStyle: 'dots' as const,
            outerEyeStyle: 'circle' as const,
            innerEyeStyle: 'dots' as const,
            fgColor: '#1DB954',
            bgColor: '#000000'
        }
    },
    {
        id: 'linkedin',
        name: 'LinkedIn风格',
        description: '商务蓝色，专业简洁',
        preview: '/assets/templates/linkedin-preview.png',
        options: {
            dotStyle: 'squares' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'squares' as const,
            fgColor: '#0077B5',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'youtube',
        name: 'YouTube风格',
        description: '红色主题，动感设计',
        preview: '/assets/templates/youtube-preview.png',
        options: {
            dotStyle: 'dots' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'dots' as const,
            fgColor: '#FF0000',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'dribbble',
        name: 'Dribbble风格',
        description: '粉色创意，圆形美学',
        preview: '/assets/templates/dribbble-preview.png',
        options: {
            dotStyle: 'dots' as const,
            outerEyeStyle: 'circle' as const,
            innerEyeStyle: 'dots' as const,
            fgColor: '#EA4C89',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'slack',
        name: 'Slack风格',
        description: '多彩组合，现代办公',
        preview: '/assets/templates/slack-preview.png',
        options: {
            dotStyle: 'squares' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'squares' as const,
            fgColor: '#4A154B',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'minimal-dark',
        name: '极简黑白',
        description: '经典黑白，永不过时',
        preview: '/assets/templates/minimal-dark-preview.png',
        options: {
            dotStyle: 'squares' as const,
            outerEyeStyle: 'squares' as const,
            innerEyeStyle: 'squares' as const,
            fgColor: '#000000',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'gradient-purple',
        name: '紫色渐变',
        description: '优雅紫色，星形点缀',
        preview: '/assets/templates/gradient-purple-preview.png',
        options: {
            dotStyle: 'star' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'star' as const,
            fgColor: '#8B5CF6',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'tech-hexagon',
        name: '科技六边形',
        description: '科技感满满，六边形设计',
        preview: '/assets/templates/tech-hexagon-preview.png',
        options: {
            dotStyle: 'hexagon' as const,
            outerEyeStyle: 'squares' as const,
            innerEyeStyle: 'hexagon' as const,
            fgColor: '#06B6D4',
            bgColor: '#FFFFFF'
        }
    },
    {
        id: 'valentine',
        name: '浪漫爱心',
        description: '粉色爱心，温馨浪漫',
        preview: '/assets/templates/valentine-preview.png',
        options: {
            dotStyle: 'heart' as const,
            outerEyeStyle: 'rounded' as const,
            innerEyeStyle: 'heart' as const,
            fgColor: '#EC4899',
            bgColor: '#FFFFFF'
        }
    }
];

const TemplateModal: React.FC<TemplateModalProps> = ({
    isOpen,
    onClose,
    onTemplateSelect
}) => {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

    const handleTemplateClick = (template: typeof templates[0]) => {
        setSelectedTemplate(template.id);
        onTemplateSelect(template.options);
        onClose();
    };

    // 生成预览色块
    const renderPreview = (template: typeof templates[0]) => {
        const getDotClassName = (dotStyle: string) => {
            switch (dotStyle) {
                case 'dots':
                    return 'rounded-full';
                case 'star':
                    return 'rotate-45 rounded-sm';
                case 'heart':
                    return 'rounded-full';
                case 'hexagon':
                    return 'rounded-sm';
                case 'diamond':
                    return 'rotate-45 rounded-sm';
                default:
                    return 'rounded-sm';
            }
        };

        return (
            <div className="w-full h-24 flex items-center justify-center rounded-lg border-2 relative overflow-hidden" 
                 style={{ backgroundColor: template.options.bgColor }}>
                {/* 模拟二维码的数据区域 */}
                <div className="grid grid-cols-7 gap-0.5">
                    {Array.from({ length: 49 }).map((_, index) => {
                        // 模拟定位标记的位置（左上、右上、左下角）
                        const row = Math.floor(index / 7);
                        const col = index % 7;
                        const isCorner = (row <= 2 && col <= 2) || (row <= 2 && col >= 4) || (row >= 4 && col <= 2);
                        
                        // 随机显示一些点，模拟真实二维码
                        const shouldShow = isCorner || Math.random() > 0.4;
                        
                        if (!shouldShow) {
                            return <div key={index} className="w-1 h-1" />;
                        }
                        
                        return (
                            <div
                                key={index}
                                className={`w-1 h-1 ${getDotClassName(template.options.dotStyle)} ${
                                    isCorner ? 'opacity-100' : 'opacity-80'
                                }`}
                                style={{ backgroundColor: template.options.fgColor }}
                            />
                        );
                    })}
                </div>
                
                {/* 品牌标识 */}
                <div className="absolute top-1 right-1 text-xs font-bold opacity-30"
                     style={{ color: template.options.fgColor }}>
                    QR
                </div>
            </div>
        );
    };

    // 点击外部关闭弹窗
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
                {/* 关闭按钮 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* 标题 */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 pr-8">选择二维码风格模版</h2>
                    <p className="text-gray-600">点击任意模版即可应用到您的二维码，包含颜色和样式设置</p>
                </div>

                {/* 模版网格 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 transform ${
                                selectedTemplate === template.id 
                                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105 ring-2 ring-blue-200' 
                                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-102'
                            }`}
                            onClick={() => handleTemplateClick(template)}
                        >
                            {/* 预览区域 */}
                            <div className="mb-3 relative">
                                {renderPreview(template)}
                                {/* 选中指示器 */}
                                {selectedTemplate === template.id && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* 模版信息 */}
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{template.name}</h3>
                                <p className="text-xs text-gray-600 mb-3 leading-relaxed">{template.description}</p>
                                
                                {/* 颜色指示器 */}
                                <div className="flex justify-center items-center space-x-3">
                                    <div className="flex items-center space-x-1">
                                        <div 
                                            className="w-3 h-3 rounded-full border border-gray-300 shadow-sm"
                                            style={{ backgroundColor: template.options.fgColor }}
                                            title="前景色"
                                        />
                                        <span className="text-xs text-gray-500">前景</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <div 
                                            className="w-3 h-3 rounded-full border border-gray-300 shadow-sm"
                                            style={{ backgroundColor: template.options.bgColor }}
                                            title="背景色"
                                        />
                                        <span className="text-xs text-gray-500">背景</span>
                                    </div>
                                </div>
                                
                                {/* 样式标签 */}
                                <div className="mt-2">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                        template.options.dotStyle === 'dots' ? 'bg-blue-100 text-blue-800' :
                                        template.options.dotStyle === 'squares' ? 'bg-gray-100 text-gray-800' :
                                        template.options.dotStyle === 'star' ? 'bg-yellow-100 text-yellow-800' :
                                        template.options.dotStyle === 'heart' ? 'bg-pink-100 text-pink-800' :
                                        template.options.dotStyle === 'hexagon' ? 'bg-green-100 text-green-800' :
                                        'bg-purple-100 text-purple-800'
                                    }`}>
                                        {template.options.dotStyle === 'dots' ? '圆形' :
                                         template.options.dotStyle === 'squares' ? '方形' :
                                         template.options.dotStyle === 'star' ? '星形' :
                                         template.options.dotStyle === 'heart' ? '心形' :
                                         template.options.dotStyle === 'hexagon' ? '六边形' :
                                         '菱形'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 底部提示 */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 text-blue-500 mr-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-blue-800 mb-1">温馨提示</h4>
                            <p className="text-sm text-blue-700">
                                • 选择模版后，您仍可以在自定义面板中进一步调整细节
                            </p>
                            <p className="text-sm text-blue-700">
                                • 每个模版都经过精心设计，确保二维码的可读性和美观性
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateModal; 