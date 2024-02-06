import styles from '@/styles/about.module.scss'
import Image from "next/image";
import Link from "next/link";

interface IProps {
  showDate?: boolean
  className?: string
}

export const Person = ({showDate = true, className = ''}: IProps) => {
  // @ts-ignore
  return (
    <div className={`${styles.person} ${className}`}>
      <Link target='_blank' href={process.env.LINKEDIN!} className={styles.picture}>
        <div className={styles.gradient}></div>
        <Image className={styles.personPicture} width={135} height={135} src='/assets/images/yuriibasarada.jpeg'
               alt='Yurii Basarada photo'/>
        <div className={styles.border}></div>
        <div className={styles.borderWrap}></div>
      </Link>
      <div className={`${styles.info} ${showDate || styles.noDate}`}>
        <Link target='_blank' href={process.env.LINKEDIN!} className={`${styles.name} ${showDate || styles.noMargin}`}>
          @YuriiBasarada</Link>
        {showDate && <span className={styles.sub}>Created 02.01.2024</span>}
      </div>
    </div>
  )
}