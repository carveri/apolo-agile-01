import { format } from "date-fns";

const TablaResolucionTareas = ({histouseridcargo, handleClickVerResolucionHistoria}) => {
  return (
    <table className='border border-gray-200   w-[100%]  '>
                <thead>
                  <tr className='h-14'>
                    <td className='w-[7%] pl-3'>Numero</td>
                    <td className='w-[20%] pl-8'>Nombre Historia</td>
                    <td className='w-[10%] pl-8'>Fecha Ingreso</td>
                    <td className='w-[12%] pl-8'>Fecha Respuesta</td>
                    <td className='w-[12%] pl-8'>Hora Respuesta</td>
                    <td className='w-[8%] pl-8'>Status </td>
                    
                    <td className='w-[10%] text-center'>Discrepancia 1</td>
                    <td className='w-[10%] text-center'>Discrepancia 2</td>
                    
                    
                  </tr>
                </thead>
                <tbody>
                {histouseridcargo?.map((el, index)=>{
                  const {id, nombreHistoria, createdAt, status ,updatedAt, discrepancia1, discrepancia2} = el
                    const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                    const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                      <td className='pl-8'>
                        {index + 1}
                      </td>
                      <td className='pl-8'>
                        {nombreHistoria}
                      </td>
                      <td className='text-center'>
                        {createdAt}
                      </td>
                      
                      <td className='pl-14'>
                        {status === 'Pendiente' ? '-': updatedAt2}
                      </td>
                      <td className=' text-center'>
                        {updatedPintar}
                      </td>
                      <td className={`pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-cyan-500'}`}>
                        {status}
                      </td>
                     
                      <td className='pl-8'>
                        {discrepancia1}
                      </td>
                      <td className='pl-8'>
                        {discrepancia2}
                      </td>
                      
                      
                      <td className='grid place-items-center pt-2 pr-2'>
                        <button onClick={()=>handleClickVerResolucionHistoria(id)} className='w-[70px] h-10 ml-3 mr-3 bg-colorBotonVer rounded text-colorTextoBotonVer'>
                          Ver
                        </button>
                      </td>
                      
                      
                      
                      
                    </tr>
                  })}
                </tbody>
            </table>
  )
}

export default TablaResolucionTareas