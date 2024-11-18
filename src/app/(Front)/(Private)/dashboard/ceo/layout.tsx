//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  

//   // imagenes ceo
import homeCeo from "../../../React/Assets/Icons/home.png";
import ceoAdmin from "../../../React/Assets/Icons/ceoAdmin.png";
import ceoCliente from "../../../React/Assets/Icons/ceoCliente.png";
import ceoPo from "../../../React/Assets/Icons/ceoPo.png";
import ceoSm from "../../../React/Assets/Icons/ceoSm.png";
import ceoDevs from "../../../React/Assets/Icons/ceoDevs.png";
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

  console.log('sesiones:', user);
  

  
  const palanca = user?.name
  console.log('palanquita bonita:', palanca);
  
  

const linksCeo = [
  {
      id:1,
      href: '/dashboard/ceo',
      nombre: 'Home',
      icono: homeCeo
  },
  {
      id:2,
      href: '/dashboard/ceo/ceoAdmin',
      nombre: 'Admin',
      icono: ceoAdmin
  },
  {
      id:3,
      href: '/dashboard/ceo/ceoCliente',
      nombre: 'Clientes',
      icono: ceoCliente
  },
  {
      id:4,
      href: '/dashboard/ceo/ceoPo',
      nombre: 'Product Owner',
      icono: ceoPo
  },
  {
      id:5,
      href: '/dashboard/ceo/ceoSm',
      nombre: 'Scrum Master',
      icono: ceoSm
  },
  {
      id:6,
      href: '/dashboard/ceo/ceoDevs',
      nombre: 'Devs',
      icono: ceoDevs
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
        links={linksCeo}
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
        <div className=' h-7 flex items-center pl-4  bg-colorBotonPrincipal  mt-1'>
          <section className="w-4/6  bg-colorBotonPrincipal text-white">
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