import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaAddressBook, FaArrowLeft, FaPlay, FaCheck, FaExclamationTriangle, FaLightbulb, FaDownload, FaUser } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for business cards, personal contact information sharing.',
    keywords: 'contact QR code, contact QR code creation, contact QR code tutorial, how to make contact QR code, contact QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/contact",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-contact-guide.png",
                width: 1200,
                height: 630,
                alt: "Contact QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create contact QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-contact-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/contact",
    },
};

export default function ContactQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "如何制作联系人QR码",
        "description": "详细的联系人QR码制作教程，包含步骤说明和使用案例",
        "image": "https://qrcodehub.net/contact-qr-guide-image.png",
        "totalTime": "PT8M",
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
                "name": "QRCodeHub联系人QR码生成器"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "选择联系人类型",
                "text": "在QR码生成器中选择'Contact'类型",
                "image": "https://qrcodehub.net/step1-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "填写联系人信息",
                "text": "填写姓名、电话、邮箱等联系人信息",
                "image": "https://qrcodehub.net/step2-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "自定义样式",
                "text": "选择颜色、添加Logo等个性化设置",
                "image": "https://qrcodehub.net/step3-contact.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "生成和下载",
                "text": "点击生成按钮创建QR码并下载",
                "image": "https://qrcodehub.net/step4-contact.png"
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

    const contactFields = [
        {
            field: "姓名",
            required: true,
            description: "联系人的姓名，支持中英文",
            example: "张三 / John Smith"
        },
        {
            field: "电话",
            required: false,
            description: "联系电话号码",
            example: "13800138000"
        },
        {
            field: "手机",
            required: false,
            description: "手机号码",
            example: "13800138000"
        },
        {
            field: "邮箱",
            required: false,
            description: "电子邮箱地址",
            example: "contact@example.com"
        },
        {
            field: "公司",
            required: false,
            description: "公司或组织名称",
            example: "ABC科技有限公司"
        },
        {
            field: "职位",
            required: false,
            description: "工作职位或头衔",
            example: "产品经理"
        },
        {
            field: "网站",
            required: false,
            description: "个人或公司网站",
            example: "https://www.example.com"
        },
        {
            field: "地址",
            required: false,
            description: "详细地址信息",
            example: "北京市朝阳区xxx街道xxx号"
        }
    ];

    const useCases = [
        {
            title: "商务名片",
            description: "在名片上添加QR码，方便客户快速保存联系信息",
            icon: "💼",
            benefits: ["一键保存", "信息完整", "专业形象"]
        },
        {
            title: "个人联系",
            description: "分享个人联系方式，适合社交场合",
            icon: "👤",
            benefits: ["快速交换", "信息准确", "便于管理"]
        },
        {
            title: "团队信息",
            description: "分享团队成员的联系信息",
            icon: "👥",
            benefits: ["统一格式", "便于分发", "信息同步"]
        },
        {
            title: "客户服务",
            description: "提供客服联系方式，提升服务质量",
            icon: "🎧",
            benefits: ["快速联系", "多渠道", "专业服务"]
        }
    ];

    const bestPractices = [
        {
            title: "填写完整信息",
            description: "尽可能填写所有相关字段，提供完整的联系信息",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "验证信息准确性",
            description: "确保电话号码、邮箱等信息的格式正确",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "使用专业Logo",
            description: "添加公司Logo或个人头像，提升专业感",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "测试保存功能",
            description: "生成后测试扫描和保存功能，确保信息正确导入",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "联系人QR码使用vCard格式，兼容所有主流手机通讯录应用",
        "可以包含多个电话号码和邮箱地址，用分号分隔",
        "地址信息会自动格式化，支持多行地址",
        "建议在QR码附近添加"扫描保存联系人"的说明文字"
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
                <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-purple-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaAddressBook className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        联系人QR码制作教程
                                    </h1>
                                    <p className="text-purple-100 text-lg">
                                        学习如何创建联系人QR码，扫描后可直接保存到手机通讯录
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作联系人QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
                        {/* 什么是联系人QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">什么是联系人QR码？</h2>
                            <div className="bg-purple-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    联系人QR码是一种包含完整联系人信息的二维码。当用户扫描这种QR码时，会自动打开手机通讯录应用，
                                    并提示用户保存联系人信息。这使得联系人QR码非常适合商务名片、个人联系信息分享等场景。
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">一键保存</h4>
                                        <p className="text-sm text-gray-600">扫描后直接保存到通讯录</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📋</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">信息完整</h4>
                                        <p className="text-sm text-gray-600">包含所有联系方式</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">多平台兼容</h4>
                                        <p className="text-sm text-gray-600">支持iOS和Android</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">制作步骤</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择联系人类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击"Contact"选项，进入联系人QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>联系人类型会显示专门的联系人信息填写表单。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">填写联系人信息</h3>
                                        <p className="text-gray-700 mb-3">
                                            在联系人信息表单中填写姓名、电话、邮箱、公司、职位等详细信息。至少需要填写姓名。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>填写越完整的信息，用户保存后就越方便联系。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">自定义样式（可选）</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"自定义"按钮，可以调整颜色、添加Logo、修改样式等，让您的QR码更加个性化。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>可以添加公司Logo或个人头像，提升专业感。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"生成QR码"按钮，系统会立即创建您的联系人QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
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

                        {/* 联系人字段说明 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">联系人字段说明</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">可填写的联系人信息</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {contactFields.map((field, index) => (
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
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 联系人QR码支持哪些手机系统？</h3>
                                    <p className="text-gray-700">
                                        A: 联系人QR码使用标准的vCard格式，兼容iOS和Android系统。几乎所有现代智能手机都能正确识别和保存联系人信息。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 哪些字段是必填的？</h3>
                                    <p className="text-gray-700">
                                        A: 只有姓名字段是必填的，其他字段都是可选的。但建议填写尽可能多的信息，这样用户保存后就能获得完整的联系方式。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 可以包含多个电话号码吗？</h3>
                                    <p className="text-gray-700">
                                        A: 可以！您可以在电话和手机字段中填写多个号码，用分号分隔。例如：13800138000; 13900139000
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 如何确保信息正确保存？</h3>
                                    <p className="text-gray-700">
                                        A: 生成QR码后，建议用多个设备测试扫描和保存功能。确保电话号码格式正确，邮箱地址有效，这样用户保存时就不会出现问题。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的联系人QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的联系人QR码，让客户轻松保存您的联系信息
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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