'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useState, useEffect } from "react";
import ComPageHistoriasEnviadas from "../../[Componentes]/ClienteHistoriasEnviadas/ComPageHistoriasEnviadas/ComPageHistoriasEnviadas";

const page = () => {
  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'f72d2f55-fe11-4b72-ae67-1bcc35b4d95f'
        const param2 = 'Pendiente'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])


  return (
    <ComPageHistoriasEnviadas
      histouseridcargo={histouseridcargo}

    />
  )
}

export default page