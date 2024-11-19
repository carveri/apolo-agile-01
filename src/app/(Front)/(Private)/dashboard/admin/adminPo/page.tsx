import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataTablaPo } from '@/app/(Front)/React/Utils/dataTablaPo'
import React from 'react'

const page = async() => {

  const ruta = 'userArea'
  const url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
  const usuarios = await getDataLista({ruta, url})
  //console.log('resultado del po:', usuariosPo);


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Product Owner Home
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