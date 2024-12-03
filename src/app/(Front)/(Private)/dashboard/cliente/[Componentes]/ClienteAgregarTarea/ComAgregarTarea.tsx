import FormularioClientePeticion from '@/app/(Front)/React/Components/Formularios/FormularioClientePeticion'
import React from 'react'

const ComAgregarTarea = ({id, areaId, email, nombre}) => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[5%] py-4 pl-4 text-sm'>
                Dashboard Cliente {'>'} Clientes {'>'} {nombre} {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <FormularioClientePeticion
                id={id}
                areaId={areaId}
                email = {email}
            />
        </main>
        </section>
        
    </div>
  )
}

export default ComAgregarTarea