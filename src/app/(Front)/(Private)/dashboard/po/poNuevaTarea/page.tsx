'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useHistoriaPo } from "../../../[stores]/poStore";
import { format } from "date-fns";
import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";

const page = () => {

  const { getHistoriaStatus, historiaStatus, cambiarIdHistoria, idHistoria} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaStatus()
  }, [])
 
  //console.log('historiasZusRETOENADA:', historiaStatus);
  
  

  const router = useRouter()
  const handleClickVerNuevasTareasPo =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
     //idHistoria
    router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
  }


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4 '>
            Dashboard {'>'} Product Owner {'>'} Nuevas Tareas
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Nuevas Historias
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaStatus.length !==0 ? 
            <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
            <table className='border border-gray-200   w-[98%] ml-8 '>
              <thead>
              <tr className='h-14'>
                <td className='w-[10%] pl-3'>Numero</td>
                <td className='w-[10%]'>Historia</td>
                <td className='w-[10%]'>Fecha Petición </td>
                <td className='w-[10%]'>Hora petición</td>
                <td className='w-[12%]'>Presupuesto (CLP)</td>
                <td className='w-[12%]'>Tiempo(Dias) </td>
                <td className='w-[15%]'>Para </td>
                <td className='w-[20%]'>Descripción </td>
                
              </tr>
              </thead>
              <tbody>
              {historiaStatus.map((el, index)=>{
                const {id,nombreHistoria, createdAt, para, horaAt, presupuestoHistoria, tiempoHistoria, detalleHistoria} = el
                  return <tr key={id} className='border border-gray-200 h-14  cursor-pointer '>
                    <td className='pl-8'>
                      {index + 1}
                    </td>
                    <td >
                      {nombreHistoria}
                    </td>
                    <td >
                      {createdAt}
                    </td>
                    <td className="pl-4">
                      {horaAt}
                    </td>
                    <td>
                      {presupuestoHistoria}
                    </td>
                    <td>
                      {tiempoHistoria}
                    </td>
                    <td>
                      {para}
                    </td>
                    <td>
                      {detalleHistoria}
                    </td>
                     <td className=' '>
                      <button onClick={()=>handleClickVerNuevasTareasPo(id)} className='bg-violet-100 grid place-content-center border border-gray-200 w-[70%] h-[80%] py-1 px-8 rounded hover:bg-violet-200'>
                        Ver
                      </button>
                    </td>
                   
                  </tr>
                })}
              </tbody>
          </table>
            </div>: 
            <div className='w-full h-[60%]  grid place-content-center text-xl'>
            <BadgeNoAun
              nombre = ''
            />
          </div>
        
        }
          
        </section>
    </div>
  )
}

export default page