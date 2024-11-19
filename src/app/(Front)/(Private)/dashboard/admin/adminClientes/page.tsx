import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { getData } from '@/app/(Front)/React/Fetch/getData'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataTablaClientes } from '@/app/(Front)/React/Utils/dataTablaClientes'
import React from 'react'

const page = async() => {

  const ruta = 'userArea'
  const url = '12b87914-ed8c-4411-931e-7b9b567d7117'
  const usuarios = await getDataLista({ruta, url})

  logicaTabla

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Clientes
          </header>
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto'>
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