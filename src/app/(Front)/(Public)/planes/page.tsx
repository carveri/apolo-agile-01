import React from 'react'
import { dataPlanes } from '../../React/Utils/dataPlanes'

const page = () => {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-14  pt-4 pl-32'>
        Home {'>'} Planes
      </div>
      <div className='grid place-items-center w-full h-[800px]'>
        <section className='w-5/6 h-[95%]  grid grid-cols-3 place-items-center gap-3'>
        {dataPlanes.map((el)=>{
          return <article key={el.id} className='w-full h-full border border-gray-200 py-8'>
            <header className='w-full h-20 text-xl grid place-content-center'>
              {el.nombre}
            </header>
            <main className='w-full h-3/6 px-10'>
              {el.descripcion}
            </main>
            <section className='w-full h-1/6 text-xl grid place-content-center text-colorTexto '>
              USD {el.valor}
            </section>
            <section className='w-full h-1/6 grid place-items-center'>
              <button className='bg-colorBotonPrincipal w-60 h-14 rounded text-white font-bold'>
                Seleccionar
              </button>
            </section>
          </article>
        })}
          
        </section>
      </div>
    </div>
  )
}

export default page