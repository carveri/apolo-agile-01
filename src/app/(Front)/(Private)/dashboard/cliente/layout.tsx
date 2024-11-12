//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes clientes
   import homeClientes from "../../../React/Assets/Icons/homeClientes.png";
   import agregarTareasClientes from "../../../React/Assets/Icons/agregarTareasClientes.png";
    import resolucionTareasClientes from "../../../React/Assets/Icons/resolucionTareaClientes.png";



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
  
const linksClientes = [
  {
      id:1,
      href: '/dashboard/cliente',
      nombre: 'Home',
      icono: homeClientes
  },
  {
      id:2,
      href: '/dashboard/cliente/clienteAgregarTarea',
      nombre: 'Agregar una peticion',
      icono: agregarTareasClientes
  },
  {
      id:3,
      href: '/dashboard/cliente/clienteResolucionTarea',
      nombre: 'Resoluciones',
      icono: resolucionTareasClientes
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
        links={linksClientes}
      />
          
        </aside>
      </section>
      <section className="w-full h-full  ">
        <header className="h-12 bg-gray-100">
          <Navbar />
        </header>
        <main className="w-full h-[828px]  rounded">
          {children}
        </main>
        <div className=' h-7 flex items-center pl-4  bg-violet-400  mt-1'>
          <section className="w-4/6  bg-violet-400 text-white">
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