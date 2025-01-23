'use client'

import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import { format } from "date-fns";
import TablaComPoNuevaTarea from "./TablaComPoNuevaTarea";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IPoNuevaTarea } from "@/app/Interfaces/IPoNuevaTarea";


const ComPoNuevaTarea = ({nombre, id, resul}:IPoNuevaTarea) => {

  const { cambiarIdHistoria, historiaStatusEmpresa, getHistoriaStatusEmpresa } = useHistoriaPo()

  useEffect(()=>{
    getHistoriaStatusEmpresa(resul)
  }, [])
 

  const router = useRouter()
  const handleClickVerNuevasTareasPo =(id:string)=>{
    cambiarIdHistoria(id)
    router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
  }

  // HACE UN REFRESH PARA ACTUALIZAR EL SIDEBAR, DEL NUMERO DE HISTORIAS
  useEffect(()=>{
    router.refresh()
  }, [])

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4 '>
            Dashboard {'>'} {nombre} {'>'} Nuevas Tareas
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Nuevas Historias
            </div>
            <header className='w-full h-[7%] -mt-8 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaStatusEmpresa.length !==0 ? 
            <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
            <TablaComPoNuevaTarea
                historiaStatus={historiaStatusEmpresa}
                handleClickVerNuevasTareasPo={handleClickVerNuevasTareasPo}
            />
            </div>: 
            <div className='w-full h-[30%]  grid place-content-center text-xl'>
            <BadgeNoAun
              nombre = ''
            />
          </div>
        
        }
          
        </section>
    </div>
  )
}

export default ComPoNuevaTarea