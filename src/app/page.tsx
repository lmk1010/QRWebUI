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
            title: 'PQR Example',
            description: 'This is the description for Service Two, providing detailed information about the service.',
            imageUrl: '/assets/pexels-B.png',
            size: 'wide', // 自定义尺寸标识
        },
        {
            title: 'This is the description for Service Two',
            description: 'About Us.',
            imageUrl: '/assets/pexels-C.png',
            size: 'small', // 自定义尺寸标识
        },
        {
            title: 'This is the description for Service Two',
            description: 'Contact Us.',
            imageUrl: '/assets/pexels-D.png',
            size: 'small', // 自定义尺寸标识
        },
    ];

    const getCardClass = (size: string) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2 min-h-200px'; // 每行 100px，高度 2 * 100px = 200px
            case 'wide':
                return 'md:col-span-2 md:row-span-1 min-h-100px'; // 每行 100px，高度 1 * 100px = 100px
            case 'small':
                return 'md:col-span-1 md:row-span-1 min-h-100px'; // 每行 100px，高度 1 * 100px = 100px
            default:
                return 'min-h-100'; // 15rem, 240px
        }
    };

    const getCardSizeProps = (size: string) => {
        switch (size) {
            case 'large':
                return { isLarge: true, isWide: false, isSmall: false };
            case 'wide':
                return { isLarge: false, isWide: true, isSmall: false };
            case 'small':
                return { isLarge: false, isWide: false, isSmall: true };
            default:
                return { isLarge: false, isWide: false, isSmall: false };
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white"> {/* 添加 bg-white 使整个页面背景为白色 */}
            {/* 导航栏 */}
            <Navbar/>

            {/* 主体内容 */}
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center"> {/* 使用 flex 布局，垂直方向居中 */}
                {/* 使用 CSS Grid 实现布局，并增加 gap-8 */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-custom-8 gap-8">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            className={getCardClass(card.size)}
                            {...getCardSizeProps(card.size)} // 传递尺寸相关的 props
                        />
                    ))}
                </div>
            </main>

            {/*/!* 页脚（Footer） *!/*/}
            {/*<footer className="bg-gray-800 text-white py-6">*/}
            {/*    <div className="container mx-auto text-center">*/}
            {/*        © {new Date().getFullYear()} MyCompany. All rights reserved.*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
}
