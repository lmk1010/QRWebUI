import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    onClick: () => void;
    isActive: boolean;
    icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                     title,
                                                     onClick,
                                                     isActive,
                                                     icon,
                                                 }) => {
    return (
        <motion.div
            className={`
                relative flex-1 flex items-center justify-center
                px-2 py-3 md:px-3 md:py-4 cursor-pointer
                transition-all duration-300 ease-in-out
                border-b-3 overflow-hidden min-h-[80px] md:min-h-[90px]
                ${isActive 
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-500 text-blue-600' 
                    : 'bg-white hover:bg-gray-50 border-transparent text-gray-600 hover:text-gray-800'
                }
            `}
            onClick={onClick}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0, scale: 0.98 }}
            initial={false}
            animate={{
                backgroundColor: isActive 
                    ? 'linear-gradient(135deg, rgb(239 246 255) 0%, rgb(238 242 255) 100%)' 
                    : 'rgb(255 255 255)',
            }}
        >
            {/* Active tab background glow */}
            {isActive && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
            
            {/* Hover effect background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-slate-500/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center space-y-2 z-10">
                {/* Icon container with enhanced design */}
                <motion.div
                    className={`
                        relative flex items-center justify-center
                        w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300
                        ${isActive 
                            ? 'bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 shadow-lg border-2 border-blue-200/50' 
                            : 'bg-gradient-to-br from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 shadow-sm border-2 border-gray-200/30'
                        }
                    `}
                    animate={{
                        scale: isActive ? 1.05 : 1,
                        rotate: isActive ? [0, -3, 3, 0] : 0,
                    }}
                    transition={{
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.4, times: [0, 0.3, 0.7, 1] }
                    }}
                >
                    {/* Icon background glow */}
                    {isActive && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                    
                    {/* Icon */}
                    {icon && (
                        <span className={`relative text-base md:text-lg font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                            {icon}
                        </span>
                    )}
                    
                    {/* Subtle corner decoration */}
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-blue-400/30' : 'bg-transparent'
                    }`} />
                </motion.div>

                {/* Title with background */}
                <motion.div
                    className={`
                        px-2 py-1 rounded-md transition-all duration-300
                        ${isActive 
                            ? 'bg-blue-50/80 backdrop-blur-sm' 
                            : 'bg-transparent'
                        }
                    `}
                    animate={{
                        scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.h2 
                        className={`
                            text-xs md:text-sm font-semibold text-center leading-tight
                            transition-all duration-300
                            ${isActive ? 'text-blue-700' : 'text-gray-600'}
                        `}
                        animate={{
                            fontWeight: isActive ? 600 : 500,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {title}
                    </motion.h2>
                </motion.div>
            </div>

            {/* Active indicator bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
            />

            {/* Corner accent */}
            {isActive && (
                <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                />
            )}
            
            {/* Grid separator lines - only visible on mobile */}
            <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200 md:hidden opacity-50"></div>
            <div className="absolute bottom-0 left-2 right-2 h-px bg-gray-200 md:hidden opacity-50"></div>
        </motion.div>
    );
};

export default FeatureCard;
