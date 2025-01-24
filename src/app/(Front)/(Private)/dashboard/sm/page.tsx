import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import { dataHomeSm } from '@/app/(Front)/React/Utils/dataHomeSm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Scrum Master {'>'} Home
          </header>
          <main className='w-full h-[95%]  px-28 pt-5'>
           <header className='w-full h-[9%]  flex gap-x-20 px-6 '>
                         {dataHomePo.map((el)=>{
                           return <article key={el.id} className='w-full h-full py-3 rounded-md flex bg-gray-50 border border-violet-50 shadow-lg'>
                             <div className='h-full w-[30%] grid place-content-center '>
                               <Image
                                 width={40}
                                 height={40}
                                 alt='kk'
                                 src={el.icono}
                               />
                             </div>
                             <div className='h-full w-[70%] grid grid-rows-2 place-items-center'>
                               <section>
                                 {el.nombre}
                               </section>
                               <section className='font-semibold '>
                                 {el.valor}
                               </section>
                             </div>
                           </article>
                         })}
                         
                       </header>
            <section className='w-full h-[91%] p-8'>
              graficos
            </section>
          </main>
        </section>
    </div>
  )
}

export default page