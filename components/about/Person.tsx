import styles from '@/styles/about.module.scss'
import Image from "next/image";

export const Person = () => {
  return (
    <div className={styles.person}>
      <div className={styles.picture}>
        <div className={styles.gradient}></div>
        <Image className={styles.personPicture} width={135} height={135} src='/assets/images/yuriibasarada.jpeg'
               alt='Yurii Basarada photo'/>
        <div className={styles.border}></div>
        <div className={styles.borderWrap}></div>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>@YuriiBasarada</span>
        <span className={styles.sub}>Created 02.01.2024</span>
      </div>
    </div>
  )
}