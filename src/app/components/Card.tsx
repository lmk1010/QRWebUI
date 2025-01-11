// src/components/Card.tsx
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string; // 可选的图片链接
    className?: string; // 自定义类名，用于调整大小
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, className }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
            {imageUrl && (
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    了解更多 →
                </button>
            </div>
        </div>
    );
};

export default Card;
