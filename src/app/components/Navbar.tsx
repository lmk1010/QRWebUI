import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

// Define a type for the props, including the onAboutClick function
interface NavbarProps {
    onAboutClick: () => void; // onAboutClick is a function that doesn't take any arguments and doesn't return anything
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showFeatureAlert, setShowFeatureAlert] = useState(false); // 用于显示新功能提示

    // 点击 logo 时刷新页面
    const handleLogoClick = () => {
        window.location.reload();
    };

    // 点击 Home 时刷新页面
    const handleHomeClick = () => {
        window.location.reload();
    };

    // 处理点击 More Features 的操作
    const handleMoreFeaturesClick = () => {
        setShowFeatureAlert(true); // 显示新功能提示
        setTimeout(() => setShowFeatureAlert(false), 800); // 0.8秒后隐藏提示
    };

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={handleLogoClick}>
                        PQR
                    </div>

                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a
                                href="#home"
                                className="text-gray-600 hover:text-gray-800"
                                onClick={handleHomeClick}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-600 hover:text-gray-800"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onAboutClick(); // 执行传递的回调
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            {/* 修改后的 More Features */}
                            <button
                                className="text-gray-600 hover:text-gray-800 flex items-center focus:outline-none"
                                onClick={handleMoreFeaturesClick} // 点击时显示提示
                            >
                                More Features
                            </button>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-600 hover:text-gray-800">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <a
                        href="#cta"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold rounded-full hover:from-gray-500 hover:to-gray-700 transition-colors duration-300"
                    >
                        Register Now
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* 新功能提示（居中）并有一定距离顶部 */}
            {showFeatureAlert && (
                <div className="absolute left-0 right-0 top-4 flex items-center justify-center z-50">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">
                        New feature coming soon. Stay tuned!
                    </div>
                </div>
            )}

            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                {(ref) => (
                    <div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        className="md:hidden bg-white"
                    >
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <li>
                                <a
                                    href="#home"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                    onClick={handleHomeClick}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-600 hover:text-gray-800"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onAboutClick(); // 执行传递的回调
                                    }}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                {/* 移除了下拉框，修改为 "More Features" */}
                                <button
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                    onClick={handleMoreFeaturesClick} // 点击时显示提示
                                >
                                    More Features
                                </button>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cta"
                                    className="block text-center w-full px-3 py-2 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Register Now
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Navbar;
