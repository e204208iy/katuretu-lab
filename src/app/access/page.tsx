import Image from "next/image";

export default function Access(){
    return(
        <div>
            <div className="px-2 pb-2 pt-6 text-gray-700">
                <p className="text-lg xs:text-2xl md:text-3xl font-medium pl-2 pt-4 border-gray-300 border-b-2 tracking-wider">お店の場所</p>
            </div>
            <div className="iframe-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13335.438632448797!2d130.51288785709508!3d33.32248430500483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a510d6a3e2eb%3A0x5fc1ac4165436c6d!2z44GL44Gk44KM44GkTGFiLum7kuiAgA!5e0!3m2!1sja!2sjp!4v1700228668387!5m2!1sja!2sjp" width="600" height="450"  loading="lazy"></iframe>
            </div>
        </div>
    )
}