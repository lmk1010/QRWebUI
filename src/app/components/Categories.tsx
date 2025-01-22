// categories.ts (可单独抽出一个文件管理)
export interface SubCategory {
    type: string;       // 子功能类型标识
    title: string;      // 显示在UI上的名称
}

export interface MainCategory {
    type: string;       // 大类类型标识
    title: string;      // 大类名称
}

// 主要类目列表
export const mainCategories: MainCategory[] = [
    {
        type: 'text',
        title: 'Text'
    },
    {
        type: 'url',
        title: 'URL'
    },
    {
        type: 'contact',
        title: 'Contact'
    },
    {
        type: 'file',
        title: 'File'
    },
    {
        type: 'app',
        title: 'App'
    }
];

// 移除子类目，使用空对象
export const subCategories: Record<string, SubCategory[]> = {};
