'use client'

import { useRouter } from "next/navigation";

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
    <div  className='w-full h-full bg-white grid justify-items-center'>
      <section className='w-[99%] h-[98%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4 '>
            Dashboard {'>'} Clientes {'>'} Recursos Humanos {'>'} Historias Enviadas
          </header>
      </section>
      <main className='w-full h-[95%] -mt-[377px]'> 
        <header className="w-full h-9  flex px-7">
          <div onClick={handleClickMeeting1} className="border border-gray-200 px-5 grid place-content-center cursor-pointer hover:underline">
            Peticiones Actuales
          </div>
          <div onClick={handleClickMeeting2} className="border border-gray-200 px-5 grid place-content-center cursor-pointer hover:underline">
            Historial Peticiones
          </div>
        </header>
        <div className="h-64 ">
          {children}
        </div>
      </main>
    </div>
  );
}