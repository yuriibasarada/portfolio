import Image from "next/image";

export const TuboLand = (props) => {
  return (
    <div {...props}>
      <div>
        <Image src='/assets/images/land_1.png' alt='Land computer' width='300' height='233' />
        <Image src='/assets/images/tubo.png' alt='Land tubo' width='84' height='94' />
      </div>
    </div>
  )
}