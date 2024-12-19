import { IHistoria } from "@/app/Interfaces/IGeneral"
import { IHistoriaPorId } from "@/app/Interfaces/IPoContraOferta"



const TablaComVerPoContraOferta = ({historia}:any) => {

  console.log('HISTO:', historia);
  

  return (
    <table className='shadow-xl h-[40%]  w-[50%]  ml-[450px] mt-10 '>
                    <thead>
                      <tr className='h-14 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold '>
                        <td className='w-[7%]  text-center '>Numero</td>
                        <td className='w-[15%] text-center'>Nombre Historia</td>
                        <td className='w-[10%] text-center'>Cargo del Solicitante</td>
                        <td className='w-[10%] text-center'>Discrepancias</td>
                        <td className='w-[15%] text-center'>Contraoferta del cliente</td>
                      </tr>
                    </thead>
                    <tbody>
                     <tr className='border  border-gray-200 h-14 [&tr>]  cursor-pointer w-full '>
                          <td className='text-center'>
                            1
                          </td>
                          <td className='text-center'>
                            {historia.at(0)?.nombreHistoria}
                          </td>
                          
                          <td className='text-center'>
                            {historia.at(0)?.user?.cargo?.nombreCargo}
                          </td>
                          <td className=' '>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.discrepancia1} (Dias)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia.at(0)?.discrepancia2} (Clp)
                            </div>
                          </td>
                          <td className=''>
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