'use client'

import { useEffect } from "react";
import { useHistoriaAdmin } from "../../../[stores]/adminStore";
import { logicaTabla } from "@/app/(Front)/React/Components/Tablas/logicaTabla";
import { IUsuarios } from "@/app/Interfaces/IGeneral";
import ComAdmin from "../[Components]/ComAdmin";

interface IUseHistoriaAdmin {
  usuarios: IUsuarios[]
  getUsuariosClientes: ()=>void
}

const page = () => {

    const {usuarios, getUsuariosClientes}:IUseHistoriaAdmin = useHistoriaAdmin()

    useEffect(()=>{
      getUsuariosClientes()
    }, [])

 
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      usuarios={usuarios}
      nombre = 'Clientes'
    />
  )
}

export default page