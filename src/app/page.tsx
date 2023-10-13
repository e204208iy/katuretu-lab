import Image from "next/image";
import LgBento from "./component/lgBento";
export default function Menu(){
    return(
        <div className="md:px-12 lg:px-24">
            <div className="hidden lg:block pl-6 pb-5 pt-5">
                <p className="text-3xl pt-5 pb-2 text-gray-900 border-gray-300 border-b-2">鹿児島ブランド豚 <a className="text-5xl text-lime-600">茶美豚</a> を使った"とんかつ弁当"</p>
                <div className="pt-4">
                    <div className="leading-loose bg-amber-50 rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]">
                        <p className="text-2xl pb-3 pt-2 pl-2">茶美豚 -チャーミートン- の特徴</p>
                        <p className="px-2 pb-3 text-lg text-gray-600">緑茶粉末とお茶に含まれている成分「カテキン」「さつまいも」が入った飼料を食べて育った豚です。専用飼料を食べて育った豚はすくすくと育ちカテキンの効用である抗酸化作用や消臭作用により、肉の鮮度を保ち、かつ臭みが少なくビタミンEを強化しているためカテキンの抗酸化能力を高める効果があるといわれています。旨味成分であるイノシン酸が多く含まれておりジューシーであっさりしたおいしい豚肉です。</p>
                    </div>
                </div>
            </div>
            <div className="px-2 pb-2 lg:pt-6">
                <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2">おすすめメニュー</p>
            </div>
            <div className="lg:hidden pl-4 sx:pl-2">
                <p>鹿児島ブランド豚 <a className="text-lg">茶美豚</a> を使用した"とんかつ"弁当</p>
            </div>
            <div className="hidden lg:block">
                <LgBento />
            </div>
            <div className="px-4 pb-1">
                <div className="lg:hidden grid grid-cols-1 pt-3">
                    <div className="col-span-1 px-2">
                        <Image src="/rosubgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 lg:pt-0 xs:text-lg sx:text-xl md:text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl">ロース</p>
                            <p className="pl-2 pb-3">黒耀のとんかつ弁当　ロース</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ロース</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl">　</p>
                            <p className="px-2 pb-3">1,404円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 pt-4 lg:pt-5">
                        <Image src="/hirebgb.png" alt="Image 1" width={500} height={700} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="grid grid-cols-4 gap-1 pt-3 lg:pt-5 xs:text-lg sx:text-xl md:text-2xl">
                        <div className="col-span-3">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl">ヒレ</p>
                            <p className="pt-2 pl-2 pb-3">黒耀のとんかつ弁当　ヒレ</p>
                            <p className="pb-4 pl-2">黒耀のとんかつ弁当　特上ヒレ</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="font-medium pl-2 lg:pb-4 text-lg xs:text-2xl">　</p>
                            <p className="pt-2 px-2 pb-3">1,512円</p>
                            <p className="pb-4 px-2">2,160円</p>
                        </div>
                    </div>
                </div>
                <div className="px-2 pb-2 pt-6">
                    <p className="text-lg xs:text-2xl sx:text-xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2">カレー</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1">
                        <div className="px-2 pt-2">
                            <Image src="/carry1.png" alt="Image 1" width={500} height={700} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
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
                <div className="px-2 pb-2 pt-6">
                    <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2">レギュラーメニュー</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 pt-2 xs:text-lg md:text-2xl">
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-1 ">
                        <p className="p-2">メンチカツ弁当</p>
                        <p className="p-2">チキンカツ弁当</p>
                        <p className="p-2">Bigチキンカツ弁当</p>
                        <p className="p-2">竜田揚げ弁当</p>
                    </div>
                    <div className="text-right font-medium">
                        <p className="p-2">918円</p>
                        <p className="p-2">918円</p>
                        <p className="p-2">1,188円</p>
                        <p className="p-2">810円</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 pt-4 xs:text-lg md:text-2xl">
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-1">
                        <p className="p-2">ハンバーグ弁当</p>
                        <p className="p-2">ダブルハンバーグ弁当</p>
                    </div>
                    <div className="text-right font-medium">
                        <p className="p-2">918円</p>
                        <p className="p-2">1,350円</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
