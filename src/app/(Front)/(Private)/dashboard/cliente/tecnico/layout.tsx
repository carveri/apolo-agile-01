//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes clientes
   //import homeClientes from "../../../React/Assets/Icons/homeClientes.png";
   import homeClientes from "../../../../React/Assets/Icons/homeClientes.png";
   import agregarTareasClientes from "../../../../React/Assets/Icons/agregarTareaCliente3.png";
   import iconoConfig from "../../../../React/Assets/Icons/iconoConfig.png";



import Navbar from '@/app/(Front)/React/Components/Navbar';
import Sidebar from '@/app/(Front)/React/Components/Sidebar';
  


export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }

  const {user}= session
  
const linksTecnico = [
  {
      id:1,
      href: '/dashboard/cliente/tecnico',
      nombre: 'Home',
      icono: homeClientes
  },
  {
      id:2,
      href: '/dashboard/cliente/tecnico/listaResolver',
      nombre: 'Resolver Historias',
      icono: agregarTareasClientes
  },
  {
      id:3,
      href: '/dashboard/cliente/tecnico/configuraciones',
      nombre: 'Configuraciones',
      icono: iconoConfig
  },
  
 
]

 
    

  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-gray-500 grid place-content-center text-[#00ff08]">
          Apolo Scrum
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
          {user?.name}
          </div>
      </div>
      </section>
      
    </div>
  );
}