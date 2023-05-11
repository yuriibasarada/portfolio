import '@/styles/global.scss'
import {layout} from '@/styles/layout.module.scss'
import { Fira_Code } from 'next/font/google'
import {Header} from "@/components/Core/Header";
import {Burger} from "@/components/Core/Burger";

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={layout} lang="en">
      <body className={firaCode.className}>
      <Header />
      <main>
          {children}
        </main>
      </body>
    </html>
  )
}