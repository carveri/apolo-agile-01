'use client'

import Star from "@/app/(Front)/React/Components/Figuras/Star";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";


interface IBadgeStore {
        id: string,
        nombrePlugin: string,
        imagenPlugin: StaticImageData,
        departamentoPlugin: string,
        calificacion: number,
        descripcionPlugin: string
}

export interface IEBadgeStore {
  el: IBadgeStore
}

const estrellas = [1,2,3,4,5]




const BadgeStore = ({el}:IEBadgeStore) => {

  const router = useRouter()

  const handleClickVerPlugin =()=>{
    router.push('/dashboard/store/VerPlugin')
  }


  return (
    <div className='border border-gray-200 w-full h-72 text-tamañoLetra p-2 bg-white'>
      <section className='w-full h-[40%]  flex'>
        <article className='w-[25%] border border-gray-200 grid place-content-center'>
          <Image
            alt="as"
            src={el.imagenPlugin}
            width={75}
            height={75}
          
          />
        </article>
        <article className='w-[75%]  pl-3 grid grid-rows-3 py-2'>
          <div className="font-semibold text-base text-colorTextoTitulo1">
            {el?.nombrePlugin}
          </div>
          <div className="">
           <div>
            {el.departamentoPlugin}
           </div>
            
          </div>
          <div className="flex">
            <div className="pr-2">
              <Star />
             
            </div> 
            ({el.calificacion})
            </div>
        </article>
      </section>
      <section className='w-full h-[35%]'>
          {el.descripcionPlugin}
      </section>
      <section className='w-full h-[35%] flex justify-end pr-2'>
        <button onClick={handleClickVerPlugin} className="w-12 h-10 bg-colorBotonVer rounded mr-2 text-colorTextoTitulo1 font-semibold">
          Ver
        </button>
        <button className="w-24 h-10 bg-colorBotonAceptar rounded text-colorTextoBoton font-semibold">
          Comprar
        </button>
      </section>
    </div>
  )
}

export default BadgeStore