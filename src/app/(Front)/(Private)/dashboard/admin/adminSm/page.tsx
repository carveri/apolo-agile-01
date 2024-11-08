import { dataTablaSm } from '@/app/(Front)/React/Utils/dataTablaSm'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Scrum Master
          </header>
        </section><section className='w-[99%] h-[99%]  '>
          
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto'>
          <table className='border border-gray-200   w-[98%] ml-8 '>
            <thead>
              <tr className='h-14'>
                <td className='w-[10%] pl-3'>Numero</td>
                <td className='w-[10%]'>Nombre</td>
                <td className='w-[10%]'>Apellido</td>
                <td className='w-[15%]'>Area</td>
                <td className='w-[15%]'>Depto</td>
                <td className='w-[15%]'>Cargo</td>
              </tr>
            </thead>
            <tbody>
            {dataTablaSm.map((el)=>{
                return <tr key={el.id} className='border border-gray-200 h-14  cursor-pointer '>
                  <td className='pl-8'>
                    {el.id}
                  </td>
                  <td >
                    {el.nombre}
                  </td>
                  <td>
                    {el.apellido}
                  </td>
                  <td>
                    {el.area}
                  </td>
                  <td>
                    {el.depto}
                  </td>
                  <td>
                    {el.cargo}
                  </td>
                  <td className=''>
                    <button className='bg-violet-100 border border-gray-200 w-[50%] h-[80%] py-1 px-3 rounded hover:bg-violet-200'>
                      Ver
                    </button>
                  </td>
                  <td className=''>
                    <button className='bg-blue-200 border border-gray-300 w-[70%] h-[80%] py-1 rounded hover:bg-blue-300 hover:text-white '>
                      Actualizar
                    </button>
                  </td>
                  <td className=''>
                    <button className='bg-red-600 border border-white  w-[80%] h-[90%] text-white py-1 rounded hover:bg-red-700'>
                      Eliminar
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
        </table>
          </div>
        </section>
    </div>
  )
}

export default page