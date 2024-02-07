import styles from '@/styles/portfolio.module.scss'
import {ProjectItem} from "@/components/portfolio/ProjectItem";

export const ProjectItems = () => {
  return (
    <div className={styles.items}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  )
}