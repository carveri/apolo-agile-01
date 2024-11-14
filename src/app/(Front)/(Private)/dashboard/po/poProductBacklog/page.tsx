'use client'

//import { getData } from '@/app/(Front)/React/Fetch/getData'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataProductBacklogPo } from '@/app/(Front)/React/Utils/dataProductBacklogPo'
import {useState, useEffect} from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore'

const page = () => {


  const {historiaBacklog, getHistoriaBacklog} = useHistoriaPo()

  useEffect(()=>{
    getHistoriaBacklog()
  }, [])
 
  console.log('historiasZusRETOENADA:', historiaBacklog);
  

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
              <td className='w-[10%]'>Presupuesto (Clp) </td>
              <td className='w-[10%]'>Sprint </td>
              
            </tr>
            </thead>
            <tbody>
            {historiaBacklog?.map((el)=>{
              const {id, nombreHistoria, createdAt, horaAt, tiempoHistoria, presupuestoHistoria} = el
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
                  <td className='pl-8'>
                    {tiempoHistoria}
                  </td>
                  <td className='pl-8'>
                    {presupuestoHistoria}
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