'use client'

import { useRouter } from "next/navigation";
import ComLayout from "../../[Componentes]/ClienteHistoriasAceptadas/ComLayout";

export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const router = useRouter()
  const handleClickMeeting1 =()=>{
    router.push('/dashboard/cliente/visionario/clienteHistoriasAceptadas')
  }

  const handleClickMeeting2 =()=>{
    router.push('/dashboard/cliente/visionario/clienteHistoriasAceptadas/historialHistoriasAceptadas')
  }


  return (
    <ComLayout
      handleClickMeeting1={handleClickMeeting1}
      handleClickMeeting2={handleClickMeeting2}
      children={children}
      nombre='Visionario'
    />
  )
}