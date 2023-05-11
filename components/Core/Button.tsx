import styles from '@/styles/core.module.scss'
export const Button = ({style, onClick, children }) => {
  return  (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  )
}