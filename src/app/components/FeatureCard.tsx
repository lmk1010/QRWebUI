import React from 'react';

interface FeatureCardProps {
    title: string;
    onClick: () => void;
    isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                     title,
                                                     onClick,
                                                     isActive,
                                                 }) => {
    return (
        <div
            className={`
                flex items-center justify-center
                px-6 py-3
                cursor-pointer
                transition-all
                hover:bg-gray-50
                ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 border-b-2 border-transparent'}
            `}
            onClick={onClick}
        >
            <h2 className="text-base font-semibold text-center">{title}</h2>
        </div>
    );
};

export default FeatureCard;
