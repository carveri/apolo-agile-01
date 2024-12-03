'use client'

import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import { IHistoria } from '@/app/Interfaces/IGeneral';
import { useRouter } from "next/navigation";
import ComVerPoContraOferta from '../../[Componentes]/ComPoContraOferta/ComVerPoContraOferta/ComVerPoContraOferta';

const page = () => {

  const router = useRouter()

  const { idHistoria} = useHistoriaPo()

  const [historia, setHistoria] = useState<IHistoria>({})

  // estados de los inputs
  const [ptiempo, setPtiempo] = useState(0)
  const [pPresupuesto, setPPresupuesto] = useState(0)
  const [setPEquipo] = useState(0)


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
    
    else {
      console.log('sd');
      
    }
  }

    let pesoTiempo = calculoPesoOferta(tiempoHistoria, ptiempo, peso1) 
    let pesoPresupuesto = calculoPesoOferta(presupuestoHistoria, pPresupuesto, peso2) 
    //let pesoEquipo = 0
    const pesoTotal =  pesoTiempo + pesoPresupuesto
  

  const handleClickAgregarAlProductBacklogContra =()=>{
    const status = 'Aceptada'
    const ruta = 'historia'
    const id = idHistoria
    const data = {status}
    updateData({data, ruta, id})
    alert('Se Guardo la tarea en el ProductBacklog')
    router.push('/dashboard/po/poHistoriasRetornadas')
  }

  const handleClickEnviarAlLiderTecnico=()=>{
    const status = 'LiderTecnico'
    const ruta = 'historia'
    const id = idHistoria
    const data = {status}
    updateData({data, ruta, id})
    alert('Se Envio la historia al lider tecnico')
    router.push('/dashboard/po/poHistoriasRetornadas')
  }


  if(tiempoHistoria === 0 ){
    pesoTiempo = 0
  }
  else if(presupuestoHistoria === 0){
    pesoPresupuesto = 0
  }
 
    console.log('histocontra:', historia);
    

  return (
    <ComVerPoContraOferta
      historia={historia}
      handleClickAgregarAlProductBacklogContra={handleClickAgregarAlProductBacklogContra}
      handleClickEnviarAlLiderTecnico={handleClickEnviarAlLiderTecnico}
      nombre='Product Owner'
    />
  )
}

export default page