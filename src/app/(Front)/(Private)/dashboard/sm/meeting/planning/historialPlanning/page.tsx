import { dataHistoricoDaily } from '@/app/(Front)/React/Utils/dataHistoricoDaily'
import React from 'react'
import { format } from "date-fns";
import { dataAsistenteDaily } from '@/app/(Front)/React/Utils/dataAsistentesDaily';

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center'>
      <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
              <div className='h-14  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold flex'>
                    <div className='w-[55%]  grid place-content-end py-3 text-base'>
                    Planning meeting Historica
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
                <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[503px] overflow-auto'>
                <table className='border border-gray-200   w-[100%]  '>
                    <tr className='h-14'>
                      <td className='w-[5%] pl-3'>Numero</td>
                      
                      <td className='w-[13%] text-center'>Fecha </td>
                      
                      <td className='w-[10%]'>Sprint</td>
                      <td className='w-[10%]'>Lider</td>
                      <td className='w-[15%]'>Facilitador</td>
                      <td className='w-[15%]'>Historias</td>
                      <td className='w-[35%]'>Temas tratados</td>
                      
                    </tr>
                    {dataAsistenteDaily.map((el)=>{
                        return <tr key={el.id} className='border border-gray-200 h-14   w-full '>
                          <td className='pl-8'>
                            {el.id}
                          </td>
                          
                          <td className='text-violet-500  font-bold text-center'>
                            {format(new Date(), 'dd/MM/yyyy')}
                          </td>
                          
                          
                          <td >
                            7
                          </td>
                          
                          <td >
                            Product Owner
                          </td>
                          <td >
                            Scrum Master
                          </td>
                          <td >
                            12 y 13
                          </td>
                          <td className='w-[300px] '>
                            Reorganizacion de los equipos de desarrollo, optimizacion de los puntos de historia
                          </td>
                          
                          
                          
                        </tr>
                      })}
                </table>
          </div>
          <div className='w-full h-24  grid justify-end items-center pr-4 '>
          <button className='bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal w-32 h-[50%] rounded text-white font-semibold'>
            Guardar
          </button>
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page