import { format } from "date-fns";

const TablaHistoriasEnviadas = ({histouseridcargo}) => {
  return (
    <table className='border border-gray-200   w-[100%]  '>
                <thead>
                  <tr className='h-14'>
                    <td className='w-[7%] text-center'>Numero</td>
                    <td className='w-[20%] text-center'>Nombre Historia</td>
                    <td className='w-[10%] text-center'>Fecha Ingreso</td>
                    <td className='w-[10%] text-center'>Hora Ingreso</td>
                    <td className='w-[12%] text-center'>Punto Historia</td>
                    <td className='w-[12%] text-center'>Tiempo Historia</td>
                    <td className='w-[12%] text-center'>Presupuesto Historia </td>
                    <td className='w-[12%] text-center'>Status</td>
                  </tr>
                </thead>
                <tbody>
                {histouseridcargo?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt, status ,updatedAt, horaAt, puntoHistoria, tiempoHistoria, presupuestoHistoria} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
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
                        {puntoHistoria}
                      </td>
                      <td className='text-center'>
                        {tiempoHistoria}
                      </td>
                      <td className='text-center'>
                        {presupuestoHistoria}
                      </td>
                      <td className={`text-center pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-500'}`}>
                        {status}
                      </td>
                      
                      
                      
                      
                      
                      
                    </tr>
                  })}
                </tbody>
            </table>
  )
}

export default TablaHistoriasEnviadas