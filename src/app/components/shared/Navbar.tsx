"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#0d0e12] border-b border-gray-800/60 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
                
                {/* Logo & Brand Name */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image src={logo} alt="FITLOG Logo" width={28} height={28} className="object-contain" />
                    <span className="text-xl font-black tracking-wider uppercase">FITLOG</span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2 text-sm">
                        <li>
                            <Link 
                                href="/" 
                                className="bg-[#1c2c08] text-[#a3e635] px-4 py-1.5 rounded-full font-medium transition-colors"
                            >
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/my-plan" 
                                className="text-gray-400 hover:text-white px-4 py-1.5 rounded-full font-medium transition-colors"
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                {/* Desktop Badges */}
                <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 font-medium">
                    <div className="flex items-center gap-2">
                        <span>Plan</span>
                        <span className="bg-[#ccff00] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Saved</span>
                        <span className="bg-[#1f242d] text-gray-300 border border-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </div>
                </div>

                {/* Mobile Right Bar (Badges preview + Hamburger toggle) */}
                <div className="flex md:hidden items-center gap-3">
                    {/* Quick Badge View on Mobile */}
                    <div className="flex items-center gap-3 text-xs text-gray-300 pr-2 border-r border-gray-800">
                        <div className="flex items-center gap-1">
                            <span>Plan</span>
                            <span className="bg-[#ccff00] text-black font-bold rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                                0
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>Saved</span>
                            <span className="bg-[#1f242d] text-gray-300 border border-gray-700 font-bold rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                                0
                            </span>
                        </div>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-white p-1 focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            /* Close Icon */
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            /* Hamburger Icon */
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#13161c] border-b border-gray-800 px-4 py-4 space-y-4">
                    <nav className="flex flex-col gap-2">
                        <Link 
                            href="/" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-[#1c2c08] text-[#a3e635] px-4 py-2.5 rounded-lg font-medium text-sm text-center transition-colors"
                        >
                            Workouts
                        </Link>
                        <Link 
                            href="/my-plan" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-300 hover:bg-gray-800/50 px-4 py-2.5 rounded-lg font-medium text-sm text-center transition-colors"
                        >
                            My Plan
                        </Link>
                    </nav>

                    <div className="pt-2 border-t border-gray-800/80 flex justify-around text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <span>Plan</span>
                            <span className="bg-[#ccff00] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Saved</span>
                            <span className="bg-[#1f242d] text-gray-300 border border-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;