'use client'

import {useState, useEffect} from 'react'

import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData';
import {useRouter} from "next/navigation";
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import ComPagVerResolucionTarea from '../../[Componentes]/ClienteVerResolucionTarea/ComPagVerResolucionTarea';
import { useHistoriaCliente } from '@/app/(Front)/(Private)/[stores]/clienteStore';



const page = () => {

  const router = useRouter()

  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()


  // estados de los inputs
  const [ptiempo, setPtiempo] = useState(0)
  const [pPresupuesto, setPPresupuesto] = useState(0)
  const [pEquipo, setPEquipo] = useState(0)


  const {historia, getHistoria} = useHistoriaCliente()

  useEffect(()=>{
    getHistoria(idHistoria)
  }, [])
  

   
  const {tiempoHistoria , presupuestoHistoria,  peso1, peso2} = historia

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

    let pesoTiempo = calculoPesoOferta(tiempoHistoria, ptiempo, peso1) 
    let pesoPresupuesto = calculoPesoOferta(presupuestoHistoria, pPresupuesto, peso2) 
    const pesoTotal =  pesoTiempo + pesoPresupuesto
  

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


  if(tiempoHistoria === 0 ){
    pesoTiempo = 0
  }
  else if(presupuestoHistoria === 0){
    pesoPresupuesto = 0
  }
  
  
  return (
    <ComPagVerResolucionTarea
      historia={historia}
      peso1={peso1}
      peso2={peso2}
      handleChangeVerResuTarea={handleChangeVerResuTarea}
      pesoTiempo={pesoTiempo}
      pesoPresupuesto={pesoPresupuesto}
      pesoTotal={pesoTotal}
      limite={limite}
      handleClickAgregarAlProductBacklog={handleClickAgregarAlProductBacklog}
      limiteInferior={limiteInferior}
      handleClickEnviarContraoferta={handleClickEnviarContraoferta}
      handleClickEliminarTareaCliente={handleClickEliminarTareaCliente}
      nombre='Comercial'
    />
  )
}

export default page