import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import { format } from "date-fns";

const ComPoHistoriasRetornadas = ({historiaStatusRetornada, nombre}) => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[6%] bg-white py-4 pl-4'>
            Dashboard {'>'} {nombre} {'>'} Historias Retornadas 
          </header>
            <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Historias Retornadas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold  pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          {historiaStatusRetornada.length !== 0  ?
              <div className='w-[1625px] mt-8 z-30 absolute top-32 left-3/5 max-h-[625px] overflow-auto'>
              <table className='border border-gray-200   w-[98%] ml-8 '>
                <thead className="fixed   bg-yellow-500 w-[82%] ">
                  <tr className='h-14 '>
                    <td className='w-[6%] text-center'>Numero</td>
                    <td className='w-[12%] text-center'>Nombre Historia</td>
                    <td className='w-[10%] text-center'>Cargo del Solicitante</td>
                    <td className='w-[8%] text-center'>Fecha Petición </td>
                    <td className='w-[8%] text-center'>Hora Petición</td>
                    <td className='w-[8%] text-center'>Fecha Retorno </td>
                    <td className='w-[8%] text-center'>Hora Retorno</td>
                    <td className='w-[8%] text-center'>Presupuesto (CLP)</td>
                    <td className='w-[8%] text-center'>Tiempo(Dias) </td>
                    <td className='w-[8%] text-center'>Status </td>
                  </tr>
                </thead>
                <tbody className=" ">
                {historiaStatusRetornada.map((el, index)=>{
                  const {id,nombreHistoria, createdAt, horaAt, user, updatedAt, presupuestoHistoria, tiempoHistoria, detalleHistoria, status} = el
                  const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
                  const updatedPintar = format(new Date(updatedAt), 'H:mm')
                    return <tr key={id} className='border border-gray-200 h-14 bg-orange-400 '>
                      <td className='text-center w-[6%]'>
                        {index + 1}
                      </td>
                      <td className='text-center w-[12%] bg-red-400'>
                        {nombreHistoria}
                      </td>
                      <td className='text-center w-[10%]'>
                        {user?.cargo?.nombreCargo}
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
                        {presupuestoHistoria}
                      </td>
                      <td className='text-center'>
                        {tiempoHistoria}
                      </td>
                      <td className={`text-center ${status === 'Retornada' ? 'text-colorTextoRetornada' : 'text-green-500'}`}>
                        {status}
                      </td>
                      
                       
                     
                    </tr>
                  })}
                </tbody>
            </table>
              </div>: 
              <div className='w-full h-[40%]  grid place-content-center text-xl'>
                <BadgeNoAun
                  nombre = 'Retornadas'
                />
              </div>
          
          
          }
          
        </section>
    </div>
  )
}

export default ComPoHistoriasRetornadas