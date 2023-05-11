"use client";
import styles from '@/styles/home.module.scss'
import {Detail} from "@/components/home/Detail";
import {HomeImages} from "@/components/home/HomeImages";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.homeWrapper}>
          <Image className={styles.land} src='/assets/images/land_4.png' alt='Land from Yurii Basarada' width={110} height={100} />
          <Image className={styles.cloud1} src='/assets/images/cloud_1.png' alt='Cloud' width={500} height={260}/>
          <Image className={styles.cloud2} src='/assets/images/cloud_2.png' alt='Small Cloud' width={385} height={202} />

          <div className={`${styles.home} container`}>
            <Detail />
            <HomeImages />
          </div>
        </div>
    )
}