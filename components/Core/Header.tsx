"use client"

import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import { usePathname } from 'next/navigation'
import {Burger} from "@/components/Core/Burger";
import {IMenuItem} from "@/utils/@types/Interfaces";
import {useState} from "react";

export const Header = () => {
  const menu: IMenuItem[] = [
    {name: '_Hello', path: '/'},
    {name: '_projects', path: '/portfolio'},
    {name: '_about-me', path: '/about-me'},
    {name: '_contact-me', path: '/contact-me'},
  ]

  const pathname = usePathname()

  const name = `<YuriiBasarada />`

  const [checked, check] = useState(false)

  return ( <header className={`${styles.header} container`}>
      <nav className={styles.navigationDesktop}>
        <Link onClick={() => check(false)} href='/skills' className={pathname === '/skills' ? styles.active : ''}>
          {name}
        </Link>
        {pathname}
        <Burger check={check} checked={checked}  menu={menu}/>
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
