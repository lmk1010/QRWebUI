import React, { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 点击 logo 时刷新页面
    const handleLogoClick = () => {
        window.location.reload();
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

                <div className="hidden md:block">
                    <Link
                        href="#cta"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold rounded-full hover:from-gray-500 hover:to-gray-700 transition-colors duration-300"
                    >
                        Register Now
                    </Link>
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
                            <li>
                                <Link
                                    href="#cta"
                                    className="block text-center w-full px-3 py-2 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
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
