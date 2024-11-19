import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataTablaDesarrollo } from '@/app/(Front)/React/Utils/dataTablaDesarrollo'
import React from 'react'

const page = async() => {


  const ruta = 'userArea'
  const url = '68b9247a-5884-46e7-a66f-3341b640469b'
  const usuarios = await getDataLista({ruta, url})

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Desarrollo
          </header>
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto  '>
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