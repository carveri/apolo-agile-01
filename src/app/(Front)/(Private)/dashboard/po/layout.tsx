import type { Metadata } from "next";
//   // imagenes po
import homePo from "../../../React/Assets/Icons/homePo.png";
import nuevasTareasPo from "../../../React/Assets/Icons/nuevasTareasPo.png";
import gestionTareasPo from "../../../React/Assets/Icons/gestionTareasPo.png";
import productBacklogPo from "../../../React/Assets/Icons/productBacklogPo.png";
import historiRetornadas from "../../../React/Assets/Icons/logoHistoriaREtornada2.png";
import Sidebar from '@/app/(Front)/React/Components/Sidebar';
import Navbar from '@/app/(Front)/React/Components/Navbar';
import { getNombreEmpresaLayout } from "@/app/(Front)/[Funciones]/getNombreEmpresaLayout";
  
export const metadata: Metadata = {
  title: "Product Owner",
  description: "ERP para StartApps",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  const {res, historias, session, user} = await getNombreEmpresaLayout()

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
        <header className="h-12 w-full bg-colorCajaLogo  place-content-center text-colorTextoCaja text-center">
        <div className="text-sm text-center">Apolo Agile</div> <div className="text-[9px] text-center  text-white">{res.at(0)?.nombreEmpresa}</div>
        </header>
        <aside className="w-full h-[820px] bg-gray-100 ">
         
        <Sidebar
        links={linksPo}
        //nombreEmpresa={res.at(0)?.nombreEmpresa}
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
        <div className=' h-7 flex items-center pl-4  bg-colorBotonPrincipal mt-1 text-tamañoLetra'>
          <section className="w-4/6  bg-colorBotonPrincipal text-white">
            {session.user?.email}
          </section>
          <div className="text-white">
            sdsd
          </div>
      </div>
      </section>
      
    </div>
  );
}