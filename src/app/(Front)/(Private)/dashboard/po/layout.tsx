//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  

//   // imagenes po
import homePo from "../../../React/Assets/Icons/homePo.png";

import nuevasTareasPo from "../../../React/Assets/Icons/nuevasTareasPo.png";

//   import nuevasTareasPo from "./../../React/Assets/Icons/nuevasTareasPo.png";

import gestionTareasPo from "../../../React/Assets/Icons/gestionTareasPo.png";
//   import gestionTareasPo from "./../../React/Assets/Icons/gestionTareasPo.png";

import productBacklogPo from "../../../React/Assets/Icons/productBacklogPo.png";
//   import productBacklogPo from "./../../React/Assets/Icons/productBacklogPo.png";





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
  
  
  

const linksPo = [
  {
      id:1,
      href: '/dashboard/po',
      nombre: 'Home',
      icono: homePo
  },
  {
      id:2,
      href: '/dashboard/po/poNuevaTarea',
      nombre: 'Nuevas Historias ',
      coso: '1',
      icono: nuevasTareasPo
  },
  {
      id:3,
      href: '/dashboard/po/poGestionTarea',
      nombre: 'Gestion Historica',
      icono: gestionTareasPo
  },
  {
      id:4,
      href: '/dashboard/po/poProductBacklog',
      nombre: 'Product Backlog',
      icono: productBacklogPo
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
        links={linksPo}
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