//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes sm
import homeSm from "../../../React/Assets/Icons/homeSm.png";
import planningSm from "../../../React/Assets/Icons/planningSm.png";
import dailySm from "../../../React/Assets/Icons/dailySm.png";
import reviewSm from "../../../React/Assets/Icons/reviewSm2.png";
import retrospectiveSm from "../../../React/Assets/Icons/retrospectiveSm.png";

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
  

const linksSm = [
  {
      id:1,
      href: '/dashboard/sm',
      nombre: 'Home ',
      icono: homeSm
  },
  {
      id:2,
      href: '/dashboard/sm/meeting/planning',
      nombre: 'Planning',
      icono: planningSm
  },
  
  {
      id:3,
      href: '/dashboard/sm/meeting/daily',
      nombre: 'Daily',
      icono: dailySm
  },
  
  {
      id:4,
      href: '/dashboard/sm/meeting/review',
      nombre: 'Review',
      icono: reviewSm
  },
  
  {
      id:5,
      href: '/dashboard/sm/meeting/retrospective',
      nombre: 'Retrospective',
      icono: retrospectiveSm
  },
  
]

    
  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-colorCajaLogo grid place-content-center text-colorTextoCaja">
          Apolo Agile
        </header>
        <aside className="w-full h-[820px] bg-gray-100 ">
         
        
        <Sidebar
        links={linksSm}
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