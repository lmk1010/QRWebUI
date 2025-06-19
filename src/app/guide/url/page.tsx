import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaLink, FaArrowLeft, FaPlay, FaCheck, FaExclamationTriangle, FaLightbulb, FaDownload, FaGlobe } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'URL QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for linking to websites, web pages or online content.',
    keywords: 'URL QR code, URL QR code creation, URL QR code tutorial, how to make URL QR code, URL QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "URL QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/url",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-url-guide.png",
                width: 1200,
                height: 630,
                alt: "URL QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "URL QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create URL QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-url-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/url",
    },
};

export default function URLQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "如何制作网址QR码",
        "description": "详细的网址QR码制作教程，包含步骤说明和使用案例",
        "image": "https://qrcodehub.net/url-qr-guide-image.png",
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
                "name": "QRCodeHub网址QR码生成器"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "选择URL类型",
                "text": "在QR码生成器中选择'URL'类型",
                "image": "https://qrcodehub.net/step1-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "输入网址",
                "text": "在URL输入框中输入完整的网址",
                "image": "https://qrcodehub.net/step2-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "自定义样式",
                "text": "选择颜色、添加Logo等个性化设置",
                "image": "https://qrcodehub.net/step3-url.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "生成和下载",
                "text": "点击生成按钮创建QR码并下载",
                "image": "https://qrcodehub.net/step4-url.png"
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
            title: "公司官网",
            description: "链接到企业官方网站",
            example: "https://www.company.com",
            icon: "🏢"
        },
        {
            title: "产品页面",
            description: "链接到具体产品详情页",
            example: "https://www.store.com/product/123",
            icon: "📦"
        },
        {
            title: "活动报名",
            description: "链接到活动报名页面",
            example: "https://www.event.com/register/spring2024",
            icon: "📅"
        },
        {
            title: "在线商店",
            description: "链接到电商平台或商品页面",
            example: "https://www.shop.com/category/electronics",
            icon: "🛒"
        },
        {
            title: "社交媒体",
            description: "链接到社交媒体主页",
            example: "https://www.instagram.com/yourbrand",
            icon: "📱"
        },
        {
            title: "下载页面",
            description: "链接到APP下载或文件下载页面",
            example: "https://www.app.com/download",
            icon: "⬇️"
        }
    ];

    const bestPractices = [
        {
            title: "使用完整URL",
            description: "包含http://或https://协议，确保链接完整有效",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "优先使用HTTPS",
            description: "HTTPS更安全，用户更信任，搜索引擎也更喜欢",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "保持链接简洁",
            description: "短链接更容易扫描，用户体验更好",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "测试链接有效性",
            description: "生成前确保链接可以正常访问，避免死链接",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "如果您的网址很长，可以考虑使用短链接服务来缩短URL",
        "确保目标网页在移动设备上显示良好，因为大多数用户会用手机扫描",
        "定期检查链接是否仍然有效，避免QR码失效",
        "可以在URL中添加UTM参数来跟踪QR码的访问来源"
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
                <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-green-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaLink className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        网址QR码制作教程
                                    </h1>
                                    <p className="text-green-100 text-lg">
                                        学习如何创建网址QR码，用户扫描后直接跳转到指定网站或网页
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作网址QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
                        {/* 什么是网址QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">什么是网址QR码？</h2>
                            <div className="bg-green-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    网址QR码是一种包含网站链接的二维码。当用户扫描这种QR码时，会自动打开浏览器并跳转到指定的网址。
                                    这使得网址QR码非常适合用于营销、推广、分享网站链接等场景。
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🌐</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">自动跳转</h4>
                                        <p className="text-sm text-gray-600">扫描后直接打开网页</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📱</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">移动优化</h4>
                                        <p className="text-sm text-gray-600">适合手机用户使用</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📊</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">访问统计</h4>
                                        <p className="text-sm text-gray-600">可跟踪访问数据</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">制作步骤</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择URL类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击"URL"选项，进入网址QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>URL类型专门用于创建网站链接的QR码。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">输入完整网址</h3>
                                        <p className="text-gray-700 mb-3">
                                            在URL输入框中输入完整的网址，包括http://或https://协议。系统会自动验证URL格式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>示例：</strong>https://www.example.com 或 https://www.example.com/product/123
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
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
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击"生成QR码"按钮，系统会立即创建您的网址QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
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
                                            <p className="text-sm text-green-600 font-mono break-all">{useCase.example}</p>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: URL格式有什么要求？</h3>
                                    <p className="text-gray-700">
                                        A: URL必须包含协议（http://或https://），例如：https://www.example.com。
                                        系统会自动验证URL格式，如果格式不正确会提示错误。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 支持哪些类型的网址？</h3>
                                    <p className="text-gray-700">
                                        A: 支持所有标准的网址格式，包括网站首页、产品页面、社交媒体链接、下载页面等。
                                        只要是可以正常访问的网址都可以使用。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 网址太长会影响扫描效果吗？</h3>
                                    <p className="text-gray-700">
                                        A: 长网址会导致QR码更复杂，但不会影响扫描效果。不过建议使用短链接来改善用户体验，
                                        可以使用短链接服务如bit.ly、tinyurl等。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 如何跟踪QR码的访问数据？</h3>
                                    <p className="text-gray-700">
                                        A: 可以在URL中添加UTM参数来跟踪访问来源，例如：
                                        https://www.example.com?utm_source=qr&utm_medium=print&utm_campaign=spring2024
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的网址QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的网址QR码，引导用户访问您的网站
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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