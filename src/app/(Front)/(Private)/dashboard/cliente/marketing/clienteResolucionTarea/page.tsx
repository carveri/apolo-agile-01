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

  const [histouseridcargo, setHistouseridcargo] = useState([])

  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'fbe29def-eb7d-4083-8c22-32c7bc0a0e52'
        const param2 = 'Retornada'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

  

  const route = useRouter()

  const handleClickVerResolucionHistoria =(id:string)=>{
    //console.log('idHisto:', id);
    cambiarIdHistoria(id)
    //console.log('idzusthistoria:', idHistoria);
    route.push('/dashboard/cliente/marketing/verResolucionTarea')
  }


  return (
    <ComClienteResolucionTarea
      histouseridcargo={histouseridcargo}
      handleClickVerResolucionHistoria={handleClickVerResolucionHistoria}
    />
  )
}

export default page