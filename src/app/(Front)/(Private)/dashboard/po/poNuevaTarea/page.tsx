'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useHistoriaPo } from "../../../[stores]/poStore";
import ComPoNuevaTarea from "../[Componentes]/ComPoNuevaTarea/ComPoNuevaTarea";
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";

const page = () => {

  const { getHistoriaStatus, historiaStatus, cambiarIdHistoria, idHistoria} = useHistoriaPo()

 

  useEffect(()=>{
    getHistoriaStatus()
  }, [])
 
  // HACE UN REFRESH PARA ACTUALIZAR EL SIDEBAR, DEL NUMERO DE HISTORIAS
  useEffect(()=>{
    router.refresh()
  }, [])
  

  
  

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