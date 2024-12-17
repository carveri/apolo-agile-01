import React from 'react'

const Diagrama = ({dataDiagramaAceptadas, dataDiagramaSprintBacklog}) => {
  return (
    <div className='w-full h-full '>
        <header className='w-full h-12  grid place-content-center'>
            Diagrama 
        </header>
        <main className='w-full h-[94%]  grid grid-cols-6'>
            <section className='w-full h-full border border-b-gray-200'>
                <article className='w-full h-12  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    SprintBacklog
                </article>
                <main className='w-full h-[94%] grid grid-rows-12'>
                    {dataDiagramaSprintBacklog.map((el)=>{
                        return <div key={el.id} className='border border-gray-200 grid place-content-center cursor-pointer'>
                            {el.nombreTarea}
                        </div>
                    })}
                </main>
                
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <article className='w-full h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Aceptadas
                </article>
                <article className='w-full h-[95%] grid grid-rows-12'>
                    {dataDiagramaAceptadas.map((el)=>{
                        return <div className='border border-gray-200 grid place-content-center cursor-pointer'>
                            {el.nombreTarea}
                        </div>
                    })}
                </article>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Diseño
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    DEvs
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    QA
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Terminados
                </div>
            </section>
        </main>
    </div>
  )
}

export default Diagrama