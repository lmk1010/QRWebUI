import React, { useState, useRef } from 'react';

interface LogoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (logoFile: string | null) => void;
    currentLogo?: string | null;
}

const LogoModal: React.FC<LogoModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    currentLogo
}) => {
    const [previewLogo, setPreviewLogo] = useState<string | null>(currentLogo || null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileUpload(file);
        }
    };

    const handleFileUpload = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewLogo(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };
    const handleConfirm = () => {
        console.log('LogoModal handleConfirm - previewLogo:', previewLogo);
        onConfirm(previewLogo);
        onClose();
    };

    // 点击外部关闭弹窗
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                {/* 关闭按钮 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-xl font-semibold mb-4 pr-8">Logo Settings</h2>

                {/* 上传区域 */}
                <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {previewLogo ? (
                        <div className="flex flex-col items-center">
                            <img
                                src={previewLogo}
                                alt="Logo preview"
                                className="w-20 h-20 object-contain mb-2"
                            />
                            <p className="text-sm text-gray-500">Click or drag to change logo</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-10 h-10 text-gray-400 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <p className="text-gray-600">Click or drag to upload logo</p>
                            <p className="text-sm text-gray-500 mt-1">Support PNG, JPG, SVG format</p>
                        </div>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                </div>

                {/* 预设图标区域 */}
                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Preset Icons</h3>
                    <div className="grid grid-cols-5 gap-1">
                        {["/assets/logo_default/icons8-discord-480.png", "/assets/logo_default/icons8-facebook-480 copy.png", "/assets/logo_default/icons8-facebook-480.png", "/assets/logo_default/icons8-github-480.png", "/assets/logo_default/icons8-instagram-480.png", "/assets/logo_default/icons8-telegram-app-480.png", "/assets/logo_default/icons8-tiktok-144.png", "/assets/logo_default/icons8-whatsapp-144.png", "/assets/logo_default/icons8-youtube-480.png"].map((icon, index) => (
                            <div
                                key={index}
                                className="aspect-square border rounded-lg p-1 cursor-pointer hover:border-blue-500 transition-colors flex items-center justify-center"
                                onClick={() => setPreviewLogo(icon)}
                            >
                                <img
                                    src={icon}
                                    alt={`Preset logo ${index + 1}`}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoModal;