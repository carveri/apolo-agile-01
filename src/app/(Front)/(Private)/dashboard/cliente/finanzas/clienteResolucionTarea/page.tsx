'use client'

import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useHistoriaPo } from '../../../../[stores]/poStore';
import { getDataCompleja } from '@/app/(Front)/React/Fetch/getDataCompleja';
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';
import ComClienteResolucionTarea from '../../[Componentes]/ClienteResolucionTarea/ComClienteResolucionTarea/ComClienteResolucionTarea';

const page = () => {
  const { cambiarIdHistoria} = useHistoriaPo()
  const [histouseridcargo, setHistouseridcargo] = useState([])


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'eaefa4b5-a5e8-4ed4-a3ca-1ae450242c1c'
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
    route.push('/dashboard/cliente/finanzas/verResolucionTarea')
  }

  

  return (
    <ComClienteResolucionTarea
      histouseridcargo={histouseridcargo}
      handleClickVerResolucionHistoria={handleClickVerResolucionHistoria}
    />
  )
}

export default page