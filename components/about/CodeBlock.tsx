import {CSSProperties, MouseEventHandler, ReactNode} from "react";
import styles from '@/styles/about.module.scss'
import {IDetails} from "@/components/svg/IDetails";
import {IStar} from "@/components/svg/IStar";

interface iProps {
  style?: CSSProperties | undefined | string,
  children?: ReactNode
  stars?: Number
}

export const CodeBlock = ({stars = 0, children, style}: iProps) => {
  return (
    <div className={`${styles.codeBlock} ${style}`}>
      <div>
        <div className={styles.codeIcons}>
        <span>
          <IDetails/> <sub>details</sub>
        </span>
          <span>
         <IStar/> <sub> {stars.toString()} stars</sub>
        </span>
        </div>
        <div className={styles.codeImageBlock}>
          {children}
        </div>
      </div>
    </div>
  )
}