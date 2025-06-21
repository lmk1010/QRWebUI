import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaUser, FaArrowLeft, FaPlay, FaCheck, FaArrowRight, FaAddressCard } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Contact QR Code Creation Tutorial - Digital Business Card Guide | QRCodeHub',
    description: 'Learn how to create contact QR codes (vCard) for digital business cards. Includes step-by-step instructions, contact fields, and best practices.',
    keywords: 'contact QR code, vCard QR code, business card QR code, digital business card, contact information QR code',
    authors: [{ name: "QRCodeHub" }],
    robots: "index, follow",
    openGraph: {
        title: "Contact QR Code Creation Tutorial - Digital Business Card Guide",
        description: "Learn how to create contact QR codes (vCard) for digital business cards. Step-by-step instructions included.",
        url: "https://qrcodehub.net/guide/contact",
        siteName: "QRCodeHub - Free QR Code Generator",
        type: "article",
        locale: "en_US",
        images: [
            {
                url: "https://qrcodehub.net/og-image-contact-guide.png",
                width: 1200,
                height: 630,
                alt: "Contact QR Code Creation Tutorial"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact QR Code Creation Tutorial - Digital Business Card Guide",
        description: "Learn how to create contact QR codes (vCard) for digital business cards.",
        site: "@qrcodehub",
        images: ["https://qrcodehub.net/twitter-image-contact-guide.png"]
    },
    alternates: {
        canonical: "https://qrcodehub.net/guide/contact",
    },
};

export default function ContactQRGuidePage() {
    const useCases = [
        {
            title: "Business Cards",
            description: "Replace traditional business cards with digital contact sharing",
            example: "Name: John Doe\nTitle: Marketing Manager\nCompany: Tech Solutions Inc.\nPhone: +1-555-0123\nEmail: john.doe@techsolutions.com",
            icon: "💼"
        },
        {
            title: "Event Networking",
            description: "Quick contact exchange at conferences and networking events",
            example: "Name: Sarah Wilson\nTitle: Sales Director\nCompany: Innovation Corp\nPhone: +1-555-0456\nEmail: sarah.wilson@innovation.com",
            icon: "🤝"
        },
        {
            title: "Real Estate Agents",
            description: "Share contact information on property listings and signs",
            example: "Name: Mike Johnson\nTitle: Real Estate Agent\nCompany: Premier Properties\nPhone: +1-555-0789\nEmail: mike@premierproperties.com",
            icon: "🏠"
        },
        {
            title: "Restaurant Staff",
            description: "Allow customers to easily contact managers or event coordinators",
            example: "Name: Lisa Chen\nTitle: Event Coordinator\nCompany: Grand Restaurant\nPhone: +1-555-0321\nEmail: events@grandrestaurant.com",
            icon: "🍽️"
        },
        {
            title: "Healthcare Providers",
            description: "Share contact information for appointments and consultations",
            example: "Name: Dr. Robert Smith\nTitle: Family Physician\nClinic: City Medical Center\nPhone: +1-555-0654\nEmail: dr.smith@citymedical.com",
            icon: "🏥"
        },
        {
            title: "Service Professionals",
            description: "Contractors, consultants, and freelancers sharing contact details",
            example: "Name: Emily Davis\nTitle: Graphic Designer\nCompany: Creative Studio\nPhone: +1-555-0987\nEmail: emily@creativestudio.com",
            icon: "🎨"
        }
    ];

    const contactFields = [
        { field: "Full Name", required: true, description: "First and last name of the contact" },
        { field: "Job Title", required: false, description: "Professional title or position" },
        { field: "Company/Organization", required: false, description: "Company or organization name" },
        { field: "Phone Number", required: false, description: "Primary phone number" },
        { field: "Email Address", required: false, description: "Primary email address" },
        { field: "Website URL", required: false, description: "Personal or company website" },
        { field: "Address", required: false, description: "Business or mailing address" },
        { field: "Social Media", required: false, description: "LinkedIn, Twitter, or other profiles" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto fade-in-up">
                            {/* Breadcrumb */}
                            <div className="flex items-center mb-8">
                                <Link
                                    href="/guide"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                                >
                                    <FaArrowLeft className="w-4 h-4" />
                                    Back to Guide Home
                                </Link>
                            </div>
                            
                            {/* Title Section */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mb-6 subtle-bounce">
                                    <FaUser className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    Contact QR Code Tutorial
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn how to create contact QR codes (vCard) for digital business cards and instant contact sharing. 
                                    Perfect for networking, business cards, and professional connections.
                                </p>
                            </div>

                            {/* Quick Action */}
                            <div className="text-center mb-16">
                                <Link
                                    href="/qr-generator?type=contact"
                                    className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                >
                                    <FaPlay className="w-5 h-5" />
                                    Create Contact QR Code Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 pb-16">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Step by Step Guide */}
                        <section className="scale-in" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Step-by-Step Guide
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Select Contact Type</h3>
                                    <p className="text-gray-600 text-sm">Choose "Contact" or "vCard" from the QR code options</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Enter Contact Details</h3>
                                    <p className="text-gray-600 text-sm">Fill in name, phone, email, and other contact information</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Customize Design</h3>
                                    <p className="text-gray-600 text-sm">Add professional styling and brand colors</p>
                                </div>
                                <div className="card-enhanced rounded-3xl p-8 text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-2xl">4</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Generate & Share</h3>
                                    <p className="text-gray-600 text-sm">Create your contact QR code and use it on business materials</p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Fields */}
                        <section className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Contact Information Fields
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {contactFields.map((field, index) => (
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                                <FaAddressCard className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-xl">{field.field}</h3>
                                                {field.required && (
                                                    <span className="text-red-600 text-sm font-medium">Required</span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{field.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section className="scale-in" style={{ animationDelay: '0.6s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Popular Use Cases
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="card-enhanced rounded-3xl p-8 group border-l-4 border-indigo-500">
                                        <div className="text-4xl mb-4">{useCase.icon}</div>
                                        <h3 className="font-bold text-gray-800 text-xl mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Example Contact:</h4>
                                            <p className="text-gray-600 text-sm whitespace-pre-line">{useCase.example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section className="fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                                Best Practices & Tips
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Contact Best Practices</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Include only essential contact information
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Use professional email addresses
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Keep job titles clear and concise
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Include company website if applicable
                                        </li>
                                    </ul>
                                </div>
                                <div className="glass-effect rounded-3xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                            <FaUser className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">QR Code Tips</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Test contact QR code before printing
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Print in high quality for business cards
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Add "Scan to add contact" instruction
                                        </li>
                                        <li className="text-gray-600 flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Update information regularly
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How Contact QR Codes Work */}
                        <section className="scale-in" style={{ animationDelay: '1s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                                    How Contact QR Codes Work
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">1</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Scan QR Code</h3>
                                        <p className="text-gray-600 text-sm">User scans the contact QR code with their device camera</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">2</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">View Contact Info</h3>
                                        <p className="text-gray-600 text-sm">Device displays contact information with option to save</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-2xl">3</span>
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">Save to Contacts</h3>
                                        <p className="text-gray-600 text-sm">Contact is automatically added to phone's address book</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* vCard Format Info */}
                        <section className="fade-in-up" style={{ animationDelay: '1.2s' }}>
                            <div className="glass-effect rounded-3xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                                    vCard Format Benefits
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4">Universal Compatibility</h3>
                                        <p className="text-gray-600 mb-4">vCard format is supported by all major devices and contact applications:</p>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>iPhone & Android phones</li>
                                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Outlook & Gmail contacts</li>
                                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>CRM systems & databases</li>
                                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Business card scanners</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4">Rich Information Storage</h3>
                                        <p className="text-gray-600 mb-4">Store comprehensive contact details in a single QR code:</p>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Multiple phone numbers</li>
                                            <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Email addresses & websites</li>
                                            <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Physical addresses</li>
                                            <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Social media profiles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center fade-in-up" style={{ animationDelay: '1.4s' }}>
                            <div className="glass-effect rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    Ready to Create Your Contact QR Code?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Start networking more effectively with professional digital business cards and contact QR codes
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link 
                                        href="/qr-generator?type=contact" 
                                        className="btn-primary inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                                    >
                                        <FaUser className="w-5 h-5" />
                                        Create Contact QR Code
                                    </Link>
                                    <Link 
                                        href="/guide" 
                                        className="inline-flex items-center gap-3 text-gray-600 border-2 border-gray-300 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                                    >
                                        <FaArrowRight className="w-5 h-5" />
                                        View All Tutorials
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 