import { dataAsistenteDaily } from '@/app/(Front)/React/Utils/dataAsistentesDaily'
import { dataHistoricoDaily } from '@/app/(Front)/React/Utils/dataHistoricoDaily'
import { format } from "date-fns";

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold flex'>
                    <div className='w-[55%]  grid place-content-end py-3 text-base'>
                    Daily meeting Historica
                    </div>
                    <header className='w-[45%] h-[7%]  flex justify-end items-center  py-8 font-bold mb-1 pr-6   '>
                      <div className='pr-3 '>
                        Fecha Actual:
                      </div>
                      <div>
                      {format(new Date(), 'dd/MM/yyyy')}
                      </div>
                  </header>
                </div>
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[668px] overflow-auto'>
                    <table className='border border-gray-200   w-[100%]  '>
                      <tr className='h-14'>
                      <td className='w-[5%] pl-3'>Numero</td>
                        <td className='w-[15%] pl-3 text-center'>Daily</td>
                        <td className='w-[15%]'>Equipo</td>
                        <td className='w-[15%]'>Fecha</td>
                        <td className='w-[15%] text-center'>Duracion(min)</td>
                        <td className='w-[15%] text-center'>Participantes</td>
                        
                      </tr>
                      {dataHistoricoDaily.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                              {el.id}
                            </td>
                            <td className='text-center'>
                              {el.daily}
                            </td>
                            <td >
                              {el.equipo}
                            </td>
                            <td>
                              {el.fecha}
                            </td>
                            <td className='text-center'>
                              {el.duracion}
                            </td>
                            <td className='text-center'>
                              {el.participantes}
                            </td>
                            <td className=' grid place-items-center w-full h-12 '>
                              <button className='bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal w-36 h-[70%]   rounded text-white font-semibold '>
                                Ver
                              </button>
                            </td>
                            
                            
                            
                          </tr>
                        })}
                  </table>
        
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page