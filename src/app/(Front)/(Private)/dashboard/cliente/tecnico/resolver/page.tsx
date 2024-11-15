'use client'

import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'

const page = () => {


  const { idHistoria} = useHistoriaPo()

  const [historia, setHistoria] = useState({})

  useEffect(()=>{
    //cambiarIdHistoria()
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const url = "373b67fc-42b9-421e-95cc-d066d933f80d"
      const res = await getDataLista({ruta, url})
      setHistoria(res)
    }
    traerHistorias()
    
  }, [])

  console.log('histo unica:', historia);


  const handleClickAgregarAlProductBacklogContraT =()=>{
    console.log('as');
    
  }

  const handleClickEliminarTareaClienteT =()=>{
    console.log('afff');
    
  }

  return (
    <main className='w-full h-[95%] '>
            <header className='bg-gray-100 h-12 grid place-content-center '>
              Resolver Historia Tecnica
            </header>
            <table className='border border-gray-200 h-[40%]  w-[47%] mt-5   ml-[450px]'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  pl-3'>Numero</td>
                        <td className='w-[10%] pl-8'>Nombre Historia</td>
                        <td className='w-[13%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Contraoferta del cliente</td>
                        
                        
                        
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
                              {historia?.discrepancia1} (Dias)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia2} (Clp)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia3} (personas)
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
                          

                          
                          
                          
                          
                          
                          
                          
                          
                        </tr>
                      
                    </tbody>
                </table>
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                
                  <button onClick={handleClickAgregarAlProductBacklogContraT} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  <button onClick={handleClickEliminarTareaClienteT} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Tarea
                  </button>
                </div>
          </main>
  )
}

export default page