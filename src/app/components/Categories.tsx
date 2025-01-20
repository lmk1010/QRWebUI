// categories.ts (可单独抽出一个文件管理)
export interface SubCategory {
    type: string;       // 子功能类型标识
    title: string;      // 显示在UI上的名称
    description: string;// 描述
}

export interface MainCategory {
    type: string;       // 大类类型标识
    title: string;      // 大类名称
    description: string;// 大类描述
}

// 大类列表
export const mainCategories: MainCategory[] = [
    {
        type: 'basic',
        title: 'Basic Features',
        description: 'Text, URLs',
    },
    {
        type: 'media',
        title: 'Media Content',
        description: 'Files, Images, Audio/Video',
    },
    {
        type: 'contact',
        title: 'Social / Contact Info',
        description: 'Business cards, WeChat',
    },
    {
        type: 'multi',
        title: 'Interactive / Multi-Scenario',
        description: 'Forms, Bulk QR generation',
    },
];

// 子功能列表
export const subCategories: Record<string, SubCategory[]> = {
    basic: [
        { type: 'text', title: 'Text', description: 'Enter plain text content' },
        { type: 'url', title: 'URL', description: 'Enter website link' },
    ],
    media: [
        { type: 'file', title: 'File', description: 'Generate file download link' },
        { type: 'image', title: 'Image', description: 'QR code for image link' },
        { type: 'audio', title: 'Audio/Video', description: 'QR code for audio/video playback link' },
    ],
    contact: [
        { type: 'vcard', title: 'Business Card', description: 'Electronic business card QR code (vCard)' },
        { type: 'wechat', title: 'WeChat', description: 'Official account / Personal / Group QR codes' },
    ],
    multi: [
        { type: 'form', title: 'Form', description: 'Survey/Registration QR code' },
        { type: 'batch', title: 'Bulk QR', description: 'Generate multiple QR codes at once' },
        { type: 'others', title: 'More Tools', description: 'Wi-Fi, Map, etc.' },
    ],
};
