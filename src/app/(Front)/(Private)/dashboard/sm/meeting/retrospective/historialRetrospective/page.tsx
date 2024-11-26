import { dataHistoricoDaily } from '@/app/(Front)/React/Utils/dataHistoricoDaily'
import React from 'react'
import { format } from "date-fns";

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold flex'>
                    <div className='w-[55%]  grid place-content-end py-3 text-base'>
                    Retrospecive meeting Historica
                    </div>
                    <header className='w-[45%] h-[7%]  flex justify-end items-center  py-8 font-bold mb-1 pr-6   '>
                      <div className='pr-3 '>
                        Fecha Actual:
                      </div>
                      <div>
                        {format(new Date(), 'dd/MM/yyyy')}
                      </div>
                  </header>
                </div>
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[650px] overflow-auto'>
                    <table className='border border-gray-200   w-[100%]  '>
                      <tr className='h-14'>
                        <td className='w-[5%] pl-3'>Numero</td>
                        
                        <td className='w-[10%] text-center'>Fecha</td>
                        
                        <td className='w-[10%] text-center'>Proxima Fecha</td>
                        <td className='w-[20%]'>Mejoras a corto plazo</td>
                        <td className='w-[30%]'>Mejoras a mediano plazo</td>
                        <td className='w-[30%]'>Mejoras a largo plazo</td>
                        
                      </tr>
                      {dataHistoricoDaily.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                            {el.id}
                          </td>
                          
                          <td className='text-violet-500 font-bold text-center'>
                          {format(new Date(), 'dd/MM/yyyy')}
                          </td>
                          
                          
                          <td className='text-violet-500 font-bold text-center'>
                            01/02/2025
                          </td>
                          
                          <td >
                          Peticion de un junior backend
                          </td>
                          <td >
                          Optimizar la base de datos y agregar una secundaria en DynamoDb
                          </td>
                          <td >
                            Establecer una metodologia para evolucionar a una arquitectura de microservicios 
                          </td>
                            <td className=' grid place-items-center w-full h-12 '>
                              <button className='bg-violet-400 w-20 h-[70%]   rounded text-white font-semibold hover:bg-violet-500'>
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