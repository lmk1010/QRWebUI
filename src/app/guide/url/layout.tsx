import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create URL QR Codes - Website Link QR Code Guide | QRCodeHub.net",
  description: "Learn how to create URL QR codes for website links. Convert any website URL into a scannable QR code. Free tutorial with examples and best practices for URL QR codes.",
  keywords: "url qr code, website qr code, link qr code, create url qr code, website link qr code, url to qr code, web qr code generator",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create URL QR Codes - Website Link QR Code Guide",
    description: "Learn how to create URL QR codes for website links. Convert any website URL into a scannable QR code.",
    url: "https://qrcodehub.net/guide/url",
    siteName: "QRCodeHub - URL QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/url-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create URL QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create URL QR Codes - Website Link QR Code Guide",
    description: "Learn how to create URL QR codes for website links. Free tutorial with examples and best practices.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/url-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/url",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "URL QR Code, Website QR Code, Tutorial, Guide, How-to",
  },
};

interface UrlGuideLayoutProps {
  children: React.ReactNode;
}

export default function UrlGuideLayout({ children }: UrlGuideLayoutProps) {
  const urlGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create URL QR Codes",
    "description": "Learn how to create QR codes for website links. Convert any website URL into a scannable QR code. Step-by-step tutorial with examples and best practices.",
    "url": "https://qrcodehub.net/guide/url",
    "image": "https://qrcodehub.net/url-qr-guide-og.png",
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
        "name": "Website URL"
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
        "name": "Select URL QR Code Type",
        "text": "Choose the 'URL' option from the QR code type selection",
        "url": "https://qrcodehub.net/qr-generator/url"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Your Website URL",
        "text": "Copy and paste the complete website URL you want to link to. Make sure to include 'https://' for secure websites."
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your website's branding"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your URL QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it opens the correct website"
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
          "name": "URL QR Code",
          "item": "https://qrcodehub.net/guide/url"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(urlGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 