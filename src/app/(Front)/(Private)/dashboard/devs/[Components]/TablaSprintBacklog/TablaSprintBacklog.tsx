'use client'

import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore'
import { useEffect } from 'react'
import { format } from "date-fns";



const TablaSprintBacklog = ({id, resul}) => {

    


    const {historiaBacklog,getHistoriaBacklog, updatedHistoriaProductBacklog} = useHistoriaPo()

    useEffect(()=>{
        getHistoriaBacklog(resul)
    }, [])

    console.log('histoFinal989898989:', historiaBacklog);

  return (
    <>
        <header className='w-[95%] h-14 bg-colorBarraSuperiorTablas grid place-content-center font-semibold text-colorTextoBarraAlta mt-6'>
            SprintBacklog
        </header>
        <div  className='w-[95%] h-[93%]   left-3/5 max-h-[690px]'>
            
            <table className='border border-gray-200 h-full   w-[100%]  '>
                        <thead>
                        <tr className='h-14'>
                        <td className='w-[8%] text-center'>Posición</td>
                        <td className='w-[15%] text-center'>Nombre Historia</td>
                        <td className='w-[12%] text-center'>Cargo del Solicitante</td>
                        <td className='w-[10%] text-center'>Fecha Ingreso </td>
                        <td className='w-[10%] text-center'>Hora Ingreso </td>
                        <td className='w-[8%] text-center'>Status </td>
                        <td className='w-[8%] text-center'>Tiempo(dias) </td>
                        <td className='w-[10%] text-center'>Presupuesto (Clp) </td>
                        <td className='w-[10%] text-center'>Sprint </td>
                          </tr>
                        </thead>
                        <tbody>
                        {historiaBacklog?.splice(0,5).map((el, index)=>{
                          const {id, nombreHistoria, createdAt, updatedAt, user, horaAt, tiempoHistoria, presupuestoHistoria, status} = el
                            const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                            //const horaIngreso = format(new Date(createdAt), 'H:mm')
                            const updatedPintar = format(new Date(updatedAt), 'H:mm')
                            return <tr key={id} className='border border-gray-200 h-14   w-full '>
                              <td className='text-center text-blue-500 font-semibold'>
                                    {index + 1}
                                </td>
                                <td className='text-center'>
                                    {nombreHistoria}
                                </td>
                                <td className='text-center'>
                                    {user?.cargo?.nombreCargo}
                                </td>
                                
                                <td className='text-center'>
                                    {updatedAt2}
                                </td>
                                <td className='text-center'>
                                    {updatedPintar}
                                </td>
                                <td className='text-center text-colorTextoAceptada'>
                                    {status}
                                </td>
                                <td className='text-center'>
                                    {tiempoHistoria}
                                </td>
                                <td className='text-center'>
                                    {presupuestoHistoria}
                                </td>
                                <td className='text-center'>
                                    1
                                </td>
                            </tr>
                          })}
                        </tbody>
                    </table>
        </div>
    </>
  )
}

export default TablaSprintBacklog