import React from 'react'
import Image from "next/image";

import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
//import pantallazo from "./../../React/Assets/Images/pantallazo20.png";
import dashboard from "../../React/Assets/Images/dashboard1.png";
import MyButton from '../../React/Components/MyButton';

const page = () => {

  const dataBoton1 ={
    id:1,
    color: "#03ff57",
    texto:'Ingresar',
    funcionalidad : ''
  }

  const dataBoton2 ={
    id:1,
    color: "#9a0095",
    texto:'Prueba!',
    funcionalidad : ''
  }



  return (
    <div className='w-full h-full flex px-8 group'>
      <section className='w-[43%] h-auto  grid place-items-center '>
        <div className='w-5/6 h-1/2   '>
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
          <article className='w-full h-1/6  grid grid-cols-2 place-items-center bg-yellow-300 group-has-[&>button]:text-red-900 [&>button]:w-[90%] [&>button]:h-[60%] rounded'>
            <MyButton 
              dataBoton = {dataBoton1}
            />
            <MyButton 
              dataBoton = {dataBoton2}
            />
          </article>
        </div>
      </section>
      <section className='w-[57%]  grid place-items-center '>
              <Image className='h-3/5 shadow-xl'
                  src={dashboard}
                  width={900}
                  height={850}
                  alt="Picture of the author"
              />

      </section>
    </div>
  )
}

export default page