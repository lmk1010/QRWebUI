"use client";
// src/app/page.tsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QRCodePage from '../../src/app/components/QRCodePage'; // 导入二维码页面组件
import Navbar from './components/Navbar';
import About from './components/About'; // 导入 About 组件
import Contact from './components/Contact'; // 导入 Contact 组件

export default function Page() {
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
    }, []); // Empty dependency array to run only once after component mounts

    // 状态：控制是否显示二维码页面、About 页面和 Contact 页面
    const [showQRCard, setShowQRCard] = useState(true); // 默认直接显示二维码页面
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

    // 处理点击 About Us 时的操作
    const handleAboutClick = () => {
        setShowAbout(true); // 显示 About 页面
        setShowContact(false);
    };

    const handleContactClick = () => {
        setShowAbout(false); // 隐藏 About 页面
        setShowContact(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 导航栏 */}
            <Navbar onAboutClick={handleAboutClick} onContactClick={handleContactClick} />

            {/* 主体内容 */}
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {showAbout ? (
                        // 显示 About 页面
                        <motion.div
                            key="about"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <About />
                        </motion.div>
                    ) : showContact ? (
                        // 显示 Contact 页面
                        <motion.div
                            key="contact"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Contact />
                        </motion.div>
                    ) : showQRCard ? (
                        // 显示二维码页面
                        <motion.div
                            key="qrPage"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <QRCodePage
                                onClose={() => {
                                    // 点击“返回”按钮时，回到首页
                                    setShowQRCard(false);
                                }}
                            />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </main>
        </div>
    );
}
