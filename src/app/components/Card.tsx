// src/components/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string; // 可选的背景图片
    className?: string; // 自定义类名，用于调整大小
    isLarge?: boolean; // 新增属性，用于指示是否为 large 尺寸
    isWide?: boolean; // 新增属性，用于指示是否为 wide 尺寸
    isSmall?: boolean; // 新增属性，用于指示是否为 small 尺寸
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, className, isLarge, isWide, isSmall }) => {
    return (
        <div className={`relative bg-white rounded-extra-large shadow-md overflow-hidden transition-transform transition-shadow duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl ${className}`}>
            {imageUrl && (
                <>
                    {/* 背景图片 */}
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-extra-large"
                        priority
                    />

                    {/* 半透明覆盖层 */}
                    <div className="absolute inset-0 bg-black opacity-40 rounded-extra-large transition-opacity duration-500 ease-in-out"></div>
                </>
            )}

            {/* 内容层 */}
            <div className={`absolute inset-0 flex flex-col justify-between p-6 pb-10 pl-12 text-white transition-opacity duration-500 ease-in-out ${isLarge ? 'text-left' : isWide ? 'items-start' : 'items-center'}`}>
                {isLarge ? (
                    <>
                        {/* 顶部两行艺术化文字 */}
                        <div className="mb-4 space-y-4 mt-8">
                            <h3 className="text-3xl font-extra-black tracking-wide">{title}</h3>
                            <h3 className="text-3xl font-extra-black tracking-wide">{description}</h3>
                        </div>

                        {/* 底部左侧圆角按钮 */}
                        <div className="self-start w-56 mb-6">
                            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-800 transition-colors duration-500 ease-in-out w-full">
                                Start Customizing <span className="ml-2">→</span>
                            </button>
                        </div>
                    </>
                ) : isWide ? (
                    <>
                        {/* 顶部文字 */}
                        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
                        {/* 底部按钮 */}
                        <div className="w-full mt-4">
                            <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-500 ease-in-out w-full">
                                了解更多 <span className="ml-2">→</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-2">{description}</p>
                        <button className="mt-4 inline-flex items-center bg-blue-600 bg-opacity-80 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                            了解更多 <span className="ml-2">→</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
