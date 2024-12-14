import { dataPlugins } from "../../Utils/dataPlugins"
import BadgeStore from "./BadgeStore/BadgeStore"

const CuerpoStore = () => {
  return (
    <div className='w-[88%] h-full bg-gray-50 ' >
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
  )
}

export default CuerpoStore