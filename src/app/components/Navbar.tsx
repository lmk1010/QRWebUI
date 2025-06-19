'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo with Free Badge */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Q</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                                QRCodeHub
                            </Link>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full border border-green-200">
                                Free
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
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
                        <Link href="/pro" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md">
                            Pro
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-3 pt-4">
                            <Link 
                                href="/" 
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/qr-generator" 
                                className="text-gray-600 hover:text-blue-600 transition-colors font-semibold py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                QR Generator
                            </Link>
                            <Link 
                                href="/features" 
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link 
                                href="/guide" 
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Guide
                            </Link>
                            <Link 
                                href="/faq" 
                                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link 
                                href="/pro" 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pro
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
