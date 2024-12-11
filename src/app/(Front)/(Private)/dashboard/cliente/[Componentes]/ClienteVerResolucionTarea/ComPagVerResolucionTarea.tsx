'use client'

import { format } from "date-fns";
import TablaVerResolucionTarea from "./TablaVerResolucionTarea";
import { IComPagVerResolucionTarea } from "@/app/Interfaces/IVerResolucionTarea";
import {useRouter} from "next/navigation";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import { useHistoriaCliente } from "@/app/(Front)/(Private)/[stores]/clienteStore";
import { useEffect, useState } from "react";
import { updateData } from "@/app/(Front)/React/Fetch/updateData";
import { deleteData } from "@/app/(Front)/React/Fetch/deleteData";

const ComPagVerResolucionTarea = ({nombre}:any) => {
  
  const router = useRouter()

  const { idHistoria} = useHistoriaPo()
  
  const {historia, getHistoria} = useHistoriaCliente()
  
  useEffect(()=>{
    getHistoria(idHistoria)
  }, [])

  console.log('HISTORIA', historia);
  
  
  // estados de los inputs
  const [ptiempo, setPtiempo] = useState(0)
  const [pPresupuesto, setPPresupuesto] = useState(0)
  const [pEquipo, setPEquipo] = useState(0)

  const calculoPesoOferta =(oferta1 = 0, oferta2 = 0  , peso = 0 )=>{
    // oferta1 es la que me mando el po
    // oferta2 es la que realiza el cliente (la contraoferta)
    // el peso es el porcentaje de importancia que le dio el po
    const res = peso/oferta1
      const nuevo = res * ((oferta1) - (oferta1-oferta2))
      return nuevo

  }

  const limite = 80
  const limiteInferior = 40

  const handleChangeVerResuTarea =(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(e.target.name === 'tiempo'){
      setPtiempo(e.target.valueAsNumber)
    }
    else if(e.target.name === 'presupuesto'){
      setPPresupuesto(e.target.valueAsNumber)
    }
    else {
      console.log('sd');
      
    }
  }

    let pesoTiempo = calculoPesoOferta(historia.at(0)?.tiempoHistoria, ptiempo, historia.at(0)?.peso1) 
    let pesoPresupuesto = calculoPesoOferta(historia.at(0)?.presupuestoHistoria, pPresupuesto, historia.at(0)?.peso2) 

    console.log('¿pesotiempo', pesoTiempo);
    console.log('pesopresupuesto', pesoPresupuesto);
    
    //let pesoTiempo = pesoTiempo ? 0

    const pesoTotal =  pesoTiempo + pesoPresupuesto
    //const pesoTiempo = pesoTiempo !== NaN ? pesoTiempo: 0
    
    
  
  const handleClickAgregarAlProductBacklog =(e:React.MouseEvent<HTMLButtonElement>)=>{
    const status = 'Aceptada'
    // renombrar los estados 
    const tiempoHistoria = ptiempo
    const presupuestoHistoria = pPresupuesto
    const equipo3 = pEquipo
    const data = {tiempoHistoria, presupuestoHistoria, equipo3, status}
    const ruta = 'historia'
    const id = idHistoria
    updateData({data, ruta, id})
    alert('Se guardo la historia en el PB')
    router.push('/dashboard/cliente/comercial/clienteResolucionTarea')
  }

  const handleClickEnviarContraoferta =()=>{
    const status = 'ContraOferta'
    // renombrar los estados 
    const tiempoHistoria = ptiempo
    const presupuestoHistoria = pPresupuesto
    const data = {tiempoHistoria, presupuestoHistoria, status}
    const ruta = 'historia'
    const id = idHistoria
    updateData({data, ruta, id})
    alert('Se envio la controferta al po')
    router.push('/dashboard/cliente/comercial/clienteResolucionTarea')
    
  }

  const handleClickEliminarTareaCliente=()=>{
    const ruta = 'historia'
    const url = idHistoria
    deleteData({ruta, url})
    alert('La tarea se borro correctamente')
    router.push('/dashboard/cliente/comercial/clienteResolucionTarea')
    
  }

  
  if(historia.at(0)?.tiempoHistoria === 0 ){
    pesoTiempo = 0
  }
  else if(historia.at(0)?.presupuestoHistoria === 0){
    pesoPresupuesto = 0
  }
 
  console.log('pesototal;', pesoTotal);
  

  return (
    <div className='w-full h-full '>
        <header className='w-full h-[5%] bg-white py-4 pb-10 pl-6 '>
            Dashboard {'>'} Clientes {'>'} {nombre} {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
            <div className='h-14 mx-6 bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
                Resolución de Historia Retornada
            </div>
            <header className='w-full h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-10  text-colorTextoBarraAlta '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
                <TablaVerResolucionTarea
                    historia={historia}
                    peso1={historia.at(0)?.peso1}
                    peso2={historia.at(0)?.peso2}
                    handleChangeVerResuTarea={handleChangeVerResuTarea}
                    pesoTiempo={pesoTiempo}
                    pesoPresupuesto={pesoPresupuesto}
                
                />
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  Total peso de oferta: {Math.round(pesoTotal)}
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                  {pesoTotal > limite &&
                  <button onClick={handleClickAgregarAlProductBacklog} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  
                  }
                  {pesoTotal >limiteInferior && pesoTotal <=limite &&
                    <button onClick={handleClickEnviarContraoferta} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                      Enviar Contraoferta
                    </button>
                  
                  }
                  <button onClick={handleClickEliminarTareaCliente} className='bg-colorBotonEliminar w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Tarea
                  </button>
                </div>
          </main>
    </div>
  )
}

export default ComPagVerResolucionTarea