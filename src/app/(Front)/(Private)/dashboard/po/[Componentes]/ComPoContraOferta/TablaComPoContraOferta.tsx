import { IHistoriaContraOferta } from "@/app/Interfaces/IPoHistoriasRetornadas";
import { format } from "date-fns";

const TablaComPoContraOferta = ({historiaContraOferta, handleClickVerContraoferta}:IHistoriaContraOferta) => {
  return (
    <table className='border border-gray-200   w-[98%] ml-8 '>
                <thead>
                <tr className='h-14'>
                  <td className='w-[7%] text-center'>Numero</td>
                  <td className='w-[12%] text-center'>Nombre Historia</td>
                  <td className='w-[10%] text-center'>Cargo del Solicitante</td>
                  <td className='w-[10%] text-center'>Fecha Contraoferta</td>
                  <td className='w-[10%] text-center'>Hora Contraoferta</td>
                  <td className='w-[10%] text-center'>Presupuesto (CLP)</td>
                  <td className='w-[10%] text-center'>Tiempo(Dias) </td>
                  <td className='w-[10%] text-center'>Status </td>
                  <td className='w-[15%] text-center'>Descripción </td>
                  
                </tr>
                </thead>
                <tbody>
                {historiaContraOferta.map((el, index)=>{
                  const {id,nombreHistoria, createdAt, horaAt, user, updatedAt,  presupuestoHistoria, tiempoHistoria, detalleHistoria, status} = el
                  const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                  const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14   '>
                      <td className='text-center'>
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
                      <td className='text-center'>
                        {presupuestoHistoria}
                      </td>
                      <td className='text-center'>
                        {tiempoHistoria}
                      </td>
                      <td className={`text-center  ${status === 'ContraOferta' ? 'text-colorTextoContraOferta' : 'text-green-500'}`}>
                        {status}
                      </td>
                      <td className='text-center'>
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
  )
}

export default TablaComPoContraOferta