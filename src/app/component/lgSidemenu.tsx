'use client';
import { useState } from "react";
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
        <div>
            <div className="flex flex-col text-md pt-10 pr-7">
                <p className="py-2 search-content">すべてのメニュー</p>
                <div className="font-medium text-gray-500">
                    <ul>
                        <li>
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isBentoActive} onChange={handleBentoChange} />
                                <span className="flex radio__label">
                                    <p className="radio__label-icon"></p>
                                    <p className="pl-2">お弁当</p>
                                </span>
                            </label>
                        </li>
                        <li className="py-4">
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isSideActive} onChange={handleSideChange} />
                                <span className="flex radio__label">
                                    <span className="radio__label-icon pr-1"></span>
                                    <span className="pl-2">サイドメニュー</span>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="radio">
                                <input type="radio" value="ALL" checked={isCompActive} onChange={handleCompChange} />
                                <span className="flex radio__label">
                                    <span className="radio__label-icon pr-1"></span>
                                    <span className="pl-2">仕出し・企業様</span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}