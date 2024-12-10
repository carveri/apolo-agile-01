'use client'

import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore"
import { closestCenter, DndContext } from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useEffect } from "react"
import { format } from "date-fns";
import TablaPo from "./TablaPo"

const ComPoProductBacklog = ({id, resul}) => {

    //const router = useRouter()

  const {historiaBacklog,getHistoriaBacklog, updatedHistoriaProductBacklog} = useHistoriaPo()

  useEffect(()=>{
    getHistoriaBacklog(resul)
  }, [])
  
  const handleDrawEnd =(e)=>{
    const {active, over} = e
    const oldIndex = historiaBacklog.findIndex((el)=> el?.id === active?.id)
    const newIndex = historiaBacklog.findIndex((el)=> el?.id === over?.id)    
    const newOrder = arrayMove(historiaBacklog, oldIndex, newIndex)

    updatedHistoriaProductBacklog(newOrder)  
       
  }
  console.log('histoFinal:', historiaBacklog);
  console.log('iddd;', id);
  console.log('resulll;', resul);
  
  

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDrawEnd}>

    {historiaBacklog.length !==0?
      <div className='w-full h-full bg-white grid place-items-center' >
      <section className='w-[99%] h-[99%]   flex-col'>
        <header className='w-full h-[6%] bg-white py-4 pl-4'>
          Dashboard {'>'} Product Owner {'>'} Product Backlog
        </header>
          <div className='h-14 w-[96%] ml-8 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
             Product Backlog
          </div>
          <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-12  text-colorTextoBarraAlta'>
           
            <div className='pr-6 -mt-11'>
              Fecha Actual:
            </div>
            <div className="-mt-11">
              {format(new Date(), 'dd/MM/yyyy')}
            </div>
          </header>
          <div className='flex'>

          
        <div className='w-[98%] h-[90%]  z-30  top-32 left-3/5 max-h-[618px] overflow-auto -mt-8 '>
        
        <table className='border border-gray-200   w-[98%] ml-8 '>
          <thead>
            <tr className='h-14'>
              <td className='w-[8%] text-center'>Posición</td>
              <td className='w-[15%] text-center'>Nombre Historia</td>
              <td className='w-[12%] text-center'>Cargo del Solicitante</td>
              <td className='w-[10%] text-center'>Fecha Ingreso </td>
              <td className='w-[10%] text-center'>Hora Ingreso </td>
             
              <td className='w-[8%] text-center'>Status </td>
              <td className='w-[8%] text-center'>Tiempo(dias) </td>
              <td className='w-[10%] text-center'>Presupuesto (Clp) </td>
              <td className='w-[10%] text-center'>Proximo Sprint </td> 
            </tr>
          </thead>
          <tbody>
          {historiaBacklog?.map((el, index)=>{
            
            const {id, nombreHistoria, createdAt, updatedAt, user, horaAt, tiempoHistoria, presupuestoHistoria, status} = el
            
            
            const updatedAt2 = format(new Date(updatedAt), 'dd/MM/yyyy')
            const updatedPintar = format(new Date(updatedAt), 'H:mm')
              return <SortableContext key={id} items={historiaBacklog} strategy={verticalListSortingStrategy}>
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
                  user={user}
                
                />
              </SortableContext>
            })}
          </tbody>  
        </table>
      </div>
      </div>
        <div className='h-[10%]  grid justify-end mt-4'>
          <button className='bg-colorBotonAceptar h-[60%] w-60 rounded mr-14 mt-5 text-colorTextoBoton font-semibold hover:bg-hoverColorBotonAceptar'>
            Confirmar Sprint Backlog
          </button>
        </div>
        
      </section>
      
  </div>: <div>
   sd
  </div>
  
  
  }
    
    </DndContext>
  )
}

export default ComPoProductBacklog