'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import ComPageHistoriasAceptadas from "../../[Componentes]/ClienteHistoriasAceptadas/ComPageHistoriasAceptadas/ComPageHistoriasAceptadas";

const page = () => {

  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = '897abc28-2c33-4f67-b272-f6b70b9b33ad'
        const param2 = 'Aceptada'
        const res = await getDataCompleja({ruta, param1, param2})
        setHistouseridcargo(res)
    }
    traerHistoriasStatusCargo()
  }, [])

 
  return (
    <ComPageHistoriasAceptadas
      histouseridcargo={histouseridcargo}
    />
  )
}

export default page