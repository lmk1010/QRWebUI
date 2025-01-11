// src/app/page.tsx
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function Home() {
    // 卡片数据
    const cards = [
        {
            title: 'Personalized. QR Code.',
            description: 'Unique. Aesthetic.',
            imageUrl: '/assets/pexels-A.png',
            size: 'large', // 自定义尺寸标识
        },
        {
            title: '服务二',
            description: '这是服务二的描述，提供详细的服务信息。',
            imageUrl: '/assets/pexels-B.png',
            size: 'wide', // 自定义尺寸标识
        },
        {
            title: '服务三',
            description: '这是服务三的描述，提供详细的服务信息。',
            imageUrl: '/assets/pexels-C.png',
            size: 'small', // 自定义尺寸标识
        },
        {
            title: '服务四',
            description: '这是服务四的描述，提供详细的服务信息。',
            imageUrl: '/assets/pexels-D.png',
            size: 'small', // 自定义尺寸标识
        },
    ];

    // 根据尺寸标识返回对应的 Tailwind 类名，包括高度
    const getCardClass = (size: string) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2 min-h-60 sm:min-h-72 md:min-h-96 lg:min-h-120 xl:min-h-144'; // 添加多个断点的高度
            case 'wide':
                return 'md:col-span-2 md:row-span-1 min-h-72'; // 18rem, 288px
            case 'small':
                return 'md:col-span-1 md:row-span-1 min-h-80'; // 20rem, 320px
            default:
                return 'min-h-60'; // 15rem, 240px
        }
    };

    return (
        <div className="flex flex-col min-h-screen"> {/* Flex 布局，垂直方向 */}
            {/* 导航栏 */}
            <Navbar />

            {/* 主体内容 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    欢迎来到我们的主页
                </h1>

                {/* 使用 CSS Grid 实现布局，并增加 gap-8 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            className={getCardClass(card.size)}
                            isLarge={card.size === 'large'} // 传递 isLarge 属性
                        />
                    ))}
                </div>
            </main>

            {/* 页脚（Footer） */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} MyCompany. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
