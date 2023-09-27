
export default function Drink(){
    return(
        <div className="md:px-12 lg:px-24">
            <div className="px-4">
                <div className="px-2 pb-2 lg:pt-6">
                    <p className="text-lg xs:text-2xl font-medium pl-2 pt-4 border-gray-300 border-b-2">ドリンク</p>
                </div>
                <div className="grid grid-cols-4 gap-1 xs:text-lg md:text-2xl">
                    <div className="col-span-3">
                        <p className="p-2">黒ウーロン茶</p>
                        <p className="p-2">かごしま緑茶</p>
                        <p className="p-2">綾鷹</p>
                        <p className="p-2">PREMIUM　BOSS</p>
                        <p className="p-2">メロンクリームソーダ</p>
                    </div>
                    <div className="text-right font-medium">
                        <p className="p-2">378円</p>
                        <p className="p-2">162円</p>
                        <p className="p-2">162円</p>
                        <p className="p-2">162円</p>
                        <p className="p-2">162円</p>
                    </div>
                </div>
            </div>
        </div>
    );
}