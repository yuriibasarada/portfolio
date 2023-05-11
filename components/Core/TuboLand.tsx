import Image from "next/image";
interface IProps {
  className?: string
}
export const TuboLand = (props: IProps) => {
  return (
    <div {...props}>
      <div>
        <Image src='/assets/images/land_1.png' alt='Land computer' width='300' height='233' />
        <Image src='/assets/images/tubo.png' alt='Land tubo' width='84' height='94' />
      </div>
    </div>
  )
}