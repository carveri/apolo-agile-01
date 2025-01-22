'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

import iconoLogoPerfil from "../../../React/Assets/Icons/iconoLogoPerfil.png";

const page = () => {

  const router = useRouter()

  return (
    <div className='w-full h-screen bg-yellow-300 grid place-items-center'>
      <div className="w-[60%] h-[70%] bg-orange-500 flex">
        <section className="w-[20%] h-full bg-cyan-500 grid grid-contents-center">
          <div className="">
              <Image 
                src={iconoLogoPerfil}
                width={200}
                height={200}
                alt="dsd"
              />
          </div>
          <main>
            <header>
              Juan Perez Lopez
            </header>
            <div>
              @juanperez
            </div>
            <div>
              Hilti
            </div>
          </main>
        </section>
        <div className="w-[80%] h-full bg-violet-500 flex">
          <section className="w-[50%] h-full">
            <header>
              Datos Personales
            </header>
            <main>
              datos
            </main>
          </section>
          <section className="w-[50%]">
            <header>
              Datos Laborales
            </header>
            <main>
              sdsd
            </main>
          </section>
        </div>

      </div>
    </div>
  )
}

export default page