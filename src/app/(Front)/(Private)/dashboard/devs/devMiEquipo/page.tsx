import { dataDevMiEquipo } from '@/app/(Front)/React/Utils/dataDevMiEquipo'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
      <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Devs {'>'} Mi Equipo
          </header>
          <main className='py-2 px-4 w-full h-[99%] pt-10'>
                
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[668px] overflow-auto'>
                    <table className='border border-gray-200   w-[100%]  '>
                      <tr className='h-14'>
                        <td className='w-[10%] pl-3 text-center'>Numero</td>
                        <td className='w-[10%] pl-3 text-center'>Equipo</td>
                        <td className='w-[10%] pl-3 '>Nombre</td>
                        <td className='w-[10%] '>Apellido</td>
                        <td className='w-[15%] '>Cargo</td>
                        <td className='w-[15%] text-center'>Email Empresa</td>
                        <td className='w-[15%] text-center'>Telefono</td>
                        
                      </tr>
                      {dataDevMiEquipo.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                              {el.id}
                            </td>
                            <td className='text-center'>
                              {el.equipo}
                            </td>
                            <td className='text-center'>
                              {el.nombre}
                            </td>
                            <td >
                              {el.apellido}
                            </td>
                            <td>
                              {el.cargo}
                            </td>
                            <td className='text-center'>
                              {el.emailEmpresa}
                            </td>
                            <td className='text-center'>
                              {el.telefono}
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