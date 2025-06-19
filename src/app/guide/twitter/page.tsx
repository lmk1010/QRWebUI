import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaTwitter, FaArrowLeft, FaPlay, FaCheck, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide | QRCodeHub',
    description: 'Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ. Suitable for linking to personal profiles or posting preset tweets.',
    keywords: 'Twitter QR code, Twitter QR code creation, Twitter QR code tutorial, how to make Twitter QR code, Twitter QR code usage guide',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        url: "https://qrcodehub.net/guide/twitter",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-twitter-guide.png",
                width: 1200,
                height: 630,
                alt: "Twitter QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Twitter QR Code Creation Tutorial - Detailed Step-by-Step Guide",
        description: "Learn how to create Twitter QR codes. Includes detailed steps, use cases, best practices and FAQ.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-twitter-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/twitter",
    },
};

export default function TwitterQRGuidePage() {
    // 结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Twitter QR Code",
        "description": "Detailed Twitter QR code creation tutorial, including step-by-step instructions and use cases",
        "image": "https://qrcodehub.net/twitter-qr-guide-image.png",
        "totalTime": "PT6M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "CNY",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Computer or Mobile Device"
            },
            {
                "@type": "HowToSupply", 
                "name": "Network Connection"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "QRCodeHub Twitter QR Code Generator"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Twitter Type",
                "text": "Open the QR code generator and click the &quot;Twitter&quot; option in the left function area to enter Twitter QR code mode.",
                "image": "https://qrcodehub.net/step1-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Select Function Type",
                "text": "Choose &quot;Profile Link&quot; or &quot;Tweet&quot; function. Profile link will redirect to your Twitter homepage, tweet will preset tweet content.",
                "image": "https://qrcodehub.net/step2-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Enter Twitter Information",
                "text": "If you select profile link, enter your Twitter username (no @ needed). If you select tweet, enter the tweet content you want to preset.",
                "image": "https://qrcodehub.net/step3-twitter.png"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Generate and Download",
                "text": "Click the &quot;Generate QR Code&quot; button to instantly create your Twitter QR code. Then select the download format (PNG, JPG, SVG, PDF).",
                "image": "https://qrcodehub.net/step4-twitter.png"
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

    const twitterFeatures = [
        {
            title: "Profile Link",
            description: "Scan to directly jump to your Twitter profile page",
            icon: "👤",
            benefits: ["Quick Follow", "Personal Branding", "Fan Growth"]
        },
        {
            title: "Tweet",
            description: "Scan to automatically open Twitter and preset tweet content",
            icon: "📝",
            benefits: ["Content Sharing", "Topic Promotion", "Interactive Guidance"]
        }
    ];

    const useCases = [
        {
            title: "Personal Branding",
            description: "Add Twitter profile QR code to business cards, resumes, or promotional materials",
            example: "Username: @yourusername",
            icon: "📄"
        },
        {
            title: "Event Promotion",
            description: "Create QR code with event-related tweets to guide users to share",
            example: "Tweet: Join our event! #event #share",
            icon: "📸"
        },
        {
            title: "Product Promotion",
            description: "Create QR code with product promotion tweets to increase product exposure",
            example: "Tweet: New product! Limited time offer, hurry up and grab it #new #discount",
            icon: "🛍️"
        },
        {
            title: "Topic Tag Promotion",
            description: "Create QR code with tweets containing specific topic tags",
            example: "Tweet: Share your thoughts #innovation #technology #future",
            icon: "🏷️"
        }
    ];

    const bestPractices = [
        {
            title: "Use Short and Memorable Usernames",
            description: "Choose short and easy-to-remember Twitter usernames for users to input",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Test the QR Code",
            description: "Test the QR code with different devices and Twitter apps before publishing",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        },
        {
            title: "Keep tweets within 280 characters for best compatibility",
            description: "Keep your tweet content within 280 characters for best results",
            icon: <FaCheck className="w-5 h-5 text-green-500" />
        }
    ];

    const tips = [
        "Keep tweets within 280 characters for best compatibility",
        "Use relevant and trending hashtags to increase exposure"
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
                <section className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-6">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-sky-100 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    返回教程首页
                                </Link>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                                    <FaTwitter className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                        Twitter QR Code Creation Tutorial
                                    </h1>
                                    <p className="text-sky-100 text-lg">
                                        Learn how to create Twitter QR codes, linking to personal profiles or posting preset tweets
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即制作Twitter QR码
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
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
                        {/* 什么是Twitter QR码 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">What is a Twitter QR Code?</h2>
                            <div className="bg-sky-50 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Twitter QR codes are specifically designed for the Twitter platform. They help users quickly access your Twitter profile page,
                                    or automatically open the Twitter app and preset tweet content. This makes Twitter QR codes perfect for social media marketing and personal branding.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">👤</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Profile Link</h4>
                                        <p className="text-sm text-gray-600">Jump to profile page</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📝</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Tweet</h4>
                                        <p className="text-sm text-gray-600">Preset tweet content</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📈</div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Fan Growth</h4>
                                        <p className="text-sm text-gray-600">Increase follower count</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Twitter功能类型 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Twitter Function Types</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {twitterFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{feature.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{feature.description}</p>
                                        <div className="space-y-2">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 制作步骤 */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Create a Twitter QR Code</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择Twitter类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            打开QR码生成器，在左侧功能选择区域点击&quot;Twitter&quot;选项，进入Twitter QR码制作模式。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>提示：</strong>Twitter类型专门用于创建Twitter相关的QR码。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">选择功能类型</h3>
                                        <p className="text-gray-700 mb-3">
                                            选择&quot;链接到个人资料&quot;或&quot;发布推文&quot;功能。个人资料链接会跳转到您的Twitter主页，
                                            推文发布会预设推文内容。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>建议：</strong>个人资料链接适合推广个人品牌，推文发布适合活动宣传。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">填写Twitter信息</h3>
                                        <p className="text-gray-700 mb-3">
                                            如果选择个人资料链接，输入您的Twitter用户名（不需要@符号）。
                                            如果选择推文发布，输入您想要预设的推文内容。
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>示例：</strong>用户名：yourusername 或 推文：参加我们的活动！ #活动 #分享
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">生成和下载</h3>
                                        <p className="text-gray-700 mb-3">
                                            点击&quot;生成QR码&quot;按钮，系统会立即创建您的Twitter QR码。然后选择下载格式（PNG、JPG、SVG、PDF）。
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
                                            <p className="text-sm text-sky-600 font-mono">{useCase.example}</p>
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
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: Twitter用户名需要包含@符号吗？</h3>
                                    <p className="text-gray-700">
                                        A: 不需要！在输入Twitter用户名时，只需要输入用户名本身，不需要包含@符号。
                                        例如：如果您的用户名是@yourusername，只需要输入yourusername。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 推文内容有长度限制吗？</h3>
                                    <p className="text-gray-700">
                                        A: 是的，Twitter推文有280字符的限制。建议将推文内容控制在280字符以内，
                                        这样用户扫描后可以直接发布，无需修改。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 可以在推文中添加话题标签吗？</h3>
                                    <p className="text-gray-700">
                                        A: 可以！您可以在推文内容中添加话题标签（#标签），这样可以增加推文的曝光度。
                                        建议使用相关且热门的话题标签。
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Q: 扫描后会自动关注吗？</h3>
                                    <p className="text-gray-700">
                                        A: 不会自动关注。扫描个人资料链接的QR码后，会跳转到您的Twitter个人资料页面，
                                        用户需要手动点击关注按钮来关注您。
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 行动号召 */}
                        <section className="text-center py-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                准备制作您的Twitter QR码了吗？
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                现在就开始创建专业的Twitter QR码，提升您的社交媒体影响力
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/qr-generator"
                                    className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    立即开始制作
                                </Link>
                                <Link
                                    href="/guide"
                                    className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
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