'use client'

import { useRouter } from "next/navigation";
import ComLayoutHistoriasEnviadas from "../../[Componentes]/ClienteHistoriasEnviadas/ComLayoutHistoriasEnviadas";

export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const router = useRouter()
  const handleClickMeeting1 =()=>{
    router.push('/dashboard/cliente/clienteHistoriasEnviadas')
  }

  const handleClickMeeting2 =()=>{
    router.push('/dashboard/cliente/clienteHistoriasEnviadas/historialHistoriasEnviadas')
  }


  return (
    <ComLayoutHistoriasEnviadas
      handleClickMeeting1={handleClickMeeting1}
      handleClickMeeting2={handleClickMeeting2}
      children={children}
      nombre='Recursos Humanos'
      />
  )
}