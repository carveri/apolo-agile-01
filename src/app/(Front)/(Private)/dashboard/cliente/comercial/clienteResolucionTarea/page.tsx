'use client'

import {useState, useEffect} from 'react'

import { useRouter } from "next/navigation";
import { useHistoriaPo } from '../../../../[stores]/poStore';
import { getDataCompleja } from '@/app/(Front)/React/Fetch/getDataCompleja';
import ComClienteResolucionTarea from '../../[Componentes]/ClienteResolucionTarea/ComClienteResolucionTarea/ComClienteResolucionTarea';



const page = () => {
  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [historias, setHistorias] = useState([])
  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo
  const [histouseridcargo, setHistouseridcargo] = useState([])
  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo

  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'f72d2f55-fe11-4b72-ae67-1bcc35b4d95f'
        const param2 = 'Retornada'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  

  const route = useRouter()

  const handleClickVerResolucionHistoria =(id:React.MouseEvent<HTMLButtonElement>)=>{
    //console.log('idHisto:', id);
    cambiarIdHistoria(id)
    //console.log('idzusthistoria:', idHistoria);
    route.push('/dashboard/cliente/comercial/verResolucionTarea')
  }


  return (
    <ComClienteResolucionTarea
      histouseridcargo={histouseridcargo}
      handleClickVerResolucionHistoria={handleClickVerResolucionHistoria}
    />
  )
}

export default page