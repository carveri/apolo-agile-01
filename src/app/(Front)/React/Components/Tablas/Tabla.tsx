import React from 'react'
import SelectTabla from './SelectTabla'
import InputTabla from './InputTabla'
import { agregarUsuario } from "@/app/actions/aAdmin"


const Tabla = () => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[7%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Admin {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[93%] '>
            <form  action={agregarUsuario} className=' w-full h-full'>

                <div className='flex h-[80%]   place-content-center  mt-8  px-56 gap-x-10'>
                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white px-4 mr-10 pt-5  rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Datos Personales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                            {/* PRIMER NOMBRE */}
                            <InputTabla
                                texto = 'Primer Nombre:'
                                nombre = 'primerNombre'
                                tipo = 'text'
                                placeholder = 'Pedro'
                            />
                            {/* SEGUNDO NOMBRE */}
                            <InputTabla
                                texto = 'Segundo Nombre:'
                                nombre = 'segundoNombre'
                                tipo = 'text'
                                placeholder = 'Raul'
                            />
                            
                            {/* AP PATERNO */}
                            <InputTabla
                                texto = 'Apellido Paterno:'
                                nombre = 'apellidoPaterno'
                                tipo = 'text'
                                placeholder = 'Ruiz'
                            />
                            {/* AP MATERNO */}
                            <InputTabla
                                texto = 'Apellido Materno:'
                                nombre = 'apellidoMaterno'
                                tipo = 'text'
                                placeholder = 'Cortes'
                            />
                            {/* RUT PERSONAL */}
                            <InputTabla
                                texto = 'Rut Personal:'
                                nombre = 'rutPersonal'
                                tipo = 'text'
                                placeholder = '11.111.111-1'
                            />    
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5 px-8 rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl ' >
                            Datos Laborales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-2 '>
                            
                            
                            {/* <SelectTabla /> */}
                            {/* <SelectTabla /> */}
                            {/* EMAIL */}
                            <InputTabla
                                texto = 'Email:'
                                nombre = 'email'
                                tipo = 'text'
                                placeholder = 'juanitoxx@gmail.com'
                            />
                            {/* PASSWORD */}
                            <InputTabla
                                texto = 'Password:'
                                nombre = 'password'
                                tipo = 'text'
                                placeholder = '************'
                            />
                            {/* CONFIRM PASSWORD */}
                            <InputTabla
                                texto = 'Confirmar Password:'
                                nombre = 'confirmPassword'
                                tipo = 'text'
                                placeholder = '************'
                             />
                            
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  mt-2'>
                    <button className='w-[20%] h-[90%] bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal text-white rounded font-semibold'>
                        Guardar
                    </button>
                </div>
            </form>
        </main>
        </section>
        
    </div>
  )
}

export default Tabla