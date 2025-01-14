// src/components/CustomizationModal.tsx
import React, { useState } from 'react';

// 定义定制化属性的类型
export interface CustomOptions {
    shapeStyle: 'square' | 'circle';  // 简单示例：正方形 or 圆形
    fgColor: string;                  // 前景色
    bgColor: string;                  // 背景色
    logoFile?: File | null;          // 待插入的 Logo 文件
    size: number;                     // 二维码大小
    margin: number;                   // 二维码边距
}

interface CustomizationModalProps {
    isOpen: boolean;
    defaultOptions: CustomOptions;
    onClose: () => void;
    onConfirm: (opts: CustomOptions) => void;
}

const CustomizationModal: React.FC<CustomizationModalProps> = ({
                                                                   isOpen,
                                                                   defaultOptions,
                                                                   onClose,
                                                                   onConfirm,
                                                               }) => {
    const [options, setOptions] = useState<CustomOptions>(defaultOptions);

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm(options);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-4">二维码定制化设置</h2>

                {/* 样式选择模块 */}
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">样式选择</h3>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="shapeStyle"
                            value="square"
                            checked={options.shapeStyle === 'square'}
                            onChange={() => setOptions({ ...options, shapeStyle: 'square' })}
                        />
                        <span className="ml-2">方形</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="shapeStyle"
                            value="circle"
                            checked={options.shapeStyle === 'circle'}
                            onChange={() => setOptions({ ...options, shapeStyle: 'circle' })}
                        />
                        <span className="ml-2">圆形</span>
                    </label>
                </div>

                {/* 颜色配置模块 */}
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">颜色配置</h3>
                    <label className="block mb-2">前景色：</label>
                    <input
                        type="color"
                        value={options.fgColor}
                        onChange={(e) => setOptions({ ...options, fgColor: e.target.value })}
                        className="mb-2"
                    />
                    <label className="block mb-2">背景色：</label>
                    <input
                        type="color"
                        value={options.bgColor}
                        onChange={(e) => setOptions({ ...options, bgColor: e.target.value })}
                        className="mb-2"
                    />
                    <p className="text-gray-500 text-sm">
                        或者自定义上传图片作为背景(需要自行实现合成)。
                    </p>
                </div>

                {/* Logo插入模块 */}
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">Logo插入</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            setOptions({ ...options, logoFile: file });
                        }}
                    />
                    <p className="text-gray-500 text-sm mt-2">
                        请上传透明背景或合适大小的logo，以便在二维码中合成。
                    </p>
                </div>

                {/* 尺寸与边距调整 */}
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">尺寸与边距</h3>
                    <label className="block">
                        大小: {options.size}px
                        <input
                            type="range"
                            min={100}
                            max={400}
                            value={options.size}
                            onChange={(e) => setOptions({ ...options, size: +e.target.value })}
                        />
                    </label>
                    <label className="block mt-2">
                        边距: {options.margin}px
                        <input
                            type="range"
                            min={0}
                            max={20}
                            value={options.margin}
                            onChange={(e) => setOptions({ ...options, margin: +e.target.value })}
                        />
                    </label>
                </div>

                {/* 确认 & 关闭按钮 */}
                <div className="text-right">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleConfirm}
                    >
                        确认
                    </button>
                    <button
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        取消
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomizationModal;
