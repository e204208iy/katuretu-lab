'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menuber(){
    const currentRoute = usePathname();

    const linkStyle = 'flex text-center text-sm xs:text-lg md:text-2xl pt-1 px-1 text-gray-700 rounded-t-md lg:w-64'; 

    // styles for active and non-active links
    const activeStyle = linkStyle + " font-medium border-gray-400 border-x-2 border-t-2 text-white li-pseudo"; 
    const nonActiveStyle = linkStyle + " font-semibold pt-3 px-3 text-gray-500 border-gray-200 border-x-2 border-t-2 ";

    const activeLi = " bg-red-600 px-3 py-2 rounded-t-md w-full"
    const nonActiveLi = " rounded-t-md w-full"
    return(
        <div className="">
            <div className="justify-between items-center w-ful pt-4 ul-pseudo">
                <ul className="flex justify-center">
                    <li className="flex">
                        <Link href="/" className={currentRoute === '/' ? activeStyle : nonActiveStyle}>
                            <p className={currentRoute === '/' ? activeLi : nonActiveLi}>お弁当</p>
                        </Link>
                    </li>
                    <li className="flex px-1">
                        <Link href="/sidemenu" className={currentRoute === '/sidemenu' ? activeStyle : nonActiveStyle}>
                            <p className={currentRoute === '/sidemenu' ? activeLi : nonActiveLi}>サイドメニュー</p>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link href="/company" className={currentRoute === '/company' ? activeStyle : nonActiveStyle}>
                            <p className={currentRoute === '/company' ? activeLi : nonActiveLi}>仕出し・企業様</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}