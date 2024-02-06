import Image from "next/image";
import styles from '@/styles/core.module.scss'

interface IProps {
  className?: { readonly [key: string]: string };
}

export const ComputerImages = ({className = {}}: IProps) => {
  return (
    <div className={`${styles.computerImages} ${className.computerImages}`}>
      <Image className={`${styles.land} ${className.land}`} src='/assets/images/land_computer.png' alt='Land computer image' width={520}
             height={485}/>
      <Image className={`${styles.computer} ${className.computer}`} src='/assets/images/computer.png' alt='computer' width={500} height={474}/>
      <Image className={`${styles.questionLeft} ${className.questionLeft}`} src='/assets/images/question.png' alt='Question left' height={50}
             width={50}/>
      <Image className={`${styles.questionCenter} ${className.questionCenter}`} src='/assets/images/question.png' alt='Question left' height={50}
             width={50}/>
      <Image className={`${styles.questionRight} ${className.questionRight}`} src='/assets/images/question.png' alt='Question left' height={50}
             width={50}/>
    </div>
  );
}