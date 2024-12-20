
// // IMAGENES 
  
   import homeClientes from "../../../../React/Assets/Icons/homeClientes.png";
   import agregarTareasClientes from "../../../../React/Assets/Icons/agregarTareaCliente8.png";
   import historiasEnviadasClientes from "../../../../React/Assets/Icons/logoPricipal3.png";
   import resolucionTareasClientes from "../../../../React/Assets/Icons/resolucionTareaClientes.png";
   import resolucionTareasClientesAceptadas from "../../../../React/Assets/Icons/gestionTareasPo.png";
import Navbar from '@/app/(Front)/React/Components/Navbar';
import Sidebar from '@/app/(Front)/React/Components/Sidebar';
import { getNombreEmpresaLayout } from '@/app/(Front)/[Funciones]/getNombreEmpresaLayout';
import { Metadata } from "next";
  
export const metadata: Metadata = {
  title: "Cliente - Finanzas",
  description: "ERP para StartApps",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const {res, historias, session, user} = await getNombreEmpresaLayout()
  
const linksTecnico = [
  {
      id:1,
      href: '/dashboard/cliente/finanzas',
      nombre: 'Home',
      icono: homeClientes
  },
  {
      id:2,
      href: '/dashboard/cliente/finanzas/clienteAgregarTarea',
      nombre: 'Agregar Historia',
      icono: agregarTareasClientes
  },
  {
      id:3,
      href: '/dashboard/cliente/finanzas/clienteHistoriasEnviadas',
      nombre: 'Historias Enviadas',
      icono: historiasEnviadasClientes
  },
  {
      id:4,
      href: '/dashboard/cliente/finanzas/clienteResolucionTarea',
      nombre: 'Historias Retornadas',
      icono: resolucionTareasClientes
  },
  {
      id:5,
      href: '/dashboard/cliente/finanzas/clienteHistoriasAceptadas',
      nombre: 'Historias Aceptadas',
      icono: resolucionTareasClientesAceptadas
  },
 
]

 
    

  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-colorCajaLogo grid place-content-center text-white">
        <div className="text-sm text-center">Apolo Agile</div> <div className="text-[9px] text-center text-white">{res.at(0)?.nombreEmpresa}</div>
        </header>
        <aside className="w-full h-[820px] bg-gray-100 ">
         
        <Sidebar
        links={linksTecnico}
      />
          
        </aside>
      </section>
      <section className="w-full h-full  ">
        <header className="h-12 bg-gray-100">
          <Navbar />
        </header>
        <main className="w-full h-[828px]  rounded text-tamañoLetra">
          {children}
        </main>
        <div className=' h-7 flex items-center pl-4  bg-colorBarraBaja  mt-1 text-tamañoLetra'>
          <section className="w-4/6  bg-colorBarraBaja text-white">
          {session.user?.email}
          </section>
          <div className="text-white">
          Finanzas
          </div>
      </div>
      </section>
      
    </div>
  );
}