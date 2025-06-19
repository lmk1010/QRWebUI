import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How to Create Contact QR Codes - vCard QR Code Guide | QRCodeHub.net",
  description: "Learn how to create contact QR codes for business cards and contact sharing. Generate vCard QR codes with name, phone, email, and address. Free tutorial with examples.",
  keywords: "contact qr code, vcard qr code, business card qr code, contact info qr code, create contact qr code, phone qr code, email qr code",
  authors: [{ name: "QRCodeHub" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Create Contact QR Codes - vCard QR Code Guide",
    description: "Learn how to create contact QR codes for business cards and contact sharing. Generate vCard QR codes with name, phone, email, and address.",
    url: "https://qrcodehub.net/guide/contact",
    siteName: "QRCodeHub - Contact QR Code Guide",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://qrcodehub.net/contact-qr-guide-og.png",
        width: 1200,
        height: 630,
        alt: "How to Create Contact QR Codes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Contact QR Codes - vCard QR Code Guide",
    description: "Learn how to create contact QR codes for business cards and contact sharing. Free tutorial with examples.",
    site: "@qrcodehub",
    images: ["https://qrcodehub.net/contact-qr-guide-twitter.png"]
  },
  alternates: {
    canonical: "https://qrcodehub.net/guide/contact",
  },
  other: {
    "article:section": "Tutorials",
    "article:tag": "Contact QR Code, vCard QR Code, Business Card QR Code, Tutorial, Guide, How-to",
  },
};

interface ContactGuideLayoutProps {
  children: React.ReactNode;
}

export default function ContactGuideLayout({ children }: ContactGuideLayoutProps) {
  const contactGuideStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Contact QR Codes",
    "description": "Learn how to create contact QR codes for business cards and contact sharing. Generate vCard QR codes with name, phone, email, and address. Step-by-step tutorial with examples.",
    "url": "https://qrcodehub.net/guide/contact",
    "image": "https://qrcodehub.net/contact-qr-guide-og.png",
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
        "name": "Contact information"
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
        "name": "Select Contact QR Code Type",
        "text": "Choose the 'Contact' or 'vCard' option from the QR code type selection",
        "url": "https://qrcodehub.net/qr-generator/vcard"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Contact Information",
        "text": "Fill in the contact details including name, phone number, email address, company, job title, and address"
      },
      {
        "@type": "HowToStep",
        "name": "Customize the Design",
        "text": "Choose colors for your QR code, add a logo if desired, and adjust the styling to match your business branding"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and Download",
        "text": "Click the 'Generate QR Code' button and download your contact QR code in PNG, SVG, or PDF format"
      },
      {
        "@type": "HowToStep",
        "name": "Test Your QR Code",
        "text": "Scan the generated QR code with a smartphone to verify it adds the contact information correctly"
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
          "name": "Contact QR Code",
          "item": "https://qrcodehub.net/guide/contact"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactGuideStructuredData)
        }}
      />
      {children}
    </>
  );
} 