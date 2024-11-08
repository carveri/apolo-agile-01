import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full grid place-items-center bg-violet-50'>
      <div className='w-[25%] h-[80%] rounded-xl'>
        <header className='w-full h-[10%] bg-gray-200 grid place-content-center rounded font-semibold text-lg'>
          Datos Personales
        </header>
        <main className='w-full h-[90%] border border-gray-200 bg-white grid grid-rows-8 px-6 py-3 rounded'>
          <section className='grid content-center'>
            Nombre: Juan Perez Donoso 
          </section>
          <section className='grid content-center'>
            Rut: 16.645.873-4
          </section>
          <section className='grid content-center'>
            Email Corporativo: juanperez@hilti.com
          </section>
          <section className='grid content-center'>
            Empresa: Hilti
          </section>
          <section className='grid content-center'>
            Fecha Ingreso: 12-07-2022
          </section>
          <section className='grid content-center'>
            Area: Desarrollo
          </section>
          <section className='grid content-center'>
            Deapartamento: Backend
          </section>
          <section className='grid content-center'>
            Cargo: Backend Senior
          </section>
        </main>
      </div>
    </div>
  )
}

export default page