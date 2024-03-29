'use server'

import styles from "@/styles/skills.module.scss";
import Image from "next/image";
import {Person} from "@/components/about/Person";
import {SkillsBlock} from "@/components/skills/SkillsBlock";
import {getSkills} from "@/app/actions";

export default async function Skills() {
  const skills = await getSkills();

  return (
    <div className={styles.skillsWrapper}>
      <div className="container">

        <Person className={styles.person} showDate={false}  />

        <SkillsBlock skills={skills} />

      </div>


      <Image className={styles.cloud1} src='/assets/images/cloud_2.png' alt='Small Cloud' width={385} height={202} />
      <Image className={styles.cloud2} src='/assets/images/cloud_1.png' alt='Cloud' width={500} height={260}/>
      <Image className={styles.cloud3} src='/assets/images/cloud_2.png' alt='Small Cloud' width={214} height={113} />

      <Image className={styles.rightLend} src='/assets/images/land_2_copy.png' alt='PHP Developer Land'
             width={200} height={136} />
      <Image className={styles.tubo} src='/assets/images/tubo.png' alt='Land tubo' width='84' height='94' />

      <Image className={styles.land} src='/assets/images/land_computer.png' alt='Land computer' width='300' height='233' />

    </div>
  )
}