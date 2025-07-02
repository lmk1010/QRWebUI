'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="glass-effect sticky top-0 z-50 border-b border-white/20 nav-tablet-optimized">
            <div className="container mx-auto px-4 py-4 main-container">
                <div className="flex justify-between items-center">
                    {/* Logo升级 - 更现代的设计 */}
                    <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="relative group">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                            <Link href="/" className="text-xl lg:text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200">
                                QRCodeHub
                            </Link>
                            <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-2 py-1 lg:px-3 lg:py-1 rounded-full shadow-md">
                                Free
                            </span>
                        </div>
                    </div>

                    {/* 桌面端导航链接 - 优化版设计 */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2 nav-links">
                        <Link href="/" className="nav-link-enhanced group flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="relative z-10">Home</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                        </Link>
                        
                        <Link href="/qr-generator" className="nav-link-enhanced group flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                            <span className="relative z-10">QR Generator</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                        </Link>
                        
                        <Link href="/features" className="nav-link-enhanced group flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="relative z-10">Features</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                        </Link>
                        
                        <Link href="/guide" className="nav-link-enhanced group flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="relative z-10">Guide</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                        </Link>
                        
                        <Link href="/faq" className="nav-link-enhanced group flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="relative z-10">FAQ</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                        </Link>
                        
                        {/* 更多链接下拉菜单 */}
                        <div className="relative group">
                            <button className="nav-link-enhanced flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl relative overflow-hidden text-tablet-sm lg:text-base font-medium">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="relative z-10">More</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
                            </button>
                            
                            {/* 下拉菜单内容 */}
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                                <div className="p-2 space-y-1">
                                    <Link href="/about" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 rounded-xl transition-all duration-300 group/item">
                                        <svg className="w-4 h-4 transition-transform group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">About</span>
                                    </Link>
                                    
                                    <Link href="/contact" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 group/item">
                                        <svg className="w-4 h-4 transition-transform group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium">Contact</span>
                                    </Link>
                                    
                                    <Link href="/privacy" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 rounded-xl transition-all duration-300 group/item">
                                        <svg className="w-4 h-4 transition-transform group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="font-medium">Privacy</span>
                                    </Link>
                                    
                                    <Link href="/terms" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-xl transition-all duration-300 group/item">
                                        <svg className="w-4 h-4 transition-transform group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="font-medium">Terms</span>
                                    </Link>
                                    
                                    <Link href="/sitemap" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-600 rounded-xl transition-all duration-300 group/item">
                                        <svg className="w-4 h-4 transition-transform group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                        </svg>
                                        <span className="font-medium">Sitemap</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 移动端菜单按钮 - 现代化设计 */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 text-gray-600 hover:text-blue-600 focus:outline-none rounded-xl hover:bg-white/50 transition-all duration-200 btn-mobile-optimized"
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

                {/* 移动端导航菜单 - 增强版设计 */}
                {isMenuOpen && (
                    <div className="md:hidden mt-6 pb-6 border-t border-white/20">
                        <div className="glass-effect rounded-2xl p-4 mt-4 space-y-2 form-mobile-optimized">
                            <Link 
                                href="/" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="font-medium">Home</span>
                            </Link>
                            <Link 
                                href="/qr-generator" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                <span className="font-medium">QR Generator</span>
                            </Link>
                            <Link 
                                href="/features" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span className="font-medium">Features</span>
                            </Link>
                            <Link 
                                href="/guide" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="font-medium">Guide</span>
                            </Link>
                            <Link 
                                href="/faq" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">FAQ</span>
                            </Link>
                            <Link 
                                href="/about" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">About</span>
                            </Link>
                            <Link 
                                href="/privacy" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="font-medium">Privacy</span>
                            </Link>
                            <Link 
                                href="/terms" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="font-medium">Terms</span>
                            </Link>
                            <Link 
                                href="/sitemap" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                                <span className="font-medium">Sitemap</span>
                            </Link>
                            <Link 
                                href="/contact" 
                                className="mobile-nav-link group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 btn-mobile-optimized relative overflow-hidden"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="font-medium">Contact</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
