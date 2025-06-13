'use client'


import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
import { dataAsistenteDaily } from '@/app/(Front)/React/Utils/dataAsistentesDaily';
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter()

  const [dataUsuarios, setDataUsuarios] = useState([])

  useEffect(()=>{
    const traerDatos = async()=>{
       const ruta = 'user'
       const url = 'ab1b77e2-fd7b-4824-8de7-fd2207db3e64'
      const data = await getDataLista({ruta, url})
      setDataUsuarios(data)
    } 
    traerDatos()
  }, [])


  //console.log('userrr:', dataUsuarios);

  const handleClickDaily =()=>{
    alert('Se guardo correctamente los datos')
    router.push('/dashboard/sm/meeting/review')
  }
  

  return (
    <div className='w-full h-full bg-white grid place-items-center mt-1'  >
        <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] -mt-64'>
                <div className='h-14  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold flex'>
                    <div className='w-[55%]  grid place-content-end py-4 text-tamañoLetra'>
                    Nueva Daily meeting
                    </div>
                    <header className='w-[45%] h-[7%]  flex justify-end items-center  py-8 font-bold  pr-6  text-tamañoLetra '>
                      <div className='pr-3 '>
                        Fecha Actual:
                      </div>
                      <div>
                        {format(new Date(), 'dd/MM/yyyy')}
                      </div>
                  </header>
                </div>
                
                <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[573px] overflow-auto'>
                  <table className='border border-gray-200   w-[100%]  '>
                    <thead>

                      <tr className='h-14'>
                        <td className='w-[5%] pl-3'>Numero</td>
                        <td className='w-[5%]'>Nombre</td>
                        <td className='w-[5%]'>Apellido</td>
                        <td className='w-[5%]'>¿Asistio?</td>
                        <td className='w-[5%] text-center'>Cargo</td>
                        <td className='w-[7%] text-center'>Equipo</td>
                        
                        <td className='w-[17%] text-center'>¿Que hice ayer?</td>
                        <td className='w-[17%] text-center'>¿Que hare hoy?</td>
                        <td className='w-[17%] text-center'>¿Que me bloquea?</td>
                      </tr>


                    </thead>
                    <tbody>

                    {dataAsistenteDaily.map((el)=>{
                        return <tr key={el.id} className='border border-gray-200 h-14  cursor-pointer w-full '>
                          <td className='pl-8'>
                            {el.id}
                          </td>
                          <td >
                            {el.nombre}
                          </td>
                          <td>
                            {el.apellido}
                          </td>
                          <td className=' grid  place-content-center h-14'>
                            <input className='cursor-pointer'   type="checkbox" defaultChecked />
                          </td>
                          <td>
                            {el.cargo}
                          </td>
                          <td className='w-full h-full grid place-content-center'>
                            {el.equipo}
                          </td>
                          
                          <td>
                            <input className='w-[380px] h-10 rounded border border-gray-200 pl-2' type="text" />
                          </td>
                          <td>
                            <input className='w-[380px] h-10 rounded border border-gray-200 pl-2' type="text" />
                          </td>
                          <td>
                            <input className='w-[380px] h-10 rounded border border-gray-200 pl-2' type="text" />
                          </td>
                          
                          
                          
                        </tr>
                      })}
                    </tbody>
                    
                </table>
          </div>
          <div className='w-full h-20  grid justify-end items-center pr-4 '>
          <button onClick={handleClickDaily} className='bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal w-32 h-[60%] rounded text-white font-semibold '>
            Guardar
          </button>
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page