import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "QR Code Guide - Complete Tutorials & How-to Guides | QRCodeHub.net",
  description: "Master QR code creation with our comprehensive guides. Learn how to create QR codes for text, URLs, WiFi, email, contact info, and social media. Step-by-step tutorials with best practices.",
  keywords: "qr code guide, qr code tutorial, how to create qr code, qr code best practices, qr code tips, qr code examples, qr code walkthrough, qr code instructions",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "QR Code Guide - Complete Tutorials & How-to Guides",
    description: "Master QR code creation with our comprehensive guides. Learn how to create QR codes for text, URLs, WiFi, email, contact info, and social media.",
    url: "https://qrcodehub.net/guide",
    siteName: "QRCodeHub - QR Code Guide",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/guide-og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Guide - Complete Tutorials"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Guide - Complete Tutorials & How-to Guides",
    description: "Master QR code creation with our comprehensive guides. Step-by-step tutorials with best practices.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/guide-twitter-image.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "QR Code, Tutorial, Guide, How-to",
  },
};

interface GuideLayoutProps {
  children: React.ReactNode;
}

export default function GuideLayout({ children }: GuideLayoutProps) {
  // Add structured data for guide pages
  const guideStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "QR Code Guide - Complete Tutorials & How-to Guides",
    "description": "Master QR code creation with our comprehensive guides. Learn how to create QR codes for text, URLs, WiFi, email, contact info, and social media.",
    "url": "https://qrcodehub.net/guide",
    "mainEntity": [
      {
        "@type": "HowTo",
        "name": "How to Create Text QR Codes",
        "description": "Learn how to create QR codes for plain text messages",
        "url": "https://qrcodehub.net/guide/text",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter your text",
            "text": "Type or paste the text you want to encode in the QR code"
          },
          {
            "@type": "HowToStep", 
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create URL QR Codes",
        "description": "Learn how to create QR codes for website links",
        "url": "https://qrcodehub.net/guide/url",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter website URL",
            "text": "Paste the website URL you want to link to"
          },
          {
            "@type": "HowToStep",
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create WiFi QR Codes",
        "description": "Learn how to create QR codes for WiFi network sharing",
        "url": "https://qrcodehub.net/guide/wifi",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter WiFi details",
            "text": "Input your WiFi network name, password, and security type"
          },
          {
            "@type": "HowToStep",
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create Email QR Codes",
        "description": "Learn how to create QR codes for email addresses",
        "url": "https://qrcodehub.net/guide/email",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter email details",
            "text": "Input email address, subject, and message body"
          },
          {
            "@type": "HowToStep",
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create Contact QR Codes",
        "description": "Learn how to create QR codes for contact information",
        "url": "https://qrcodehub.net/guide/contact",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter contact details",
            "text": "Input name, phone, email, and other contact information"
          },
          {
            "@type": "HowToStep",
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create Twitter QR Codes",
        "description": "Learn how to create QR codes for Twitter profiles and posts",
        "url": "https://qrcodehub.net/guide/twitter",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter Twitter details",
            "text": "Input Twitter username or specific tweet URL"
          },
          {
            "@type": "HowToStep",
            "name": "Customize design",
            "text": "Choose colors, add logo, and adjust styling options"
          },
          {
            "@type": "HowToStep",
            "name": "Generate and download",
            "text": "Click generate and download your QR code"
          }
        ]
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "QRCodeHub"
    },
    "inLanguage": ["en-US"],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://qrcodehub.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guide",
          "item": "https://qrcodehub.net/guide"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guideStructuredData)
        }}
      />
      
      {/* Background decorative elements - shared across all guide pages */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 