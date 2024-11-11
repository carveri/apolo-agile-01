'use client'

import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import {useState, useEffect} from 'react'
import Image from "next/image";
import { usePoStore, useHistoriaPo } from '../../[stores]/poStore';
import grafico1Po from "../../dashboard/../../React/Assets/Images/grafico3Po.png";
//import Image from "next/image";

const page = () => {

  // traigo datos desde la store
  const { getHistorias, historias} = useHistoriaPo()


  useEffect(()=>{
    getHistorias()
  }, [])
 
  console.log('historiasZus:', historias);
  
  
  
  

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Home
          </header>
          <main className='w-full h-[95%]  px-5 pt-5'>
            <header className='w-full h-[9%]  flex gap-x-16 px-8 '>
              {dataHomePo.map((el)=>{
                return <article key={el.id} className='w-full h-full  rounded-md flex bg-gray-50 border border-violet-50 shadow-md'>
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
            <section className='w-full h-[91%] p-8 '>
              <article className='w-full h-[80%] flex'>
                <div className='w-full h-full'>
                <Image
                      width={730}
                      height={630}
                      alt='kksd'
                      src={grafico1Po}
                    />
                </div>
                <div className='w-[30%]'>
                  lista
                </div>
              </article>
              <article className='w-full h-[20%] flex'>
                <div className='w-[80%] h-full '>
                  cosa1
                </div>
                <div className='w-[20%] h-full'>
                  cosa2
                </div>
              </article>
            </section>
          </main>
        </section>
    </div>
  )
}

export default page