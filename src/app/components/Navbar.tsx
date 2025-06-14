import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Q</span>
                        </div>
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                            QRCodeHub
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/qr-generator" className="text-gray-600 hover:text-blue-600 transition-colors font-semibold">
                            QR Generator
                        </Link>
                        <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Features
                        </Link>
                        <Link href="/guide" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Guide
                        </Link>
                        <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                            FAQ
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
