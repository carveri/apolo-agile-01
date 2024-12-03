'use client'

import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData';
import {useRouter} from "next/navigation";
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import { IHistoria } from '@/app/Interfaces/IGeneral';
import ComPagVerResolucionTarea from '../../[Componentes]/ClienteVerResolucionTarea/ComPagVerResolucionTarea';

const page = () => {

  const router = useRouter()

  const { idHistoria} = useHistoriaPo()

  const [historia, setHistoria] = useState<IHistoria>({})

  // estados de los inputs
  const [ptiempo, setPtiempo] = useState(0)
  const [pPresupuesto, setPPresupuesto] = useState(0)
  const [pEquipo, setPEquipo] = useState(0)

  
  useEffect(()=>{
    //cambiarIdHistoria()
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const url = idHistoria
      const res = await getDataLista({ruta, url})
      setHistoria(res)
    }
    traerHistorias()
    
  }, [])

  console.log('histo unica:', historia);
  
  const {tiempoHistoria, presupuestoHistoria, peso1, peso2} = historia
  //const of1 = 

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

  const handleChangeVerResuTarea =(e)=>{
    e.preventDefault()
    if(e.target.name === 'tiempo'){
      setPtiempo(e.target.valueAsNumber)
    }
    else if(e.target.name === 'presupuesto'){
      setPPresupuesto(e.target.valueAsNumber)
    }
    else if(e.target.name === 'equipo'){
      setPEquipo(e.target.valueAsNumber)
    }
    else {
      console.log('sd');
      
    }
  }

    let pesoTiempo = calculoPesoOferta(tiempoHistoria, ptiempo, peso1) 
    let pesoPresupuesto = calculoPesoOferta(presupuestoHistoria, pPresupuesto, peso2) 
    const pesoTotal =  pesoTiempo + pesoPresupuesto
  

  const handleClickAgregarAlProductBacklog =(e)=>{
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
  }

  const handleClickEnviarContraoferta =()=>{
    const status = 'ContraOferta'
    // renombrar los estados 
    const tiempoHistoria = ptiempo
    const presupuestoHistoria = pPresupuesto
    const equipo3 = pEquipo
    const data = {tiempoHistoria, presupuestoHistoria, equipo3, status}
    const ruta = 'historia'
    const id = idHistoria
    updateData({data, ruta, id})
    alert('Se envio la controferta al po')
    
  }

  const handleClickEliminarTareaCliente=()=>{
    const ruta = 'historia'
    const url = idHistoria
    deleteData({ruta, url})
    alert('La tarea se borro correctamente')
    router.push('/dashboard/cliente/clienteResolucionTarea')
    
  }


  if(tiempoHistoria === 0){
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
      nombre='Finanzas'
    />
  )
}

export default page