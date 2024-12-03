'use client'

import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useHistoriaPo } from '../../../../[stores]/poStore';
import { getDataCompleja } from '@/app/(Front)/React/Fetch/getDataCompleja';
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';
import ComClienteResolucionTarea from '../../[Componentes]/ClienteResolucionTarea/ComClienteResolucionTarea/ComClienteResolucionTarea';

const page = () => {
  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [historias, setHistorias] = useState([])
  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo
  const [histouseridcargo, setHistouseridcargo] = useState([])

  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'a0e8cd01-330c-44da-8efb-52f04217d30b'
        const param2 = 'Retornada'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  

  const route = useRouter()

  const handleClickVerResolucionHistoria =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
    route.push('/dashboard/cliente/visionario/verResolucionTarea')
  }

  //console.log('historietasvolao: ', historias);
  
  

  return (
    <ComClienteResolucionTarea
      histouseridcargo={histouseridcargo}
      handleClickVerResolucionHistoria={handleClickVerResolucionHistoria}
    />
  )
}

export default page