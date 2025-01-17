import React, { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling"; // 默认导入

export interface CustomOptions {
    dotStyle: "square" | "dots"; // 支持的点样式
    fgColor: string;            // 前景色
    bgColor: string;            // 背景色
    logoFile?: string | null;   // Logo 文件（Base64 格式）
    size: number;               // 二维码大小
    margin: number;             // 二维码边距
    content: string;            // 二维码内容
}

const CustomizationModal: React.FC = () => {
    const [options, setOptions] = useState<CustomOptions>({
        dotStyle: "square",
        fgColor: "#000000",
        bgColor: "#ffffff",
        logoFile: null,
        size: 300,
        margin: 10,
        content: "实时预览二维码",
    });

    const qrCode = useRef<QRCodeStyling | null>(null);
    const qrCodeContainer = useRef<HTMLDivElement>(null);

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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-6 overflow-auto">
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
        </div>
    );
};

export default CustomizationModal;
