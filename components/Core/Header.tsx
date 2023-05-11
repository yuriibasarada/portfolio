"use client"

import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import { usePathname } from 'next/navigation'
import {Burger} from "@/components/Core/Burger";

export const Header = () => {
  const menu = [
    {name: '_Hello', path: '/'},
    {name: '_projects', path: '/projects'},
    {name: '_about-me', path: '/about-me'},
    {name: '_contact-me', path: '/contact-me'},
  ]

  const pathname = usePathname()

  const name = `<YuriiBasarada />`

  return ( <header className={`${styles.header} container`}>
      <nav className={styles.navigationDesktop}>
        <Link href='/profile' className={pathname === '/profile' ? styles.active : ''}>
          {name}
        </Link>
        <Burger menu={menu} />
        <ul>
          {menu.map(link => (
            <li key={link.name} className={pathname === link.path ? styles.active : ''}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
