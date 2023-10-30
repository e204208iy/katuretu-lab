import Image from "next/image";


export default function Sidemenu(){
    return(
        <div>
            <div className="px-2">
                <div className="px-2 pb-2 lg:pt-6">
                    <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2">おすすめメニュー</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="flex justify-center pt-2">
                        <Image src="/korokke.jpg" alt="Image 1" width={300} height={300} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="col-span-2 grid grid-cols-4 gap-1 pt-2 xs:text-lg md:text-2xl">
                        <div className="col-span-3">
                            <p className="p-2">無添加ポテトコロッケ (2個)</p>
                            <p className="p-2">無添加黒毛和牛ポテトコロッケ (2個)</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="p-2">324円</p>
                            <p className="p-2">324円</p>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:pt-8">
                    <div className="col-span-1 hidden md:block">
                    </div>
                    <div className="col-span-1 flex justify-center pt-2">
                        <Image src="/tatuta.JPG" alt="Image 1" width={300} height={300} className="rounded-md shadow-[0_2px_5px_0_rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="col-span-2 grid grid-cols-4 gap-1 xs:text-lg md:text-2xl">
                        <div className="col-span-3">
                            <p className="p-2">チキンナゲット（5個）</p>
                            <p className="p-2">Ageたこ焼き（6個）</p>
                            <p className="p-2">ひとくちカツ（5～6個）</p>
                            <p className="p-2">【単品】竜田揚げ（5～6個）</p>
                        </div>
                        <div className="text-right font-medium">
                            <p className="p-2">324円</p>
                            <p className="p-2">432円</p>
                            <p className="p-2">540円</p>
                            <p className="p-2">540円</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-4 gap-1 xs:text-lg md:text-2xl lg:pt-8">
                    <div className="col-span-3 lg:col-span-2">
                        <p className="p-2">【単品】ロースカツ/メンチカツ</p>
                        <p className="p-2">【単品】カキフライ3粒</p>
                        <p className="p-2">皮付きフライドポテト（約150グラム）</p>
                    </div>
                    <div className="col-span-1 text-right font-medium">
                        <p className="p-2">594円</p>
                        <p className="p-2">972円</p>
                        <p className="p-2">324円</p>
                    </div>
                    <div className="hidden lg:block col-span-1">
                    </div>
                </div>
            </div>
        </div>
    );
}