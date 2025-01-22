'use client'

import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore"
import { closestCenter, DndContext } from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useEffect, useState } from "react"
import { format } from "date-fns";
import TablaPo from "./TablaPo"
import { IComPoProductBacklog } from "@/app/Interfaces/IPoProductBacklog"
import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun"
import { postData } from "@/app/(Front)/React/Fetch/postData"

const ComPoProductBacklog = ({id, resul}:IComPoProductBacklog) => {

  const {historiaBacklog,getHistoriaBacklog, updatedHistoriaProductBacklog} = useHistoriaPo()

  const [checkedOn, setCheckedOn] = useState(false)
  const [numero, setNumero] = useState(0)

  //console.log('histodios:', historiaBacklog);
  

  useEffect(()=>{
    getHistoriaBacklog(resul)
  }, [])
  
  const handleDrawEnd =(e:any)=>{
    const {active, over} = e
    const oldIndex = historiaBacklog.findIndex((el)=> el?.id === active?.id)
    const newIndex = historiaBacklog.findIndex((el)=> el?.id === over?.id)    
    const newOrder = arrayMove(historiaBacklog, oldIndex, newIndex)

    updatedHistoriaProductBacklog(newOrder)  
       
  }

  const handleChangeCkecked =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    
  }
  
  // const handleClickGo =()=>{
  //   //console.log('as');
  //   setCheckedOn(true)
  //   //setNumero(0)
    
  // }

  const handleChangeNumero =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNumero(e.target.valueAsNumber)
  }

  const cortarBacklog =()=>{
    return historiaBacklog.slice(0, numero)
  }

  const handleClickConfirmSB =()=>{
    //console.log(historiaBacklog);
    const nombreMediumBacklog = cortarBacklog()
    const sprint = 10
    const data= {nombreMediumBacklog, sprint}
    console.log(data);
    
    //console.log(cortarBacklog());
    //postData()
    // const nombreMediumBacklog = 'back3'
    // const sprint = 3
    // //const historias = ['de4cd5e5-9c4d-4173-bbd3-bce6011b2e62']
    
    // const data = {nombreMediumBacklog, sprint}
    // const ruta = 'mediumBacklog'
    // //const data = ''
    const ruta = 'mediumBacklog'
    postData({ruta, data})
    alert('Se guardo correctamente!')
    
    
    
  }

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
        <div className="w-[98%] ml-8 h-11 bg-gray-50 flex justify-end px-2 ">
          <label className="py-3 mr-2 font-semibold text-colorTextoNavbar" htmlFor="">N° Historias:</label>
          <input min={1} max={historiaBacklog.length} onChange={handleChangeNumero} className="w-10 font-bold pl-3 my-1 border rounded border-gray-200 mr-2 text-violet-900" type="number" />
          {/* <button className="bg-colorTextoAceptada rounded text-colorTextoBoton w-10 h-9 my-1 font-bold hover:bg-green-600" >Go</button> */}
        </div>
        <table className='border border-gray-200  w-[98%] ml-8 '>
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
              <td className='w-[5%] text-center'></td> 
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
                  checkedOn={checkedOn}
                  handleChangeCkecked={handleChangeCkecked}
                  //numero={numero}
                />
              </SortableContext>
            })}
          </tbody>  
        </table>
      </div>
      </div>
        <div className='h-[10%]  grid justify-end  mt-4 '>
          {numero>0 && numero<= historiaBacklog.length &&
            <button onClick={handleClickConfirmSB} className='bg-colorBotonAceptar  h-[60%] w-60 rounded mr-14 mt-5 text-colorTextoBoton font-semibold hover:bg-hoverColorBotonAceptar'>
              Confirmar Sprint Backlog
            </button>
          }
        </div>
      </section>
  </div>: 
  <div className="pt-20">

   <BadgeNoAun
    nombre='en el Product Backlog'
   />
  </div>
  }
    </DndContext>
  )
}

export default ComPoProductBacklog