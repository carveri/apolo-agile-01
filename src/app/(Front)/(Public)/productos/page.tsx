import React from 'react'
import { dataProductos } from '../../React/Utils/dataProductos'

import BadgeProducto from './Components/BadgeProducto';

const page = () => {
  return (
    <div className='w-full h-[800px] '>
       <div className='w-full h-14  pt-4 pl-32'>
        Home {'>'} Productos
        <header className='py-12 font-semibold text-colorTexto text-xl'>
          Productos de gestion
        </header>
      </div>
      <div className='grid place-items-center w-full h-[700px]  pt-24'>
        <section className='grid  w-5/6 h-[700px] grid-cols-4 grid-rows-8  gap-3 '> 
          {dataProductos.map((el)=>{
            return <BadgeProducto 
              key={el.descripcion}
              el = {el}
            
            />
          })}
        </section>
        
      </div>
      
    </div>
  )
}

export default page