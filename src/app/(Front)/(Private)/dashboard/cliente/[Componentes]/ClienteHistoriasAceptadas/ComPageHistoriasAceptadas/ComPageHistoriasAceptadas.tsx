'use client'

import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import { format } from "date-fns";
import TablaHistoriasAceptadas from "./TablaHistoriasAceptadas";
import { useEffect, useState } from "react";
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";

const ComPageHistoriasAceptadas = ({id, resul}) => {

  const [histouseridcargo, setHistouseridcargo] = useState([])  

  //console.log('hissts:', histouseridcargo);
  // console.log('iddd;', id);
  // console.log('resss;', resul);
  // console.log('ress arre;', resul[0]?.id);
  
  
  

  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = id
        const param2 = 'Aceptada'
        const param3 = resul[0]?.id
        const res = await getDataCompleja({ruta, param1, param2, param3})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  return (
    <div className='w-full h-full ' >
        {histouseridcargo.length !== 0 ?
        <section  className='w-[99%] h-[99%]  '>
        <main className='py-2 px-4 w-full h-[99%] ml-3'>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Historias Aceptadas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta'>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1625px] mt-3 z-30  top-28 left-3/5 max-h-[563px] overflow-auto'>
            <TablaHistoriasAceptadas
              histouseridcargo={histouseridcargo}
            />
      </div>
      
        </main>
    </section>: 
    <BadgeNoAun
        nombre = 'Aceptadas'
    />
      
      }
            
    </div>
  )
}

export default ComPageHistoriasAceptadas