'use client'

import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import React, { useEffect } from 'react'
import { useHistoriaAdmin } from '../../../[stores]/adminStore'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {

  const {usuarios, getUsuariosPo} = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosPo()
    }, [])


  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      usuarios={usuarios}
      nombre = 'Product Owner'
    />
  )
}

export default page