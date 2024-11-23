'use client'
import React, { useEffect, useState } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import { useRouter } from "next/navigation";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
import { format } from "date-fns";

const page = () => {

  const { getHistorias, historias, getHistoriaStatusRetornada, historiaStatusRetornada} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaStatusRetornada()
  }, [])
 
  console.log('historiasZusRETOENADA:', historiaStatusRetornada);
  
  

  const router = useRouter()
  const handleClickVerNuevasTareasPo =()=>{
    router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
  }

  const num = 15

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Historias Retornadas 
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Historias Retornadas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaStatusRetornada.length !== 0  ?
              <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
              <table className='border border-gray-200   w-[98%] ml-8 '>
                <thead>
                <tr className='h-14'>
                  <td className='w-[10%] pl-3'>Numero</td>
                  <td className='w-[15%]'>Historia</td>
                  <td className='w-[10%]'>Fecha Petición </td>
                  <td className='w-[10%]'>Hora petición</td>
                  <td className='w-[12%]'>Presupuesto (CLP)</td>
                  <td className='w-[12%]'>Tiempo(Dias) </td>
                  <td className='w-[12%]'>Status </td>
                  <td className='w-[20%]'>Descripción </td>
                  
                </tr>
                </thead>
                <tbody>
                {historiaStatusRetornada.map((el, index)=>{
                  const {id,nombreHistoria, createdAt, horaAt, presupuestoHistoria, tiempoHistoria, detalleHistoria, status} = el
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td >
                        {nombreHistoria}
                      </td>
                      <td >
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
                      <td className={` ${status === 'Retornada' ? 'text-colorTextoRetornada' : 'text-green-500'}`}>
                        {status}
                      </td>
                      <td>
                        {detalleHistoria}
                      </td>
                       
                     
                    </tr>
                  })}
                </tbody>
            </table>
              </div>: 
              <div className='w-full h-[95%]  grid place-content-center text-xl'>
                Aún no hay Historias retornadas
              </div>
          
          
          }
          
        </section>
    </div>
  )
}

export default page