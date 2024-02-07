import styles from '@/styles/skills.module.scss'
import React from "react";
import Image from "next/image";


interface IProps {
  skills: {
    _id: string,
    img: string,
    name: string
  }[]
}

export const SkillsBlock = ({skills}: IProps) => {
  return (
    <div className={styles.skills}>
      <span>_Skills</span>
      <ul>
        {skills.map(skill => <li>
          <Image width={95} height={100} alt={skill.name} src={`/assets/images/skills/${skill.img}`} />
        </li>)}
      </ul>
    </div>
  );
}