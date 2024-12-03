'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useState, useEffect } from "react";
import ComPageHistoriasAceptadas from "../../[Componentes]/ClienteHistoriasAceptadas/ComPageHistoriasAceptadas/ComPageHistoriasAceptadas";
import ComPageHistoriasEnviadas from "../../[Componentes]/ClienteHistoriasEnviadas/ComPageHistoriasEnviadas/ComPageHistoriasEnviadas";

const page = () => {

  //const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'fbe29def-eb7d-4083-8c22-32c7bc0a0e52'
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