'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useHistoriaPo } from "../../../[stores]/poStore";
import ComPoNuevaTarea from "../[Componentes]/ComPoNuevaTarea/ComPoNuevaTarea";

const page = () => {

  const { getHistoriaStatus, historiaStatus, cambiarIdHistoria, idHistoria} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaStatus()
  }, [])
 
  //console.log('historiasZusRETOENADA:', historiaStatus);
  
  

  const router = useRouter()
  const handleClickVerNuevasTareasPo =(id)=>{
    console.log('idHisto:', id);
    cambiarIdHistoria(id)
    console.log('idzusthistoria:', idHistoria);
     //idHistoria
    router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
  }


  return (
    <ComPoNuevaTarea
      historiaStatus={historiaStatus}
      handleClickVerNuevasTareasPo={handleClickVerNuevasTareasPo}
      nombre='Product Owner'
    />
  )
}

export default page