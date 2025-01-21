import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling"; // 默认导入

export interface CustomOptions {
    dotStyle: "square" | "dots"; // 支持的点样式
    fgColor: string;            // 前景色
    bgColor: string;            // 背景色
    logoFile?: string | null;   // Logo file (Base64 string or File object)
    size: number;               // 二维码大小
    margin: number;             // 二维码边距
    content: string;            // 二维码内容
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
    // 提供默认值，防止 undefined 错误
    const [options, setOptions] = useState<CustomOptions>({
        dotStyle: customOptions?.dotStyle || "square",
        fgColor: customOptions?.fgColor || "#000000",
        bgColor: customOptions?.bgColor || "#ffffff",
        logoFile: customOptions?.logoFile || null,
        size: customOptions?.size || 300,
        margin: customOptions?.margin || 10,
        content: customOptions?.content || "实时预览二维码",
    });

    const qrCode = useRef<QRCodeStyling | null>(null);
    const qrCodeContainer = useRef<HTMLDivElement>(null);

    // 每次传入新的 customOptions 时，更新内部的 options 状态
    useEffect(() => {
        if (customOptions) {
            setOptions(customOptions);
        }
    }, [customOptions]);

    useEffect(() => {
        if (!qrCode.current) {
            qrCode.current = new QRCodeStyling({
                width: options.size,
                height: options.size,
                data: options.content,
                margin: options.margin,
                dotsOptions: {
                    type: options.dotStyle,
                    color: options.fgColor,
                },
                backgroundOptions: {
                    color: options.bgColor,
                },
                image: options.logoFile || undefined,
                imageOptions: {
                    crossOrigin: "anonymous",
                    margin: 5,
                },
            });
        } else {
            qrCode.current.update({
                data: options.content,
                width: options.size,
                height: options.size,
                margin: options.margin,
                dotsOptions: {
                    type: options.dotStyle,
                    color: options.fgColor,
                },
                backgroundOptions: {
                    color: options.bgColor,
                },
                image: options.logoFile || undefined,
            });
        }

        if (qrCodeContainer.current) {
            qrCode.current.append(qrCodeContainer.current);
        }
    }, [options]);

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
                    <h2 className="text-2xl font-bold mb-4">二维码定制化设置</h2>

                    {/* 点样式选择 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">码点形状</h3>
                        <select
                            value={options.dotStyle}
                            onChange={(e) =>
                                setOptions((prev) => ({ ...prev, dotStyle: e.target.value as CustomOptions["dotStyle"] }))
                            }
                            className="block w-full border p-2 rounded"
                        >
                            <option value="square">方块</option>
                            <option value="dots">圆点</option>
                        </select>
                    </div>

                    {/* 颜色配置 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">颜色配置</h3>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                                <label className="block mb-2">前景色：</label>
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
                                <label className="block mb-2">背景色：</label>
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
                        <h3 className="text-lg font-semibold mb-2">Logo 插入</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="mb-2 w-full border p-2 rounded"
                        />
                    </div>

                    {/* 尺寸与边距 */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">尺寸与边距</h3>
                        <label className="block mb-4">
                            大小: {options.size}px
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
                            边距: {options.margin}px
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
                        placeholder="请输入二维码内容"
                    />
                </div>

                {/* 右侧实时预览 */}
                <div className="w-1/3 pl-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold mb-4">实时预览</h3>
                    <div ref={qrCodeContainer}></div>
                </div>
            </div>

            {/* 关闭和确定按钮 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                    onClick={onClose}
                    className="p-2 bg-gray-300 rounded-full"
                    aria-label="Close"
                >
                    关闭
                </button>
                <button
                    onClick={handleConfirm} // 在此触发确认操作
                    className="p-2 bg-blue-500 text-white rounded-full"
                >
                    确定
                </button>
            </div>
        </div>
    );
};

export default CustomizationModal;
