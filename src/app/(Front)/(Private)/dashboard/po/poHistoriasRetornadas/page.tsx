'use client'
import React, { useEffect } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import ComPoHistoriasRetornadas from '../[Componentes]/ComPoHistoriasRetornadas/ComPoHistoriasRetornadas';

const page = () => {

  const { getHistoriaStatusRetornada, historiaStatusRetornada} = useHistoriaPo()


  useEffect(()=>{
    getHistoriaStatusRetornada()
  }, [])
 
  console.log('sdsd', historiaStatusRetornada);
  
  
  return (
    <ComPoHistoriasRetornadas
      historiaStatusRetornada={historiaStatusRetornada}
      nombre='Product Owner'
    />
  )
}

export default page