'use client'

//import { useSession } from "next-auth/react"
import React, { useEffect, useState } from 'react'
import { format } from "date-fns";
import { getDataCompleja } from '@/app/(Front)/React/Fetch/getDataCompleja';
import { useRouter } from 'next/navigation';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';

const page = () => {

    const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([]) 


  useEffect(()=>{
    const traerHistoriaStatus = async()=>{
      const ruta = 'historiaStatus'
      const url = 'LiderTecnico'
      const res = await getDataLista({ruta, url})
      setHistouseridcargo(res)
    }
    traerHistoriaStatus()
  }, [])

  // useEffect(()=>{
  //   const traerElCargo = async()=>{
  //     const ruta = ''
  //   }
  // }, [histouseridcargo])

  const router = useRouter()

  console.log('serian las histo pendiente del user cliente1:', histouseridcargo);
  

  const handleClickVerAliderTecnico =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
    router.push('/dashboard/cliente/tecnico/listaResolver/verResolverTecnico')
  }

  return (
    <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[563px] overflow-auto'>
        {histouseridcargo.length !==0 ? 
          <table className='border border-gray-200   w-[97%] ml-10 '>
          <thead>
          <tr className='h-14'>
              <td className='w-[7%] pl-3'>Numero</td>
              <td className='w-[17%] pl-8'>Nombre Historia</td>
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
            const {id, nombreHistoria, createdAt, status ,updatedAt, horaAt, puntoHistoria, tiempoHistoria, presupuestoHistoria} = el
              const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
              const hora = format(new Date(updatedAt), 'H:mm')
              return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                <td className='pl-8'>
                  {index + 1}
                </td>
                <td className='pl-8'>
                  {nombreHistoria}
                </td>
                <td className='pl-10'>
                  {updatedAt2}
                </td>
                <td className='pl-10'>
                  {hora}
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
                <td className='w-full h-full  '>
                  <button onClick={()=>handleClickVerAliderTecnico(id)} className='w-[70%] h-10 bg-violet-300 rounded'>
                      Ver
                  </button>
                </td>
                
                
                
                
                
              </tr>
            })}
          </tbody>
      </table>: 
      <div className='w-full h-96 grid content-end justify-center text-xl '>
      Aún no hay historias a resolver
    </div>
        }
      </div>
  )
}

export default page