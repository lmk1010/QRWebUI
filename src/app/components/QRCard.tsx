// src/components/QRCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import QRCode from 'react-qr-code'; // 你需要安装一个二维码生成库，如 react-qr-code

interface QRCardProps {
    onClose: () => void;
}

const QRCard: React.FC<QRCardProps> = ({ onClose }) => {
    return (
        <motion.div
            className="relative bg-white rounded-extra-large shadow-lg p-8 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* 关闭按钮 */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                ✕
            </button>

            {/* 二维码 */}
            <div className="mb-6">
                <QRCode value="https://your-qr-code-link.com" size={200} />
            </div>

            {/* 下拉选项 */}
            <div className="w-full max-w-md">
                <label className="block mb-2 text-sm font-medium text-gray-700">选项 1</label>
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                    <option>选项 A</option>
                    <option>选项 B</option>
                    <option>选项 C</option>
                </select>

                <label className="block mb-2 text-sm font-medium text-gray-700">选项 2</label>
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                    <option>选项 X</option>
                    <option>选项 Y</option>
                    <option>选项 Z</option>
                </select>

                {/* 其他内容 */}
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    生成二维码
                </button>
            </div>
        </motion.div>
    );
};

export default QRCard;
