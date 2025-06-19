import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create Twitter QR Codes - Social Media QR Code Guide | QRCodeHub.net",
  description: "Learn how to create Twitter QR codes for profiles and posts. Generate QR codes that link to Twitter accounts, tweets, and hashtags. Free tutorial with examples.",
  keywords: "twitter qr code, social media qr code, twitter profile qr code, tweet qr code, create twitter qr code, twitter link qr code, social qr code",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create Twitter QR Codes - Social Media QR Code Guide",
    description: "Learn how to create Twitter QR codes for profiles and posts. Generate QR codes that link to Twitter accounts, tweets, and hashtags.",
    url: "https://qrcodehub.net/guide/twitter",
    siteName: "QRCodeHub - Twitter QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/twitter-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create Twitter QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Twitter QR Codes - Social Media QR Code Guide",
    description: "Learn how to create Twitter QR codes for profiles and posts. Free tutorial with examples.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/twitter-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/twitter",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "Twitter QR Code, Social Media QR Code, Tutorial, Guide, How-to",
  },
};

interface TwitterGuideLayoutProps {
  children: React.ReactNode;
}

export default function TwitterGuideLayout({ children }: TwitterGuideLayoutProps) {
  const twitterGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Twitter QR Codes",
    "description": "Learn how to create Twitter QR codes for profiles and posts. Generate QR codes that link to Twitter accounts, tweets, and hashtags. Step-by-step tutorial with examples.",
    "url": "https://qrcodehub.net/guide/twitter",
    "image": "https://qrcodehub.net/twitter-qr-guide-og.png",
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
        "name": "Twitter username or URL"
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
        "text": "Choose the 'URL' option from the QR code type selection since Twitter QR codes are essentially URL QR codes",
        "url": "https://qrcodehub.net/qr-generator/url"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Twitter URL",
        "text": "Copy and paste the Twitter profile URL (e.g., https://twitter.com/username) or specific tweet URL"
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your Twitter branding"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your Twitter QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it opens the correct Twitter profile or tweet"
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
          "name": "Twitter QR Code",
          "item": "https://qrcodehub.net/guide/twitter"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(twitterGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 