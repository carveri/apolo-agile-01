  // GENERAL
  import { getServerSession } from 'next-auth'
  import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
  import { redirect } from 'next/navigation'

// // IMAGENES 
  import nuevoUsuarioAdmin from "../../../React/Assets/Icons/nuevoUsuarioAdmin.png";
  import clientesAdmin from "../../../React/Assets/Icons/adminClientes2.png";
  import poAdmin from "../../../React/Assets/Icons/poAdmin2.png";
  import smAdmin from "../../../React/Assets/Icons/smAdmin2.png";
  import devsAdmin from "../../../React/Assets/Icons/devsAdmin2.png";
  import adminAdmin from "../../../React/Assets/Icons/adminAdmin6.png";

  // COMPONENTES
  import Sidebar from '@/app/(Front)/React/Components/Sidebar';
  import Navbar from '@/app/(Front)/React/Components/Navbar';
import { getNombreEmpresaLayout } from '@/app/(Front)/[Funciones]/getNombreEmpresaLayout';



export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  const {res, historias, session, user} = await getNombreEmpresaLayout()
  


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
        nombre: 'Administración',
        icono: adminAdmin
    }
]



    

  return (
    <div className="w-screen h-screen flex">
      <section className="w-[280px] h-full bg-[--verdecito] ">
        <header className="h-12 w-full bg-colorCajaLogo grid place-content-center text-colorTextoCaja ">
        <div className="text-sm text-center">Apolo Agile</div> <div className="text-[9px]  text-white">{res.at(0)?.nombreEmpresa}</div>
        </header>
        <aside className="w-full h-[820px] bg-gray-100 "> 
        <Sidebar
          links={linksAdmin}
      />  
        </aside>
      </section>
      <section className="w-full h-full  ">
        <header className="h-12 bg-gray-100 ">
          <Navbar />
        </header>

        <main className="w-full  h-[807px]  rounded text-tamañoLetra pl-2">
          <header className='w-full h-[4%]  pl-4 mt-5'>
                Dashboard {'>'} Administrador
            </header>
            {children}
        </main>
        <div className=' h-7 flex items-center pl-4  bg-colorBarraBaja mt-1 text-tamañoLetra'>
          <section className="w-4/6  bg-rgb(106, 114, 219) text-colorTextoBarraBaja font-semibold">
            {session.user?.email}
          </section>
          <div className="text-colorTextoBarraBaja font-semibold">
            {user?.name}
          </div>
      </div>
      </section>
      
    </div>
  );
}