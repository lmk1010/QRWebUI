import React, { useState, useEffect, useRef } from "react";
import { QRCode } from "react-qrcode-logo"; // 导入 react-qrcode-logo

export interface CustomOptions {
    dotStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart';  // 普通点的样式
    eyeStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart';  // 定位点的样式
    outerEyeStyle: 'squares' | 'rounded' | 'circle' | 'three-rounded' | 'two-rounded' | 'one-rounded';  // 外部定位点的样式
    innerEyeStyle: 'squares' | 'dots' | 'fluid' | 'hexagon' | 'star' | 'diamond' | 'heart' | 'cloud' | 'tag';  // 内部定位点的样式
    fgColor: string;            // 前景色
    bgColor: string;            // 背景色
    logoFile?: string | null;   // Logo file (Base64 string or File object)
    size: number;               // 二维码大小
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

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-6 overflow-auto transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="bg-white p-6 rounded-lg w-full max-w-5xl shadow-lg relative flex">
                {/* 左侧配置区域 */}
                <div className="w-2/3 pr-6 border-r">
                    <h2 className="text-2xl font-bold mb-4">QR Code Customization</h2>

                    {/* 点样式选择 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Dot Shape</h3>
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
                                    <option value="squares">Square</option>
                                    <option value="dots">Circle</option>
                                    <option value="fluid">Fluid</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Position Dot Style</label>
                                <select
                                    value={options.eyeStyle || options.dotStyle}
                                    onChange={(e) =>
                                        setOptions((prev) => ({ ...prev, eyeStyle: e.target.value as CustomOptions["eyeStyle"] }))
                                    }
                                    className="block w-full border p-2 rounded"
                                >
                                    <option value="squares">Square</option>
                                    <option value="dots">Circle</option>
                                    <option value="fluid">Fluid</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 颜色配置 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Color Configuration</h3>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                                <label className="block mb-2">Foreground Color:</label>
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

                    {/* Logo 上传 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Logo Insert</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="mb-2 w-full border p-2 rounded"
                        />
                    </div>

                    {/* 尺寸与边距 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Size and Margin</h3>
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

                    {/* 二维码内容 */}
                    <textarea
                        className="mt-4 w-full border p-2 rounded"
                        rows={3}
                        value={options.content}
                        onChange={(e) =>
                            setOptions((prev) => ({ ...prev, content: e.target.value }))
                        }
                        placeholder="Please enter QR code content"
                    />
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
                    className="p-2 bg-gray-300 rounded-full"
                    aria-label="Close"
                >
                    Close
                </button>
                <button
                    onClick={handleConfirm} // 在此触发确认操作
                    className="p-2 bg-blue-500 text-white rounded-full"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default CustomizationModal;
