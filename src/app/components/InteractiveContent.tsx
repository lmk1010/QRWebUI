"use client";
// src/app/components/InteractiveContent.tsx
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QRCodePage from './QRCodePage';
import About from './About';
import Contact from './Contact';

export interface InteractiveContentRef {
    showQRPage: () => void;
}

const InteractiveContent = forwardRef<InteractiveContentRef>((props, ref) => {
    useEffect(() => {
        // Check if the code is running on the client-side (browser)
        if (typeof window !== 'undefined') {
            const handlePopState = () => {
                // When the user clicks the back button, reload to the homepage
                window.location.reload();
            };

            // Add the popstate event listener to capture back navigation
            window.addEventListener('popstate', handlePopState);

            // Cleanup the event listener when the component unmounts
            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, []);

    // 状态：控制显示哪个页面
    const [currentView, setCurrentView] = useState<'home' | 'qr' | 'about' | 'contact'>('home');

    // 处理页面切换
    const handleViewChange = (view: 'home' | 'qr' | 'about' | 'contact') => {
        setCurrentView(view);
    };

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        showQRPage: () => {
            setCurrentView('qr');
        }
    }));

    return (
        <div id="interactive-content">
            {/* 只有在非home状态下才显示内容 */}
            {currentView !== 'home' && (
                <>
                    {/* 快速操作按钮区域 - 返回按钮 */}
                    <div className="text-center mb-8 mt-8">
                        <button
                            onClick={() => handleViewChange('home')}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            ← Back to Home
                        </button>
                    </div>

                    {/* 动态内容区域 */}
                    <AnimatePresence mode="wait">
                        {currentView === 'qr' && (
                            <motion.div
                                key="qr"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <QRCodePage
                                    onClose={() => handleViewChange('home')}
                                />
                            </motion.div>
                        )}
                        
                        {currentView === 'about' && (
                            <motion.div
                                key="about"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <About />
                            </motion.div>
                        )}
                        
                        {currentView === 'contact' && (
                            <motion.div
                                key="contact"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Contact />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
});

InteractiveContent.displayName = 'InteractiveContent';

export default InteractiveContent; 