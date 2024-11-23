'use client'

import SelectFormulario from './SelectFormulario'
import InputFormulario from './InputFormulario'
import { agregarUsuario } from "@/app/actions/aAdmin"
import { useState, useEffect } from "react";
import { getData } from '../../Fetch/getData';
import Image from 'next/image';

import flechaAbajo from "./../../../React/Assets/Icons/flechaAbajo4.png";
import { getDataLista } from '../../Fetch/getDataLista';


const Formulario = () => {

    const [parametro1, setParametro1] = useState('-')
    const [parametros1, setParametros1] = useState([])
    const [parametros1Id, setParametros1Id] = useState('')
    
    const [parametro2, setParametro2] = useState('-')
    const [parametros2, setParametros2] = useState([])
    const [parametros2Id, setParametros2Id] = useState('')

    const [parametro3, setParametro3] = useState('-')
    const [parametros3, setParametros3] = useState([])
    const [parametros3Id, setParametros3Id] = useState('')


    // estado de activacion
    const [activoParametro1, setActivoParametro1] = useState(false)
    const [activoParametro2, setActivoParametro2] = useState(false)
    const [activoParametro3, setActivoParametro3] = useState(false)

    // traer datos de los departamentos
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'departamento'
            const res = await getData({ruta})
            setParametros1(res)
            
        }    
        traerParametros()
        
    }, [])

    // traer datos de los cargos
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'cargoPorDepartamento'
            const url = parametros1Id
            const res = await getDataLista({ruta, url})
            setParametros2(res)
        }    
        traerParametros()
    }, [parametro1])

    // traer datos de los equipos
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'equipo'
            const res = await getData({ruta})
            setParametros3(res)
            
        }    
        traerParametros()
        
    }, [])

    console.log('equipos:', parametros3);

    const filtrarEquiposDevs =()=>{
        const res = parametros3?.filter((el)=> el?.nombreEquipo.at(0) === 'D')
        return res
    }


    console.log('filtro:', filtrarEquiposDevs());
    
    

 

    // AREA
    const handleClickSelectForm =({id,nombreDepartamento})=>{
        setParametros1Id(id)
        
        setParametro1(nombreDepartamento)
        setActivoParametro1(false)
    }

    const handleClickParam1 = ()=>{
        setActivoParametro1(!activoParametro1)
    }
    
    
    // CARGO
    const handleClickSelectForm2 =({id,nombreCargo})=>{
        setParametros2Id(id)
        
        setParametro2(nombreCargo)
        setActivoParametro2(false)
    }

    const handleClickParam2 = ()=>{
        setActivoParametro2(!activoParametro2)
    }

    // EQUIPO 
    const handleClickSelectForm3 =({id, nombreEquipo})=>{
        setParametros3Id(id)
        
        setParametro3(nombreEquipo)
        setActivoParametro3(false)
    }

    const handleClickParam3 = ()=>{
        setActivoParametro3(!activoParametro3)
    }
    

    console.log('iddepto:', parametros1Id);
    console.log('idCargo:', parametros2Id);
    console.log('deptos::', parametros1);
    console.log('cargos::', parametros2);

    console.log('nombredpro:', parametro1);
    
    
    //agregarUsuario('perroo')
    

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[90%] bg-gray-50 rounded '>
            <header className='w-full h-[3%] mb-14 pl-4 -mt-5'>
                Dashboard Cliente {'>'} Admin {'>'} Agregar Usuario
            </header>
            <main className='w-full h-[99%] -mt-6'>
            <form  action={agregarUsuario} className=' w-full h-[700px]'>

                <div className='flex h-[95%]   place-content-center  mt-8  px-72 gap-x-10 '>
                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white px-4 mr-10 pt-5  rounded shadow-lg'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Datos Personales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                            {/* PRIMER NOMBRE */}
                            <InputFormulario
                                texto = 'Primer Nombre:'
                                nombre = 'primerNombre'
                                tipo = 'text'
                                placeholder = 'Pedro'
                            />
                            {/* SEGUNDO NOMBRE */}
                            <InputFormulario
                                texto = 'Segundo Nombre:'
                                nombre = 'segundoNombre'
                                tipo = 'text'
                                placeholder = 'Raul'
                            />
                            
                            {/* AP PATERNO */}
                            <InputFormulario
                                texto = 'Apellido Paterno:'
                                nombre = 'apellidoPaterno'
                                tipo = 'text'
                                placeholder = 'Ruiz'
                            />
                            {/* AP MATERNO */}
                            <InputFormulario
                                texto = 'Apellido Materno:'
                                nombre = 'apellidoMaterno'
                                tipo = 'text'
                                placeholder = 'Cortes'
                            />
                            {/* RUT PERSONAL */}
                            <InputFormulario
                                texto = 'Rut Personal:'
                                nombre = 'rutPersonal'
                                tipo = 'text'
                                placeholder = '11.111.111-1'
                            />    
                        </div>
                        
                    </section>




                    <section className='w-[46%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5 px-8 rounded shadow-lg'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl ' >
                            Datos Laborales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-6 px-8 mt-2 '>
                          









                            {/* LISTA DE Departamento */}
                            <article className='grid grid-rows-2 pb-3 '>
                        <label  htmlFor="">Nombre Departamento</label>
                            <div  className=" pl-3 pr-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam1}>
                        <div className=" w-96 pt-2">
                            {parametro1}
                        </div> 
                        {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                        <div className="pt-2">
                            <Image
                                src={flechaAbajo}
                                alt="a"
                                width={20}
                                height={20}
                            />
                            </div>
                        </div>
                        {activoParametro1 &&
                            <div className={` mt-[75px] z-50  w-[420px] absolute bg-yellow-300 left-3/5 max-h-[120px] overflow-auto `}>
                                            
                                {parametros1.map((el)=>{
                                    const {id, nombreDepartamento} = el
                                        return  (<button name='departamentoId' onClick={()=>handleClickSelectForm({id, nombreDepartamento})} className='w-[405px]  text-start cursor-pointer h-10 bg-white  hover:bg-violet-200  pl-4' key={id}>
                                            {nombreDepartamento}
                                                </button>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>




                            {/* LISTA DE CARGO */}
                            {parametro1 !== '-' &&
                                <article className='grid grid-rows-2 pb-3 '>
                                <label  htmlFor="">Nombre Cargo</label>
                                    <div  className=" pl-3 pr-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam2}>
                                <div className=" w-96 pt-2 ">
                                    {parametro2}
                                </div> 
                                {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                                <div className="pt-2">
                                    <Image
                                        src={flechaAbajo}
                                        alt="a"
                                        width={20}
                                        height={20}
                                    />
                                    </div>
                                </div>
                                {activoParametro2 &&
                                    <div className={` mt-[75px] w-[420px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                                    
                                        {parametros2?.map((el)=>{
                                            const {id, nombreCargo} = el
                                                return  (<button name='cargoId' onClick={()=>handleClickSelectForm2({id, nombreCargo})} className='w-[405px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                                    {nombreCargo}
                                                        </button>)
                                                        })}
                                                </div>
                                            
                                            }
                                    </article>
                            
                            }

                            {/* LISTA DE Equipos */}
                            {(parametro1 === 'Backend' || 'Frontend' || 'Database' || 'Diseño' || 'Quality Assurance' || 'SysAdmin') &&
                                <article className='grid grid-rows-2 pb-3 '>
                                <label  htmlFor="">Nombre Equipo</label>
                                    <div  className=" pl-3 pr-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam3}>
                                <div className=" w-96 pt-2">
                                    {parametro3}
                                </div> 
                                {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                                <div className="pt-2">
                                    <Image
                                        src={flechaAbajo}
                                        alt="a"
                                        width={20}
                                        height={20}
                                    />
                                    </div>
                                </div>
                                {activoParametro3 &&
                                    <div className={` mt-[75px] w-[420px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                                    
                                        {filtrarEquiposDevs()?.map((el)=>{
                                            const {id, nombreEquipo} = el
                                                return  (<button name='equipoId' onClick={()=>handleClickSelectForm3({id, nombreEquipo})} className='w-[405px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                                    {nombreEquipo}
                                                        </button>)
                                                        })}
                                                </div>
                                            
                                            }
                                    </article>
                            }
                            













                            {/* EMAIL */}
                            <InputFormulario
                                texto = 'Email:'
                                nombre = 'email'
                                tipo = 'text'
                                placeholder = 'juanitoxx@gmail.com'
                            />
                            {/* PASSWORD */}
                            <InputFormulario
                                texto = 'Password:'
                                nombre = 'password'
                                tipo = 'text'
                                placeholder = '************'
                            />
                            {/* CONFIRM PASSWORD */}
                            <InputFormulario
                                texto = 'Confirmar Password:'
                                nombre = 'confirmPassword'
                                tipo = 'text'
                                placeholder = '************'
                             />
                            
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  '>
                    <button className='w-[20%] h-[100%] bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal text-white rounded font-semibold'>
                        Guardar
                    </button>
                </div>
            </form>
        </main>
        </section>
        
    </div>
  )
}

export default Formulario