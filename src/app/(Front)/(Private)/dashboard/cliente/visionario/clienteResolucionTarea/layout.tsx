'use client'

import { useRouter } from "next/navigation";
import ComLayoutResolucionTarea from "../../[Componentes]/ClienteResolucionTarea/ComLayoutResolucionTarea";

export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const router = useRouter()
  const handleClickMeeting1 =()=>{
    router.push('/dashboard/cliente/clienteResolucionTarea')
  }

  const handleClickMeeting2 =()=>{
    router.push('/dashboard/cliente/clienteResolucionTarea/historialTarea')
  }


  return (
    <ComLayoutResolucionTarea 
      handleClickMeeting1={handleClickMeeting1}
      handleClickMeeting2={handleClickMeeting2}
      children={children}
      nombre='Visionario'
    />
  );
}