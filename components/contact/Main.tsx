import styles from '@/styles/contact.module.scss'
import Link from "next/link";
import Image from "next/image";
import {CodeBlock} from "@/components/about/CodeBlock";

export const Main = () => {
  return (
    <div className={styles.contactMainWrapper}>
      <div className={styles.contactMainSubWrapper}>
        <div className={styles.contactMain}>
          <div>
            <div>
              <span className={styles.purple}>.contactMe </span><span>{'{'}</span><br/><br className={styles.newLine}/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>e-mail: </span><Link target='_blank'
                                                                                    href={`mailto: ${process.env.EMAIL}`}>{process.env.EMAIL}</Link><span>,</span><br/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>phone: </span>
              <Link target='_blank' className={styles.phone}
                    href={`tel: ${process.env.PHONE}`}>{process.env.PHONE_TEXT}</Link><br/> <br
              className={styles.newLine}/>
              <span>{'}'}</span>
            </div>
            <div>
              <span className={styles.purple}>.SocialMedia </span><span>{`{`}</span><br/><br
              className={styles.newLine}/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>instagram: </span>
              <Link target='_blank' href={process.env.INSTAGRAM!}>{process.env.INSTAGRAM_TEXT}</Link><span>,</span><br/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>gitHub: </span>
              <Link target='_blank' href={process.env.GITHUB!}>{process.env.GITHUB_TEXT}</Link><span>,</span><br/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>Linkedin: </span>
              <Link target='_blank' href={process.env.LINKEDIN!}>{process.env.LINKEDIN_TEXT}</Link><span>,</span><br/>
              &nbsp;&nbsp;&nbsp;<span className={styles.green}>YouTube: </span>
              <Link target='_blank' href={process.env.YOUTUBE!}>{process.env.YOUTUBE_TEXT}</Link><br/><br
              className={styles.newLine}/>
              <span>{`}`}</span>
            </div>
            <div></div>
          </div>
          <div className={styles.thankYou}>
            <h1>Thank you! 🤘</h1>
            <p>Programming my tech career like I
              <br/>always wanted.</p>
          </div>
        </div>
        <Image className={styles.leftLend} src='/assets/images/land_3.png' alt='JavaScript Developer Land'
               width={70} height={55}/>

        <CodeBlock stars={3} style={styles.code1}>
          <Image src='/assets/images/code1.png' alt='TypeScript code example'
                 width={280} height={90}/>
        </CodeBlock>
        <CodeBlock stars={3} style={styles.code2}>
          <Image src='/assets/images/code2.png' alt='TypeScript code example'
                 width={330} height={80}/>
        </CodeBlock>
        <CodeBlock stars={3} style={styles.code3}>
          <Image src='/assets/images/code3.png' alt='TypeScript code example'
                 width={200} height={65}/>
        </CodeBlock>
      </div>
    </div>
  )
}