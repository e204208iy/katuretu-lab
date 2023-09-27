'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }
    const nonactiveStyle = " md:hidden flex justify-center pr-5 hamburger "
    const activeStyle = " md:hidden flex justify-center pr-5 hamburger active "
    
    return(
        <div>
            <div className="top-0 z-50 shadow-md pt-2 bg-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex justify-start">
                        <Link href="/">
                            <Image src="/logo.jpg" alt="log" width={50} height={50} className="pl-3 pb-2 w-10 h-10 xs:w-14 xs:h-14 md:w-14 md:h-14" />
                        </Link>
                    </div>
                    <div onClick={() => menuFunction()} className={openMenu ? activeStyle : nonactiveStyle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="z-40 flex justify-end pt-1">
                <div className="flex justify-end">
                    {openMenu ? (
                    <div className='z-40 fixed bg-white ease-linear w-4/6 h-full sticky'>
                        <div className=''>
                            <ul className='text-start pt-6 pl-2'>
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