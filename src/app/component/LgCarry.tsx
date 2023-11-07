import Image from "next/image";

export default function LgCarry(){
    return(
        <div>
            <div className="grid grid-cols-2 items-center bg-white border border-gray-200 rounded-lg shadow">
                <div className="col-span-1">
                    <Image className="object-cover rounded-t-lg h-96 md:rounded-none md:rounded-l-lg" src="/carry1.png" alt="" width={1000} height={1000} unoptimized={true} />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="grid grid-cols-2 text-2xl">
                        <div>
                            <p className="pb-7 tracking-tight text-gray-900 dark:text-white">ロースカツカレー弁当</p>
                            <p className="pb-7 tracking-tight text-gray-900 dark:text-white">ヒレカツカレー弁当</p>
                            <p className="pb-7 tracking-tight text-gray-900 dark:text-white">チキンカツカレー弁当</p>
                            <p className="pb-7 tracking-tight text-gray-900 dark:text-white">メンチカツカレー弁当</p>
                        </div>
                        <div className="pl-20">
                            <p className="pb-7 text-gray-700 dark:text-gray-400 font-bold">1,404円</p>
                            <p className="pb-7 text-gray-700 dark:text-gray-400 font-bold">1,404円</p>
                            <p className="pb-7 text-gray-700 dark:text-gray-400 font-bold">1,296円</p>
                            <p className="pb-7 text-gray-700 dark:text-gray-400 font-bold">1,296円</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}