import Image from "next/image";

export default function LgBento(){
    return(
            <div className="grid grid-cols-3 gap-3">
                <div className="grid col-span-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image src="/rosubgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="px-3 pt-3">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold text-gray-900 tracking-wider">ロースカツ弁当</h5>
                            </a>
                            <div className="pt-3 lg:pt-0 md:text-lg">
                                <div className="col-span-3">
                                    <p className="pl-2 pb-1">黒耀のとんかつ弁当　ロース</p>
                                    <p className="px-2 pb-3 font-bold">1,404円</p>
                                    <p className="pl-2 pb-1">黒耀のとんかつ弁当　特上ロース</p>
                                    <p className="px-2 pb-3 font-bold">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <Image src="/hirebgb.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </a>
                        <div className="px-3 pt-3">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold text-gray-900 tracking-wider">ヒレカツ弁当</h5>
                            </a>
                            <div className="md:text-lg">
                                <div className="col-span-3">
                                    <p className="pl-2 pb-1">黒耀のとんかつ弁当　ヒレ</p>
                                    <p className="pb-3 pl-2 font-bold">1,512円</p>
                                    <p className="px-2 pb-1">黒耀のとんかつ弁当　特上ヒレ</p>
                                    <p className="pb-4 px-2 font-bold">2,160円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow">
                        <div>
                            <Image src="/kaki.png" alt="Image 1" width={1000} height={1000} className="rounded-t-md" unoptimized={true} />
                        </div>
                        <div className="px-3 pt-3">
                            <p>
                                <h5 className="mb-2 text-xl font-bold text-gray-900  tracking-wider">季節限定</h5>
                            </p>
                            <div className="md:text-lg">
                                <div className="">
                                    <p className="pl-2 pb-1">カキフライ弁当(3粒)</p>
                                    <p className="px-2 pb-3 font-bold">1,296円</p>
                                    <p className="pl-2 pb-1">カキフライ弁当(4粒)</p>
                                    <p className="px-2 pb-3 font-bold">1,674円</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}