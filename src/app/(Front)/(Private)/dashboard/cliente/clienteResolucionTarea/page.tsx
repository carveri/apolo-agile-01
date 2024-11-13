'use client'

import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
import { useHistoriaPo } from '../../../[stores]/poStore';
//import { format } from "date-fns";



const page = () => {
  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [historias, setHistorias] = useState([])
  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo

  useEffect(()=>{
    const traerHistorias = async()=>{
      const ruta = 'historiaStatus'
      const url = 'Retornada'
      const res = await getDataLista({ruta, url})
      setHistorias(res)
    }
    traerHistorias()
  }, [])

  

  const route = useRouter()

  const handleClickVerResolucionHistoria =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
    route.push('/dashboard/cliente/verResolucionTarea')
  }

  //console.log('histo:', historias);
  

  return (
    <div className='w-full h-full   ' >
        {historias.length !== 0 ?
        <section  className='w-[99%] h-[99%]  '>
        <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-violet-100 grid place-content-center '>
                Peticiones Actuales
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-violet-800 '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[563px] overflow-auto'>
              <table className='border border-gray-200   w-[100%]  '>
                <thead>
                  <tr className='h-14'>
                    <td className='w-[7%] pl-3'>Numero</td>
                    <td className='w-[20%] pl-8'>Nombre Historia</td>
                    <td className='w-[10%] pl-8'>Fecha Ingreso</td>
                    <td className='w-[12%] pl-8'>Fecha Respuesta</td>
                    <td className='w-[12%] pl-8'>Status </td>
                    
                    <td className='w-[10%] text-center'>Discrepancia 1</td>
                    <td className='w-[10%] text-center'>Discrepancia 2</td>
                    <td className='w-[10%] text-center'>Discrepancia 3</td>
                    
                  </tr>
                </thead>
                <tbody>
                {historias?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt, status ,updatedAt, discrepancia1, discrepancia2, discrepancia3, discrepancia4} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td className='pl-8'>
                        {nombreHistoria}
                      </td>
                      <td className='pl-8'>
                        {createdAt}
                      </td>
                      <td className='pl-12'>
                        {status === 'Pendiente' ? '-': updatedAt2}
                      </td>
                      <td className={`pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-700'}`}>
                        {status}
                      </td>
                     
                      <td className='pl-8'>
                        {discrepancia1}
                      </td>
                      <td className='pl-8'>
                        {discrepancia2}
                      </td>
                      <td className='pl-8'>
                        {discrepancia3}
                      </td>
                      
                      <td className='grid place-items-center pt-2 pr-2'>
                        <button onClick={()=>handleClickVerResolucionHistoria(id)} className='w-[100px] h-10 bg-violet-200 rounded text-violet-900'>
                          ver
                        </button>
                      </td>
                      
                      
                      
                      
                    </tr>
                  })}
                </tbody>
            </table>
      </div>
      
        </main>
    </section>: 
    <div className='w-full h-full grid content-end justify-center text-xl'>
      No hay historias retornadas
    </div>
      
      }
            
    </div>
  )
}

export default page