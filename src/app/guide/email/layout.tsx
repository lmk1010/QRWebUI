import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create Email QR Codes - Email QR Code Generator Guide | QRCodeHub.net",
  description: "Learn how to create email QR codes for easy email sharing. Generate QR codes that open email clients with pre-filled addresses, subjects, and messages. Free tutorial.",
  keywords: "email qr code, email qr code generator, create email qr code, email link qr code, mailto qr code, email address qr code, contact qr code",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create Email QR Codes - Email QR Code Generator Guide",
    description: "Learn how to create email QR codes for easy email sharing. Generate QR codes that open email clients with pre-filled addresses, subjects, and messages.",
    url: "https://qrcodehub.net/guide/email",
    siteName: "QRCodeHub - Email QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/email-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create Email QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Email QR Codes - Email QR Code Generator Guide",
    description: "Learn how to create email QR codes for easy email sharing. Free tutorial with examples.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/email-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/email",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "Email QR Code, Mailto QR Code, Tutorial, Guide, How-to",
  },
};

interface EmailGuideLayoutProps {
  children: React.ReactNode;
}

export default function EmailGuideLayout({ children }: EmailGuideLayoutProps) {
  const emailGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Email QR Codes",
    "description": "Learn how to create email QR codes for easy email sharing. Generate QR codes that open email clients with pre-filled addresses, subjects, and messages. Step-by-step tutorial with examples.",
    "url": "https://qrcodehub.net/guide/email",
    "image": "https://qrcodehub.net/email-qr-guide-og.png",
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
        "name": "Email address"
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
        "name": "Select Email QR Code Type",
        "text": "Choose the 'Email' option from the QR code type selection",
        "url": "https://qrcodehub.net/qr-generator/email"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Email Details",
        "text": "Input the email address, subject line, and message body that you want to pre-fill when the QR code is scanned"
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your branding"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your email QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it opens the email client with the correct pre-filled information"
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
          "name": "Email QR Code",
          "item": "https://qrcodehub.net/guide/email"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emailGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 