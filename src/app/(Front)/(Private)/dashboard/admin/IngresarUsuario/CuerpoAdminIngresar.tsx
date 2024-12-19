'use client'
import { useRouter } from "next/navigation";
import { dataExterno } from "../Utils/dataExterno";

import Image from "next/image";
import { format } from "date-fns";

const CuerpoAdminIngresar = () => {

  const router = useRouter()

  const handleClickFormManual =()=>{
    router.push('/dashboard/admin/IngresarUsuario')
  }

  return (
    <main className="w-full h-full text-tamañoLetra">
      <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
                     Ingresar Nuevo Usuario
                  </div>
                  <header className='w-full h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta'>
                    <div className='pr-3 '>
                      Fecha Actual
                    </div>
                    <div>
                      {format(new Date(), 'dd/MM/yyyy')}
                    </div>
                  </header>
      <div className="w-full h-[70%] grid grid-cols-2 place-items-center">
        <section className="w-[80%] h-[50%]  rounded">
          <header className="w-full h-8 grid place-content-center font-semibold  text-gray-500">Importar Usuarios</header>
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 py-5 gap-3">
            {dataExterno.map((el)=>{
              return <div  className="grid place-items-center border border-gray-100 rounded cursor-pointer hover:shadow-xl">
                <Image
                  className=""
                  src={el.logoExterno}
                  alt="asa"
                  width={40}
                  height={40}
                />
                <div className="text-center">
                  <input type="file" accept=".csv"/>
                </div>
                
              </div>
            })}
          </div>
          
        </section>
        <section className="w-[50%] h-[20%]  rounded shadow-md grid grid-items-center">
          <div className='w-full h-8 grid place-items-center font-semibold  text-gray-500'>
            Ingresar Usuarios Manualmente
          </div>
          <div className="grid place-items-center">
            <button onClick={handleClickFormManual} className=" bg-colorBotonPrincipal text-white py-2 px-8 rounded font-semibold">
              Formulario
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default CuerpoAdminIngresar