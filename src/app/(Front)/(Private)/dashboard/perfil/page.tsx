'use client'

import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter()

  return (
    <div className='w-full h-[880px] grid place-items-center grid-cols-2   px-80'>
      <div className='w-[500px] h-[60%] rounded-xl '>
        <header className='w-full shadow-xl h-[10%] border border-b-violet-400 grid place-content-center rounded font-semibold text-lg text-violet-700'>
          Datos Personales
        </header>
        <main className='w-full h-[80%] shadow-lg bg-white grid grid-rows-6 px-6 py-3 rounded text-sm'>
          <section className='grid content-center'>
            Primer Nombre: Juan 
          </section>
          <section className='grid content-center'>
            Segundo Nombre: Luis
          </section>
          <section className='grid content-center'>
            Apellido Paterno: Perex
          </section>
          <section className='grid content-center'>
            Apellido Materno: Gomez
          </section>
          <section className='grid content-center'>
            Rut: 16.645.873-4
          </section>
          <section className='grid content-center'>
            Fecha Ingreso: 12-07-2022
          </section>
          
          {/* <button  onClick={()=>router.back()} className="mt-10 w-full h-14 bg-colorTextoAceptada text-white font-semibold rounded-sm">
            Volver 
          </button> */}
        </main>
      </div>
      <div className='w-[500px]  h-[60%] rounded-xl '>
        <header className='w-full h-[10%] border border-b-violet-400 grid place-content-center rounded font-semibold text-lg text-violet-700'>
          Datos Laborales
        </header>
        <main className='w-full  h-[80%] shadow-lg bg-white grid grid-rows-6 px-6 py-3 rounded text-tamañoLetra'>
          <section className='grid content-center'>
            Empresa: Hilti
          </section>
          <section className='grid content-center'>
            Rut Empresa: 16.645.873-4
          </section>
          <section className='grid content-center'>
            Email Corporativo: juanperez@hilti.com
          </section>
          <section className='grid content-center'>
            Area: Desarrollo
          </section>
          <section className='grid content-center'>
            Departamento: Backend
          </section>
          <section className='grid content-center'>
            Cargo: Backend Senior
          </section>
          {/* <section className='grid content-center'>
            Deapartamento: Backend
          </section>
          <section className='grid content-center'>
            Cargo: Backend Senior
          </section> */}
          {/* <button  onClick={()=>router.back()} className="mt-10 w-full h-14 bg-colorTextoAceptada text-white font-semibold rounded-sm">
            Volver 
          </button> */}
        </main>
        <div className="w-full h-14 flex justify-end">
          <button  onClick={()=>router.back()} className="mt-10   w-36 h-14 bg-colorTextoAceptada text-white font-semibold rounded-sm">
              Volver 
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default page