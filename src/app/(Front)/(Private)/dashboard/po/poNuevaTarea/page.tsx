'use client'

import { dataTareaPo } from '@/app/(Front)/React/Utils/dataTareaPo'
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";
import { getData } from '@/app/(Front)/React/Fetch/getData';

const page = () => {

  // traer datos de db
  const [historias, setHistorias] = useState([])

  useEffect(()=>{
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const res = await getData({ruta})
      setHistorias(res)
    }
    traerHistorias()

  }, [])

  //console.log('histo:', historias);
  

  const router = useRouter()
  const handleClickVerNuevasTareasPo =()=>{
    router.push('/dashboard/nuevasTareasPo/verNuevasTareasPo')
  }


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Nuevas Tareas
          </header>
          <div className='w-[1625px] z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
          <table className='border border-gray-200   w-[98%] ml-8 '>
            <tr className='h-14'>
              <td className='w-[10%] pl-3'>Numero</td>
              <td className='w-[10%]'>Historia</td>
              <td className='w-[10%]'>Fecha Petición </td>
              <td className='w-[10%]'>Hora petición</td>
              <td className='w-[15%]'>Presupuesto (CLP)</td>
              <td className='w-[15%]'>Tiempo(Dias) </td>
              <td className='w-[15%]'>Descripción </td>
              
            </tr>
            {historias.map((el)=>{
              const {id,nombreHistoria, createdAt, horaAt, presupuestoHistoria, tiempoHistoria, detalleHistoria} = el
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
                  <td >
                    {horaAt}
                  </td>
                  <td>
                    {presupuestoHistoria}
                  </td>
                  <td>
                    {tiempoHistoria}
                  </td>
                  <td>
                    {detalleHistoria}
                  </td>
                   <td className=' '>
                    <button onClick={handleClickVerNuevasTareasPo} className='bg-violet-100 grid place-content-center border border-gray-200 w-[50%] h-[80%] py-1 px-8 rounded hover:bg-violet-200'>
                      Ver
                    </button>
                  </td>
                 
                </tr>
              })}
        </table>
          </div>
        </section>
    </div>
  )
}

export default page