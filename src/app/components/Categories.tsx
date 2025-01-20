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
        title: '基础功能',
        description: '文本, 网址',
    },
    {
        type: 'media',
        title: '媒体内容',
        description: '文件, 图片, 音视频',
    },
    {
        type: 'contact',
        title: '社交 / 联系方式',
        description: '名片, 微信',
    },
    {
        type: 'multi',
        title: '互动 / 多场景',
        description: '表单, 批量生码',
    },
];

// 子功能列表
export const subCategories: Record<string, SubCategory[]> = {
    basic: [
        { type: 'text', title: '文本', description: '输入纯文本内容' },
        { type: 'url', title: '网址', description: '输入网站链接' },
    ],
    media: [
        { type: 'file', title: '文件', description: '生成文件下载链接' },
        { type: 'image', title: '图片', description: '图片链接二维码' },
        { type: 'audio', title: '音视频', description: '音视频播放链接二维码' },
    ],
    contact: [
        { type: 'vcard', title: '名片', description: '电子名片二维码 (vCard)' },
        { type: 'wechat', title: '微信', description: '公众号 / 个人 / 群二维码' },
    ],
    multi: [
        { type: 'form', title: '表单', description: '问卷/报名链接二维码' },
        { type: 'batch', title: '批量生码', description: '一次性生成多个二维码' },
        { type: 'others', title: '更多工具', description: 'Wi-Fi、地图.....' },
    ],
};
