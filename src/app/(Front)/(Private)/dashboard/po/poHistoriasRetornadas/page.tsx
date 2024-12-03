'use client'
import React, { useEffect } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import { useRouter } from "next/navigation";

import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';
import ComPoHistoriasRetornadas from '../[Componentes]/ComPoHistoriasRetornadas/ComPoHistoriasRetornadas';

const page = () => {

  const { getHistorias, historias, getHistoriaStatusRetornada, historiaStatusRetornada} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaStatusRetornada()
  }, [])
 
  //console.log('historiasZusRETOENADA:', historiaStatusRetornada);
  
  

  const router = useRouter()
  const handleClickVerNuevasTareasPo =()=>{
    router.push('/dashboard/po/poNuevaTarea/verNuevasTareasPo')
  }

  const num = 15

  return (
    <ComPoHistoriasRetornadas
      historiaStatusRetornada={historiaStatusRetornada}
      nombre='Product Owner'
    />
  )
}

export default page