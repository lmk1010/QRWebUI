// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./styles/globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import DataAnalytics from "./components/DataAnalytics";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Free QR Code Generator - Create QR Codes Online | QRCodeHub.net",
    description: "Free online QR code generator and scanner. Create custom QR codes instantly for websites, text, WiFi, social media and more. Fast, secure and completely free QR code maker tool.",
    keywords: "qr code generator, free qr code generator, qr code scanner, create qr code, qr code maker, online qr generator, custom qr code, qr code creator, generate qr code, qr code tool",
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
        title: "Free QR Code Generator - Create QR Codes Online",
        description: "Generate free QR codes instantly! Create custom QR codes for websites, text, WiFi, and more. Fast, secure, and easy-to-use QR code generator.",
        url: "https://qrcodehub.net",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image.png",
                width: 1200,
                height: 630,
                alt: "QRCodeHub - Free QR Code Generator"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Free QR Code Generator - Create QR Codes Online",
        description: "Generate free QR codes instantly! Create custom QR codes for websites, text, WiFi, and more.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net",
    },
    other: {
        "msapplication-TileColor": "#2563eb",
        "theme-color": "#2563eb",
        "google-adsense-account": "ca-pub-7152647568736288",
    },
    metadataBase: new URL('https://qrcodehub.net'),
    category: 'technology',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "QRCodeHub - Free QR Code Generator",
        "description": "Free online QR code generator and scanner. Create custom QR codes instantly for websites, text, WiFi, social media and more. Fast, secure and completely free QR code maker tool.",
        "url": "https://qrcodehub.net",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web Browser",
        "browserRequirements": "HTML5, JavaScript",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "featureList": [
            "qr code generator",
            "free qr code generator", 
            "qr code scanner",
            "create qr code",
            "qr code maker",
            "online qr generator",
            "custom qr code",
            "qr code creator",
            "generate qr code",
            "qr code tool"
        ],
        "author": {
            "@type": "Organization",
            "name": "QRCodeHub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "QRCodeHub"
        },
        "inLanguage": ["en-US"],
        "potentialAction": {
            "@type": "CreateAction",
            "target": "https://qrcodehub.net",
            "object": {
                "@type": "DigitalDocument",
                "name": "QR Code"
            }
        }
    };

    // 添加FAQ结构化数据
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this QR code generator really free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our QR code generator is completely free to use. You can create unlimited QR codes without any registration or hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "How do I scan a QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can use our built-in QR code scanner or any smartphone camera app. Most modern phones can automatically detect and scan QR codes through the camera."
                }
            },
            {
                "@type": "Question",
                "name": "Can I customize the QR code design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can customize the color, add a logo, change the pattern, and adjust the design to match your brand or preference."
                }
            }
        ]
    };

    return (
        <html lang="en">
            <head>
                {/* Google AdSense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7152647568736288"
                        crossOrigin="anonymous"></script>
                
                {/* 确保Google能正确访问 */}
                <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <meta name="bingbot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <meta name="google-adsense-account" content="ca-pub-7152647568736288" />
                
                {/* iPad专用视口优化 */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="apple-mobile-web-app-title" content="QRCodeHub" />
                
                {/* 网站验证和识别 */}
                <link rel="canonical" href="https://qrcodehub.net" />
                <link rel="icon" href="/qr-icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/qr-icon.svg" />
                
                {/* DNS预解析优化 */}
                <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
                <link rel="dns-prefetch" href="//www.googletagservices.com" />
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqStructuredData)
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased prevent-horizontal-scroll`}>
                <GoogleAnalytics />
                <DataAnalytics />
                {children}
            </body>
        </html>
    );
}
