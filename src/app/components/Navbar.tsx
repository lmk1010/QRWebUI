// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">MyLogo</Link>
                </div>

                {/* 菜单 */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="#home" className="text-gray-600 hover:text-gray-800">
                            首页
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-gray-600 hover:text-gray-800">
                            关于我们
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="text-gray-600 hover:text-gray-800">
                            服务
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-gray-600 hover:text-gray-800">
                            联系我们
                        </Link>
                    </li>
                </ul>

                {/* 移动端菜单按钮 */}
                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                        {/* 你可以使用一个图标库如 Heroicons 来替换这里的 SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
