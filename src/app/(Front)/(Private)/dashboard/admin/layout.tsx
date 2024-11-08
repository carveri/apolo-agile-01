//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes admin
  import nuevoUsuarioAdmin from "../../../React/Assets/Icons/nuevoUsuarioAdmin.png";
  import clientesAdmin from "../../../React/Assets/Icons/clientesAdmin.png";
  import poAdmin from "../../../React/Assets/Icons/poAdmin.png";
  import smAdmin from "../../../React/Assets/Icons/smAdmin.png";
  import devsAdmin from "../../../React/Assets/Icons/devsAdmin.png";
  import adminAdmin from "../../../React/Assets/Icons/adminAdmin.png";




import Sidebar from '@/app/(Front)/React/Components/Sidebar';
import Navbar from '@/app/(Front)/React/Components/Navbar';
  


export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }

  const {user}= session

  //console.log('sesiones:', user);
  

  
  const palanca = user?.name
  //console.log('palanquita bonita del sm:', palanca);
  
  
  


const linksAdmin = [
    {
        id:1,
        href: '/dashboard/admin',
        nombre: 'Nuevo Usuario',
        icono: nuevoUsuarioAdmin
    },
    {
        id:2,
        href: '/dashboard/admin/adminClientes',
        nombre: 'Clientes',
        icono: clientesAdmin
    },
    {
        id:3,
        href: '/dashboard/admin/adminPo',
        nombre: 'Product Owner',
        icono: poAdmin
    },
    {
        id:4,
        href: '/dashboard/admin/adminSm',
        nombre: 'Scrum Master',
        icono: smAdmin
    },
    {
        id:5,
        href: '/dashboard/admin/adminDevs',
        nombre: 'Desarrollo',
        icono: devsAdmin
    },
    {
        id:6,
        href: '/dashboard/admin/adminAdmin',
        nombre: 'Administracion',
        icono: adminAdmin
    }
]

    

  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-gray-500 grid place-content-center text-[#00ff08]">
          Apolo Scrum
        </header>
        <aside className="w-full h-[820px] bg-gray-100 ">
         
        <Sidebar
        links={linksAdmin}
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