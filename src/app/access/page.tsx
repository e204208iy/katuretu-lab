import Image from "next/image";

export default function Access(){
    return(
        <div>
            <div className="px-2 pb-2 pt-6 text-gray-700">
                <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2 tracking-wider">お店の場所</p>
            </div>
            <Image className="" src="/map.png" alt="" width={500} height={500} unoptimized={true} />
        </div>
    )
}