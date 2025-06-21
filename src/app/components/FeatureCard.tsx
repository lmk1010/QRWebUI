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
                px-1.5 py-2 md:px-2 md:py-3 cursor-pointer
                rounded-lg md:rounded-xl
                backdrop-blur-md
                min-h-[55px] md:min-h-[65px]
                shadow-lg hover:shadow-2xl
                border border-white/20
                transition-all duration-500 ease-out
                ${isActive 
                    ? 'bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20 border-blue-400/40 shadow-blue-500/25' 
                    : 'bg-gradient-to-br from-white/30 via-white/20 to-white/10 hover:from-white/40 hover:via-white/30 hover:to-white/20 hover:border-white/30'
                }
            `}
            onClick={onClick}
            whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ 
                y: -1, 
                scale: 0.98,
                transition: { duration: 0.1 }
            }}
            initial={false}
            animate={{
                y: isActive ? -2 : 0,
                scale: isActive ? 1.01 : 1,
                boxShadow: isActive 
                    ? "0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* 玻璃质感内层光效 */}
            <motion.div
                className="absolute inset-0 rounded-lg md:rounded-xl"
                style={{
                    background: isActive 
                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
                animate={{
                    opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
            
            {/* 悬浮时的光晕效果 */}
            <motion.div
                className="absolute inset-0 rounded-lg md:rounded-xl opacity-0"
                style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
                    filter: "blur(2px)",
                }}
                whileHover={{ 
                    opacity: 0.6,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                }}
            />

            {/* 内容容器 */}
            <div className="relative flex flex-col items-center space-y-1.5 z-10">
                {/* 图标容器 - 增强玻璃质感 */}
                <motion.div
                    className={`
                        relative flex items-center justify-center
                        w-7 h-7 md:w-8 md:h-8 
                        rounded-lg
                        backdrop-blur-sm
                        shadow-lg
                        border border-white/30
                        transition-all duration-400
                        ${isActive 
                            ? 'bg-gradient-to-br from-blue-400/30 via-indigo-400/25 to-purple-400/30 shadow-blue-400/40' 
                            : 'bg-gradient-to-br from-white/40 via-white/30 to-white/20 hover:from-white/50 hover:via-white/40 hover:to-white/30'
                        }
                    `}
                    animate={{
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? [0, -2, 2, 0] : 0,
                        boxShadow: isActive 
                            ? "0 8px 16px rgba(59, 130, 246, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)"
                            : "0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.2)"
                    }}
                    transition={{
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.6, times: [0, 0.3, 0.7, 1] },
                        boxShadow: { duration: 0.3 }
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        transition: { duration: 0.2 }
                    }}
                >
                    {/* 图标内部光效 */}
                    <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                        }}
                        animate={{
                            opacity: isActive ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    
                    {/* 图标 */}
                    {icon && (
                        <motion.span 
                            className={`relative text-xs md:text-sm font-semibold z-10 ${
                                isActive ? 'text-blue-700' : 'text-gray-700'
                            }`}
                            animate={{
                                color: isActive ? "#1d4ed8" : "#374151",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {icon}
                        </motion.span>
                    )}
                    
                    {/* 顶部高光 */}
                    <div className="absolute top-0.5 left-0.5 right-0.5 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-lg" />
                </motion.div>

                {/* 标题背景 */}
                <motion.div
                    className={`
                        px-1.5 py-0.5 rounded-md
                        backdrop-blur-sm
                        border border-white/20
                        transition-all duration-300
                        ${isActive 
                            ? 'bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 shadow-sm' 
                            : 'bg-white/20 hover:bg-white/30'
                        }
                    `}
                    animate={{
                        scale: isActive ? 1.02 : 1,
                        boxShadow: isActive 
                            ? "0 4px 8px rgba(59, 130, 246, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)"
                            : "0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h2 
                        className={`
                            text-xs md:text-xs font-bold text-center leading-tight
                            transition-all duration-300
                            ${isActive ? 'text-blue-800' : 'text-gray-800'}
                        `}
                        animate={{
                            fontWeight: isActive ? 700 : 600,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {title}
                    </motion.h2>
                </motion.div>
            </div>

            {/* 激活状态的边框光效 */}
            {isActive && (
                <motion.div
                    className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-blue-400/50"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                        opacity: [0, 1, 0],
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}

            {/* 底部指示器 */}
            <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                    scaleX: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* 角落装饰点 */}
            {isActive && (
                <>
                    <motion.div
                        className="absolute top-1.5 right-1.5 w-1 h-1 bg-blue-400/60 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    />
                    <motion.div
                        className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 bg-indigo-400/60 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    />
                </>
            )}
        </motion.div>
    );
};

export default FeatureCard;
