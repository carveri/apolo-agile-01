'use client'

import { dataAsistenteDaily } from '@/app/(Front)/React/Utils/dataAsistentesDaily'
import {useState} from 'react'
import { format } from "date-fns";
import { dataAsistenteDailyHoy } from '@/app/(Front)/React/Utils/dataAsistentesDailyHoy';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const page = () => {


  const [selected, setSelected] = useState<Date>();

  const [activarCalendario, setActivarCalendario] = useState(false)

  const handleClickCalendarioPlanning =()=>{
    setActivarCalendario(!activarCalendario)
  }

  return (
    <div className='w-full h-full bg-white grid place-items-center'>
      <section  className='w-[99%] h-[99%]  '>
            <main className='py-2 px-4 w-full h-[99%] '>
                <div className='h-14  bg-gray-100 grid place-content-center '>
                    Nueva Planning meeting
                </div>
                <header className='w-full h-[7%]  flex justify-end items-center  py-6 font-bold mb-1 pr-6  text-violet-800 '>
                 
                  <div className='pr-3 '>
                    Fecha Actual:
                  </div>
                  <div>
                    {format(new Date(), 'dd/MM/yyyy')}
                  </div>
                </header>
                <div className='w-[1625px] z-30  top-28 left-3/5 max-h-[520px] overflow-auto'>
                  <table className='border border-gray-200   w-[100%]  '>
                    <tr className='h-14'>
                      <td className='w-[5%] pl-3'>Numero</td>
                      
                      <td className='w-[10%] text-center'>Fecha</td>
                      
                      <td className='w-[10%]'>Sprint</td>
                      <td className='w-[15%]'>Lider</td>
                      <td className='w-[15%]'>Facilitador</td>
                      <td className='w-[15%]'>Historias</td>
                      <td className='w-[15%]'>Temas tratados</td>
                      
                    </tr>
                    {dataAsistenteDailyHoy.map((el)=>{
                        return <tr key={el.id} className='border border-gray-200 h-14   w-full '>
                          <td className='pl-8'>
                            {el.id}
                          </td>
                          
                          <td className='text-violet-500 font-bold text-center'>
                          {format(new Date(), 'dd/MM/yyyy')}
                          </td>
                          
                          
                          <td >
                            7
                          </td>
                          
                          <td >
                            Product Owner
                          </td>
                          <td >
                            Scrum Master
                          </td>
                          <td >
                            12 y 13
                          </td>
                          <td >
                            <input className='w-[500px] py-2 border border-gray-200 ' type="text" />
                          </td>
                          
                          
                          
                        </tr>
                      })}
                </table>
          </div>
          <div className='w-full h-24  grid justify-end items-center pr-4 '>
          <button className='bg-violet-600 w-32 h-[50%] rounded text-white font-semibold hover:bg-violet-700'>
            Guardar
          </button>
          </div>
            </main>
        </section>    
    </div>
  )
}

export default page