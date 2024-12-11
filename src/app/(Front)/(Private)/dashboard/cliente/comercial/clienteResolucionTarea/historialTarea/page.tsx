
import { dataHistorialResolucionTarea } from '@/app/(Front)/React/Utils/dataHistorialResolucionTarea'

const page = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
                <div className='h-14  bg-violet-100 grid place-content-center '>
                    Historical Resolucion de peticiones
                </div>
                <div className='w-[1625px] h-[90%] z-30  top-20 left-3/5 max-h-[610px] overflow-auto'>
                    <table className='border border-gray-200   w-[100%]  '>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%] pl-3'>Numero</td>
                        <td className='w-[7%]'>Nombre Tarea</td>
                        <td className='w-[10%]'>Fecha Ingreso</td>
                        <td className='w-[10%]'>Feacha Respuesta</td>
                        <td className='w-[10%] text-center'>Status</td>
                        <td className='w-[15%] text-center'>Discrepancia 1</td>
                        <td className='w-[15%] text-center'>Discrepancia 2</td>
                        
                      </tr>
                    </thead>
                      <tbody>
                      {dataHistorialResolucionTarea.map((el)=>{
                          return <tr key={el.id} className='border border-gray-200 h-[48px]  cursor-pointer w-full '>
                            <td className='pl-8'>
                            {el.id}
                          </td>
                          <td >
                            {el.nombreTarea}
                          </td>
                          <td>
                            {el.fechaIngreso}
                          </td>
                          <td>
                            {el.fechaRespuesta}
                          </td>
                          
                          <td>
                            {el.status}
                          </td>
                          <td >
                            {el.discrepancia1}
                          </td>
                          <td >
                            {el.discrepancia2}
                          </td>
                          </tr>
                        })}
                      </tbody>
                  </table>
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page