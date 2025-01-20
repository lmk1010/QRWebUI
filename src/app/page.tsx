"use client";
// src/app/page.tsx
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { gsap } from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';
import QRCodePage from '../../src/app/components/QRCodePage'; // 关键：导入父组件
import About from './components/About'; // 导入 About 组件

export default function Home() {
    // 状态：是否显示 QRCard 或 About
    const [showQRCard, setShowQRCard] = useState(false);
    const [showAbout, setShowAbout] = useState(false); // 控制 About 页面显示
    const cardsRef = useRef<HTMLDivElement>(null);

    // 卡片数据
    const cards = [
        {
            title: 'Personalized. QR Code.',
            description: 'Unique. Aesthetic.',
            imageUrl: '/assets/pexels-A.png',
            size: 'large',
        },
        {
            title: 'PQR Example',
            description: 'This is the description for Service Two, providing detailed information About.tsx the service.',
            imageUrl: '/assets/pexels-B.png',
            size: 'wide',
        },
        {
            title: 'This is the description for Service Two',
            description: 'About Us.',
            imageUrl: '/assets/pexels-C.png',
            size: 'small',
        },
        {
            title: 'This is the description for Service Two',
            description: 'Contact Us.',
            imageUrl: '/assets/pexels-D.png',
            size: 'small',
        },
    ];

    // 根据尺寸获取卡片的类名
    const getCardClass = (size: string) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2 min-h-[200px]';
            case 'wide':
                return 'md:col-span-2 md:row-span-1 min-h-[100px]';
            case 'small':
                return 'md:col-span-1 md:row-span-1 min-h-[100px]';
            default:
                return 'min-h-[100px]';
        }
    };

    // 根据尺寸获取卡片的属性
    const getCardSizeProps = (size: string) => {
        switch (size) {
            case 'large':
                return { isLarge: true, isWide: false, isSmall: false };
            case 'wide':
                return { isLarge: false, isWide: true, isSmall: false };
            case 'small':
                return { isLarge: false, isWide: false, isSmall: true };
            default:
                return { isLarge: false, isWide: false, isSmall: false };
        }
    };

    // 当大卡片按钮被点击时，先执行碎裂动画，再显示二维码卡片
    const handleLargeCardButtonClick = () => {
        if (cardsRef.current) {
            const cardsElements = cardsRef.current.children;
            gsap.to(cardsElements, {
                duration: 1,
                scale: 0,
                rotation: 360,
                opacity: 0,
                stagger: 0.1,
                ease: 'power2.inOut',
                onComplete: () => {
                    setShowQRCard(true);
                },
            });
        } else {
            setShowQRCard(true);
        }
    };

    // 处理点击 About Us 时的操作
    const handleAboutClick = () => {
        setShowAbout(true); // 显示 About 页面
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 导航栏 */}
            <Navbar onAboutClick={handleAboutClick} /> {/* 传递事件给 Navbar */}

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
                            <About /> {/* 显示 About.tsx 组件 */}
                        </motion.div>
                    ) : !showQRCard ? (
                        // 显示四个卡片
                        <motion.div
                            key="cards"
                            ref={cardsRef}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:grid-rows-custom-8 gap-8"
                        >
                            {cards.map((card, index) => (
                                <Card
                                    key={index}
                                    title={card.title}
                                    description={card.description}
                                    imageUrl={card.imageUrl}
                                    className={getCardClass(card.size)}
                                    {...getCardSizeProps(card.size)}
                                    onLargeCardButtonClick={handleLargeCardButtonClick}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        // 显示二维码卡片
                        <motion.div
                            key="qrPage"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <QRCodePage
                                onClose={() => {
                                    // 点击“返回”按钮时，回到卡片列表
                                    setShowQRCard(false);
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
