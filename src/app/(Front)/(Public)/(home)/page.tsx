
import Image from "next/image";


import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
import imagenDashboard2 from "./../../React/Assets/Icons/dashboard4.png";
import MiBoton from "../../React/Components/MiBoton/MiBoton";


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
            <p >
              Apolo Agile
            </p>
          </article>
          <article className='text-xl w-full h-24 py-4' >
            El ERP de metodologia Scrum para StartUps con alto potencial de crecimiento
          </article>
          <article className='text-lg w-full h-2/6 py-4 pl-2'>
            olisss ipsum dolor sit amet consectetur adipisicing elit. Facere non laboriosam, laudantium illum voluptatum adipisci reprehenderit est esse consectetur adipisicing elit. Facere non laboriosam, laudantium i
          </article>
          <article className='w-[95%] h-1/6  grid grid-cols-2 place-items-center gap-x-4 py-3 text-tamañoLetra'>
            <MiBoton
              nombreBoton = 'HomeIngresar'  
            />
            < MiBoton
              nombreBoton = 'HomePrueba'
            />
          </article>
        </div>
      </section>
      <section className='w-[57%]   grid place-items-center '>
            <div>
                <Image
                    src={imagenDashboard2}
                    width={750}
                    height={650}
                    alt="Picture of the author"
                    className=' -mt-16 '
                />
            </div>
      </section>
    </div>
  )
}

export default page