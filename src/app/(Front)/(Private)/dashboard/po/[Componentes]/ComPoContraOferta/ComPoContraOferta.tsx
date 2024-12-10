'use client'

import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import { format } from "date-fns";
import TablaComPoContraOferta from "./TablaComPoContraOferta";
import { useEffect } from "react";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import { useRouter } from "next/navigation";
import { IComPoContraOferta } from "@/app/Interfaces/IPoContraOferta";

const ComPoContraOferta = ({nombre, id, resul}:IComPoContraOferta) => {

  const {getHistoriaContraOferta, historiaContraOferta, cambiarIdHistoria, idHistoria} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaContraOferta(resul)
  }, [])
 
  const router = useRouter()
  
  const handleClickVerContraoferta =(id:string)=>{
      cambiarIdHistoria(id)
      router.push('/dashboard/po/poContraOfertas/verContraOferta')
  }


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4'>
            Dashboard {'>'} {nombre} {'>'} Historias Retornadas 
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Contraofertas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaContraOferta.length !== 0  ?
              <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
              <TablaComPoContraOferta
                historiaContraOferta={historiaContraOferta}
                handleClickVerContraoferta={handleClickVerContraoferta}
              />
              </div>: 
              <div className='w-full h-[40%]  grid place-content-center text-xl'>
              <BadgeNoAun
                nombre = 'ContraOfertadas'
              />
            </div>
          
          
          }
          
        </section>
    </div>
  )
}

export default ComPoContraOferta