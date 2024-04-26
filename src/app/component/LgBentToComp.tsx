import Image from "next/image";

export default function LgBentoToComp(){
    return(
            <div className="grid grid-cols-2 gap-3 pt-3 pb-5">
                <div className="grid col-span-1 grid-cols-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#">
                            <Image src="/rosubgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold text-gray-900 tracking-wider">ロースカツ弁当</h5>
                            </a>
                            <div className="grid grid-cols-4 gap-1 pt-3 lg:pt-0 md:text-xl">
                                <div className="col-span-3">
                                    <p className="pl-2 pb-3">黒耀のとんかつ弁当　ロース</p>
                                    <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ロース</p>
                                </div>
                                <div className="text-right font-medium">
                                    <p className="px-2 pb-3">1,404円</p>
                                    <p className="pb-4 px-2">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1 grid-cols-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#">
                        <Image src="/hirebgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold text-gray-900 tracking-wider">ヒレカツ弁当</h5>
                            </a>
                            <div className="grid grid-cols-4 gap-1 md:text-xl">
                                <div className="col-span-3">
                                    <p className="pt-2 pl-2 pb-3">黒耀のとんかつ弁当　ヒレ</p>
                                    <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ヒレ</p>
                                </div>
                                <div className="text-right font-medium">
                                    <p className="pt-2 px-2 pb-3">1,512円</p>
                                    <p className="pb-4 px-2">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}