import styles from '@/styles/burger.module.scss'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {IMenuItem} from "@/utils/@types/Interfaces";
import {Dispatch, SetStateAction, useState} from "react";

interface Props {
  menu: IMenuItem[]
}

export const Burger = ({menu}: Props) => {
  const pathname = usePathname()
  const [checked, check] = useState(false)

  return (
    <div className={styles.burger} role='navigation'>
      <div>

        <input onChange={() => check(!checked)} type="checkbox" checked={checked}/>

        <span />
        <span />
        <span />

        <ul>
          {menu.map(link => (
            <li onClick={() => check(false)} key={link.name} className={pathname === link.path ? styles.active : ''}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}