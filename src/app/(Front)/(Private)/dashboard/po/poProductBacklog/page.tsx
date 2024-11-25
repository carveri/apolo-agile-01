'use client'

import {useState, useEffect} from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore'
import { format } from "date-fns";
import { arrayMove } from "@dnd-kit/sortable";


// draw and drop
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext , verticalListSortingStrategy, } from "@dnd-kit/sortable";

import TablaPo from './components/TablaPo'
//import { transform } from 'next/dist/build/swc/generated-native'


const page = () => {


  const historiaBacklog = useHistoriaPo((state)=> state.historiaBacklog)
  const getHistoriaBacklog = useHistoriaPo((state)=> state.getHistoriaBacklog)

  useEffect(()=>{
    getHistoriaBacklog()
  }, [])
 
  console.log('historiasZusRETOENADA:', historiaBacklog);


  // logica del draw and drop
  //const {} = useSortable()
  const copiaHistoria = [...historiaBacklog]
  const [historiaDraw, setHistoriaDraw] = useState(copiaHistoria)
  //const newListaHistorias = 
  const handleDrawEnd =(e)=>{
    const {active, over} = e
    
    


    const oldIndex = historiaDraw.findIndex((el)=> el?.id === active?.id)
    const newIndex = historiaDraw.findIndex((el)=> el?.id === over?.id)

    // console.log('viejo:', oldIndex);
    // console.log('nuevo:', newIndex);
    
    const newOrder = arrayMove(historiaDraw, oldIndex, newIndex)
    setHistoriaDraw(newOrder)
    console.log('nuevo order :)', newOrder);
    
    
    
  }

  // const style = {
  //   transform: CSS.Transform.toString(transform)
  // }
console.log('histodraw', historiaDraw);
  
  

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDrawEnd}>

    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]   flex-col'>
          <header className='w-full h-[6%] bg-white py-4 pl-4'>
            Dashboard {'>'} Product Owner {'>'} Product Backlog
          </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               Product Backlog
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
             
              <div className='pr-6 -mt-9'>
                Fecha Actual:
              </div>
              <div className="-mt-9">
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
          <div className='w-[1625px] h-[90%]  z-30  top-32 left-3/5 max-h-[618px] overflow-auto -mt-8'>
          
          <table className='border border-gray-200   w-[98%] ml-8 '>
            <thead>
              <tr className='h-14'>
                <td className='w-[8%] pl-3'>Posición</td>
                <td className='w-[20%]'>Nombre Historia</td>
              
                <td className='w-[10%]'>Fecha Ingreso </td>
                <td className='w-[10%]'>Hora Ingreso</td>
                <td className='w-[10%]'>Status </td>
                
                <td className='w-[10%]'>Tiempo(dias) </td>
                <td className='w-[10%]'>Presupuesto (Clp) </td>
                <td className='w-[10%]'>Sprint </td>
                
              </tr>
            </thead>
            <tbody>
            {historiaDraw?.map((el, index)=>{
              
              const {id, nombreHistoria, createdAt, updatedAt,  horaAt, tiempoHistoria, presupuestoHistoria, status} = el
              
              
              const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
              const updatedPintar = format(new Date(updatedAt), 'H:mm')
                return <SortableContext key={id} items={historiaDraw} strategy={verticalListSortingStrategy}>
                  <TablaPo
                    
                    id = {id}
                    nombreHistoria = {nombreHistoria}
                    createdAt = {createdAt} 
                    updatedAt = {updatedAt}  
                    horaAt = {horaAt}
                    tiempoHistoria = {tiempoHistoria} 
                    presupuestoHistoria = {presupuestoHistoria}
                    status = {status}
                    index = {index}
                    updatedAt2 = {updatedAt2}
                    updatedPintar = {updatedPintar}
                  
                  />
                </SortableContext>
              })}
            </tbody>
            
        </table>
       
          </div>
          <div className='h-[10%]  grid justify-end mt-4'>
            <button className='bg-colorBotonAceptar h-[60%] w-44 rounded mr-14 mt-5 text-colorTextoBoton font-semibold hover:bg-hoverColorBotonAceptar'>
              Confirmar Cambios
            </button>
          </div>
          
        </section>
        
    </div>
    </DndContext>
  )
}

export default page