"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="relative">
            <div className="py-4 px-4 md:px-10 lg:px-16 flex justify-between items-center border-y-2 
                border-y-white w-full absolute top-0 left-0 text-white font-bold
                capitalize text-lg z-10">
                {/* overlay */}
                <div className="absolute left-0 top-0 w-full h-full nav-overlay -z-10" />

                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    className="w-40"
                    width={596}
                    height={418}
                    alt=''
                    priority
                />

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-8 uppercase">
                    <li>
                        <Link href="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            contact us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Nav */}
                <svg width="40px" height="40px" className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <ul className={`${isOpen ? "block" : "hidden"} lg:hidden absolute right-4 
                    md:right-10 lg:right-16 top-full p-4 bg-black/80 uppercase`}>
                    <li>
                        <Link href="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            contact us
                        </Link>
                    </li>
                </ul>

                {/* Phone Icon & Number */}
                <div className="hidden lg:flex items-center">
                    <span className="py-2 border-r border-r-white pr-3 mr-4">
                        <Image
                            src="/images/phone.png"
                            className="w-8 inline"
                            width={596}
                            height={418}
                            alt=''
                            priority
                        />
                    </span>
                    <a href="tel:638999888">+252 63 8999888</a>
                </div>
            </div>
        </nav>
    )
}
