import React from 'react'
import { dataProductos } from '../../React/Utils/dataProductos'

import BadgeProducto from './Components/BadgeProducto';
import { dataPlugins } from '../../(Private)/dashboard/store/Utils/dataPlugins';
import BadgeStore from '../../(Private)/dashboard/store/Components/CuerpoStore/BadgeStore/BadgeStore';

const page = () => {
  return (
    <div className='w-full h-[800px] '>
       <div className='w-full h-14  pt-4 pl-32'>
        Home {'>'} Productos
       
      </div>
      <div className='w-[88%] h-full bg-gray-50 grid justify-items-center' >
        <div className='ml-44'>
        <header className=' w-full h-[8%] grid place-content-center  text-colorTextoNavbar font-semibold'>
            Plugins
        </header>
        <main className='w-full h-[92%] '>
            <section className='w-full h-[7%]  flex items-center px-3'>
                <article className='w-[80%]'>
                    <label htmlFor="">Buscar:</label>
                    <input className='w-[90%] pl-2 h-9 rounded ml-2 border border-gray-200' placeholder='database...' type="text" />
                </article>
                <article className='w-[10%] h-8 border border-b-colorTextoNavbar  grid place-content-center mr-3 cursor-pointer'>
                    Todos 
                </article>
                <article className='w-[10%] h-8 border border-b-colorTextoNavbar  grid place-content-center mr-3 cursor-pointer'>
                    Departamento
                </article>
                {/* <article className='w-[10%] h-8 border border-b-colorTextoNavbar grid place-content-center cursor-pointer'>
                    Clasificación
                </article> */}
            </section>
            <section className='w-full h-[93%] '>
                <div className='w-full h-[8%]  grid place-content-center text-gray-700'>
                    Todos los Plugins
                </div>
                <section className="w-full h-[92%] grid grid-cols-2  gap-5 p-2  z-30 mt-3  top-28 left-3/5 max-h-[610px] overflow-auto">
                    {dataPlugins.map((el)=>{

                        return <BadgeStore
                            el={el}
                            key={el.id}
                        />
                    })}
                </section>
            </section>
        </main>
        </div>
    </div>
      
    </div>
  )
}

export default page