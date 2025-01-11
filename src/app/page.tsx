// src/app/page.tsx
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function Home() {
    // 示例卡片数据
    const cards = [
        {
            title: '服务一',
            description: '这是服务一的描述，提供详细的服务信息。',
            imageUrl: 'https://source.unsplash.com/random/400x300?service1',
            size: 'large', // 自定义尺寸标识
        },
        {
            title: '服务二',
            description: '这是服务二的描述，提供详细的服务信息。',
            imageUrl: 'https://source.unsplash.com/random/400x300?service2',
            size: 'wide', // 自定义尺寸标识
        },
        {
            title: '服务三',
            description: '这是服务三的描述，提供详细的服务信息。',
            imageUrl: 'https://source.unsplash.com/random/400x300?service3',
            size: 'small', // 自定义尺寸标识
        },
        {
            title: '服务四',
            description: '这是服务四的描述，提供详细的服务信息。',
            imageUrl: 'https://source.unsplash.com/random/400x300?service4',
            size: 'small', // 自定义尺寸标识
        },
    ];

    // 根据尺寸标识返回对应的 Tailwind 类名
    const getCardClass = (size: string) => {
        switch (size) {
            case 'large':
                return 'col-span-2 row-span-2';
            case 'wide':
                return 'col-span-2 row-span-1';
            case 'small':
                return 'col-span-1 row-span-1';
            default:
                return '';
        }
    };

    return (
        <div>
            {/* 导航栏 */}
            <Navbar />

            {/* 主体内容 */}
            <main className="container mx-auto px-4 py-8">
                {/* 使用 CSS Grid 实现布局 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            className={getCardClass(card.size)}
                        />
                    ))}
                </div>
            </main>

            {/* 页脚（可选） */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} MyCompany. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
