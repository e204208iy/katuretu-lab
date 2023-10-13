import Image from "next/image";

export default function LgBento(){
    return(
            <div className="grid grid-cols-2 pt-3 pb-5">
                <div className="grid col-span-1 grid-cols-1 pr-4">
                    <div className="px-2">
                        <Image src="/rosubgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 pb-4 text-3xl">ロース</p>
                            <p className="pl-2 pb-3">黒耀のとんかつ弁当　ロース</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ロース</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 pb-4 text-3xl">　</p>
                            <p className="px-2 pb-3">1,404円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1 grid-cols-1">
                    <div className="px-2">
                        <Image src="/hirebgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 pb-4 text-3xl">ヒレ</p>
                            <p className="pl-2 pb-3">黒耀のとんかつ弁当　ヒレ</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ヒレ</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 pb-4 text-3xl">　</p>
                            <p className="px-2 pb-3">1,512円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}