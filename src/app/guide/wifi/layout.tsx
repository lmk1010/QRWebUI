import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create WiFi QR Codes - WiFi Network QR Code Guide | QRCodeHub.net",
  description: "Learn how to create WiFi QR codes for easy network sharing. Generate QR codes that automatically connect devices to WiFi networks. Free tutorial with examples and best practices.",
  keywords: "wifi qr code, wifi network qr code, create wifi qr code, wifi password qr code, wifi connection qr code, network qr code, wifi sharing qr code",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create WiFi QR Codes - WiFi Network QR Code Guide",
    description: "Learn how to create WiFi QR codes for easy network sharing. Generate QR codes that automatically connect devices to WiFi networks.",
    url: "https://qrcodehub.net/guide/wifi",
    siteName: "QRCodeHub - WiFi QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/wifi-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create WiFi QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create WiFi QR Codes - WiFi Network QR Code Guide",
    description: "Learn how to create WiFi QR codes for easy network sharing. Free tutorial with examples and best practices.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/wifi-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/wifi",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "WiFi QR Code, Network QR Code, Tutorial, Guide, How-to",
  },
};

interface WifiGuideLayoutProps {
  children: React.ReactNode;
}

export default function WifiGuideLayout({ children }: WifiGuideLayoutProps) {
  const wifiGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create WiFi QR Codes",
    "description": "Learn how to create WiFi QR codes for easy network sharing. Generate QR codes that automatically connect devices to WiFi networks. Step-by-step tutorial with examples and best practices.",
    "url": "https://qrcodehub.net/guide/wifi",
    "image": "https://qrcodehub.net/wifi-qr-guide-og.png",
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
      },
      {
        "@type": "HowToSupply",
        "name": "WiFi network details"
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
        "name": "Select WiFi QR Code Type",
        "text": "Choose the 'WiFi' option from the QR code type selection",
        "url": "https://qrcodehub.net/qr-generator/wifi"
      },
      {
        "@type": "HowToStep",
        "name": "Enter WiFi Network Details",
        "text": "Input your WiFi network name (SSID), password, and select the security type (WPA, WEP, or Open)"
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your preferences"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your WiFi QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it connects to the WiFi network automatically"
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
          "name": "WiFi QR Code",
          "item": "https://qrcodehub.net/guide/wifi"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wifiGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 