import styles from "@/styles/about.module.scss";
import {TuboLand} from "@/components/Core/TuboLand";
import Image from "next/image";
import {Head} from "@/components/about/Head";
import {CodeBlock} from "@/components/about/CodeBlock";
import {MainInfo} from "@/components/about/MainInfo";

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={`${styles.headBlock} container`}>
        <Head />
      </div>
      <MainInfo />

      <CodeBlock stars={3} style={styles.code1}>
        <Image className={styles.code1} src='/assets/images/code1.png' alt='TypeScript code example'
               width={280} height={90} />
      </CodeBlock>
      <CodeBlock stars={3} style={styles.code2}>
        <Image className={styles.code1} src='/assets/images/code2.png' alt='TypeScript code example'
               width={330} height={80} />
      </CodeBlock>
      <CodeBlock stars={3} style={styles.code3}>
        <Image className={styles.code1} src='/assets/images/code3.png' alt='TypeScript code example'
               width={200} height={65} />
      </CodeBlock>

      <TuboLand className={styles.tubo} />
      <Image className={styles.leftLend} src='/assets/images/land_2.png' alt='PHP Developer Land'
             width={110} height={90} />
      <Image className={styles.rightLend} src='/assets/images/land_3.png' alt='JavaScript Developer Land'
             width={70} height={55} />
    </div>
  )
}