import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="rounded-sm shadow p-2 border-t border-gray-500 px-16">
                <div className="">
                    <ul className="text-md font-medium">
                        <li className="pt-5">
                            <Link href="/">
                                こだわり
                            </Link>
                        </li>
                        <li className="py-6">
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
                    <p className="pt-4">@ 2023 かつれつLab.黒耀</p>
                </div>
            </div>
        </div>
    )
}