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

            </div>
        </div>
    )
}