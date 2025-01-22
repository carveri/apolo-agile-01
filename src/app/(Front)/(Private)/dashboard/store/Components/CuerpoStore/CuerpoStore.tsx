'use client'

import { dataPlugins } from "../../Utils/dataPlugins"
import BadgeStore from "./BadgeStore/BadgeStore"

import {  useRouter } from "next/navigation";

const CuerpoStore = () => {


    const router = useRouter()

  return (
    <div className='w-[88%] h-full bg-gray-50 text-tamañoLetra' >
        <header className=' w-full h-[8%] grid place-content-center  text-colorTextoNavbar font-semibold text-tamañoLetra'>
            Plugin Store
        </header>
        <main className='w-full h-[92%] '>
            <section className='w-full h-[7%]  flex items-center px-4 text-tamañoLetra'>
                <article className='w-[80%] '>
                    <label htmlFor="">Buscar:</label>
                    <input className='w-[90%] pl-2 h-9 rounded ml-2 border border-gray-200' placeholder='database...' type="text" />
                </article>
                <article className='w-[10%] h-8 border-b text-tamañoLetraChica border-b-colorTextoNavbar  grid place-content-center mr-3 cursor-pointer'>
                    Todos 
                </article>
                <article className='w-[10%] h-8 border-b text-tamañoLetraChica border-b-colorTextoNavbar  grid place-content-center mr-3 cursor-pointer'>
                    Departamento
                </article>
                <article className='w-[10%] h-8 bg-colorBarraBaja  text-white font-semibold border border-b-colorTextoNavbar  grid place-content-center mr-3 cursor-pointer'>
                    <button onClick={()=>router.back()} className="text-tamañoLetraChica">Volver</button>
                </article>
            </section>
            <section className='w-full h-[93%] '>
                <div className='w-full h-[8%]  grid place-content-center text-colorTextoNavbar font-semibold'>
                    Todos los Plugins
                </div>
                <section className="w-full h-[92%] grid grid-cols-2  gap-7 p-2  z-30 mt-3  top-28 left-3/5 max-h-[610px] overflow-auto">
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
  )
}

export default CuerpoStore