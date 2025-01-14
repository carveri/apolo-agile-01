'use client'

import { useState } from "react";
import { deleteData } from "../../Fetch/deleteData";
import { logicaMiBoton } from "./logicaMiBoton";
import { useRouter } from "next/navigation";
import ModalGestionUsuario from "@/app/(Front)/(Private)/dashboard/admin/[Components]/ModalGestionUsuario";

interface IMiBoton {
  texto: string 
  color: string
  bgColor: string
  ancho: string
  alto: string
  borde: string
  hover?: string
  el?: any
  //nombreBoton: string
}



const MiBoton = ({ nombreBoton}) => {

  const router = useRouter()

  const [activarModal, setActivarModal] = useState(false)
  

  const { texto, color, bgColor, ancho, alto, borde }:IMiBoton = logicaMiBoton(nombreBoton)
  
  const handleClickMiBoton =(e)=>{
    if(e.target.name === 'HomeIngresar'){
      router.push('api/auth/login')
    }
    else if(e.target.name === 'HomePrueba'){
      console.log('soy el bot de prueba'); 
    }
    else if(e.target.name === 'Ver'){
      console.log('soy el bot de prueba'); 
    }
    else if(e.target.name === 'Actualizar'){
      console.log('el.id'); 
      setActivarModal(true)
      
    }
    else if(e.target.name === 'Eliminar'){
      // const ruta = 'user'
      // const url = ''
      //deleteData()
      console.log('as');
      setActivarEli(!act)
      
      
    }

  }

  return (
    <>
      <button className="grid place-content-center" style={{background: `var(${bgColor})`, width: `${ancho}`, height: `${alto}`, borderRadius: `${borde}`, color: `${color}`, fontWeight: 'bold'}} name={nombreBoton} onClick={handleClickMiBoton} >
      {texto}
    </button>
    <ModalGestionUsuario
      isOpen = {activarModal}
      onClose = {activarModal}
    />{}
    </>
  )
}

export default MiBoton