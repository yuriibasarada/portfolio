import styles from '@/styles/portfolio.module.scss'
import {Project} from "@/utils/@types/Interfaces";
import {IClose} from "@/components/svg/IClose";
import Image from "next/image";

interface iProps {
  project: Project | undefined,
  close: () => void
}

export const Modal = ({project, close}: iProps) => {
  return (
    <div className={styles.modalWrapper}>
      <div>
        <div className={styles.modalBody}>
          <div className={styles.topContent}>
            <ul className={styles.tags}>
              {project?.tags?.map((item, index) => <li key={index}>
                <Image src={`/assets/images/tags/${item}.png`} alt={item} width={30} height={30} />
              </li>)}
            </ul>
            <Image className={styles.scroll} src='/assets/images/scroll.png' alt={'scroll Yurii Basarada projects'} height={35} width={35}/>
          </div>
          <ul className={styles.images}>
            <li>
              <span>// _desktop</span>
              <Image width={350} height={150} src={`/assets/images/portfolio/${project?.name}/desktop.png`}
                     alt={`desktop ${project?.title}`}/></li>
            <li><span>// _tablet</span><Image width={350} height={150}
                                            src={`/assets/images/portfolio/${project?.name}/tablet.png`}
                                            alt={`desktop ${project?.title}`}/></li>
            <li><span>// _mobile</span><Image width={350} height={150}
                                            src={`/assets/images/portfolio/${project?.name}/mobile.png`}
                                            alt={`desktop ${project?.title}`}/></li>
            {project?.has_metrics && <li><span>// _metrics</span>
              <Image width={350} height={150} src={`/assets/images/portfolio/${project?.name}/metrics.png`}
                     alt={`desktop ${project?.title}`}/></li>}
          </ul>
        </div>
        <IClose className={styles.close} onClick={() => close()}/>
        <div className={styles.background} onClick={() => close()}/>
      </div>
    </div>
  )
}