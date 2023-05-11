import styles from '@/styles/home.module.scss'
import coreStyle from '@/styles/core.module.scss'
import Typewriter from 'typewriter-effect';
import {Button} from "@/components/Core/Button";
import {IDownload} from "@/components/svg/IDownload";
import Image from "next/image";
import {TuboLand} from "@/components/Core/TuboLand";

export const Detail = () => {
  return (
    <div className={styles.detail}>
      <Image
        src='/assets/images/land.png'
        width={95}
        height={85}
        alt='Yurii Basarada resume'
      />
      <TuboLand className={coreStyle.tubo} />
      <h1>Hi all. I am</h1>
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Yurii Basarada')
              .pauseFor(2500)
              .start();
          }}
        />
      </h2>
      <h3>{'>'} Full Stack developer</h3>
      <p className={`${styles.comment} ${styles.pressX}`}>// welcome to my portfolio, press X</p>
      <p className={styles.comment}>// you can also see my projects on my Github page</p>
      <p className={styles.const}>
        <span className={styles.purple}>const </span>
        <span className={styles.green}>githubLink</span> =
        <a  target='_blank' href='https://github.com/yuriibasarada' className={styles.orange}>
          <span className={styles.full}> “https://github.com/yuriibasarada”</span>
          <span className={styles.short}> “@yuriibasarada”</span>
        </a>
      </p>
      <Button style={{marginTop: '40px'}}>
        <IDownload />
        resume
      </Button>
    </div>
  )
}