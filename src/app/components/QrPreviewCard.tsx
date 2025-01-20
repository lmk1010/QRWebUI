import React, { useRef, useMemo } from 'react';
import { CustomOptions } from './CustomizationModal';
import { QRCode } from 'react-qrcode-logo';  // <-- Changed to react-qrcode-logo
import { toPng } from 'html-to-image';

interface QrPreviewCardProps {
    generatedValue: string;         // Generated QR code content
    customOptions: CustomOptions;   // Customization settings (colors, size, etc.)
    onUploadLogo?: () => void;      // Callback for uploading a logo
    onBeautify?: () => void;        // Callback for beautifying the QR code
}

const QrPreviewCard: React.FC<QrPreviewCardProps> = ({
                                                         generatedValue,
                                                         customOptions,
                                                         onUploadLogo,
                                                         onBeautify,
                                                     }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const qrCodeRef = useRef<HTMLDivElement>(null); // Reference for QR Code only

    const handleDownloadImage = async () => {
        if (!qrCodeRef.current) return;
        try {
            const dataUrl = await toPng(qrCodeRef.current); // Capture only the QR code
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

// Generate temporary URL for logo image (if uploaded)
    const logoSrc = useMemo(() => {
        if (customOptions.logoFile) {
            if (typeof customOptions.logoFile === "string" && customOptions.logoFile.startsWith("data:")) {
                return customOptions.logoFile; // Use Base64 string directly
            }
        }
        return undefined;
    }, [customOptions.logoFile]);


    // Do not show card if no generated value
    if (!generatedValue) {
        return (
            <div className="text-gray-500 text-sm">
                QR code not generated yet, please choose the main category, subcategory, and enter content on the left.
            </div>
        );
    }

    const isCircle = customOptions.dotStyle === 'dots';
    return (
        <div
            className="bg-white shadow-md rounded-md p-4 w-full max-w-sm flex flex-col items-center"
            ref={cardRef}
        >
            {/* Title Row */}
            <div className="mb-12 text-gray-700 text-sm self-start">
                Style: <span className="font-bold">Basic Style</span>
                <a href="#" className="text-blue-500 ml-2">
                    Switch &gt;
                </a>
            </div>

            {/* QR Code Display */}
            <div
                style={{
                    padding: customOptions.margin,
                    borderRadius: isCircle ? '50%' : '0%',
                    backgroundColor: customOptions.bgColor,
                }}
                ref={qrCodeRef} // Reference for capturing QR code area only
            >
                <QRCode
                    value={generatedValue}         // QR code content
                    fgColor={customOptions.fgColor} // Foreground color
                    bgColor={customOptions.bgColor} // Background color
                    size={customOptions.size}       // Size
                    style={{ borderRadius: isCircle ? '50%' : '0%' }} // Apply rounded appearance to the QR code itself
                    logoImage={logoSrc}            // Logo image URL
                    logoWidth={customOptions.size * 0.25} // Logo width is 25% of QR code size
                    removeQrCodeBehindLogo        // Remove QR code behind logo to prevent overlap
                    quietZone={customOptions.margin} // Margin as quiet zone
                />
            </div>

            <p className="text-gray-500 text-xs mt-6">
                QR Code, {customOptions.size}×{customOptions.size}px, Error correction level:
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col w-full space-y-2">
                <button
                    onClick={onUploadLogo}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    Upload Logo
                </button>
                <button
                    onClick={onBeautify}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                    Beautify QR Code
                </button>
                <button
                    onClick={handleDownloadImage}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Download Image
                </button>
            </div>

            {/* Additional Features Example */}
            <div className="mt-4 text-sm flex flex-wrap gap-2 justify-center">
                <button className="text-blue-600 underline">
                    Layout on A4 paper
                </button>
                <button className="text-blue-600 underline">
                    Download other formats
                </button>
            </div>
        </div>
    );
};

export default QrPreviewCard;
