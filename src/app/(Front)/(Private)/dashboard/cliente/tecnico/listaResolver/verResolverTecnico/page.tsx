'use client'

import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore'
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { updateData } from '@/app/(Front)/React/Fetch/updateData'
import {useState, useEffect} from 'react'

const page = () => {


  const { idHistoria} = useHistoriaPo()

  const [historia, setHistoria] = useState({})

  useEffect(()=>{
    //cambiarIdHistoria()
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const url = idHistoria
      const res = await getDataLista({ruta, url})
      setHistoria(res)
    }
    traerHistorias()
    
  }, [])

  console.log('idHisto ver lider tecnico:', idHistoria);


  const handleClickAgregarAlProductBacklogContraT =()=>{
    const ruta = 'historia'
    const status = 'Aceptada'
    const id = idHistoria
    const data = {status}
    updateData({ruta, id, data})
    alert('Se agrego correctamente la historia al Productbacklog')
    
  }

  const handleClickEliminarTareaClienteT =()=>{
    const ruta = 'historia'
    const url = idHistoria
    
    deleteData({ruta, url})
    alert('Se elimino correctamente la historia')
    
  }

  return (
    <main className='w-full h-[100%]  '>
            <header className='bg-colorBarraSuperiorTablas h-12 grid place-content-center text-colorTextoBarraAlta font-semibold  '>
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
                <div className='w-full h-[100%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                
                  <button onClick={handleClickAgregarAlProductBacklogContraT} className='bg-colorBotonActualizar hover:bg-blue-700 w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  <button onClick={handleClickEliminarTareaClienteT} className='bg-colorBotonEliminar hover:bg-red-600 w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Historia
                  </button>
                </div>
          </main>
  )
}

export default page