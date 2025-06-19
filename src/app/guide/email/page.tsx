import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft, FaPlay, FaCheck, FaExclamationTriangle, FaLightbulb, FaDownload, FaMailBulk } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Email QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for customer service, business cooperation and other scenarios.',
    keywords: 'email QR code, email QR code creation, email QR code tutorial, how to make email QR code, email QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Email QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/email",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-email-guide.png",
                width: 1200,
                height: 630,
                alt: "Email QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Email QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create email QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-email-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/email",
    },
};

export default function EmailQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "如何制作邮箱QR码",
        "description": "详细的邮箱QR码制作教程，包含步骤说明和使用案例",
        "image": "https://qrcodehub.net/email-qr-guide-image.png",
        "totalTime": "PT6M",
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
                "name": "QRCodeHub邮箱QR码生成器"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "选择邮箱类型",
                "text": "在QR码生成器中选择'Email'类型",
                "image": "https://qrcodehub.net/step1-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "填写邮箱信息",
                "text": "输入收件人邮箱、邮件主题和内容",
                "image": "https://qrcodehub.net/step2-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "自定义样式",
                "text": "选择颜色、添加Logo等个性化设置",
                "image": "https://qrcodehub.net/step3-email.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "生成和下载",
                "text": "点击生成按钮创建QR码并下载",
                "image": "https://qrcodehub.net/step4-email.png"
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

    const emailFields = [
        {
            field: "收件人邮箱",
            required: true,
            description: "邮件接收者的邮箱地址",
            example: "contact@example.com"
        },
        {
            field: "邮件主题",
            required: false,
            description: "邮件的主题标题",
            example: "商务合作咨询"
        },
        {
            field: "邮件内容",
            required: false,
            description: "邮件的正文内容",
            example: "您好，我对您的产品很感兴趣，希望能了解更多信息。"
        }
    ];

    const useCases = [
        {
            title: "客服联系",
            description: "提供客服邮箱联系方式，方便客户咨询问题",
            example: {
                email: "service@company.com",
                subject: "客服咨询",
                content: "您好，我需要帮助解决以下问题："
            },
            icon: "🎧"
        },
        {
            title: "商务合作",
            description: "分享商务合作邮箱，便于合作伙伴联系",
            example: {
                email: "business@company.com",
                subject: "商务合作提案",
                content: "您好，我们希望能与贵公司建立合作关系。"
            },
            icon: "🤝"
        },
        {
            title: "意见反馈",
            description: "收集用户意见和反馈，改进产品和服务",
            example: {
                email: "feedback@company.com",
                subject: "产品反馈",
                content: "您好，我想对产品提出以下建议："
            },
            icon: "💬"
        },
        {
            title: "订阅服务",
            description: "提供订阅邮箱，用户可订阅最新资讯",
            example: {
                email: "subscribe@company.com",
                subject: "订阅服务",
                content: "您好，我想订阅贵公司的最新资讯和优惠信息。"
            },
            icon: "📧"
        }
    ];

    const bestPractices = [
        {
            title: "使用专业邮箱",
            description: "使用公司域名邮箱，提升专业形象和可信度",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "设置明确主题",
            description: "预设清晰的邮件主题，帮助收件人快速了解邮件内容",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "提供模板内容",
            description: "预设邮件模板内容，减少用户输入负担",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "定期检查邮箱",
            description: "确保邮箱正常工作，及时回复用户邮件",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "邮箱QR码使用mailto协议，兼容所有主流邮件客户端",
        "可以在邮件内容中使用占位符，如{用户姓名}，让用户个性化填写",
        "建议在QR码附近添加"扫描发送邮件"的说明文字",
        "可以创建多个不同用途的邮箱QR码，如客服、商务、反馈等"
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
                <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaEnvelope className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        邮箱QR码制作教程
                                    </h1>
                                    <p className="text-orange-100 text-lg">
                                        学习如何创建邮箱QR码，扫描后自动打开邮件客户端并预设收件人和内容
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作邮箱QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
                        {/* 什么是邮箱QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">什么是邮箱QR码？</h2>
                            <div className="bg-orange-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    邮箱QR码是一种包含邮件信息的二维码。当用户扫描这种QR码时，会自动打开手机或电脑的邮件客户端，
                                    并预设收件人邮箱、邮件主题和内容。这使得邮箱QR码非常适合客服联系、商务合作、意见反馈等场景。
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📧</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">自动填写</h4>
                                        <p className="text-sm text-gray-600">预设收件人和内容</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">⚡</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">快速联系</h4>
                                        <p className="text-sm text-gray-600">一键打开邮件客户端</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">💼</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">专业沟通</h4>
                                        <p className="text-sm text-gray-600">提升沟通效率</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 邮箱字段说明 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">邮箱字段说明</h2>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">可填写的邮箱信息</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {emailFields.map((field, index) => (
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

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">制作步骤</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择邮箱类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击"Email"选项，进入邮箱QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>邮箱类型会显示专门的邮箱信息填写表单。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">填写邮箱信息</h3>
                                        <p className="text-gray-700 mb-3">
                                            在邮箱信息表单中填写收件人邮箱、邮件主题和邮件内容。收件人邮箱是必填项。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>预设邮件主题和内容可以提升用户体验，减少输入负担。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">自定义样式（可选）</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"自定义"按钮，可以调整颜色、添加Logo、修改样式等，让您的QR码更加个性化。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>可以添加公司Logo，提升专业形象。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"生成QR码"按钮，系统会立即创建您的邮箱QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
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
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>收件人：</strong>{useCase.example.email}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>主题：</strong>{useCase.example.subject}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-sm text-gray-700">
                                                    <strong>内容：</strong>{useCase.example.content}
                                                </p>
                                            </div>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 邮箱QR码支持哪些邮件客户端？</h3>
                                    <p className="text-gray-700">
                                        A: 邮箱QR码使用标准的mailto协议，兼容所有主流邮件客户端，包括Gmail、Outlook、Apple Mail、
                                        以及手机上的邮件应用等。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 邮件主题和内容是必填的吗？</h3>
                                    <p className="text-gray-700">
                                        A: 不是必填的。只有收件人邮箱是必填项。邮件主题和内容是可选填写的，
                                        但建议预设这些信息以提升用户体验。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 可以在邮件内容中使用特殊字符吗？</h3>
                                    <p className="text-gray-700">
                                        A: 可以！支持中文字符、英文、数字、符号等。但建议避免使用过于复杂的特殊字符，
                                        以确保在所有邮件客户端中都能正确显示。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 如何确保邮件能及时回复？</h3>
                                    <p className="text-gray-700">
                                        A: 建议设置邮件自动回复，告知用户已收到邮件并会在指定时间内回复。
                                        同时定期检查邮箱，确保及时处理用户邮件。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的邮箱QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的邮箱QR码，提升客户沟通效率
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
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