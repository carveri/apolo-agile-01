import React from 'react'

const TablaVerResolucionTarea = ({historia,peso1, peso2, handleChangeVerResuTarea, pesoTiempo, pesoPresupuesto}) => {
  return (
    <table className='border border-gray-200 h-[40%]  w-[97%]  ml-6'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  pl-3'>Numero</td>
                        <td className='w-[10%] pl-8'>Nombre Historia</td>
                        <td className='w-[13%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Propuesta del Po($)</td>
                        
                        <td className='w-[10%] text-center'>Nueva oferta($)</td>
                        <td className='w-[10%] text-center'>Peso Oferta</td>
                        <td className='w-[10%] text-center'>Peso Discrepancia (%)</td>
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
                              {historia?.discrepancia1} (Dias)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia2} (Clp)
                            </div>
                            
                            

                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                              {historia?.tiempoHistoria}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.presupuestoHistoria}
                            </div>
                            

                          </td>
                          <td>
                              <div className='h-20 grid place-content-center'>
                                {peso2 !== 100 && <input name='tiempo'  onChange={handleChangeVerResuTarea} type="number" className='rounded w-24 h-8 pl-10 border border-gray-200 ' placeholder='4'/>}
                              </div>
                              <div className='h-20 grid place-content-center'>
                                {peso1 !== 100 && <input name='presupuesto'  onChange={handleChangeVerResuTarea}  type="number" className='rounded w-24 h-8 pl-3 border border-gray-200' placeholder='100.000'/>} 
                              </div>
                             
                              
                            
                          </td>


                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoTiempo)}
                            </div>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoPresupuesto)}
                            </div>
                            
                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso2}
                            </div>
                            
                          </td>
                          
                          
                          
                          
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion2}
                            </div>
                            
                          </td>
                          

                          
                          
                          
                          
                          
                          
                          
                          
                        </tr>
                      
                    </tbody>
                </table>
  )
}

export default TablaVerResolucionTarea