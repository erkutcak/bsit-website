import React from 'react'
import Link from 'next/link';
import logo from '../public/white.png'
import instagram from '../public/instagram.png'
import tiktok from '../public/tiktok.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between md:flex md:items-center md:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <Image src={logo} className="h-8 w-8 mr-3 md:h-10 md:w-10" alt="Logo" />
                        <span className="self-center lg:text-xl text-md sm:text font-bitter font-black whitespace-nowrap text-white">Best Spots in Toronto</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="https://www.instagram.com/bestspotsintoronto" className="mr-4 hover:underline md:mr-6" legacyBehavior>
                                <a className="mr-4 hover:underline md:mr-6 flex flex-row items-center" target="_blank" rel="noopener noreferrer">
                                    <Image src={instagram} className="h-4 w-4 mr-1" alt="Instagram"/>
                                    Instagram
                                </a>                 
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@bestspotsintoronto" className="mr-4 hover:underline md:mr-6" legacyBehavior>
                                <a className="mr-4 hover:underline md:mr-6 flex flex-row items-center" target="_blank" rel="noopener noreferrer">
                                    <Image src={tiktok} className="h-4 w-4 mr-1" alt="Tiktok"/>
                                    TikTok
                                </a>                 
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <p>bestspotsintoronto@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Best Spots in Toronto™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer