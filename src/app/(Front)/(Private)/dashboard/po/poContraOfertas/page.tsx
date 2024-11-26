'use client'
import React, { useEffect, useState } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';

const page = () => {


    const { getHistorias, historias, getHistoriaStatusRetornada, historiaStatusRetornada, getHistoriaContraOferta, historiaContraOferta, cambiarIdHistoria, idHistoria} = useHistoriaPo()


    useEffect(()=>{
      getHistoriaContraOferta()
    }, [])
   
    console.log('historiasZusRETOENADA:', historiaContraOferta);
    
    
  
    const router = useRouter()
    const handleClickVerNuevasTareasPo =()=>{
      router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
    }
  
    const num = 15


    const handleClickVerContraoferta =(id)=>{
      console.log('idHisto:', id);
        cambiarIdHistoria(id)
        console.log('idzusthistoria:', idHistoria);
        //idHistoria
        router.push('/dashboard/po/poContraOfertas/verContraOferta')
    }

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Historias Retornadas 
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Contraofertas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaContraOferta.length !== 0  ?
              <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[730px] overflow-auto'>
              <table className='border border-gray-200   w-[98%] ml-8 '>
                <thead>
                <tr className='h-14'>
                  <td className='w-[10%] pl-3'>Numero</td>
                  <td className='w-[15%]'>Historia</td>
                  <td className='w-[10%]'>Fecha Contraoferta</td>
                  <td className='w-[10%]'>Hora Contraoferta</td>
                  <td className='w-[10%]'>Presupuesto (CLP)</td>
                  <td className='w-[10%]'>Tiempo(Dias) </td>
                  <td className='w-[10%]'>Status </td>
                  <td className='w-[18%]'>Descripción </td>
                  
                </tr>
                </thead>
                <tbody>
                {historiaContraOferta.map((el, index)=>{
                  const {id,nombreHistoria, createdAt, horaAt, updatedAt,  presupuestoHistoria, tiempoHistoria, detalleHistoria, status} = el
                  const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                  const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td >
                        {nombreHistoria}
                      </td>
                      <td className='pl-8'>
                        {updatedAt2}
                      </td>
                      <td className='pl-8'>
                        {updatedPintar}
                      </td>
                      <td className='pl-8'>
                        {presupuestoHistoria}
                      </td>
                      <td className='pl-8'>
                        {tiempoHistoria}
                      </td>
                      <td className={` ${status === 'ContraOferta' ? 'text-colorTextoContraOferta' : 'text-green-500'}`}>
                        {status}
                      </td>
                      <td>
                        {detalleHistoria}
                      </td>
                       <td className=' h-full '>
                        <button onClick={()=>handleClickVerContraoferta(id)} className='w-[70%] h-8 bg-violet-100 hover:bg-violet-200 ml-3 rounded'>
                          Ver
                        </button>
                       </td>
                     
                    </tr>
                  })}
                </tbody>
            </table>
              </div>: 
              <div className='w-full h-[60%]  grid place-content-center text-xl'>
              <BadgeNoAun
                nombre = 'ContraOfertadas'
              />
            </div>
          
          
          }
          
        </section>
    </div>
  )
}

export default page