import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create Text QR Codes - Complete Guide & Tutorial | QRCodeHub.net",
  description: "Learn how to create text QR codes step by step. Create QR codes for plain text messages, notes, and information sharing. Free tutorial with examples and best practices.",
  keywords: "text qr code, create text qr code, text qr code generator, qr code for text, text to qr code, plain text qr code, text message qr code",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create Text QR Codes - Complete Guide & Tutorial",
    description: "Learn how to create text QR codes step by step. Create QR codes for plain text messages, notes, and information sharing.",
    url: "https://qrcodehub.net/guide/text",
    siteName: "QRCodeHub - Text QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/text-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create Text QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Text QR Codes - Complete Guide & Tutorial",
    description: "Learn how to create text QR codes step by step. Free tutorial with examples and best practices.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/text-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/text",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "Text QR Code, Tutorial, Guide, How-to",
  },
};

interface TextGuideLayoutProps {
  children: React.ReactNode;
}

export default function TextGuideLayout({ children }: TextGuideLayoutProps) {
  const textGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Text QR Codes",
    "description": "Learn how to create QR codes for plain text messages, notes, and information sharing. Step-by-step tutorial with examples and best practices.",
    "url": "https://qrcodehub.net/guide/text",
    "image": "https://qrcodehub.net/text-qr-guide-og.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or smartphone"
      },
      {
        "@type": "HowToSupply", 
        "name": "Internet connection"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "QRCodeHub QR Code Generator"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Access the QR Code Generator",
        "text": "Go to qrcodehub.net and navigate to the QR code generator tool",
        "url": "https://qrcodehub.net/qr-generator"
      },
      {
        "@type": "HowToStep",
        "name": "Select Text QR Code Type",
        "text": "Choose the 'Text' option from the QR code type selection",
        "url": "https://qrcodehub.net/qr-generator/text"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Your Text Content",
        "text": "Type or paste the text message you want to encode in the QR code. You can include plain text, notes, instructions, or any textual information."
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your preferences or brand"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your text QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it displays your text correctly"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Text QR Code",
          "item": "https://qrcodehub.net/guide/text"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(textGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 