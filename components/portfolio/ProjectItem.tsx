import styles from '@/styles/portfolio.module.scss'
import {Project} from "@/utils/@types/Interfaces";
import Image from "next/image";

interface iProps {
  project: Project,
  index: number,
  onClick: (index: number) => void
}

export const ProjectItem = ({project, index, onClick}: iProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <span>Project {index + 1} </span><span>// _{project.title}</span>
      </div>
      <div className={styles.body} onClick={() => onClick(index)}>
        <Image className={styles.tag} src={`/assets/images/tags/${project.tag}.png`} alt={project.tag} height={30} width={30}/>
        <div className={styles.img}>
          <Image src={`/assets/images/portfolio/${project.name}/desktop.png`} alt={project.title} width={350} height={150}/>
        </div>
        <div className={styles.description}>
          <p>{project.short_description}</p>
          <span className={styles.button}>
            view-project
          </span>
        </div>
      </div>
    </div>
  )
}