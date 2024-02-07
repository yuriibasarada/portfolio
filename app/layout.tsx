import '@/styles/global.scss'
import styles from '@/styles/layout.module.scss'
import {Fira_Code} from 'next/font/google'
import {Header} from "@/components/Core/Header";

const firaCode = Fira_Code({subsets: ['latin']})

// @ts-ignore
export const metadata = {
  title: 'Yurii Basarada: Web Developer',
  description: 'Yurii Basarada Web Developer PHP/JS',
  generator: "Next.js",
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Yurii Basarada" },
    {
      name: "Yurii Basarada",
      url: process.env.LINKEDIN
    },
  ],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "images/icon-128x128.png" },
    { rel: "icon", url: "images/icon-128x128.png" },
  ],
  openGraph: {
    title: 'Yurii Basarada: Web Developer',
    description: 'Web Developer Yurii Basarada PHP/JS',
    url: process.env.URL,
    siteName: 'yuriibasarada',
    images: [
      {
        url: `${process.env.URL}/images/screenshot3.jpg`,
        width: 800,
        height: 600,
        type: 'image/jpeg',
        alt: 'Yurii Basarada Website medium'
      },
      {
        url: `${process.env.URL}/images/screenshot4.jpg`,
        width: 1800,
        height: 1600,
        type: 'image/jpeg',
        alt: 'Yurii Basarada Website large'
      },
      {
        url: `${process.env.URL}/images/icon-300x300.png`,
        width: 300,
        height: 300,
        type: 'image/png',
        alt: 'Yurii Basarada Website small'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html className={styles.layout} lang="en">
    <body className={firaCode.className}>
    <Header/>
    <main>
      {children}
    </main>
    </body>
    </html>
  )
}
