'use client';

import Link from 'next/link';
import logo from '../public/white.png'
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar () {

    const [isMainMenuDropdownOpen, setIsMainMenuDropdownOpen] = useState(false);
    const [isActive, setIsActive] = useState('');

    const toggleMainMenu = () => setIsMainMenuDropdownOpen(!isMainMenuDropdownOpen)
    const toggleActive = (buttonName) => setIsActive(buttonName)

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image src={logo} className="h-8 w-8 mr-3" alt="Logo" />
                    <span className="self-center text-xl font-indieflower whitespace-nowrap dark:text-white">Best Spots in Toronto</span>
                </Link>
                <div className="relative flex items-center md:order-2">
                    <button data-collapse-toggle="navbar-user" type="button" className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-user" aria-expanded={isMainMenuDropdownOpen} onClick={toggleMainMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`origin-top-right absolute right-0 top-full w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 lg:relative lg:w-auto lg:bg-transparent lg:ring-0 lg:mt-0 lg:shadow-none ${isMainMenuDropdownOpen ? 'block' : 'hidden'} lg:flex`} id="navbar-user">
                        <div className="py-1 lg:flex lg:flex-row lg:space-x-4 lg:items-center" role="menu" aria-labelledby="options-menu">
                            <Link href="/" role="menuitem">
                                <button className={`${isActive === 'home' ? 'bg-gray-100 text-gray-700' : 'text-white'} block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 max-lg:text-gray-700`} onClick={() => toggleActive('home')}>Home</button>
                            </Link>
                            <Link href="/about" role="menuitem">
                                <button className={`${isActive === 'about' ? 'bg-gray-100 text-gray-700' : 'text-white'} block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 max-lg:text-gray-700`} onClick={() => toggleActive('about')}>About</button>
                            </Link>
                            <Link href="/recipes" role="menuitem">
                                <button className={`${isActive === 'recipes' ? 'bg-gray-100 text-gray-700' : 'text-white'} block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 max-lg:text-gray-700`} onClick={() => toggleActive('recipes')}>Recipes</button>
                            </Link>
                            <Link href="/blog" role="menuitem">
                                <button className={`${isActive === 'blog' ? 'bg-gray-100 text-gray-700' : 'text-white'} block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 max-lg:text-gray-700`} onClick={() => toggleActive('blog')}>Blog</button>
                            </Link>
                            <Link href="/myprofile" role="menuitem">
                                <button className={`${isActive === 'myprofile' ? 'bg-gray-100 text-gray-700' : 'text-white'} block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 max-lg:text-gray-700`} onClick={() => toggleActive('myprofile')}>My Profile</button>
                            </Link>
                            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 lg:bg-transparent lg:text-white" role="menuitem">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}








