'use client'
import React, { useEffect } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';

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
              <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[625px] overflow-auto'>
              <table className='border border-gray-200   w-[98%] ml-8 mt-1 '>
                <thead>
                <tr className='h-14'>
                  <td className='w-[6%] text-center'>Numero</td>
                  <td className='w-[16%] text-center'>Historia</td>
                  <td className='w-[8%] text-center'>Fecha Petición </td>
                  <td className='w-[8%] text-center'>Hora Petición</td>
                  <td className='w-[8%] text-center'>Fecha Retorno </td>
                  <td className='w-[8%] text-center'>Hora Retorno</td>
                  <td className='w-[10%] text-center'>Presupuesto (CLP)</td>
                  <td className='w-[8%] text-center'>Tiempo(Dias) </td>
                  <td className='w-[8%] text-center'>Status </td>
                  <td className='w-[16%] text-center'>Descripción </td>
                  
                </tr>
                </thead>
                <tbody>
                {historiaStatusRetornada.map((el, index)=>{
                  const {id,nombreHistoria, createdAt, horaAt, updatedAt, presupuestoHistoria, tiempoHistoria, detalleHistoria, status} = el
                  const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                  const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer '>
                      <td className='text-center'>
                        {index + 1}
                      </td>
                      <td className='text-center'>
                        {nombreHistoria}
                      </td>
                      <td className='text-center'>
                        {createdAt}
                      </td>
                      <td className='text-center'>
                        {horaAt}
                      </td>
                      <td className='text-center'>
                        {updatedAt2}
                      </td>
                      <td className='text-center'>
                        {updatedPintar}
                      </td>
                      <td className='text-center'>
                        {presupuestoHistoria}
                      </td>
                      <td className='text-center'>
                        {tiempoHistoria}
                      </td>
                      <td className={`text-center ${status === 'Retornada' ? 'text-colorTextoRetornada' : 'text-green-500'}`}>
                        {status}
                      </td>
                      <td className='text-center'>
                        {detalleHistoria}
                      </td>
                       
                     
                    </tr>
                  })}
                </tbody>
            </table>
              </div>: 
              <div className='w-full h-[60%]  grid place-content-center text-xl'>
                <BadgeNoAun
                  nombre = 'Retornadas'
                />
              </div>
          
          
          }
          
        </section>
    </div>
  )
}

export default page