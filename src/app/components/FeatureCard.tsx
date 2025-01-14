// src/components/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    onClick: () => void;
    isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                     title,
                                                     description,
                                                     onClick,
                                                     isActive,
                                                 }) => {
    return (
        <div
            className={`
        flex flex-col items-center justify-center p-4 w-44 border rounded-lg cursor-pointer
        shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg
        ${isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
      `}
            onClick={onClick}
        >
            <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
            <p className="text-sm text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default FeatureCard;
