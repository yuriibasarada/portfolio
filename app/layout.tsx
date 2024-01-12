import '@/styles/global.scss'
import styles from '@/styles/layout.module.scss'
import { Fira_Code } from 'next/font/google'
import {Header} from "@/components/Core/Header";
import {Burger} from "@/components/Core/Burger";

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Yurii Basarada: Web Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={styles.layout} lang="en">
      <body className={firaCode.className}>
      <Header />
      <main>
          {children}
        </main>
      </body>
    </html>
  )
}
