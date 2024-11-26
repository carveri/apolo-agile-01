import Diagrama from '@/app/(Front)/React/Components/Diagrama/Diagrama'
import { dataDiagramaAceptadas } from '@/app/(Front)/React/Utils/dataDiagrama/dataDiagramaAceptadas'
import { dataDiagramaSprintBacklog } from '@/app/(Front)/React/Utils/dataDiagrama/dataDiagramaSprintBacklog'
import React from 'react'

const page = () => {
  return (
    <Diagrama
        dataDiagramaAceptadas={dataDiagramaAceptadas}
        dataDiagramaSprintBacklog={dataDiagramaSprintBacklog}
    
    />
  )
}

export default page