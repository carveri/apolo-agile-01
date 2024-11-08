'use client'

//import { getData } from '@/app/(Front)/React/Fetch/getData'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataProductBacklogPo } from '@/app/(Front)/React/Utils/dataProductBacklogPo'
import {useState, useEffect} from 'react'

const page = () => {


  const [pb, setPb] = useState([])

  useEffect(()=>{
    const traerPb =  async()=>{
      const ruta = 'productBacklog'
      const url = '1af659a1-06b9-46e7-94fb-2220d8f5f0b8'
      const res = await getDataLista({ruta, url})
      setPb(res)
    }
    traerPb()
  }, [])

  // console.log('RES DEL BACKLOG:', pb);
  const {historias} = pb
  // console.log('la final', historias);
  
  console.log('historias que le llegan al po:', historias);
  

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
        <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Product Backlog
          </header>
          <div className='w-[1625px] z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
          <table className='border border-gray-200   w-[98%] ml-8 '>
            <thead>
            <tr className='h-14'>
              <td className='w-[8%] pl-3'>Numero</td>
              <td className='w-[20%]'>Nombre Historia</td>
             
              <td className='w-[10%]'>Fecha Inicio </td>
              <td className='w-[10%]'>Hora</td>
              <td className='w-[10%]'>Status </td>
              
              <td className='w-[10%]'>Tiempo(dias) </td>
              <td className='w-[10%]'>Sprint </td>
              
            </tr>
            </thead>
            <tbody>
            {historias?.map((el)=>{
              const {id, nombreHistoria, createdAt, horaAt, tiempoHistoria} = el
                return <tr key={id} className='border border-gray-200 h-14  cursor-pointer '>
                  <td className='pl-8'>
                    1
                  </td>
                  <td >
                    {nombreHistoria}
                  </td>
                  
                  <td>
                    {createdAt}
                  </td>
                  <td>
                    {horaAt}
                  </td>
                  <td>
                    En desarrolo
                  </td>
                  <td>
                    {tiempoHistoria}
                  </td>
                  <td>
                    11
                  </td>
                   <td className=' '>
                    <button className='bg-violet-100 grid place-content-center border border-gray-200 w-[50%] h-[80%] py-1 px-8 rounded hover:bg-violet-200'>
                      Ver
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