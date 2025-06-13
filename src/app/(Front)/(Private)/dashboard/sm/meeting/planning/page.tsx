'use client'


import { format, addBusinessDays } from "date-fns";
//import {addBusinessDays}  from "date-fns/addBusinessDays";
import { dataAsistenteDailyHoy } from '@/app/(Front)/React/Utils/dataAsistentesDailyHoy';
//import "react-day-picker/style.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter()
  const [suma, setSuma] = useState(0)

  // const [selected, setSelected] = useState();

  // const [activarCalendario, setActivarCalendario] = useState(false)

  // const handleClickCalendarioPlanning =()=>{
  //   setActivarCalendario(!activarCalendario)
  // }

  const handleChangeINputSM =(e)=>{
    setSuma(e.target.valueAsNumber)
  }


  const result = addBusinessDays(new Date(2019, 8, 1), 10)

  const handleClickGuardarPLanning =()=>{
    alert('Se guardo correctamente los datos')
    router.push('/dashboard/sm/meeting/daily')
  }

  return (
    <div className='w-full h-full bg-white grid place-items-center'>
      <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
                <div className='h-14  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta font-semibold flex'>
                    <div className='w-[55%]  grid place-content-end py-3 text-tamañoLetra'>
                    Nueva Planning meeting
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
                <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[520px] overflow-auto'>
                  <table className='border border-gray-200   w-[100%]  '>
                    <thead className='h-14 text-gray-600'>
                      <tr>
                      <td className='w-[5%] text-center'>Numero</td>                      
                      <td className='w-[10%] text-center'>Inicio Sprint</td>
                      <td className='w-[10%] text-center'>Dias Sprints</td>
                      <td className='w-[10%] text-center'>Final Sprint</td>
                      <td className='w-[10%] text-center'>N° Sprint</td>
                      <td className='w-[15%] text-center'>Historias</td>
                      
                      <td className='w-[15%] text-center'>Numero de Tareas por Historia</td>
                      <td className='w-[15%] text-center'>Objetivo Sprint</td>  
                      </tr>
                    </thead>
                    <tbody>
                    {dataAsistenteDailyHoy.map((el)=>{
                        return <tr key={el.id} className='border border-gray-200 h-14   w-full '>
                          <td className='text-center'>
                            {el.id}
                          </td>
                          <td className='text-violet-500 font-bold text-center'>
                            {format(new Date(), 'dd/MM/yyyy')}
                          </td>
                          <td className='h-14 grid self-center py-2'>
                            <input onChange={handleChangeINputSM} className='w-[110px] py-2 text-center ml-6 border border-gray-200 ' placeholder='5' type="number" />
                          </td>
                          <td className='text-violet-500 font-bold text-center'>
                            {24+suma}/01/2025
                          </td>
                          <td className='text-center'>
                            1
                          </td>  
                          <td className='text-center'>
                            1-2
                          </td>
                          <td className='grid place-content-center '>
                            <input className='w-[150px] py-2 text-center border border-gray-200 ' placeholder='2' type="text" />
                          </td>
                          <td className='text-center'>
                            <input className='w-[300px] py-2 border border-gray-200 ' type="text" />
                          </td>
                        </tr>
                      })}
                    </tbody>
                </table>
          </div>
          <div className='w-full h-24  grid justify-end items-center pr-4 '>
          <button onClick={handleClickGuardarPLanning} className='bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal w-32 h-[50%] rounded text-white font-semibold '>
            Guardar
          </button>
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page