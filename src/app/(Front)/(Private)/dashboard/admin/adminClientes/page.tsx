'use client'

import { useEffect } from "react";
import { useHistoriaAdmin } from "../../../[stores]/adminStore";
import Tabla from "@/app/(Front)/React/Components/Tablas/Tabla";
import { logicaTabla } from "@/app/(Front)/React/Components/Tablas/logicaTabla";



const page = () => {

 
    const {usuarios, getUsuariosClientes} = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosClientes()
    }, [])

    //console.log('histotablaadmin:', usuarios);
    

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Clientes
          </header>
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto'>
          <section className='bg-colorBarraSuperiorTablas w-[98%] h-[50px] text-lg grid place-content-center ml-8 text-white'>
            Clientes de Hilti
          </section>
          <Tabla
            logicaTabla={logicaTabla}
            usuarios={usuarios}
          />
          </div>
        </section>
    </div>
  )
}

export default page