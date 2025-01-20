import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../../../public/assets/QRExample.png';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    className?: string;
    isLarge?: boolean;
    isWide?: boolean;
    isSmall?: boolean;
    onLargeCardButtonClick?: () => void;
    onContactClick?: () => void; // 新增的 onContactClick 回调
    onAboutClick?: () => void; // 新增的 onAboutClick 回调
}

const Card: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       imageUrl,
                                       className,
                                       isLarge,
                                       isWide,
                                       onLargeCardButtonClick,
                                       onContactClick, // 传递的回调
                                       onAboutClick,   // 传递的回调
                                   }) => {

    // 处理点击卡片时的跳转
    const handleCardClick = () => {
        if (description.toLowerCase().includes('contact') && onContactClick) {
            onContactClick(); // 执行传递的回调
        }else if (description.toLowerCase().includes('about us') && onAboutClick) {
            onAboutClick(); // 执行传递的回调
        }
    };

    return (
        <div
            onClick={handleCardClick} // 添加点击事件，点击卡片任意位置时触发跳转
            className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transition-shadow duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl ${className}`}
        >
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    priority
                />
            )}

            {/* 内容层 */}
            <div
                className={`absolute inset-0 flex flex-col justify-between p-6 pb-10 pl-12 text-white transition-opacity duration-500 ease-in-out ${
                    isLarge
                        ? 'text-left'
                        : isWide
                            ? 'items-start'
                            : 'items-center'
                }`}
            >
                {isLarge ? (
                    <>
                        {/* 顶部两行艺术化文字 */}
                        <div className="mb-4 space-y-4 mt-10">
                            <h3 className="text-5xl font-extrabold tracking-wide">{title}</h3>
                            <h3 className="text-5xl font-extrabold tracking-wide">{description}</h3>
                        </div>

                        {/* 底部左侧圆角按钮 */}
                        <div className="self-start w-56 mb-6">
                            <button
                                onClick={onLargeCardButtonClick} // 绑定点击事件
                                className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-green-500 text-white px-6 py-3 rounded-full hover:from-yellow-500 hover:to-green-600 transition-colors duration-500 ease-in-out w-full"
                            >
                                Start Customization <span className="ml-2">→</span>
                            </button>
                        </div>
                    </>
                ) : isWide ? (
                    <>
                        <div className="flex flex-col md:flex-row items-start relative">
                            {/* 左侧：标题和按钮 */}
                            <div className="flex flex-col items-start">
                                {/* 顶部文字 */}
                                <h3 className="text-5xl font-bold tracking-wide text-black mt-10">{title}</h3>
                                {/* 底部按钮 */}
                                <div className="w-56 mt-6">
                                    <button
                                        className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-800 transition-colors duration-500 ease-in-out w-full"
                                    >
                                        View Example <span className="ml-2">→</span>
                                    </button>
                                </div>
                            </div>
                            {/* 右侧：Logo 图片 */}
                            <div className="md:ml-4 md:mb-6">
                                <Image src={Logo} alt="Logo" width={300} height={300} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* 顶部区域：左侧小文字，右侧图标 */}
                        <div className="flex justify-between items-center w-full mt-3">
                            <p className="text-lg font-semibold ">{title}</p>
                            <button aria-label="更多信息">
                                <FaArrowRight className="text-black text-2xl cursor-pointer hover:text-gray-500" />
                            </button>
                        </div>

                        {/* 底部文字描述 */}
                        <div className="mt-auto">
                            <h3 className="text-4xl font-extrabold tracking-wide mr-3 ">{description}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
