import Image from "next/image";

export default function DHeader(){
    return(
        <div>
            <header className="p-header flex">
                <div className="flex-1 w-32">
                    <p className="text-white text-bold text-2xl p-4">かつれつLab.黒耀</p>
                </div>
                <div className="flex-1 w-64">
                    <nav className="p-header-nav">
                        <div className="text-lg flex flex-row">
                            <div>アクセス</div>
                            <div>仕出し</div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}