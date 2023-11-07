'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LgSidemenu(){
    const router = useRouter(); 

    const [isBentoActive, setBentoIsActive] = useState(true);
    const [isSideActive, setSideIsActive] = useState(false);
    const [isCompActive, setCompIsActive] = useState(false);
    const handleBentoChange = () => {
        router.push("/")
        setBentoIsActive(true);
		setSideIsActive(false);
        setCompIsActive(false);
	}
    const handleSideChange = () => {
        router.push("/sidemenu")
        setBentoIsActive(false);
		setSideIsActive(true);
        setCompIsActive(false);
	}
    const handleCompChange = () => {
        router.push("/company")
        setBentoIsActive(false);
		setSideIsActive(false);
        setCompIsActive(true);
	}
    return(
        <div className="pr-7">
            <div className="flex flex-col text-md pt-10">
                <p className="py-2 search-content">すべてのメニュー</p>
                <div className="font-medium text-gray-500">
                    <ul>
                        <li>
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isBentoActive} onChange={handleBentoChange} />
                                <span className="flex radio__label">
                                    <p className="radio__label-icon"></p>
                                    <p className="pl-2 tracking-wider">お弁当</p>
                                </span>
                            </label>
                        </li>
                        <li className="py-5">
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isSideActive} onChange={handleSideChange} />
                                <span className="flex radio__label">
                                    <span className="radio__label-icon pr-1"></span>
                                    <span className="pl-2 tracking-wider">サイドメニュー</span>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isCompActive} onChange={handleCompChange} />
                                <span className="flex radio__label">
                                    <span className="radio__label-icon pr-1"></span>
                                    <span className="pl-2 tracking-wider">仕出し・企業様</span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-10">
                <p className="py-2 search-content">その他</p>
                <ul className="pl-2 font-medium text-gray-500">
                    <li className="pb-6 tracking-wider">
                        <Link href="/contact">
                            ご予約・ご注文
                        </Link>
                    </li>
                    <li className="tracking-wider">
                        <Link href="/">
                            こだわり
                        </Link>
                    </li>
                    <li className="py-6 tracking-wider">
                        <Link href="/access">
                            お店の場所
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}