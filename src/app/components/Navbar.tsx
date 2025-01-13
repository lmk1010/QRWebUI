// src/components/Navbar.tsx

"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // 确保导入路径正确

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // @ts-ignore
    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* 左侧：Logo 和 菜单 */}
                <div className="flex items-center space-x-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        <Link href="/">MyLogo</Link>
                    </div>

                    {/* 菜单 */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link href="#home" className="text-gray-600 hover:text-gray-800">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-gray-600 hover:text-gray-800">
                                About Us
                            </Link>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {/* 下拉菜单 */}
                            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <li>
                                    <Link href="#service1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#service2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#service3" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                                        Service 3
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 右侧：长按钮 */}
                <div className="hidden md:block">
                    <Link href="#cta" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
                        Register Now
                    </Link>
                </div>

                {/* 移动端菜单按钮 */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* 移动端菜单 */}
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
                    <div ref={ref} className="md:hidden bg-white">
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <li>
                                <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                    About Us
                                </Link>
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
                                {/* 移动端下拉菜单 */}
                                <ul className="mt-2 space-y-1 pl-4">
                                    <li>
                                        <Link href="#service1" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#service2" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#service3" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                            Service 3
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
                                    Contact Us
                                </Link>
                            </li>
                            {/* 移动端的长按钮 */}
                            <li>
                                <Link
                                    href="#cta"
                                    className="block text-center w-full px-3 py-2 rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Register Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>
        </nav>
    );

};

export default Navbar;
