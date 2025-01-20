import React, { useState } from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import CustomizationModal, { CustomOptions } from './CustomizationModal';
import { mainCategories, subCategories, SubCategory } from './Categories';

interface QRCardProps {
    onGenerateResult: (value: string) => void;
    onCustomizationChange: (opts: CustomOptions) => void;
    customOptions: CustomOptions;
}

// Assuming in categories.ts:
//   Main category "Basic Features" type is "basic"
//   Sub-feature "Text" type is "text"
// If this does not match your actual data, replace with your actual values.
const DEFAULT_MAIN_TYPE = 'basic';
const DEFAULT_SUB_TYPE = 'text';

const QRCard: React.FC<QRCardProps> = ({
                                           onGenerateResult,
                                           onCustomizationChange,
                                       }) => {
    // Default to "Basic Features" + "Text"
    const [selectedMainType, setSelectedMainType] = useState<string | null>(DEFAULT_MAIN_TYPE);
    const [selectedSubType, setSelectedSubType] = useState<string | null>(DEFAULT_SUB_TYPE);
    const [customText, setCustomText] = useState('');
    const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

    // Select main category
    const handleSelectMainCategory = (mainType: string) => {
        setSelectedMainType(mainType);
        setSelectedSubType(null);
    };

    // Get current subcategories
    const currentSubCategories: SubCategory[] = selectedMainType
        ? subCategories[selectedMainType] || []
        : [];

    // Handle QR code generation
    const handleGenerate = () => {
        if (!selectedMainType || !selectedSubType) return;
        const value = `[${selectedMainType}-${selectedSubType}] ${customText}`;
        onGenerateResult(value);
    };

    // Handle customization confirmation
    const handleConfirmCustomization = (opts: CustomOptions) => {
        onCustomizationChange(opts);
    };

    return (
        <motion.div
            className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full h-full"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main category selection */}
            <div className="mt-1 w-full mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold mt-4 mb-2">Please choose a QR code category</h2>
                    <hr className="mx-auto w-1/4 border-b-2 border-blue-500" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {mainCategories.map((cat) => (
                        <FeatureCard
                            key={cat.type}
                            title={cat.title}
                            description={cat.description}
                            isActive={selectedMainType === cat.type}
                            onClick={() => handleSelectMainCategory(cat.type)}
                        />
                    ))}
                </div>
            </div>

            {/* Subcategory selection */}
            <div className="mt-1 w-full mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold mt-4 mb-2">Choose a sub-feature</h2>
                    <hr className="mx-auto w-1/4 border-b-2 border-blue-500" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {currentSubCategories.map((sub) => (
                        <FeatureCard
                            key={sub.type}
                            title={sub.title}
                            description={sub.description}
                            isActive={selectedSubType === sub.type}
                            onClick={() => setSelectedSubType(sub.type)}
                        />
                    ))}
                </div>
            </div>

            {/* Input form */}
            {selectedSubType && (
                <div className="w-full max-w-md mb-6 mt-8">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Enter content
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        placeholder="e.g., link, text, file URL, etc."
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                    />
                    <div className="flex space-x-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            onClick={handleGenerate}
                        >
                            Generate QR Code
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                            onClick={() => setIsCustomizationOpen(true)}
                        >
                            Customization Settings
                        </button>
                    </div>
                </div>
            )}

            {/* Customization Modal */}
            <CustomizationModal
                isOpen={isCustomizationOpen}
                onClose={() => setIsCustomizationOpen(false)}
                onConfirm={handleConfirmCustomization}
            />
        </motion.div>
    );
};

export default QRCard;
