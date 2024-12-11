import { IVerResolucionTarea } from "@/app/Interfaces/IVerResolucionTarea"

const TablaVerResolucionTarea = ({historia,peso1, peso2, handleChangeVerResuTarea, pesoTiempo, pesoPresupuesto}:IVerResolucionTarea) => {
  
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
                            {historia.at(0)?.nombreHistoria}
                          </td>
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.discrepancia1} (Dias)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.discrepancia2} (Clp)
                            </div>
                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.tiempoHistoria}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.presupuestoHistoria}
                            </div>
                          </td>
                          <td>
                              <div className='h-20 grid place-content-center'>
                                {historia.at(0)?.peso2 !== 100 && <input name='tiempo'  onChange={handleChangeVerResuTarea} type="number" className='rounded w-24 h-8 pl-10 border border-gray-200 ' placeholder='4'/>}
                              </div>
                              <div className='h-20 grid place-content-center'>
                                {historia.at(0)?.peso1 !== 100 && <input name='presupuesto'  onChange={handleChangeVerResuTarea}  type="number" className='rounded w-24 h-8 pl-3 border border-gray-200' placeholder='100.000'/>} 
                              </div>
                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoTiempo) ?? 0}
                            </div>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoPresupuesto) ?? 0}
                            </div>
                            
                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                            {historia.at(0)?.peso1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia.at(0)?.peso2}
                            </div>
                            
                          </td>
                          
                          
                          
                          
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.descripcion1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.descripcion2}
                            </div>
                            
                          </td>
                        </tr>
                      
                    </tbody>
                </table>
  )
}

export default TablaVerResolucionTarea