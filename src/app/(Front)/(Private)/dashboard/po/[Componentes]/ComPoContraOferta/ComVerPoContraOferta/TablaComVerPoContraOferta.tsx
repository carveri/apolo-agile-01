import { IHistoria } from "@/app/Interfaces/IGeneral"
import { IHistoriaPorId } from "@/app/Interfaces/IPoContraOferta"



const TablaComVerPoContraOferta = ({historia}:any) => {

  console.log('HISTO:', historia);
  

  return (
    <table className='border border-gray-200 h-[40%]  w-[47%] mt-5   ml-[450px]'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  text-center'>Numero</td>
                        <td className='w-[10%] text-center'>Nombre Historia</td>
                        <td className='w-[10%] text-center'>Cargo del Solicitante</td>
                        <td className='w-[10%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Contraoferta del cliente</td>
                      </tr>
                    </thead>
                    <tbody>
                     <tr className='border border-gray-200 h-14 [&tr>]  cursor-pointer w-full '>
                          <td className='pl-8 h-20'>
                            1
                          </td>
                          <td className='text-center'>
                            {historia.at(0)?.nombreHistoria}
                          </td>
                          
                          <td className='text-center'>
                            {historia.at(0)?.user?.cargo?.nombreCargo}
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
                        </tr>
                      
                    </tbody>
                </table>
  )
}

export default TablaComVerPoContraOferta