//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes admin
//   //import homeAdmin from "./../../React/Assets/Icons/homeAdmin.png";
//   import nuevoUsuarioAdmin from "./../../React/Assets/Icons/nuevoUsuarioAdmin.png";
//   import clientesAdmin from "./../../React/Assets/Icons/clientesAdmin2.png";
//   import poAdmin from "./../../React/Assets/Icons/poAdmin.png";
//   import smAdmin from "./../../React/Assets/Icons/smAdmin.png";
//   import devsAdmin from "./../../React/Assets/Icons/devsAdmin.png";
//   import adminAdmin from "./../../React/Assets/Icons/adminAdmin6.png";

//   // imagenes clientes
//   import homeClientes from "./../../React/Assets/Icons/homeClientes.png";
//   import agregarTareasClientes from "./../../React/Assets/Icons/agregarTareasClientes.png";
//   import resolucionTareasClientes from "./../../React/Assets/Icons/resolucionTareaClientes.png";


//   // imagenes po
//   import homePo from "./../../React/Assets/Icons/homePo.png";
//   import nuevasTareasPo from "./../../React/Assets/Icons/nuevasTareasPo.png";
//   import gestionTareasPo from "./../../React/Assets/Icons/gestionTareasPo.png";
//   import productBacklogPo from "./../../React/Assets/Icons/productBacklogPo.png";


//   // imagenes sm
//   import homeSm from "./../../React/Assets/Icons/homeSm.png";
//   import planningSm from "./../../React/Assets/Icons/planningSm.png";
//   import dailySm from "./../../React/Assets/Icons/dailySm.png";
//   import reviewSm from "./../../React/Assets/Icons/reviewSm2.png";
//   import retrospectiveSm from "./../../React/Assets/Icons/retrospectiveSm.png";

//   // imagenes dev
//   import homeDev from "./../../React/Assets/Icons/homeDevs.png";
//   import miEquipoDev from "./../../React/Assets/Icons/devMIEquipo.png";
//   import sprintBacklogDev from "./../../React/Assets/Icons/devSprintBacklog.png";
//   import misTareasDev from "./../../React/Assets/Icons/devMisTareas.png";
//   import tecnicoDev from "./../../React/Assets/Icons/devTecnico.png";

//   // imagenes ceo
//   import homeCeo from "./../../React/Assets/Icons/homeDevs.png";
//   import ceoAdmin from "./../../React/Assets/Icons/ceoAdmin.png";
//   import ceoCliente from "./../../React/Assets/Icons/ceoCliente.png";
//   import ceoPo from "./../../React/Assets/Icons/ceoPo.png";
//   import ceoSm from "./../../React/Assets/Icons/ceoSm.png";
//   import ceoDevs from "./../../React/Assets/Icons/ceoDevs.png";



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
  console.log('palanquita bonita del sm:', palanca);
  
  
  


const linksAdmin = [
    {
        id:1,
        href: '/dashboard/admin',
        nombre: 'Nuevo Usuario',
        icono: 'nuevoUsuarioAdmin'
    },
    {
        id:2,
        href: '/dashboard/admin/adminClientes',
        nombre: 'Clientes',
        icono: 'clientesAdmin'
    },
    {
        id:3,
        href: '/dashboard/admin/adminPo',
        nombre: 'Product Owner',
        icono: 'poAdmin'
    },
    {
        id:4,
        href: '/dashboard/admin/adminSm',
        nombre: 'Scrum Master',
        icono: 'smAdmin'
    },
    {
        id:5,
        href: '/dashboard/admin/adminDevs',
        nombre: 'Desarrollo',
        icono: 'devsAdmin'
    },
    {
        id:6,
        href: '/dashboard/admin/adminAdmin',
        nombre: 'Administracion',
        icono: 'adminAdmin'
    }
]

// const linksClientes = [
//   {
//       id:1,
//       href: '/dashboard/cliente',
//       nombre: 'Home',
//       icono: 'homeClientes'
//   },
//   {
//       id:2,
//       href: '/dashboard/cliente/clienteAgregarTarea',
//       nombre: 'Agregar una peticion',
//       icono: 'agregarTareasClientes'
//   },
//   {
//       id:3,
//       href: '/dashboard/cliente/clienteResolucionTarea',
//       nombre: 'Resoluciones',
//       icono: 'resolucionTareasClientes'
//   },
 
// ]

// const linksPo = [
//   {
//       id:1,
//       href: '/dashboard/po',
//       nombre: 'Home',
//       icono: 'homePo'
//   },
//   {
//       id:2,
//       href: '/dashboard/po/poNuevaTarea',
//       nombre: 'Nuevas Historias ',
//       icono: 'nuevasTareasPo'
//   },
//   {
//       id:3,
//       href: '/dashboard/po/poGestionTarea',
//       nombre: 'Gestion Historica',
//       icono: 'gestionTareasPo'
//   },
//   {
//       id:4,
//       href: '/dashboard/po/poProductBacklog',
//       nombre: 'Product Backlog',
//       icono: 'productBacklogPo'
//   },
  
  
// ]

// const linksSm = [
//   {
//       id:1,
//       href: '/dashboard/sm',
//       nombre: 'Home ',
//       icono: 'homeSm'
//   },
//   {
//       id:2,
//       href: '/dashboard/sm/meeting/planning',
//       nombre: 'Planning',
//       icono: 'planningSm'
//   },
  
//   {
//       id:3,
//       href: '/dashboard/sm/meeting/daily',
//       nombre: 'Daily',
//       icono: 'dailySm'
//   },
  
//   {
//       id:4,
//       href: '/dashboard/sm/meeting/review',
//       nombre: 'Review',
//       icono: 'reviewSm'
//   },
  
//   {
//       id:5,
//       href: '/dashboard/sm/meeting/retrospective',
//       nombre: 'Retrospective',
//       icono: 'retrospectiveSm'
//   },
  
// ]

// const linksDevs = [
//   {
//       id:1,
//       href: '/dashboard/devs',
//       nombre: 'Home',
//       icono: 'homeDev'
//   },
//   {
//       id:2,
//       href: '/dashboard/devs/devMiEquipo',
//       nombre: 'Mi Equipo',
//       icono: 'miEquipoDev'
//   },
//   {
//       id:3,
//       href: '/dashboard/devs/devSprintBacklog',
//       nombre: 'Sprint Backlog',
//       icono: 'sprintBacklogDev'
//   },
//   {
//       id:4,
//       href: '/dashboard/devs/devMisTareas',
//       nombre: 'Mis Tareas',
//       icono: 'misTareasDev'
//   },
//   {
//       id:5,
//       href: '/dashboard/devs/devTecnico',
//       nombre: 'Tecnico',
//       icono: 'tecnicoDev'
//   }
// ]

// const linksCeo = [
//   {
//       id:1,
//       href: '/dashboard/ceo',
//       nombre: 'Home',
//       icono: 'homeCeo'
//   },
//   {
//       id:2,
//       href: '/dashboard/ceo/ceoAdmin',
//       nombre: 'Admin',
//       icono: 'ceoAdmin'
//   },
//   {
//       id:3,
//       href: '/dashboard/ceo/ceoCliente',
//       nombre: 'Clientes',
//       icono: 'ceoCliente'
//   },
//   {
//       id:4,
//       href: '/dashboard/ceo/ceoPo',
//       nombre: 'Product Owner',
//       icono: 'ceoPo'
//   },
//   {
//       id:5,
//       href: '/dashboard/ceo/ceoSm',
//       nombre: 'Scrum Master',
//       icono: 'ceoSm'
//   },
//   {
//       id:6,
//       href: '/dashboard/ceo/ceoDevs',
//       nombre: 'Devs',
//       icono: 'ceoDevs'
//   }
// ]


  // const sidebarRutas = ()=>{
  //   if(palanca === 'bf65cc3b-d9d3-415d-886f-ea4266ff2f17'){
  //     return <Sidebar
  //       links={linksAdmin}
  //     />
  //   }
  //   else if(palanca === 'b1eaf458-7650-41f6-9852-561011a479a7'){
  //     return <Sidebar
  //       links={linksClientes}
  //     />
  //   }
  //   else if(palanca === 'b02c288b-8f32-4da1-8e37-0ee036065b31'){
  //     return <Sidebar
  //       links={linksPo}
  //     />
  //   }
  //   else if(palanca === 'd92c28a1-fc63-4c8c-a39f-e598b1474896'){
  //     return <Sidebar
  //       links={linksSm}
  //     />
  //   }
  //   else if(palanca === '7e911b1b-0ce3-41df-a869-7756e17a4aa2'){
  //     return <Sidebar
  //       links={linksDevs}
  //     />
  //   }
  //   else if(palanca === '1777984e-9aa8-4052-9537-55b3044feabd'){
  //     return <Sidebar
  //       links={linksCeo}
  //     />
  //   }
    
  //   else {
  //     return <div>
  //       NO tienes ningun cargo
  //     </div>
  //   }
  // }
 
    

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