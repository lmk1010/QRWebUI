import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
    title: "QRCodeHub Pro - 即将上线",
    description: "QRCodeHub Pro版本即将上线，敬请期待更多高级功能。",
    keywords: "QR code generator pro, 即将上线, 敬请期待",
};

export default function ProPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            QRCodeHub
                        </h1>
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                            Pro
                        </span>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">很快上线</h2>
                        
                        <p className="text-gray-600 mb-6">
                            Pro版本正在紧锣密鼓的开发中，敬请期待！
                        </p>
                        
                        <div className="text-sm text-gray-500">
                            更多高级功能即将推出...
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 