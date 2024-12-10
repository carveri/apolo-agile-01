
import { Ihistouseridcargo } from "@/app/Interfaces/IclientesHistoriasAceptadas";
import { format } from "date-fns";

const TablaHistoriasAceptadas = ({histouseridcargo}:Ihistouseridcargo) => {

  console.log('historiaaa;', histouseridcargo);
  

  return (
    <table className='border border-gray-200   w-[100%]  '>
                <thead>
                <tr className='h-14'>
                    <td className='w-[7%] text-center'>Numero</td>
                    <td className='w-[12%] text-center'>Nombre Historia</td>
                    <td className='w-[8%] text-center'>Fecha Ingreso</td>
                    <td className='w-[8%] text-center'>Hora Ingreso</td>
                    <td className='w-[10%] text-center'>Fecha Aceptación</td>
                    <td className='w-[10%] text-center'>Hora Aceptación</td>
                    <td className='w-[8%] text-center'>Punto Historia</td>
                    <td className='w-[12%] text-center'>Tiempo Historia (Dias)</td>
                    <td className='w-[13%] text-center'>Presupuesto Historia (Clp) </td>
                    <td className='w-[10%] text-center'>Status</td>
                  </tr>
                </thead>
                <tbody>
                {histouseridcargo?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt,horaAt, status ,updatedAt, puntoHistoria, tiempoHistoria, presupuestoHistoria} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                    //const horaIngreso = format(new Date(createdAt), 'H:mm')
                    const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                      <td className='text-center'>
                        {index + 1}
                      </td>
                      <td className='text-center'>
                        {nombreHistoria}
                      </td>
                      <td className='text-center'>
                        {createdAt}
                      </td>
                      <td className='text-center'>
                        {horaAt}
                      </td>
                      
                      <td className='text-center'>
                        {updatedAt2}
                      </td>
                      <td className='text-center'>
                        {updatedPintar}
                      </td>
                      <td className='text-center'>
                        {puntoHistoria}
                      </td>
                      <td className='text-center'>
                        {tiempoHistoria}
                      </td>
                      <td className='text-center'>
                        {presupuestoHistoria}
                      </td>
                      <td className={`text-center ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-500'}`}>
                        {status}
                      </td>
                    </tr>
                  })}
                </tbody>
            </table>
  )
}

export default TablaHistoriasAceptadas