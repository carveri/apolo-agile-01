import { format } from "date-fns";

const TablaHistoriasAceptadas = ({histouseridcargo}) => {
  return (
    <table className='border border-gray-200   w-[100%]  '>
                <thead>
                <tr className='h-14'>
                    <td className='w-[7%] pl-3'>Numero</td>
                    <td className='w-[15%] pl-8'>Nombre Historia</td>
                    <td className='w-[10%] pl-8'>Fecha Ingreso</td>
                    <td className='w-[10%] pl-8'>Fecha Aceptación</td>
                    <td className='w-[10%] pl-8'>Hora Aceptación</td>
                    <td className='w-[10%] pl-8'>Punto Historia</td>
                    <td className='w-[14%] pl-8'>Tiempo Historia (Dias)</td>
                    <td className='w-[14%] pl-8'>Presupuesto Historia (Clp) </td>
                    <td className='w-[10%] pl-8'>Status</td>
                  </tr>
                </thead>
                <tbody>
                {histouseridcargo?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt, status ,updatedAt, puntoHistoria, tiempoHistoria, presupuestoHistoria} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                    const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td className='pl-8'>
                        {nombreHistoria}
                      </td>
                      <td className='pl-10'>
                        {createdAt}
                      </td>
                      <td className='pl-12'>
                        {updatedAt2}
                      </td>
                      <td className='pl-16'>
                        {updatedPintar}
                      </td>
                      <td className='pl-20'>
                        {puntoHistoria}
                      </td>
                      <td className='pl-20'>
                        {tiempoHistoria}
                      </td>
                      <td className='pl-20'>
                        {presupuestoHistoria}
                      </td>
                      <td className={`pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-500'}`}>
                        {status}
                      </td>
                    </tr>
                  })}
                </tbody>
            </table>
  )
}

export default TablaHistoriasAceptadas