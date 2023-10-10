import Image from "next/image";

export default function Company(){
    return(
        <div className="md:px-12 lg:px-24">
            <div className="px-4 pt-4 lg:pt-6">
                <p className="text-lg xs:text-2xl lg:text-3xl font-medium border-gray-300 border-b-2">企業様・法人様への仕出について</p>
                <div className="pt-3 lg:pt-5">
                    <div className="shadow-[0_2px_5px_0_rgba(0,0,0,0.3)] rounded-md">
                        <div className="p-2 lg:p-6">
                            <p className="pb-2 text-lg font-medium">配達可能エリアと最低注文料金</p>
                            <p className="">・合計10,000円～のご注文</p>
                            <p className="pl-6">久留米市</p>
                            <p className="pt-2">・合計20,000円～のご注文</p>
                            <p className="pl-6">大川市　筑後市　八女市</p>
                            <p className="pt-2">・合計25,000円～のご注文</p>
                            <p className="pl-6">筑紫野市　みやま市　柳川市</p>
                            <p className="pt-2">・合計40,000円～のご注文</p>
                            <p className="pl-6">大牟田市</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="shadow-[0_2px_5px_0_rgba(0,0,0,0.3)] rounded-md">
                            <div className="p-2 lg:p-6">
                                <p className="text-lg pb-2 font-medium">支払方法</p>
                                <p className="font-medium">現地でのクレジットカード決済可能！</p>
                                <Image src="/creca4.png" alt="Image 1" width={600} height={600} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="shadow-[0_2px_5px_0_rgba(0,0,0,0.3)] rounded-md">
                            <div className="hidden lg:block p-6">
                                <p className="text-lg pb-2 font-medium">キャンセルポリシー</p>
                                <p>前日キャンセル（12時まで）はご注文の50％、それ以降のキャンセルはご注文金額の100％を頂戴いたします。ただし、土日祝と店舗の定休日を除く。</p>
                            </div>
                            <div className="p-2 lg:hidden">
                                <p className="text-lg pb-2 font-medium">キャンセルポリシー</p>
                                <p>前日キャンセル（12時まで）はご注文の50％、それ以降のキャンセルはご注文金額の100％を頂戴いたします。ただし、土日祝と店舗の定休日を除く。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-7">
                    <p className="text-lg xs:text-2xl lg:text-3xl font-medium border-gray-300 border-b-2">当店のお弁当</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-3">
                    <div className="col-span-1 px-2">
                        <Image src="/rosubgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 lg:pt-0 xs:text-lg sx:text-xl md:text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl lg:text-3xl">ロース</p>
                            <p className="pl-2 pb-3">黒耀のとんかつ弁当　ロース</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ロース</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl lg:text-3xl">　</p>
                            <p className="px-2 pb-3">1,404円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 lg:pt-5">
                        <Image src="/hirebgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 lg:pt-5 xs:text-lg sx:text-xl md:text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl lg:text-3xl">ヒレ</p>
                            <p className="pt-2 pl-2 pb-3">黒耀のとんかつ弁当　ヒレ</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ヒレ</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl lg:text-3xl">　</p>
                            <p className="pt-2 px-2 pb-3">1,512円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}