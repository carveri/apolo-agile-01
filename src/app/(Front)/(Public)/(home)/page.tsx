'use client'
import Image from "next/image";

import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
import imagenDashboard2 from "./../../React/Assets/Icons/dashboard4.png";
import MiBoton from "../../React/Components/MiBoton/MiBoton";
import { useRouter } from "next/navigation";


const page = () => {

  const router = useRouter()

  const handleClickBotonesHome =(e)=>{
    if(e.target.name === 'ingresar'){
      router.push('/api/auth/login')
    }
    else if(e.targat.name === 'prueba'){
      router.push('/api/auth')
    }
    else {
      console.log('as');
      
    }
  }

  

  return (
    <div className='w-full h-full flex px-12 '>
      <section className='w-[43%] h-auto  grid place-items-center'>
        <div className='w-5/6 h-3/5   mt-9'>
          <article className='w-full h-12 text-xl flex'>
            <header className='pr-2'>
              <Image
                  src={logoPrincipal}
                  width={30}
                  height={30}
                  alt="Picture of the author"
              />
              
            </header> 
            <p className="text-colorTextoNavbar font-semibold">
              Apolo Agile
            </p>
          </article>
          <article className='text-2xl text-colorTextoNavbar w-full h-24 py-4 font-semibold' >
            El ERP de metodologia Scrum para StartUps con alto potencial de crecimiento
          </article>
          <article className='text-lg w-full h-2/6 py-4 pl-2 text-gray-700'>
            Software de gestion de proyectos y tareas, con metodologias agiles, para StartUps que necesitan orden en su gestion interna del dia a dia. Se disponen de distintos plugins de base de datos, backend e insfraestructura.  
          </article>
          <article className='w-[95%] h-[15%] grid grid-cols-2 place-items-center gap-x-4 py-3 text-tamañoLetra'>
            <button name="ingresar" onClick={handleClickBotonesHome} className="bg-colorTextoAceptada w-full h-full text-white font-semibold rounded">
              Ingresar
            </button>
            <button name="prueba" onClick={handleClickBotonesHome} className="bg-colorTextoNavbar w-full h-full text-white font-semibold rounded">
              Prueba Gratuita
            </button>
          </article>
        </div>
      </section>
      <section className='w-[57%]   grid place-items-center '>
            <div>
                <Image
                    src={imagenDashboard2}
                    width={720}
                    height={620}
                    alt="Picture of the author"
                    className=' -mt-16 '
                />
            </div>
      </section>
    </div>
  )
}

export default page