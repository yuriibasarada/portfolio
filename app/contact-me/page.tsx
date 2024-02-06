import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import {ComputerImages} from "@/components/Core/ComputerImages";
import {Person} from "@/components/about/Person";
import {Main} from "@/components/contact/Main";

export default function About() {
  return (
    <div className={styles.contactWrapper}>
      <div className="container">
        <Person showDate={false} className={styles.person} />
        <Main />
      </div>

      <ComputerImages className={styles} />

      <Image className={styles.rightLend} src='/assets/images/land_2_copy.png' alt='PHP Developer Land'
             width={350} height={240} />
      <Image className={styles.tubo} src='/assets/images/tubo.png' alt='Land tubo' width='84' height='94' />
    </div>
  )
}