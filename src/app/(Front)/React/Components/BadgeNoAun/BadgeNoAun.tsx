import Image from 'next/image'
import React from 'react'

import diagramaVacio from "../../Assets/Icons/diagramaVacio2.png";

const BadgeNoAun = ({nombre}) => {
  return (
    <div className='w-full h-[410px] grid  content-end justify-center text-xl '>
      <div className='flex justify-center'>
        <Image
          src={diagramaVacio}
          width={120}
          height={120}
          alt='s'
        />
      </div>
      <div className='text-tamañoLetra'>
        Aún no hay Historias {nombre}
      </div>
    </div>
  )
}

export default BadgeNoAun