import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import Image from 'next/image'
import React from 'react'

const CuerpoHomeDevs = () => {
  return (
   <>
            <header className='w-full h-[9%]  flex gap-x-16 px-8 '>
              {dataHomePo.map((el)=>{
                return <article className='w-full h-full  rounded-md flex bg-gray-50 border border-violet-50 shadow-md'>
                  <div className='h-full w-[20%] grid place-content-center'>
                    <Image
                      width={50}
                      height={50}
                      alt='kk'
                      src={el.icono}
                    />
                  </div>
                  <div className='h-full w-[80%] grid grid-rows-2 place-items-center'>
                    <section>
                      {el.nombre}
                    </section>
                    <section className='font-semibold'>
                      {el.valor}
                    </section>
                  </div>
                </article>
              })}
              
            </header>
            <section className='w-full h-[91%] p-8'>
              graficos
            </section>
            </>
         
  )
}

export default CuerpoHomeDevs