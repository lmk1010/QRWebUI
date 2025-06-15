import React, { useState, useEffect, useRef } from "react";
import { QRCode } from "react-qrcode-logo"; // 导入 react-qrcode-logo

export interface CustomOptions {
    dotStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart';  // 普通点的样式
    eyeStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart';  // 定位点的样式
    outerEyeStyle: 'squares' | 'rounded' | 'circle';  // 外部定位点的样式
    innerEyeStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart' | 'cloud' | 'tag';  // 内部定位点的样式
    fgColor: string;            // 前景色
    bgColor: string;            // 背景色
    logoFile?: string | null;   // Logo file (Base64 string or File object)
    size: number;               // 二维码预览大小
    downloadSize: number;       // 二维码下载大小
    margin: number;             // 二维码边距
    content: string;            // 二维码内容
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';  // 纠错级别
    logoWidth?: number;         // Logo宽度
    logoHeight?: number;        // Logo高度
    logoOpacity?: number;       // Logo透明度
    qrStyle?: 'dots' | 'squares';  // QR码样式
    eyeRadius?: number;         // 定位点圆角
    quietZone?: number;         // 静止区域大小
    dotScale?: number;          // 普通点的缩放比例
    eyeScale?: number;          // 定位点的缩放比例
}

interface CustomizationModalProps {
    customOptions: CustomOptions;  // Initial options
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (options: CustomOptions) => void;
}

const CustomizationModal: React.FC<CustomizationModalProps> = ({
                                                                   customOptions,
                                                                   isOpen,
                                                                   onClose,
                                                                   onConfirm,
                                                               }) => {
    const [options, setOptions] = useState<CustomOptions>(customOptions);
    const qrCodeContainer = useRef<HTMLDivElement>(null);

    // 每次传入新的 customOptions 时，更新内部的 options 状态
    useEffect(() => {
        setOptions(customOptions);
    }, [customOptions]);

    // 处理Logo上传
    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setOptions((prev) => ({ ...prev, logoFile: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    // 确定按钮点击，传递配置回父组件
    const handleConfirm = () => {
        onConfirm(options); // 将修改后的选项传递给父组件
        onClose();           // 关闭模态框
    };

    // 点击外部关闭弹窗
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-6 overflow-auto transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={handleBackdropClick}
        >
            <div className="bg-white p-6 rounded-lg w-full max-w-5xl shadow-lg relative flex">
                {/* 左侧配置区域 */}
                <div className="w-2/3 pr-6 border-r">
                    <h2 className="text-2xl font-bold mb-4">QR Code Style Customization</h2>

                    {/* Dot style selection */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Dot Style Configuration</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Regular Dot Style</label>
                                <select
                                    value={options.dotStyle}
                                    onChange={(e) =>
                                        setOptions((prev) => ({ ...prev, dotStyle: e.target.value as CustomOptions["dotStyle"] }))
                                    }
                                    className="block w-full border p-2 rounded"
                                >
                                    <option value="squares">⬛ Square</option>
                                    <option value="dots">⚫ Circle</option>
                                    <option value="fluid">💧 Fluid</option>
                                    <option value="hexagon">⬢ Hexagon</option>
                                    <option value="star">⭐ Star</option>
                                    <option value="diamond">💎 Diamond</option>
                                    <option value="heart">❤️ Heart</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-1">Choose the shape of QR code data points</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Position Marker Style</label>
                                <select
                                    value={options.eyeStyle || options.dotStyle}
                                    onChange={(e) =>
                                        setOptions((prev) => ({ ...prev, eyeStyle: e.target.value as CustomOptions["eyeStyle"] }))
                                    }
                                    className="block w-full border p-2 rounded"
                                >
                                    <option value="squares">⬛ Square</option>
                                    <option value="dots">⚫ Circle</option>
                                    <option value="fluid">💧 Fluid</option>
                                    <option value="hexagon">⬢ Hexagon</option>
                                    <option value="star">⭐ Star</option>
                                    <option value="diamond">💎 Diamond</option>
                                    <option value="heart">❤️ Heart</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-1">Choose the shape of position markers (three corners)</p>
                            </div>
                        </div>
                        
                        {/* Style description */}
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">Style Description:</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li><strong>Fluid Style:</strong> Intelligently connects adjacent dots for smooth visual effects</li>
                                <li><strong>Hexagon:</strong> Modern geometric style, suitable for tech applications</li>
                                <li><strong>Star:</strong> Adds decorative elements, suitable for festivals or special occasions</li>
                                <li><strong>Diamond:</strong> Simple and elegant, suitable for business applications</li>
                            </ul>
                        </div>
                    </div>

                    {/* Color configuration */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Color Configuration</h3>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                                <label className="block mb-2">Foreground Color (QR Code Color):</label>
                                <input
                                    type="color"
                                    value={options.fgColor}
                                    onChange={(e) =>
                                        setOptions((prev) => ({ ...prev, fgColor: e.target.value }))
                                    }
                                    className="w-full h-10 cursor-pointer"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2">Background Color:</label>
                                <input
                                    type="color"
                                    value={options.bgColor}
                                    onChange={(e) =>
                                        setOptions((prev) => ({ ...prev, bgColor: e.target.value }))
                                    }
                                    className="w-full h-10 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Logo upload */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Logo Upload</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="mb-2 w-full border p-2 rounded"
                        />
                        <p className="text-xs text-gray-500">Upload PNG, JPG or SVG format logo image</p>
                    </div>

                    {/* Size and margin */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Size & Margin</h3>
                        <label className="block mb-4">
                            Size: {options.size}px
                            <input
                                type="range"
                                min={100}
                                max={400}
                                value={options.size}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, size: +e.target.value }))
                                }
                                className="w-full"
                            />
                        </label>
                        <label className="block">
                            Margin: {options.margin}px
                            <input
                                type="range"
                                min={0}
                                max={50}
                                value={options.margin}
                                onChange={(e) =>
                                    setOptions((prev) => ({ ...prev, margin: +e.target.value }))
                                }
                                className="w-full"
                            />
                        </label>
                    </div>

                    {/* QR Code Content */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">QR Code Content</h3>
                        <textarea
                            className="w-full border p-2 rounded"
                            rows={3}
                            value={options.content}
                            onChange={(e) =>
                                setOptions((prev) => ({ ...prev, content: e.target.value }))
                            }
                            placeholder="Please enter QR code content"
                        />
                    </div>
                </div>

                {/* 右侧实时预览 */}
                <div className="w-1/3 pl-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
                    <div ref={qrCodeContainer}>
                        <QRCode
                            value={options.content}
                            fgColor={options.fgColor}
                            bgColor={options.bgColor}
                            size={options.size}
                            logoImage={options.logoFile || undefined}
                            logoWidth={options.size * 0.25}
                            removeQrCodeBehindLogo
                            quietZone={options.margin}
                        />
                    </div>
                </div>
            </div>

            {/* 关闭和确定按钮 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    aria-label="Cancel"
                >
                    Cancel
                </button>
                <button
                    onClick={handleConfirm} // 在此触发确认操作
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default CustomizationModal;
