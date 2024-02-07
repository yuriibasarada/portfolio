'use client'

import styles from '@/styles/portfolio.module.scss'
import {ProjectItem} from "@/components/portfolio/ProjectItem";
import {Project} from "@/utils/@types/Interfaces";
import Image from "next/image";
import {Modal} from "@/components/portfolio/Modal";
import {useRef, useState} from "react";

interface iProps {
  projects: [Project]
}

export const ProjectItems = ({projects}: iProps) => {
  const [currentProject, setCurrentProject] = useState<Project | undefined>()
  const openModal = (index: number) => {
    const project = projects[index]
    setCurrentProject(project)
  }

  return (
    <div className={`${styles.items} ${currentProject && styles.visible}`}>
      <div className={styles.portfolioBlock}>
        {projects.map((project, index) =>
          <ProjectItem key={index} project={project} index={index} onClick={(n) => openModal(n)}/>
        )}
      </div>
      {currentProject !== undefined && <Modal project={currentProject} close={() => setCurrentProject(undefined)} /> }
      <Image src='/assets/images/scroll.png' alt={'scroll Yurii Basarada projects'} height={35} width={35}/>
    </div>
  )
}