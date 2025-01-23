'use client'
import { useRouter } from "next/navigation";
import { dataExterno } from "../Utils/dataExterno";

import Image from "next/image";
import { format } from "date-fns";

import iconoAgregarManual from "../../../../React/Assets/Icons/iconoAgregarManual.webp";
import { useState } from "react";

const CuerpoAdminIngresar = () => {

  const router = useRouter()

  const [docume, setDocume] = useState('')

  // file
  const [excel, setExcel] = useState()
  const [csv, setCsv] = useState()
  const [drive, setDrive] = useState()
  const [onedrive, setOnedrive] = useState()

  const handleClickFormManual =()=>{
    router.push('/dashboard/admin/IngresarUsuario')
  }

  const handleChangeInputFile =(e)=>{
    if(e.target.name === 'Microsoft Excel'){
      
      
      setExcel(e.target.files[0])
      
    }
    else if(e.target.name === 'Archivo Csv'){
      //console.log('soy csv');
      setCsv(e.target.files[0])
    }
    else if(e.target.name === 'Google Drive'){
      //console.log('soy drive');
      setDrive(e.target.files[0])
    }
    else if(e.target.name === 'Microsoft OneDrive'){
      //console.log('soy onedrive');
      setOnedrive(e.target.files[0])
    }
    else {
      console.log('nada');
    }
  }

  // console.log('excel;', excel);
  // console.log('csv;', csv);


  const handleClickGauardarExcel = async(e)=>{
    e.preventDefault()
    //console.log('guardar excel');

    if (!excel) return;

    try {
      const data = new FormData();
      data.set("file", excel);
     // console.log('data;', data);
      //const rut = 'asa'

      const res = await fetch("/api/userMany", {
        method: "POST",
        body: data,
      });
     // console.log('resultado;', res);

      if (res.ok) {
        console.log("File uploaded successfully");
      }
      alert('TODO BIEN')
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <main className="w-[97%] h-full text-tamañoLetra ml-12">
                  <div className='h-14 w-[95%]   bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
                     Ingresar Nuevo Usuario
                  </div>
                  <header className='w-[95%] h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta'>
                    <div className='pr-3 '>
                      Fecha Actual
                    </div>
                    <div>
                      {format(new Date(), 'dd/MM/yyyy')}
                    </div>
                  </header>
      <div className="w-[97%] h-[90%] grid grid-cols-2 justify-items-center ml-5 ">
        <section className="w-[100%] h-[450px]  rounded mt-10 ">
          <header className="w-full h-8 grid place-content-center  text-gray-700">Importar Usuarios</header>
          <div className="w-full h-full grid  grid-rows-2 grid-cols-2 py-5 gap-9">
            {dataExterno.map((el)=>{
              return <div key={el.id}  className="pb-3 pt-5 grid place-items-center shadow-lg border border-gray-100 rounded cursor-pointer hover:shadow-xl">
                <Image
                  className=""
                  src={el.logoExterno}
                  alt="asa"
                  width={40}
                  height={40}
                />
                <div className="text-xs">
                  {el?.nombreExterno}
                </div>
                <div className="text-center">
                  <input onChange={handleChangeInputFile} name={el?.nombreExterno} type="file"  className=" file:h-8  file:mr-1 file:hover:bg-colorBarraBaja file:px-3 file:rounded flex text-xs file:text-xs font-semibold  file:border-none   file:bg-colorBarraBaja file:text-white text-gray-500  file:cursor-pointer " />
                </div>
                
              </div>
            })}
          </div>
          
        </section>
        <section className="w-[60%] h-[25%]  rounded shadow-md border border-gray-100 grid grid-content-center mt-56 py-5">
          <div className="grid justify-center">
          <Image
              src={iconoAgregarManual}
              alt="as"
              width={45}
              height={45}
            />
          </div>
          <div className='w-full h-8 grid place-items-center   text-gray-700'>
            Ingresar Usuarios Manualmente
          </div>
          <div className="grid place-items-center">
            
            <button onClick={handleClickFormManual} className=" bg-colorBarraBaja text-white py-2 px-8 rounded font-semibold text-xs hover:bg-colorBarraBaja ">
              Ir al Formulario
            </button>
          </div>
        </section>
        {excel &&
          <div className="w-full h-[90%]  grid items-center">
            <button onClick={handleClickGauardarExcel} className="bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal w-full  h-12 text-white rounded font-semibold">
              Guardar
            </button>
          </div>
        }
      </div>
      
    </main>
  )}


export default CuerpoAdminIngresar