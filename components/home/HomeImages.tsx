import styles from '@/styles/home.module.scss'
import {ComputerImages} from "@/components/Core/ComputerImages";
import Image from "next/image";

export const HomeImages = () => {
  return (
    <div className={styles.homeImagesWrapper}>
      <div className={styles.homeImages}>
        <ComputerImages />
        <Image className={styles.homeLand2} src='/assets/images/land_2.png' alt='PHP Developer Land'
               width={110} height={90} />
        <Image className={styles.homeLand3} src='/assets/images/land_3.png' alt='JavaScript Developer Land'
               width={70} height={55} />
      </div>
    </div>
  );
}