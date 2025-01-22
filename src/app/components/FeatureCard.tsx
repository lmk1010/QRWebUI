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
                flex flex-col items-center justify-center
                p-2 w-55 h-19 
                border rounded-full cursor-pointer
                shadow-md transition-transform transform 
                hover:-translate-y-1 hover:shadow-lg
                ${isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}
            `}
            onClick={onClick}
        >
            <h2 className="text-base font-semibold mb-2 text-center">{title}</h2>
        </div>
    );
};

export default FeatureCard;
