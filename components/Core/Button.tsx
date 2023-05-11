import styles from '@/styles/core.module.scss'
import {CSSProperties, MouseEventHandler, ReactNode} from "react";

interface iProps {
  style?: CSSProperties | undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  children?: ReactNode
}
export const Button = ({style, onClick, children }: iProps) => {
  return  (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  )
}