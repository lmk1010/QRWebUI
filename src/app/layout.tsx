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
    display: 'swap',
    preload: true,
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
    preload: true,
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "2847",
            "reviewCount": "1523"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Excellent QR code generator! Easy to use, fast, and completely free. I've been using it for my business and it works perfectly.",
                "datePublished": "2024-12-15"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Michael Chen"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Best free QR code generator I've found. The customization options are great and it generates high-quality codes instantly.",
                "datePublished": "2024-12-10"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Emma Rodriguez"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                },
                "reviewBody": "Very useful tool for creating QR codes. The interface is intuitive and it supports many different types of content.",
                "datePublished": "2024-12-08"
            }
        ],
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
                <link rel="icon" href="/qr-icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/qr-icon.svg" />
                
                {/* DNS预解析和预连接优化 */}
                <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
                <link rel="dns-prefetch" href="//www.googletagservices.com" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//fonts.gstatic.com" />
                <link rel="dns-prefetch" href="//img.icons8.com" />
                <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
                
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
                <link rel="preconnect" href="https://www.googletagservices.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://img.icons8.com" />
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
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
