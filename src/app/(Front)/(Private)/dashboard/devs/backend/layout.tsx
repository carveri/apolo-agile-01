//import Navbar from "../../React/Components/Navbar";
//import Sidebar from "../../React/Components/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

// // IMAGENES 
  
//   // imagenes dev

    import homeDev from "../../../../React/Assets/Icons/homeDevs.png";
   //import homeDev from "../../../React/Assets/Icons/homeDevs.png";
   
   import miEquipoDev from "../../../../React/Assets/Icons/devMIEquipo.png";
   //import miEquipoDev from "../../../React/Assets/Icons/devMIEquipo.png";
    
   import sprintBacklogDev from "../../../../React/Assets/Icons/devSprintBacklog.png";
   //import sprintBacklogDev from "../../../React/Assets/Icons/devSprintBacklog.png";
    
   import misTareasDev from "../../../../React/Assets/Icons/devMisTareas.png";
   //import misTareasDev from "../../../React/Assets/Icons/devMisTareas.png";
    
   import tecnicoDev from "../../../../React/Assets/Icons/devMisTareas.png";
   //import tecnicoDev from "../../../React/Assets/Icons/devTecnico.png";




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
  
  


const linksDevs = [
  {
      id:1,
      href: '/dashboard/devs/backend',
      nombre: 'Home',
      icono: homeDev
  },
  {
    id:2,
    href: '/dashboard/devs/backend/diagrama',
    nombre: 'Diagrama',
    icono: miEquipoDev
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
        links={linksDevs}
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
        <div className=' h-7 flex items-center pl-4  bg-colorBotonPrincipal  mt-1 text-tamañoLetra'>
          <section className="w-4/6  bg-colorBotonPrincipal text-white">
            {user?.email}
          </section>
          <div className="text-white">
            {user?.name}
          </div>
      </div>
      </section>
      
    </div>
  );
}