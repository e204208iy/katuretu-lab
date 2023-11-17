import Image from "next/image";
import LgBento from "./component/lgBento";
import LgCarry from "./component/LgCarry";
export default function Menu(){
    return(
        <div>
        <div className="px-2 pb-2 lg:pt-6 text-gray-700">
            <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2 tracking-wider">おすすめメニュー</p>
        </div>
        <div className="hidden lg:block">
            <LgBento />
        </div>
        <div className="px-1 pb-1">
            <div className="lg:hidden grid grid-cols-2 pt-3 gap-1">
                <div className="col-span-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <Image src="/rosubgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="p-1 px-1">
                            <div className="pt-1 lg:pt-0 md:text-xl">
                                <div className="px-1">
                                    <p className="">黒耀のとんかつ弁当</p>
                                    <p className="pb-2">ロース</p>
                                    <p className="font-extrabold">1,404円</p>
                                </div>
                                <div className="px-1 pt-4">
                                    <p className="">黒耀のとんかつ弁当</p>
                                    <p className="pb-2">特上ロース</p>
                                    <p className="font-extrabold pb-3">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                        <Image src="/hirebgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="p-1 px-1">
                            <div className="pt-1 lg:pt-0 md:text-xl">
                                <div className="px-1">
                                    <p className="">黒耀のとんかつ弁当</p>
                                    <p className="pb-2">ヒレ</p>
                                    <p className="font-extrabold">1,512円</p>
                                </div>
                                <div className="px-1 pt-4">
                                    <p className="">黒耀のとんかつ弁当</p>
                                    <p className="pb-2">特上ヒレ</p>
                                    <p className="font-extrabold pb-3">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 pb-2 pt-6 text-gray-700">
                <p className="text-lg xs:text-2xl sx:text-xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2 tracking-wider">カレー</p>
            </div>
            <div className="hidden lg:block">
                <LgCarry />
            </div>
            <div className="lg:hidden grid grid-cols-1 lg:grid-cols-2 px-4">
                <div className="col-span-1">
                    <div className="px-2 pt-2">
                        <Image src="/carry1.png" alt="Image 1" width={500} height={700} unoptimized={true} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="px-2 pt-1">
                        <p className="text-sm md:text-lg">※カレーは全て千切りキャベツ付き</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 pt-2 xs:text-lg sx:text-xl md:text-2xl leading-loose">
                    <div className="col-span-2">
                        <p className="p-2 lg:pb-9">ロースカツカレー弁当</p>
                        <p className="p-2 lg:pb-9">ヒレカツカレー弁当</p>
                        <p className="p-2 lg:pb-9">チキンカツカレー弁当</p>
                        <p className="p-2">メンチカツカレー弁当</p>
                    </div>
                    <div className="text-right font-medium">
                        <p className="p-2 lg:pb-9">1,404円</p>
                        <p className="p-2 lg:pb-9">1,404円</p>
                        <p className="p-2 lg:pb-9">1,296円</p>
                        <p className="p-2 lg:pb-9">1,296円</p>
                    </div>
                </div>
            </div>
            <div className="px-2 pb-2 pt-6 text-gray-700">
                <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2 tracking-wider">レギュラーメニュー</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4">
                <div className="col-span-1">
                    <div className="px-2 pt-2">
                        <Image src="/mentibgb.png" alt="Image 1" width={500} height={700} unoptimized={true} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 pt-2 xs:text-lg sx:text-xl md:text-2xl leading-loose">
                    <div className="col-span-2 px-3">
                        <p className="p-2">茶美豚ロースカツ弁当</p>
                        <p className="p-2">生姜焼き弁当　ロース</p>
                        <p className="p-2">生姜焼き弁当　ヒヒレ</p>
                        <p className="p-2">メンチカツ弁当</p>
                        <p className="p-2">チキンカツ弁当</p>
                        <p className="p-2">Bigチキンカツ弁当</p>
                        <p className="p-2">竜田揚げ弁当</p>
                        <p className="p-2">ハンバーグ弁当</p>
                        <p className="p-2">ダブルハンバーグ弁当</p> 
                    </div>
                    <div className="text-right font-medium px-3">
                        <p className="p-2">950円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">1,188円</p>
                        <p className="p-2">810円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">1,350円</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
