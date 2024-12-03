const TablaComPoNuevaTarea = ({historiaStatus, handleClickVerNuevasTareasPo}) => {
  
  console.log('histt:', historiaStatus);
  
  
  return (
    <table className='border border-gray-200   w-[98%] ml-8 '>
              <thead>
              <tr className='h-14'>
                <td className='w-[7%] text-center'>Numero</td>
                <td className='w-[15%] text-center'>Nombre Historia</td>
                <td className='w-[12%] text-center'>Cargo del Solicitante</td>
                <td className='w-[8%] text-center'>Fecha Petición </td>
                <td className='w-[8%] text-center'>Hora petición</td>
                <td className='w-[10%] text-center'>Presupuesto (CLP)</td>
                <td className='w-[8%] text-center'>Tiempo(Dias) </td>
                <td className='w-[10%] text-center'>Status </td>
                <td className='w-[10%] text-center'>Para </td>
                <td className='w-[15%] text-center'>Descripción </td>
                
              </tr>
              </thead>
              <tbody>
              {historiaStatus.map((el, index)=>{
                const {id,nombreHistoria, createdAt, para, status, user, horaAt, presupuestoHistoria, tiempoHistoria, detalleHistoria} = el
                  return <tr key={id} className='border border-gray-200 h-14   '>
                    <td className='text-center'>
                      {index + 1}
                    </td>
                    <td className="text-center">
                      {nombreHistoria}
                    </td>
                    <td className="text-center ">
                      {user?.cargo?.nombreCargo}
                    </td>
                    <td className="text-center ">
                      {createdAt}
                    </td>
                    <td className="text-center">
                      {horaAt}
                    </td>
                    <td className="text-center">
                      {presupuestoHistoria}
                    </td>
                    <td className="text-center">
                      {tiempoHistoria}
                    </td>
                    <td className={`text-center pl-6 ${status === 'Pendiente' ? 'text-yellow-400' : 'text-green-500'}`}>
                      {status}
                    </td>
                    <td className="text-center">
                      {para}
                    </td>
                    <td className="text-center">
                      {detalleHistoria}
                    </td>
                     <td className='text-center '>
                      <button onClick={()=>handleClickVerNuevasTareasPo(id)} className='bg-violet-100 grid place-content-center border border-gray-200 w-[70%] h-[80%] py-1 px-8 rounded hover:bg-violet-200'>
                        Ver
                      </button>
                    </td>
                   
                  </tr>
                })}
              </tbody>
          </table>
  )
}

export default TablaComPoNuevaTarea