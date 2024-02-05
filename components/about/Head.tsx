import styles from '@/styles/about.module.scss'
import {Person} from '@/components/about/Person'
import {IDetails} from "@/components/svg/IDetails";
import {IStar} from "@/components/svg/IStar";
export const Head = () => {
  return (
    <div className={styles.aboutHead}>
      <Person />
      <div className={styles.icons}>
        <span>
          <IDetails /> <sub>details</sub>
        </span>
        <span>
         <IStar /> <sub>0 stars</sub>
        </span>
      </div>
    </div>
  )
}