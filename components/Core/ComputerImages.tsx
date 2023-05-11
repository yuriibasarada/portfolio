import Image from "next/image";
import styles  from '@/styles/core.module.scss'

export const ComputerImages = () => {
  return (
    <div className={styles.computerImages}>
      <Image className={styles.land} src='/assets/images/land_computer.png' alt='Land computer image' width={520} height={485}/>
      <Image className={styles.computer} src='/assets/images/computer.png' alt='computer' width={500} height={474} />
      <Image className={styles.questionLeft} src='/assets/images/question.png' alt='Question left' height={50} width={50} />
      <Image className={styles.questionCenter} src='/assets/images/question.png' alt='Question left' height={50} width={50} />
      <Image className={styles.questionRight} src='/assets/images/question.png' alt='Question left' height={50} width={50} />
    </div>
  );
}