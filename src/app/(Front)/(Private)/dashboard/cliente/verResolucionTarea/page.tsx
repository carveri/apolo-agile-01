'use client'

import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria';

const page = () => {

  const [historia, setHistoria] = useState({})
  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo

  useEffect(()=>{
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const url = 'a025b093-04a4-431f-b9b1-1d123114d5db'
      const res = await getDataLista({ruta, url})
      setHistoria(res)
    }
    traerHistorias()
  }, [])

  console.log('histo unica:', historia);


  // activos
  const [tiempoActivo, setTiempoActivo] = useState(false)
  const [presupuestoActivo, setPresupuestoActivo] = useState(false)
  const [equipoActivo, setEquipoActivo] = useState(false)
  
  const handleClickTiempo =()=>{
    setTiempoActivo(!tiempoActivo)
  }

  const handleClickPresupuesto =()=>{
    setPresupuestoActivo(!presupuestoActivo)
  }

  const handleClickEquipo = ()=>{
    setEquipoActivo(!equipoActivo)
  }
  
  return (
    <div className='w-full h-full '>
        <header className='w-full h-[5%] bg-white py-4 pb-10 pl-4 '>
            Dashboard {'>'} Clientes {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
            <header className='bg-gray-100 h-12 grid place-content-center '>
              Resolucion de Historia retornada
            </header>
            <table className='border border-gray-200 h-[40%]  w-[97%] mt-5  ml-6'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  pl-3'>Numero</td>
                        <td className='w-[10%] pl-8'>Nombre Historia</td>
                        <td className='w-[10%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Parametros</td>
                        <td className='w-[10%] text-center'>Oferta Parametros</td>
                        <td className='w-[10%] text-center'>Peso Oferta</td>
                        <td className='w-[10%] text-center'>Porcentaje (%)</td>
                        <td className='w-[27%] text-center'>Descripciónes</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                     <tr className='border border-gray-200 h-14 [&tr>]  cursor-pointer w-full '>
                          <td className='pl-8 h-20'>
                            1
                          </td>
                          <td className='pl-8'>
                            {historia?.nombreHistoria}
                          </td>
                          
                         
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia3}
                            </div>
                            

                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                              {historia?.tiempo1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.presupuesto2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.equipo3}
                            </div>

                          </td>
                          
                          <td>
                            <div className='h-20 grid place-content-center'>
                                <div onClick={handleClickTiempo} className='rounded border border-gray-200 w-24 h-8 grid place-content-center'>
                                  15
                                </div>
                                {tiempoActivo &&
                                
                                <div className={`mt-14  z-50 absolute  left-3/5 max-h-12 overflow-auto`}>
                                {dataTiempoHistoria.map((el)=>{
                                  const {id, tiempo} = el
                                  return <div className='w-20 ml-10 bg-white hover:bg-gray-100 grid place-content-center'  key={id}>
                                    {tiempo}
                                  </div>
                                })}

                                </div>
                                }
                              </div>
                              <div className='h-20 grid place-content-center'>
                                <input  type="text" className='rounded w-24 h-8 pl-3 border border-gray-200' placeholder='$100.000'/>
                              </div>
                              <div className='h-20 grid place-content-center'>
                                <div onClick={handleClickEquipo} className='border rounded border-gray-200 w-24 h-8 grid place-content-center'>
                                  35 
                                </div>
                                {equipoActivo &&
                                  <div className={`mt-14 z-50 absolute  left-3/5 max-h-12 overflow-auto`}>
                                  {dataTiempoHistoria.map((el)=>{
                                    const {id, tiempo} = el
                                    return <div className='w-20 ml-10 bg-white hover:bg-gray-100 grid place-content-center'  key={id}>
                                      {tiempo}
                                    </div>
                                  })}

                                  </div>
                                
                                }
                              </div>
                            
                          </td>
                          <td>
                            <div className='h-20 grid place-content-center'> 
                              23d
                            </div>
                            <div className='h-20 grid place-content-center'> 
                              23s
                            </div>
                            <div className='h-20 grid place-content-center'> 
                              23a
                            </div>

                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso3}
                            </div>
                          </td>
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion3}
                            </div>
                          </td>
                          

                          
                          
                          
                          
                          
                          
                          
                          
                        </tr>
                      
                    </tbody>
                </table>
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  Total peso de oferta: 40%
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                  <button className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  <button className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                    Enviar Contraoferta
                  </button>
                  <button className='bg-colorBotonEliminar w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Tarea
                  </button>
                </div>
          </main>
    </div>
  )
}

export default page