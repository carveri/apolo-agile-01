'use client'

import { useRouter } from "next/navigation";

import Star from '@/app/(Front)/React/Components/Figuras/Star'
import Image from 'next/image'
import React from 'react'
import portadaFront from "../../../../../React/Assets/Images/portadaFront.jpg";
import { dataVerPlugin } from '../../Utils/dataVerPlugins';

const CuerpoVerPlugin = () => {

    const router = useRouter()

    const handleClickVolverAPlugins =()=>{
        router.back()
    }

  return (
    <div className='w-[88%] h-full bg-gray-50 mt-6'>
        {/* <section className='w-full h-60  grid justify-center '>
            <Image
                src={portadaFront}
                width={410}
                height={150}
                alt='0'
            />
        </section> */}
        <main className='w-full h-96  '>
            <section className='w-full h-28 flex '>
                <article className='w-[10%] border border-gray-200 grid place-content-center'>
                    <Image
                        src={dataVerPlugin.imagenPlugin}
                        width={70}
                        height={70}
                        alt='assa'
                    />
                </article>
                <article className='w-[80%]  pl-3 grid grid-rows-3 py-2 '>
                    <div className="font-semibold text-base text-colorTextoTitulo1">
                        {dataVerPlugin.nombrePlugin}
                    </div>
                    <div className="">
                        <div>
                            {dataVerPlugin.departamentoPlugin}
                        </div> 
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <Star />
                        
                        </div> 
                            4
                    </div>
                </article>
                <article className='w-[25%] h-full   place-items-center flex gap-x-2'>
                    <button onClick={handleClickVolverAPlugins} className='bg-colorBotonPrincipal text-colorTextoBoton w-36 h-10 rounded font-semibold'>
                        Volver a Plugins
                    </button>
                    <button className='bg-colorBotonAceptar text-colorTextoBoton w-36 h-10 rounded font-semibold'>
                        Comprar
                    </button>
                </article>
            </section>
                    <section className='w-full h-[85%] '>
                        <article className='w-full h-20  '> 
                            <header className='w-full h-[45%]  text-base grid content-center'>
                                Descripción
                            </header>
                            <div className='w-full h-[55%]'>
                            Muestra transmisiones de Twitch con este bloque de Gutenberg. = Equipo = * Desarrollado y mantenido por straightvisions GmbH
                            </div>
                        </article>
                        <article className='w-full h-56'>
                            <header className='w-full h-[30%] text-base grid content-center'>
                                Caracteristicas
                            </header>
                            <ol>
                                {dataVerPlugin.caracteristicas.map((el)=>{
                                    return <li key={el}>
                                        {el}
                                    </li>
                                })}
                               
                            </ol>
                        </article>
                        <article className=' w-full h-32'>
                            <header className='w-full h-[30%] text-base grid content-center'>
                                Precios
                            </header>
                            <section>

                            </section>
                        </article>
                    </section>
        </main>
    </div>
  )
}

export default CuerpoVerPlugin