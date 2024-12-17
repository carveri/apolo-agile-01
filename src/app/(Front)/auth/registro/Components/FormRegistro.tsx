'use client'

// interface IFormRegistro {
//   handleSubmitRegistro: React.FormEvent<HTMLFormElement>
//   handleChangeRegistro: React.ChangeEvent<HTMLInputElement>
//   nombreEmpresa: string
// }

const FormRegistro = ({handleSubmitRegistro, handleChangeRegistro, nombreEmpresa}) => {

    

  return (
    <form onSubmit={handleSubmitRegistro} className='bg-colorFormularioLogin w-[73%] h-full py-4 px-10 border border-1-gray rounded-md text-tamañoLetra'>
              <header className='w-full h-[7%] grid place-content-center  text-white font-semibold text-base'>
                Registro
              </header>
              <main className='h-[82%] grid grid-rows-9'>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Primer Nombre</label>
                  <input onChange={handleChangeRegistro} name='primerNombre' className=' rounded h-9 pl-3 bg-gray-100 border border-gray-300' type="text" placeholder='Jorge'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Segundo Nombre</label>
                  <input onChange={handleChangeRegistro} name='segundoNombre' className=' rounded h-9 pl-3 bg-gray-100 border border-gray-300' type="text" placeholder='Luis'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Apellido Paterno</label>
                  <input onChange={handleChangeRegistro} name='apellidoPaterno' className=' rounded h-9 pl-3 bg-gray-100 border border-gray-300' type="text" placeholder='Diaz'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Apellido Materno</label>
                  <input onChange={handleChangeRegistro} name='apellidoMaterno' className=' rounded h-9 pl-3 bg-gray-100 border border-gray-300' type="text" placeholder='Lopez'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5'  htmlFor="">Email de empresa</label>
                  <input onChange={handleChangeRegistro} name='email' className='rounded h-9 pl-3 bg-gray-100' type="email" placeholder='Jorge@gmail.com'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5'  htmlFor="">Rut Personal (Con puntos y guion) </label>
                  <input onChange={handleChangeRegistro} name='rutPersonal' className='rounded h-9 pl-3 bg-gray-100' type="text" placeholder='20.000.000-0'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5'  htmlFor="">Rut Empresa (Con puntos y guion) </label>
                  <input onChange={handleChangeRegistro} name='rutEmpresa' className='rounded h-9 pl-3 bg-gray-100' type="text" placeholder='70.000.000-0'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Password</label>
                  <input onChange={handleChangeRegistro} name='password' className='rounded h-9 pl-3 bg-gray-100' type="password" placeholder='*************'/>
                </div>
                <div className='grid'>
                  <label className='h-1 text-white pb-5' htmlFor="">Repetir Password</label>
                  <input onChange={handleChangeRegistro} name='confirmPassword' className='rounded h-9 pl-3 bg-gray-100' type="password" placeholder='*************'/>
                </div>
              </main>
              <div className='h-[10%] w-ful grid items-center '>
                <button   className='h-[60%]  rounded cursor-pointer bg-[#00ff08] hover:bg-[#35e83b]  hover:duration-300 w-full text-white font-bold '>
                  Ingresar
                </button>
              </div>
          </form>
  )
}

export default FormRegistro