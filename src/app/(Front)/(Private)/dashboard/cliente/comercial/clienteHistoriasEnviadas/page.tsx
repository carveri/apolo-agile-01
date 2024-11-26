'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import Image from "next/image";

import diagramaVacio from "../../../../../React/Assets/Icons/diagramaVacio2.png";

const page = () => {

  
  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'f72d2f55-fe11-4b72-ae67-1bcc35b4d95f'
        const param2 = 'Pendiente'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  const router = useRouter()

  console.log('serian las histo pendiente del user cliente1:', histouseridcargo);
  
  const handleClickVerResolucionHistoria =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
    router.push('/dashboard/cliente/verResolucionTarea')
  }

  return (
    <div className='w-full h-full   ' >
        {histouseridcargo.length !== 0 ?
        <section  className='w-[99%] h-[99%]  '>
        <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Historias Enviadas 
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div className="">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1625px] z-30 mt-3  top-28 left-3/5 max-h-[563px] overflow-auto'>
              <table className='border border-gray-200   w-[100%]  '>
                <thead>
                  <tr className='h-14'>
                    <td className='w-[7%] pl-3'>Numero</td>
                    <td className='w-[20%] pl-8'>Nombre Historia</td>
                    <td className='w-[10%] pl-8'>Fecha Ingreso</td>
                    <td className='w-[10%] pl-8'>Hora Ingreso</td>
                    <td className='w-[12%] pl-8'>Punto Historia</td>
                    <td className='w-[12%] pl-8'>Tiempo Historia</td>
                    <td className='w-[12%] pl-8'>Presupuesto Historia </td>
                    <td className='w-[12%] pl-8'>Status</td>
                    
                    
                  </tr>
                </thead>
                <tbody>
                {histouseridcargo?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt, status ,updatedAt, horaAt, puntoHistoria, tiempoHistoria, presupuestoHistoria, discrepancia4} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td className='pl-8'>
                        {nombreHistoria}
                      </td>
                      <td className='pl-10'>
                        {createdAt}
                      </td>
                      <td className='pl-14'>
                        {horaAt}
                      </td>
                      <td className='pl-20'>
                        {puntoHistoria}
                      </td>
                      <td className='pl-20'>
                        {tiempoHistoria}
                      </td>
                      <td className='pl-20'>
                        {presupuestoHistoria}
                      </td>
                      <td className={`pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-500'}`}>
                        {status}
                      </td>
                      
                      
                      
                      
                      
                      
                    </tr>
                  })}
                </tbody>
            </table>
      </div>
      
        </main>
    </section>: 
    <div className='w-full h-[130%] grid content-end justify-center text-xl '>
    <div className='flex justify-center'>
      <Image
        src={diagramaVacio}
        width={120}
        height={120}
        alt='s'
      />
    </div>
    <div>
      Aún no hay Historias Retornadas
    </div>
  </div>
      
      }
            
    </div>
  )
}

export default page