'use client'

import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import React, { useEffect } from 'react'
import { useHistoriaAdmin } from '../../../[stores]/adminStore'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {

  const {usuarios, getUsuariosSm} = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosSm()
    }, [])


  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      usuarios={usuarios}
      nombre = 'Scrum Master'
    />
  )
}

export default page