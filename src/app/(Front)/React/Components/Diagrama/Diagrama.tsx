'use client'

import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore'
import { CSS } from "@dnd-kit/utilities";
import { closestCenter, DndContext } from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import React, { useEffect } from 'react'

const Diagrama = ({dataDiagramaAceptadas, dataDiagramaSprintBacklog}) => {

    const {historiaBacklog,getHistoriaBacklog, updatedHistoriaProductBacklog} = useHistoriaPo()


    // useEffect(()=>{
    //     getHistoriaBacklog(resul)
    //   }, [])

     const handleDrawEnd =(e:any)=>{
        const {active, over} = e
        const oldIndex = historiaBacklog.findIndex((el)=> el?.id === active?.id)
        const newIndex = historiaBacklog.findIndex((el)=> el?.id === over?.id)    
        const newOrder = arrayMove(historiaBacklog, oldIndex, newIndex)
    
        updatedHistoriaProductBacklog(newOrder)  
           
      }

      const {attributes,  listeners, setNodeRef, transform, transition} = useSortable({id: '1'})

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDrawEnd}>
        <div className='w-full h-[96%] px-5'>
        <header className='w-full h-16 text-tamañoLetra font-semibold text-colorTextoNavbar  grid place-content-center'>
            Diagrama de Trabajo
        </header>
        <SortableContext  items={historiaBacklog} strategy={verticalListSortingStrategy}>
        <main className='w-full h-[94%]  grid grid-cols-6'>
            <section className='w-full h-full border border-b-gray-200'>
                <article className='w-full text-tamañoLetraChica font-semibold h-12  bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    SprintBacklog
                </article>
                <main className='w-full h-[94%] grid grid-rows-12'>
                    {dataDiagramaSprintBacklog.map((el)=>{
                        return <div key={el.id} className=' border border-violet-100 shadow-xl  grid place-content-center bg-gray-50 cursor-pointer'>
                            {el.nombreTarea}
                        </div>
                    })}
                </main>
                
            </section>
            
            <section style={{transform: CSS.Transform.toString(transform), transition}} ref={setNodeRef} {...attributes} {...listeners}  className='border border-gray-200 h-14  cursor-move hover:bg-colorHoverLista' className='w-full h-full border border-b-gray-200'>
                <article className='w-full text-tamañoLetraChica font-semibold  h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Aceptadas
                </article>
                <article className='w-full h-[95%] grid grid-rows-12'>
                    {/* {dataDiagramaAceptadas.map((el)=>{
                        return <div key={el.id} className='border border-gray-200 grid place-content-center cursor-pointer'>
                            {el.nombreTarea}
                        </div>
                    })} */}
                </article>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full text-tamañoLetraChica font-semibold h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Diseño
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full text-tamañoLetraChica font-semibold h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    DEvs
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full text-tamañoLetraChica font-semibold h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    QA
                </div>
            </section>
            <section className='w-full h-full border border-b-gray-200'>
                <div className='w-full text-tamañoLetraChica font-semibold h-12 bg-colorBarraSuperiorTablas text-colorTextoBarraAlta grid place-content-center'>
                    Terminados
                </div>
            </section>
        </main>
        </SortableContext>
    </div>

    </DndContext>
    
  )
}

export default Diagrama