'use client'

import { logicaMiBoton } from "./logicaMiBoton";
import { useRouter } from "next/navigation";

interface IMiBoton {
  texto: string 
  color: string
  bgColor: string
  ancho: string
  alto: string
  borde: string
  hover: string
  //nombreBoton: string
}



const MyButton = ({ nombreBoton}) => {

  const router = useRouter()

  const { texto, color, bgColor, ancho, alto, borde }:IMiBoton = logicaMiBoton(nombreBoton)
  
  const handleClickMiBoton =(e)=>{
    if(e.target.name === 'HomeIngresar'){
      router.push('api/auth/login')
    }
    else if(e.target.name === 'HomePrueba'){
      console.log('soy el bot de prueba'); 
    }
  }

  return (
    <button style={{background: `var(${bgColor})`, width: `${ancho}`, height: `${alto}`, borderRadius: `${borde}`, color: `${color}`, fontWeight: 'bold'}} name={nombreBoton} onClick={handleClickMiBoton} >
      {texto}
    </button>
  )
}

export default MyButton