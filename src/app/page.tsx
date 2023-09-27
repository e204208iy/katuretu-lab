import MainSlider from "./component/mainSlider"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="md:hidden w-full h-full pt-2">
        <MainSlider />
      </div>
      <div className="hidden md:block pt-5">
        <div className="flex justify-center">
          <Image src="/about_04.jpg" alt="Image 1" width={600} height={600}/>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center md:hidden">
          <p className="text-gray-600 text-xl xs:text-2xl md:text-4xl pt-10 pl-2 pb-3 font-extrabold">鹿児島ブランド豚<a className="text-2xl font-extrabold"> 茶美豚 </a></p>
        </div>
        <div className="flex justify-center">
          <div className="hidden md:block">
            <p className="text-3xl pt-5 pb-8 text-gray-600">鹿児島ブランド豚 <a className="text-5xl text-lime-600">茶美豚</a> を使った"とんかつ弁当"</p>
          </div>
        </div>
        <div className="flex justify-center pb-1">
          <Image src="/pig.jpg" alt="alt" width={2000} height={2000} className="rounded-lg w-10/12 md:w-7/12"/>
        </div>
        <div className="justify-center xs:text-lg md:hidden">
          <p className="text-gray-700 pb-6 px-10 opacity-90">茶美豚は「お茶」や「さつまいも」が入った飼料を食べて育った豚です。
              お茶のカテキンの効用で臭みが少なく、ジューシーであっさりしたおいしい豚肉です。</p>
        </div>
        <div className="flex justify-center">
          <div className="hidden justify-center md:block w-9/12 text-lg">
            <p className="text-gray-700 pb-6 px-10 opacity-90">緑茶粉末とお茶に含まれている成分「カテキン」「さつまいも」が入った飼料を食べて育った豚です。専用飼料を食べて育った豚はすくすくと育ちカテキンの効用である抗酸化作用や消臭作用により、肉の鮮度を保ち、かつ臭みが少なくビタミンEを強化しているためカテキンの抗酸化能力を高める効果があるといわれています。旨味成分であるイノシン酸が多く含まれておりジューシーであっさりしたおいしい豚肉です。</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/menu" className="bg-red-600 text-white text-xl xs:text-2xl px-8 py-1 rounded-md font-bold">お弁当はこちらから</Link>
      </div>
    </div>
  )
}
