'use client'

import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import { useEffect } from 'react'
import { useHistoriaAdmin } from '../../../[stores]/adminStore'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {


  const {usuarios, getUsuariosDevs} = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosDevs()
    }, [])

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      usuarios={usuarios}
      nombre = 'Devs'
    />
  )
}

export default page