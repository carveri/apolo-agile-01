'use client'
import { getDataCompleja } from "@/app/(Front)/React/Fetch/getDataCompleja";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore";
import Image from "next/image";

//import iconoVacio from "../../../../../React/Assets/Icons/iconoVacio.png";
import diagramaVacio from "../../../../../React/Assets/Icons/diagramaVacio2.png";
import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import ComPageHistoriasAceptadas from "../../[Componentes]/ClienteHistoriasAceptadas/ComPageHistoriasAceptadas/ComPageHistoriasAceptadas";

const page = () => {

  const { idHistoria, cambiarIdHistoria} = useHistoriaPo()

  const [histouseridcargo, setHistouseridcargo] = useState([])  


  useEffect(()=>{
    const traerHistoriasStatusCargo = async()=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = 'a0e8cd01-330c-44da-8efb-52f04217d30b'
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