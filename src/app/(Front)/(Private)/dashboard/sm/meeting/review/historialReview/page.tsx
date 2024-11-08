import { dataHistoricoDaily } from '@/app/(Front)/React/Utils/dataHistoricoDaily'
import React from 'react'
import { format } from "date-fns";

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
                <div className='h-14  bg-gray-100 grid place-content-center '>
                    Historical Review meeting
                </div>
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[650px] overflow-auto'>
                    <table className='border border-gray-200   w-[100%]  '>
                      <tr className='h-14'>
                      <td className='w-[5%] pl-3'>Numero</td>
                      
                      <td className='w-[10%] text-center'>Fecha</td>
                      
                      <td className='w-[6%]'>Sprint</td>
                      <td className='w-[12%]'>Resultados</td>
                      <td className='w-[12%]'>Dificultades</td>
                      <td className='w-[27%]'>¿Que mejorar?</td>
                      <td className='w-[27%]'>¿Que repetir?</td>
                        
                      </tr>
                      {dataHistoricoDaily.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                            {el.id}
                          </td>
                          
                          <td className='text-violet-500 font-bold text-center'>
                          {format(new Date(), 'dd/MM/yyyy')}
                          </td>
                          
                          
                          <td >
                            7
                          </td>
                          
                          <td >
                            Historia 1, Historia 2
                          </td>
                          <td >
                            Con el equipo 2
                          </td>
                          <td >
                            Realizar una mejor determinación de los puntos de historia
                          </td>
                          <td >
                            Division de tareas entre los equipos
                          </td>
                            <td className=' grid place-items-center w-full h-12 '>
                              <button className='bg-violet-400 w-36 h-[70%]   rounded text-white font-semibold hover:bg-violet-500'>
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