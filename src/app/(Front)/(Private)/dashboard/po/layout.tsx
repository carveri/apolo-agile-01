import type { Metadata } from "next";

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  

//   // imagenes po
import homePo from "../../../React/Assets/Icons/homePo.png";
import nuevasTareasPo from "../../../React/Assets/Icons/nuevasTareasPo.png";
import gestionTareasPo from "../../../React/Assets/Icons/gestionTareasPo.png";
import productBacklogPo from "../../../React/Assets/Icons/productBacklogPo.png";
import historiRetornadas from "../../../React/Assets/Icons/logoHistoriaREtornada2.png";


import Sidebar from '@/app/(Front)/React/Components/Sidebar';
import Navbar from '@/app/(Front)/React/Components/Navbar';
import {  useHistoriaPo, usePoStore, useSessionPo } from '../../[stores]/poStore';
import { getData } from '@/app/(Front)/React/Fetch/getData';
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
  
export const metadata: Metadata = {
  title: "(2) Product Owner",
  description: "ERP para StartApps",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  

  const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }

  const {user}= session

  const ruta = 'historiaStatus'
  const url = 'Pendiente'
  const historias = await getDataLista({ruta, url})
  console.log('histo del layout solo pendiente:', historias);
  

    
  

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
      coso: historias[0]?.status === 'Pendiente' ?  historias.length : null,
      icono: nuevasTareasPo
  },
  {
      id:3,
      href: '/dashboard/po/poHistoriasRetornadas',
      nombre: 'Historias Retornadas',
      icono: historiRetornadas
  },
  {
      id:4,
      href: '/dashboard/po/poContraOfertas',
      nombre: 'Controfertas',
      icono: gestionTareasPo
  },
  {
      id:5,
      href: '/dashboard/po/poProductBacklog',
      nombre: 'Product Backlog',
      icono: productBacklogPo
  },
  
  
]


    

  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-colorCajaLogo grid place-content-center text-colorTextoCaja">
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
        <div className=' h-7 flex items-center pl-4  bg-colorBotonPrincipal mt-1'>
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