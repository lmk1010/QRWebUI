import React, { useState } from 'react';
import QRCategoryCard from './QRCategoryCard';
import QRInputCard from './QRInputCard';
import { CustomOptions } from './CustomizationModal';

const QRPage: React.FC = () => {
    // 全局管理：选中大类/子功能
    const [selectedMainType, setSelectedMainType] = useState<string | null>(null);
    const [selectedSubType, setSelectedSubType] = useState<string | null>(null);

    const [customOptions, setCustomOptions] = useState<CustomOptions>({
        shapeStyle: 'square',   // 初始样式：方形
        fgColor: '#000000',     // 默认前景色：黑色
        bgColor: '#FFFFFF',     // 默认背景色：白色
        logoFile: null,         // 默认无 Logo 文件
        size: 256,              // 默认二维码大小
        margin: 4,              // 默认二维码边距
    });

    // 点击生成的回调
    const handleGenerateResult = (value: string) => {
        console.log("生成二维码内容：", value);
        // 你可以在这儿将 value 交给二维码组件，或做其他操作...
    };

    // 定制化设置变更
    const handleCustomizationChange = (opts: CustomOptions) => {
        setCustomOptions(opts);
    };

    // 关闭事件
    const handleClose = () => {
        console.log("关闭了QRCategoryCard");
        // 你可以在这里处理关闭逻辑，比如隐藏组件
    };

    return (
        <div className="p-8">
            {/* 上方：选择大类/子功能 */}
            <QRCategoryCard
                onClose={handleClose}
                selectedMainType={selectedMainType}
                selectedSubType={selectedSubType}
                onSelectMainCategory={(mainType) => setSelectedMainType(mainType)}
                onSelectSubCategory={(subType) => setSelectedSubType(subType)}
            />

            {/* 下方：输入表单卡片（只有在选中子功能后才显示） */}
            {selectedSubType && (
                <QRInputCard
                    selectedMainType={selectedMainType}
                    selectedSubType={selectedSubType}
                    onGenerateResult={handleGenerateResult}
                    onCustomizationChange={handleCustomizationChange}
                    customOptions={customOptions}
                />
            )}
        </div>
    );
};

export default QRPage;
