'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";

const page = () => {

  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'eaefa4b5-a5e8-4ed4-a3ca-1ae450242c1c'
        const param2 = 'Pendiente'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  return (
    <div className='w-full h-full   ' >
        {histouseridcargo.length !== 0 ?
        <section  className='w-[99%] h-[99%]  '>
        <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta  font-semibold'>
               Historias Enviadas 
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1625px]  z-30  mt-3 top-28 left-3/5 max-h-[563px] overflow-auto'>
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
                  const {id, nombreHistoria, createdAt, status ,updatedAt, horaAt, puntoHistoria, tiempoHistoria, presupuestoHistoria, discrepancia4} = el
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
      </div>
      
        </main>
    </section>: 
    <BadgeNoAun
      nombre='Enviadas'
    />
      
      }
            
    </div>
  )
}

export default page