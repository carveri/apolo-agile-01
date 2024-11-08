import { dataAsistenteDaily } from '@/app/(Front)/React/Utils/dataAsistentesDaily'
import { dataDevSprintBacklog } from '@/app/(Front)/React/Utils/dataDevSprintBacklog'
import { dataDevSprintBacklogHistorial } from '@/app/(Front)/React/Utils/dataDevSprintBacklogHistorial'
import { dataHistoricoDaily } from '@/app/(Front)/React/Utils/dataHistoricoDaily'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
                <div className='h-14 bg-gray-100 grid place-content-center'>
                  Historial Sprint Backlog
                </div>
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[660px] overflow-auto mt-2'>
                    <table className='border border-gray-200   w-[100%]  '>
                      <tr className='h-14'>
                        <td className='w-[6%] pl-3'>Numero</td>
                        <td className='w-[6%] pl-3'>N°Sprint</td>
                        <td className='w-[10%] pl-3'>Duracion Sprint (Semanas)</td>
                        <td className='w-[10%] text-center'>Fecha Inico</td>
                        <td className='w-[10%] text-center'>Fecha Termino</td>
                        <td className='w-[15%] pl-3 text-center'>Tarea 1</td>
                        <td className='w-[15%] pl-3 text-center'>Tarea 2</td>
                        <td className='w-[15%] pl-3 text-center'>Tarea 3</td>
                        <td className='w-[15%] pl-3 text-center'>Tarea 4</td>
                        
                      </tr>
                      {dataDevSprintBacklogHistorial.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                              {el.id}
                            </td>
                            <td className='text-center'>
                              {el.nSprint}
                            </td>
                            <td className='text-center'>
                              {el.nSemanas}
                            </td>
                            <td >
                              {el.fechaInicio}
                            </td>
                            <td>
                              {el.fechaTermino}
                            </td>
                            <td className='text-center'>
                              {el.tarea1}
                            </td>
                            <td className='text-center'>
                              {el.tarea2}
                            </td>
                            <td className='text-center'>
                              {el.tarea3}
                            </td>
                            <td className='text-center'>
                              {el.tarea4}
                            </td>
                            <td className=' grid place-items-center w-full h-12 '>
                              <button className='bg-violet-400 w-36 h-[70%]   rounded text-white font-semibold'>
                                Ver
                              </button>
                            </td>
                            
                            
                            
                          </tr>
                        })}
                  </table>
        
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page