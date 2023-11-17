'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }
    const nonactiveStyle = " md:hidden flex justify-center pr-5 hamburger z-50"
    const activeStyle = " md:hidden flex justify-center pr-5 hamburger active z-50"
    
    return(
        <div>
            <div className="z-50 shadow-md pt-2 bg-white">
                <div className="z-50 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="z-50 flex justify-start">
                        <div>
                            <Link href="/">
                                <Image src="/logo.jpg" alt="log" unoptimized={true} width={60} height={60} className="pl-3 pb-2 w-10 h-10 xs:w-14 xs:h-14 md:w-16 md:h-16" />
                            </Link>
                        </div>
                        <div className="z-50 hidden md:block pt-4 pl-10">
                            <ul className="z-50 flex tracking-wider font-medium text-gray-600">
                                <li className="pr-10">
                                    <Link href="/">
                                        こだわり
                                    </Link>
                                </li>
                                <li className="pr-10">
                                    <Link href="/company">
                                        仕出し・企業様
                                    </Link>
                                </li>
                                <li className="pr-20">
                                    <Link href="/access">
                                        お店の場所
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-xl tracking-widest font-medium text-gray-600 pr-5">かつれつLab.黒耀</p>
                    </div>
                    <div onClick={() => menuFunction()} className={openMenu ? activeStyle : nonactiveStyle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="z-40 flex justify-end pt-1">
                <div className="z-40 flex justify-end">
                    {openMenu ? (
                    <div className='z-40 fixed bg-white w-5/6 h-full top-0 transition-all -translate-x duration-1000'>
                        <div className='z-40'>
                            <ul className='z-40 text-start pt-6 pl-2'>
                                <li className="pl-3 py-5 text-lg font-medium text-gray-600">
                                    <Link href="/access" onClick={() => menuFunction()}>お店の場所</Link>
                                </li>
                                <li className="pl-3 py-5 text-lg font-medium text-gray-600">
                                    <Link href="/company" onClick={() => menuFunction()}>企業様</Link>
                                </li>
                                <li className="pl-3 py-5 text-lg font-medium text-gray-600">
                                    <Link href="/" onClick={() => menuFunction()}>お弁当</Link>
                                </li>
                                <li className="pl-3 pb-5 text-lg font-medium text-gray-600" onClick={() => menuFunction()}>
                                    <Link href="/sidemenu">サイドメニュー</Link>
                                </li>
                                <li className="pl-3 text-lg font-medium text-gray-600" onClick={() => menuFunction()}>
                                    <Link href="/drink">ドリンク</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ) : undefined}
                </div>
            </div>
        </div>
    );
}