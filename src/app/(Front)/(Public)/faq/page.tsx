import React from 'react'
import { dataFaq } from '../../React/Utils/dataFaq'
import Image from "next/image";

const page = () => {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-14  pt-4 pl-32 '>
        Home {'>'} Preguntas Frecuentes
      </div>
      <div className='grid  justify-items-center w-full h-[800px] '>
          <section className='w-5/6 h-2/5  mt-8 '>
            <header className=' pb-6 text-xl font-semibold text-violet-700'>
              Preguntas Frecuentes
            </header>
            <main>
              <ul>
                {dataFaq.map((el)=>{
                  return <li key={el.id} className='w-full h-14 flex space-x-[1000px]  items-center cursor-pointer hover:underline'>
                    <p className='w-auto '>
                      {el.pregunta}
                    </p>
                    <article>
                    <Image 
                      src={el.logo}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                
                    />
                    </article>
                  </li>
                })}
              </ul>
            </main>
          </section>
      </div>
    </div>
  )
}

export default page