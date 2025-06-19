import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaFileAlt, FaArrowLeft, FaPlay, FaCheck, FaExclamationTriangle, FaLightbulb, FaDownload, FaPalette } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Text QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for sharing messages, instructions or any text content.',
    keywords: 'text QR code, text QR code creation, text QR code tutorial, how to make text QR code, text QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Text QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/text",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-text-guide.png",
                width: 1200,
                height: 630,
                alt: "Text QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Text QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create text QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-text-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/text",
    },
};

export default function TextQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "如何制作文本QR码",
        "description": "详细的文本QR码制作教程，包含步骤说明和使用案例",
        "image": "https://qrcodehub.net/text-qr-guide-image.png",
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
                "name": "QRCodeHub文本QR码生成器"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "选择文本类型",
                "text": "在QR码生成器中选择'Text'类型",
                "image": "https://qrcodehub.net/step1-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "输入文本内容",
                "text": "在文本框中输入您要编码的文本内容",
                "image": "https://qrcodehub.net/step2-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "自定义样式",
                "text": "选择颜色、添加Logo等个性化设置",
                "image": "https://qrcodehub.net/step3-text.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "生成和下载",
                "text": "点击生成按钮创建QR码并下载",
                "image": "https://qrcodehub.net/step4-text.png"
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

    const useCases = [
        {
            title: "欢迎信息",
            description: "为商店、餐厅或活动创建欢迎信息",
            example: "欢迎光临我们的咖啡店！扫描二维码获取今日特价信息。",
            icon: "🏪"
        },
        {
            title: "产品说明",
            description: "在产品包装上添加详细说明",
            example: "产品名称：有机绿茶\n产地：浙江杭州\n保质期：24个月\n使用方法：80度热水冲泡3-5分钟",
            icon: "📦"
        },
        {
            title: "活动详情",
            description: "分享活动信息和参与方式",
            example: "2024年春季摄影大赛\n时间：3月15日-4月15日\n主题：春天的色彩\n参与方式：发送作品至photo@example.com",
            icon: "📸"
        },
        {
            title: "优惠券代码",
            description: "提供折扣码或优惠信息",
            example: "优惠券代码：SPRING2024\n折扣：全场8折\n有效期：2024年3月31日\n使用说明：结账时输入代码即可享受优惠",
            icon: "🎫"
        },
        {
            title: "联系方式",
            description: "分享联系信息",
            example: "客服热线：400-123-4567\n工作时间：周一至周五 9:00-18:00\n邮箱：service@example.com\n地址：北京市朝阳区xxx街道xxx号",
            icon: "📞"
        },
        {
            title: "使用说明",
            description: "提供产品使用指南",
            example: "智能手表使用说明：\n1. 长按电源键开机\n2. 下载配套APP\n3. 扫描二维码配对设备\n4. 开始使用各项功能",
            icon: "📱"
        }
    ];

    const bestPractices = [
        {
            title: "内容简洁明了",
            description: "保持文本内容简洁，避免过长导致QR码过于复杂",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "使用中文支持",
            description: "我们的生成器完全支持中文字符，可以放心使用中文内容",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "添加行动号召",
            description: "在文本中包含明确的行动指引，告诉用户扫描后应该做什么",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "测试扫描效果",
            description: "生成后务必用多个设备测试扫描效果，确保内容正确显示",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "文本QR码没有长度限制，但建议控制在合理范围内以保证扫描效果",
        "支持换行符，可以创建格式化的多行文本",
        "可以包含特殊字符和表情符号",
        "建议在QR码附近添加说明文字，告诉用户扫描后会看到什么内容"
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
                <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaFileAlt className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        文本QR码制作教程
                                    </h1>
                                    <p className="text-blue-100 text-lg">
                                        学习如何创建包含文本信息的QR码，分享消息、说明或任何文本内容
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作文本QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
                        {/* 什么是文本QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">什么是文本QR码？</h2>
                            <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    文本QR码是一种包含纯文本信息的二维码。当用户扫描这种QR码时，会直接显示编码的文本内容，
                                    而不会跳转到网站或执行其他操作。这使得文本QR码非常适合分享消息、说明、联系方式等信息。
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📝</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">纯文本内容</h4>
                                        <p className="text-sm text-gray-600">直接显示文本信息</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">无需网络</h4>
                                        <p className="text-sm text-gray-600">离线也能正常使用</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">高兼容性</h4>
                                        <p className="text-sm text-gray-600">所有设备都能扫描</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">制作步骤</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择文本类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击"Text"选项，进入文本QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>文本类型是默认选项，通常无需额外选择。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">输入文本内容</h3>
                                        <p className="text-gray-700 mb-3">
                                            在文本输入框中输入您要编码的内容。支持中文、英文、数字、符号等所有字符。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>示例：</strong>"欢迎光临我们的咖啡店！扫描二维码获取今日特价信息。"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">自定义样式（可选）</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"自定义"按钮，可以调整颜色、添加Logo、修改样式等，让您的QR码更加个性化。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>保持高对比度以确保扫描效果，Logo大小不要超过QR码面积的20%。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"生成QR码"按钮，系统会立即创建您的文本QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
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
                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-sm text-gray-700 font-mono whitespace-pre-line">{useCase.example}</p>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 文本QR码有长度限制吗？</h3>
                                    <p className="text-gray-700">
                                        A: 理论上没有严格限制，但建议控制在合理范围内。过长的文本会导致QR码过于复杂，影响扫描效果。
                                        一般建议控制在1000个字符以内。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 支持中文和特殊字符吗？</h3>
                                    <p className="text-gray-700">
                                        A: 完全支持！我们的生成器支持中文、英文、数字、符号、表情符号等各种字符。
                                        生成的QR码在所有主流扫描器中都能正确显示。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 文本QR码需要网络连接吗？</h3>
                                    <p className="text-gray-700">
                                        A: 不需要！文本QR码包含完整的文本信息，扫描后直接显示内容，无需网络连接。
                                        这也是文本QR码的一大优势。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 如何确保扫描效果？</h3>
                                    <p className="text-gray-700">
                                        A: 建议使用高对比度的颜色搭配（如黑底白字或白底黑字），保持适当的尺寸（最小2cm x 2cm），
                                        并在正式使用前用多个设备测试扫描效果。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的文本QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的文本QR码，分享您的信息、说明或消息
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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