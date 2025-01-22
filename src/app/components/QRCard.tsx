import React, { useState } from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import { mainCategories, subCategories, SubCategory } from './Categories';

interface QRCardProps {
    onGenerateResult: (value: string) => void;
}

const DEFAULT_MAIN_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
    onGenerateResult,
}) => {
    const [selectedMainType, setSelectedMainType] = useState<string | null>(DEFAULT_MAIN_TYPE);
    const [customText, setCustomText] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
    };

    const handleGenerate = () => {
        if (!selectedMainType || !customText.trim()) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // 3秒后自动隐藏提示
            return;
        }
        const value = `[${selectedMainType}] ${customText}`;
        onGenerateResult(value);
    };

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full h-full"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* Alert Message */}
            {showAlert && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed left-0 right-0 top-4 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
                >
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105">
                        Please enter content first
                    </div>
                </motion.div>
            )}

            {/* Category selection */}
            <div className="w-full">
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
                    {mainCategories.map((cat) => (
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            isActive={selectedMainType === cat.type}
                            onClick={() => handleSelectMainCategory(cat.type)}
                        />
                    ))}
                </div>
            </div>

            {/* Input form */}
            {selectedMainType && (
                <div className="w-full mt-4">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none text-base"
                        placeholder="Please enter the content to generate QR code..."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                    />
                    <button
                        className="mt-4 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        onClick={handleGenerate}
                    >
                        Generate QR Code
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default QRCard;
