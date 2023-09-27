import Informetion from "./component/informetion"
import Menuber from "./component/menuber"
import Footer from "../component/footer"
import Image from "next/image";

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="">
          <div className="lg:px-20">
            <Informetion />
          </div>
          <Menuber />
          {children}
          <Footer />
        </div>
    )
  }
  