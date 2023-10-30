import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/header'
import LgSidemenu from './component/lgSidemenu'
import Informetion from './component/informetion'
import Menuber from './component/menuber'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="inter.className">
        <div className='hidden md:block pb-3'>
          <Header />
        </div>
        <div className='md:hidden'>
          <Header />
        </div>
        <div className="lg:px-16">
          <Informetion />
        </div>
        <div className='lg:hidden'>
          <Menuber />
        </div>
        <div className="md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-8">
          <div className="sticky top-0 hidden lg:block col-span-2">
            <LgSidemenu />
          </div>
          <div className="col-span-6">
            {children}
          </div>
        </div>
        <div className='pt-8'>
          <Footer />
        </div>
        </body>
    </html>
  )
}
