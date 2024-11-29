'use client'

import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { useEffect } from 'react'
import { useHistoriaAdmin } from '../../../[stores]/adminStore'

const page = () => {


  const {usuarios, getUsuariosDevs} = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosDevs()
    }, [])

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Desarrollo
          </header>
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto  '>
          <section className='bg-colorBarraSuperiorTablas w-[98%] h-[50px] text-base grid place-content-center ml-8 text-white'>
            Desarrolladores de Hilti
          </section>
          <Tabla
            logicaTabla={logicaTabla}
            usuarios = {usuarios}
          />
          </div>
        </section>
    </div>
  )
}

export default page