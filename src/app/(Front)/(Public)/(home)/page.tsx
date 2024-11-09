import React from 'react'
import Image from "next/image";


import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
import imagenDashboard from "./../../React/Assets/Images/dashboard1.png";
import imagenDashboard2 from "./../../React/Assets/Icons/dashboard4.png";



const page = () => {
  return (
    <div className='w-full h-full flex px-8'>
      <section className='w-[43%] h-auto  grid place-items-center'>
        <div className='w-5/6 h-3/5   '>
          <article className='w-full h-12 text-xl flex'>
            <header className='pr-2'>
              <Image
                  src={logoPrincipal}
                  width={30}
                  height={30}
                  alt="Picture of the author"
              />
              
            </header> 
            <p>
              Apolo Agile
            </p>
          </article>
          <article className='text-3xl w-full h-36 py-4 pl-2'>
            El ERP de metodologia Scrum para StartUps con alto potencial de crecimiento
          </article>
          <article className='text-2xl w-full h-2/6 py-4 pl-2'>
            olisss ipsum dolor sit amet consectetur adipisicing elit. Facere non laboriosam, laudantium illum voluptatum adipisci reprehenderit est esse
          </article>
          <article className='w-full h-1/6  grid grid-cols-2 place-items-center'>
            <button className='bg-colorBotonAceptar hover:bg-[#35e83b]  hover:duration-300 w-60 h-14 rounded text-white font-bold'>
              Ingresar
            </button>
            <button className='bg-colorBotonSecundario hover:bg-violet-600 hover:text-white hover:duration-300 w-60 h-14 rounded text-gray-100 font-bold'>
              Prueba Gratis!
            </button>
          </article>
        </div>
      </section>
      <section className='w-[57%]   grid place-items-center '>
            <div>
              {/* <Image
                    src={imagenDashboard}
                    width={700}
                    height={600}
                    alt="Picture of the author"
                    className=' ml-40 '
                /> */}
                <Image
                    src={imagenDashboard2}
                    width={900}
                    height={800}
                    alt="Picture of the author"
                    className=' -mt-16 '
                />
            </div>
              

      </section>
    </div>
  )
}

export default page