import styles from '@/styles/burger.module.scss'

import Link from "next/link";
import {usePathname} from "next/navigation";

export const Burger = ({menu}) => {
  const pathname = usePathname()
  return (
    <div className={styles.burger} role='navigation'>
      <div>

        <input type="checkbox"/>

        <span />
        <span />
        <span />

        <ul>
          {menu.map(link => (
            <li key={link.name} className={pathname === link.path ? styles.active : ''}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}