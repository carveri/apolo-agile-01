import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { dataTablaSm } from '@/app/(Front)/React/Utils/dataTablaSm'
import React from 'react'

const page = async() => {

  const ruta = 'userArea'
  const url = 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'
  const usuarios = await getDataLista({ruta, url})
  //console.log('resultado del po:', usuariosSm);


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Admin {'>'} Scrum Master
          </header>
        </section><section className='w-[99%] h-[99%]  '>
          
          <div className='w-[1625px] z-30 absolute top-28 left-3/5 max-h-[730px] overflow-auto'>
          <section className='bg-colorBarraSuperiorTablas w-[98%] h-[50px] text-lg grid place-content-center ml-8 text-white'>
            Scrum Master de Hilti
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