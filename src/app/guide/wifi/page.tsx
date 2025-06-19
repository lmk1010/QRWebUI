import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaWifi, FaArrowLeft, FaPlay, FaCheck, FaExclamationTriangle, FaLightbulb, FaDownload, FaNetworkWired } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for home, office, coffee shop and other WiFi sharing scenarios.',
    keywords: 'WiFi QR code, WiFi QR code creation, WiFi QR code tutorial, how to make WiFi QR code, WiFi QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/wifi",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-wifi-guide.png",
                width: 1200,
                height: 630,
                alt: "WiFi QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "WiFi QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create WiFi QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-wifi-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/wifi",
    },
};

export default function WiFiQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "如何制作WiFi QR码",
        "description": "详细的WiFi QR码制作教程，包含步骤说明和使用案例",
        "image": "https://qrcodehub.net/wifi-qr-guide-image.png",
        "totalTime": "PT5M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "CNY",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "电脑或移动设备"
            },
            {
                "@type": "HowToSupply", 
                "name": "网络连接"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub WiFi QR码生成器"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "选择WiFi类型",
                "text": "在QR码生成器中选择'WiFi'类型",
                "image": "https://qrcodehub.net/step1-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "填写WiFi信息",
                "text": "输入网络名称、密码、加密类型等信息",
                "image": "https://qrcodehub.net/step2-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "自定义样式",
                "text": "选择颜色、添加Logo等个性化设置",
                "image": "https://qrcodehub.net/step3-wifi.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "生成和下载",
                "text": "点击生成按钮创建QR码并下载",
                "image": "https://qrcodehub.net/step4-wifi.png"
            }
        ],
        "author": {
            "@type": "Organization",
            "name": "QRCodeHub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "QRCodeHub"
        }
    };

    const wifiFields = [
        {
            field: "网络名称 (SSID)",
            required: true,
            description: "WiFi网络的名称",
            example: "MyWiFi_Network"
        },
        {
            field: "密码",
            required: true,
            description: "WiFi网络的连接密码",
            example: "mypassword123"
        },
        {
            field: "加密类型",
            required: true,
            description: "WiFi网络的加密方式",
            example: "WPA/WPA2/WEP"
        },
        {
            field: "隐藏网络",
            required: false,
            description: "是否为隐藏的WiFi网络",
            example: "是/否"
        }
    ];

    const encryptionTypes = [
        {
            type: "WPA",
            description: "WiFi Protected Access，较新的加密标准",
            security: "高",
            compatibility: "现代设备"
        },
        {
            type: "WPA2",
            description: "WiFi Protected Access 2，当前最常用的加密标准",
            security: "很高",
            compatibility: "所有现代设备"
        },
        {
            type: "WPA3",
            description: "最新的WiFi安全标准",
            security: "最高",
            compatibility: "较新设备"
        },
        {
            type: "WEP",
            description: "Wired Equivalent Privacy，较老的加密标准",
            security: "低",
            compatibility: "所有设备"
        }
    ];

    const useCases = [
        {
            title: "家庭WiFi",
            description: "为家庭成员和访客提供便捷的WiFi连接方式",
            icon: "🏠",
            benefits: ["访客便利", "无需口述密码", "快速连接"]
        },
        {
            title: "办公网络",
            description: "为员工和客户提供办公WiFi连接",
            icon: "🏢",
            benefits: ["专业形象", "统一管理", "安全连接"]
        },
        {
            title: "咖啡厅",
            description: "为顾客提供WiFi服务，提升用户体验",
            icon: "☕",
            benefits: ["顾客便利", "品牌展示", "服务提升"]
        },
        {
            title: "酒店WiFi",
            description: "为客人提供房间WiFi连接信息",
            icon: "🏨",
            benefits: ["客房服务", "信息清晰", "减少咨询"]
        }
    ];

    const bestPractices = [
        {
            title: "使用强密码",
            description: "设置复杂且安全的WiFi密码，避免使用简单密码",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "选择合适加密",
            description: "使用WPA2或WPA3加密，确保网络安全",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "定期更新密码",
            description: "定期更换WiFi密码，保持网络安全",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "测试连接效果",
            description: "生成后测试扫描和连接功能，确保正常工作",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "WiFi QR码使用标准的WiFi配置格式，兼容iOS和Android设备",
        "密码中如果包含特殊字符，确保在生成时正确输入",
        "建议在QR码附近添加"扫描连接WiFi"的说明文字",
        "可以创建多个不同用途的WiFi QR码，如访客网络、员工网络等"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <Navbar />
            
            <main className="flex-grow">
                {/* 页面标题 */}
                <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaWifi className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        WiFi QR码制作教程
                                    </h1>
                                    <p className="text-red-100 text-lg">
                                        学习如何创建WiFi QR码，扫描后可直接连接到WiFi网络
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作WiFi QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                                >
                                    查看其他类型教程
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 主要内容 */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* 什么是WiFi QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">什么是WiFi QR码？</h2>
                            <div className="bg-red-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    WiFi QR码是一种包含WiFi网络连接信息的二维码。当用户扫描这种QR码时，会自动获取WiFi网络信息
                                    并提示连接到该网络。这使得WiFi QR码非常适合家庭、办公、咖啡厅等需要分享WiFi的场景。
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🔗</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">一键连接</h4>
                                        <p className="text-sm text-gray-600">扫描后直接连接WiFi</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🔒</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">密码保护</h4>
                                        <p className="text-sm text-gray-600">安全存储网络密码</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">多设备兼容</h4>
                                        <p className="text-sm text-gray-600">支持iOS和Android</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* WiFi字段说明 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">WiFi字段说明</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">需要填写的WiFi信息</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {wifiFields.map((field, index) => (
                                        <div key={index} className="px-6 py-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-gray-800">{field.field}</h4>
                                                {field.required && (
                                                    <span className="text-red-500 text-sm font-medium">必填</span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{field.description}</p>
                                            <p className="text-gray-500 text-xs font-mono bg-gray-50 px-2 py-1 rounded">
                                                示例：{field.example}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 加密类型说明 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">加密类型说明</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {encryptionTypes.map((encryption, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-semibold text-gray-800">{encryption.type}</h3>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                encryption.security === '最高' ? 'bg-green-100 text-green-800' :
                                                encryption.security === '很高' ? 'bg-blue-100 text-blue-800' :
                                                encryption.security === '高' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                安全性：{encryption.security}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{encryption.description}</p>
                                        <p className="text-gray-500 text-xs">
                                            兼容性：{encryption.compatibility}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">制作步骤</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择WiFi类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击"WiFi"选项，进入WiFi QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>WiFi类型会显示专门的WiFi信息填写表单。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">填写WiFi信息</h3>
                                        <p className="text-gray-700 mb-3">
                                            在WiFi信息表单中填写网络名称、密码、加密类型等信息。网络名称和密码是必填项。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>注意：</strong>确保网络名称和密码输入正确，否则无法正常连接。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">自定义样式（可选）</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"自定义"按钮，可以调整颜色、添加Logo、修改样式等，让您的QR码更加个性化。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>可以添加WiFi图标或相关Logo，让用户一眼就能识别。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"生成QR码"按钮，系统会立即创建您的WiFi QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>格式选择：</strong>PNG适合网页使用，SVG适合矢量图形，PDF适合打印。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 使用案例 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">使用案例</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{useCase.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{useCase.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                                        <div className="space-y-2">
                                            {useCase.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 最佳实践 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">最佳实践</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {bestPractices.map((practice, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        {practice.icon}
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{practice.title}</h4>
                                            <p className="text-gray-600 text-sm">{practice.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 实用技巧 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">实用技巧</h2>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaLightbulb className="w-6 h-6 text-yellow-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">制作技巧</h3>
                                </div>
                                <ul className="space-y-3">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <span className="text-yellow-600 mt-1">•</span>
                                            <span className="text-gray-700">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* 常见问题 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">常见问题</h2>
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: WiFi QR码支持哪些设备？</h3>
                                    <p className="text-gray-700">
                                        A: WiFi QR码使用标准的WiFi配置格式，兼容iOS和Android设备。几乎所有现代智能手机都能正确识别和连接WiFi网络。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 密码中包含特殊字符怎么办？</h3>
                                    <p className="text-gray-700">
                                        A: 如果WiFi密码包含特殊字符（如@、#、$等），请确保在生成QR码时正确输入这些字符。
                                        生成的QR码会自动处理特殊字符的编码。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 扫描后会自动连接WiFi吗？</h3>
                                    <p className="text-gray-700">
                                        A: 扫描后会显示WiFi连接提示，用户需要确认连接。这是为了安全考虑，
                                        避免意外连接到不安全的网络。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 如何确保WiFi网络安全？</h3>
                                    <p className="text-gray-700">
                                        A: 建议使用WPA2或WPA3加密，设置强密码，定期更换密码。
                                        对于公共WiFi，可以考虑设置访客网络，限制访问权限。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的WiFi QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的WiFi QR码，为访客提供便捷的网络连接
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                                >
                                    查看其他教程
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 