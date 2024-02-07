import styles from "@/styles/portfolio.module.scss";
import {TuboLand} from "@/components/Core/TuboLand";
import {CodeBlock} from "@/components/about/CodeBlock";
import Image from "next/image";
import {Head} from "@/components/about/Head";
import {ProjectItems} from "@/components/portfolio/ProjectItems";
import {getProjects} from "@/app/actions";

export default async function ContactMe() {
  const projects = await getProjects();

  return (
    <div className={styles.portfolioWrapper}>

      <div className="container">
        <Head className={styles.head}/>
        <ProjectItems projects={projects}/>
      </div>


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

      <Image className={styles.land} src='/assets/images/land_2.png' alt='PHP Developer Land'
             width={110} height={90}/>

      <TuboLand className={styles.tubo}/>
    </div>
  )
}