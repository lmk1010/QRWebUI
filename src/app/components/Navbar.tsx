import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

// @ts-ignore
const Navbar = ({ onAboutClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 点击 logo 时刷新页面
    const handleLogoClick = () => {
        window.location.reload();
    };

    // 点击 Home 时刷新页面
    const handleHomeClick = () => {
        window.location.reload();
    };

    // 点击 About Us 时跳转并刷新页面
    const handleAboutClick = () => {
        window.location.href = '/about';  // 直接跳转到 /about 页面并刷新
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
                                onClick={handleHomeClick} // 这里添加点击事件
                            >
                                Home
                            </a>
                        </li>
                        {/* 使用 handleAboutClick 来跳转到 about.tsx 页面并刷新 */}
                        <li>
                            <a
                                href="#about"
                                className="text-gray-600 hover:text-gray-800"
                                onClick={(e) => {
                                    e.preventDefault(); // 阻止默认跳转
                                    onAboutClick(); // 执行传递的回调
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li className="relative group">
                            <button className="text-gray-600 hover:text-gray-800 flex items-center focus:outline-none">
                                Services
                                <svg
                                    className="ml-1 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <li>
                                    <a href="#service1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#service2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#service3" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 3
                                    </a>
                                </li>
                            </ul>
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
                        ref={ref as React.RefObject<HTMLDivElement>}  // 显式转换为 HTMLDivElement 类型
                        className="md:hidden bg-white"
                    >
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <li>
                                <a
                                    href="#home"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                    onClick={handleHomeClick} // 同样添加点击事件
                                >
                                    Home
                                </a>
                            </li>
                            {/* 使用 handleAboutClick 跳转到 about.tsx 页面并刷新 */}
                            <li>
                                <a
                                    href="#about"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                    onClick={handleAboutClick}  // 这里是跳转到 About 页面并刷新
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="relative group">
                                <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none">
                                    Services
                                    <svg
                                        className="ml-1 h-4 w-4 inline"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <ul className="mt-2 space-y-1 pl-4">
                                    <li>
                                        <a href="#service1" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#service2" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#service3" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 3
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
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
