"use client"; 
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FiLogOut } from 'react-icons/fi';


const DashboardHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`navbar w-full bg-blue-800 font-normal text-white text-sm p-4 md:p-6 flex justify-between items-center transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full shadow-lg z-50 rounded-none' : 'rounded-md'}`}>
                <div className="flex items-center">
                    {!isOpen && (
                        <div className="text-lg font-bold">
                            <Link href="./">Logo</Link>
                        </div>
                    )}
                    <button
                        className="md:hidden text-white focus:outline-none ml-4"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex items-center gap-10 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 mx-auto`}>
                    <li className="py-2 md:py-0">
                        <Link href="./">Dashboard</Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="./dashboard/counsellors">Counsellors</Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="./dashboard/chats">Chats</Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="./dashboard/mydairy">My Diary</Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="./">Blogs</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img src="https://via.placeholder.com/150" alt="User Profile" className="h-full w-full object-cover" />
                        </div>
                        <span className="hidden md:block">Username</span>
                    </div>
                    <button className="text-white hover:text-gray-300 flex items-center">
                        <FiLogOut size={20} className="mr-1" />
                        <span className="hidden md:block">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;
