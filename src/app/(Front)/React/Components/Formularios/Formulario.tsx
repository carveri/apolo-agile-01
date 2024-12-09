'use client'

import InputFormulario from './InputFormulario'
import { useState, useEffect } from "react";
import { getData } from '../../Fetch/getData';
import Image from 'next/image';

import flechaAbajo from "./../../../React/Assets/Icons/flechaAbajo4.png";
import { getDataLista } from '../../Fetch/getDataLista';
import ModalAviso from '../ModalAviso/ModalAviso';
import { IId } from '@/app/Interfaces/IUsers';
import { IEmpresa, IParametro3, ISelectForm, ISelectForm2, ISelectForm3 } from '@/app/Interfaces/IformAdmin';
import { postData } from '../../Fetch/postData';




const Formulario = ({id}:IId) => {
    // ACTIVO MODAL
    const [activoModal, setActivoModal] = useState(false)

    // ESTADOS DE ONCHANGE
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [rutPersonal, setRutPersonal] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    const [parametro1, setParametro1] = useState('-')
    const [parametros1, setParametros1] = useState([])
    const [parametros1Id, setParametros1Id] = useState('sdd')
    
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

    // estado traer las cosas de la empresa con el id del useer
    const [empresa, setEmpresa] = useState<IEmpresa[]>([])
    

    // traer datos de los departamentos
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'departamento'
            const res = await getData({ruta})
            setParametros1(res)
            
        }    
        traerParametros()
        //location.reload();
    }, []);
 

    // traer datos de los cargos
        useEffect(()=>{
            const traerParametros = async()=>{
                const ruta = 'cargoPorDepartamento'
                const url = parametros1Id
                const res = await getDataLista({ruta, url})
                setParametros2(res)
            }    
            traerParametros()
        }, [parametros1Id])
    

    // traer datos de los equipos
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'equipo'
            const res = await getData({ruta})
            setParametros3(res)
            
        }    
        traerParametros()
        
    }, [])

    // traer el id de la empresa con el id del admin
    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'empresaPorUser'
            const url = id
            const res = await getDataLista({ruta, url})
            setEmpresa(res)
            
        }    
        traerParametros()
        
    }, [])

    

    // DEPARTAMENTO
    const handleClickSelectForm =({id,nombreDepartamento}:ISelectForm)=>{
        setParametros1Id(id)
        
        setParametro1(nombreDepartamento)
        // traer cargos
        
        setActivoParametro1(false)
    }

    const handleClickParam1 = ()=>{
        
        setActivoParametro1(!activoParametro1)
    }

    
    // CARGO
    const handleClickSelectForm2 =({id,nombreCargo}:ISelectForm2)=>{
        setParametros2Id(id)
        
        setParametro2(nombreCargo)
        setActivoParametro2(false)
    }

    const handleClickParam2 = ()=>{
        setActivoParametro2(!activoParametro2)
    }

    // EQUIPO 
    const handleClickSelectForm3 =({id, nombreEquipo}:ISelectForm3)=>{
        setParametros3Id(id)
        
        setParametro3(nombreEquipo)
        setActivoParametro3(false)
    }

    const handleClickParam3 = ()=>{
        setActivoParametro3(!activoParametro3)
    }

    //console.log('equipos:', parametros3);

    const filtrarEquiposDevs =(param:IParametro3[])=>{
        const res = param?.filter((el)=> el?.nombreEquipo.at(0) === 'D')
        return res
    }

    //console.log('empresa:', empresa);
    

    // CAMBIAR ESTADO DEL ONCHANGE
    const handleChangeAdmin =(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'primerNombre'){
            setPrimerNombre(e.target.value)
        }
        else if(e.target.name === 'segundoNombre'){
            setSegundoNombre(e.target.value)
        }
        else if(e.target.name === 'apellidoPaterno'){
            setApellidoPaterno(e.target.value)
        }
        else if(e.target.name === 'apellidoMaterno'){
            setApellidoMaterno(e.target.value)
        }
        else if(e.target.name === 'rutPersonal'){
            setRutPersonal(e.target.value)
        }
        else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
        else if(e.target.name === 'confirmPassword'){
            setConfirmPassword(e.target.value)
        }
    }
    
    //console.log('idempresaHIjo:', empresa.at(0)?.id);
    

 
    // MENSAJES DE MODAL
    // const mensajePositivo = 'El Usuario se agrego correctamente'
    // const mensajeNegativo = 'Ocurrio un error y el usuario no guardo!'

    const handleSubmitAdmin =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data = {
            primerNombre, 
            segundoNombre, 
            apellidoPaterno, 
            apellidoMaterno, 
            rutPersonal, 
            empresaId: empresa.at(0)?.id,
            cargoId: parametros2Id,
            equipoId: parametros3Id ? parametros3Id : '1c3eb8cf-684c-49d4-90da-6698060cbe54',
            email, 
            password, 
            confirmPassword
        }
            console.log(data);
            const ruta = 'user'
            postData({ruta, data})
            alert('EL usuario se agrego correctamente!')

            

            
        
    }
 
    

  return (
    <div className='w-full h-full bg-white grid place-items-center'  >
        <section className='w-[100%] h-[90%] bg-gray-50 rounded '>
            
            <main className='w-full h-[99%] -mt-10'>
            <form  onSubmit={handleSubmitAdmin} className=' w-full h-[700px]'>

                <div className='flex h-[95%]   place-content-center  mt-8  px-72 gap-x-10 '>
                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white px-4 mr-10 pt-5  rounded shadow-lg'>
                        <header className='w-full h-[10%]  grid place-content-center text-base'>
                            Datos Personales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                            {/* PRIMER NOMBRE */}
                            <InputFormulario
                                texto = 'Primer Nombre:'
                                nombre = 'primerNombre'
                                tipo = 'text'
                                placeholder = 'Pedro'
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            {/* SEGUNDO NOMBRE */}
                            <InputFormulario
                                texto = 'Segundo Nombre:'
                                nombre = 'segundoNombre'
                                tipo = 'text'
                                placeholder = 'Raul'
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            
                            {/* AP PATERNO */}
                            <InputFormulario
                                texto = 'Apellido Paterno:'
                                nombre = 'apellidoPaterno'
                                tipo = 'text'
                                placeholder = 'Ruiz'
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            {/* AP MATERNO */}
                            <InputFormulario
                                texto = 'Apellido Materno:'
                                nombre = 'apellidoMaterno'
                                tipo = 'text'
                                placeholder = 'Cortes'
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            {/* RUT PERSONAL */}
                            <InputFormulario
                                texto = 'Rut Personal (Con puntos y guion):'
                                nombre = 'rutPersonal'
                                tipo = 'text'
                                placeholder = '11.111.111-1'
                                handleChangeAdmin={handleChangeAdmin}
                            />    
                        </div>
                        
                    </section>




                    <section className='w-[46%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5 px-8 rounded shadow-lg  '>
                        <header className='w-full h-[10%]  grid place-content-center  text-base' >
                            Datos Laborales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-6 px-8 mt-2 '>
     
                            {/* LISTA DE Departamento */}
                        <article className='grid grid-rows-2  pb-3 '>
                            <label  htmlFor="">Nombre Departamento</label>
                            <div  className=" pl-3 pr-3 rounded-md w-[380px] border  border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam1}>
                                <div className=" w-[350px] pt-2">
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
                                <div className={` mt-[75px] z-50  w-[380px] absolute  left-3/5 max-h-[120px] overflow-auto `}>
                                                
                                    {parametros1.map((el)=>{
                                        const {id, nombreDepartamento} = el
                                            return  (<button name='departamentoId' onClick={()=>handleClickSelectForm({id, nombreDepartamento})} className='w-[365px]  text-start cursor-pointer h-10 bg-white  hover:bg-violet-200  pl-4' key={id}>
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
                                <div  className=" pl-3 pr-3 rounded-md w-[380px] border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam2}>
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
                                    <div className={` mt-[75px] w-[380px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                                    
                                        {parametros2?.map((el)=>{
                                            const {id, nombreCargo} = el
                                                return  (<button name='cargoId' onClick={()=>handleClickSelectForm2({id, nombreCargo})} className='w-[365px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                                    {nombreCargo}
                                                        </button>)
                                                        })}
                                                </div>
                                            
                                            }
                                    </article>
                            
                            }

                            {/* LISTA DE Equipos */}
                            {(parametro1 === 'Backend' || parametro1 === 'Frontend' || parametro1 ==='Database' || parametro1 ==='Diseño' || parametro1 ==='Quality Assurance' || parametro1 ==='SysAdmin') &&
                                <article className='grid grid-rows-2 pb-3 '>
                                <label  htmlFor="">Nombre Equipo</label>
                                <div  className=" pl-3 pr-3 rounded-md w-[380px]  border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam3}>
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
                                    <div className={` mt-[75px] w-[380px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                                    
                                        {filtrarEquiposDevs(parametros3)?.map((el)=>{
                                            const {id, nombreEquipo} = el
                                                return  (<button name='equipoId' onClick={()=>handleClickSelectForm3({id, nombreEquipo})} className='w-[365px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
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
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            {/* PASSWORD */}
                            <InputFormulario
                                texto = 'Password:'
                                nombre = 'password'
                                tipo = 'text'
                                placeholder = '************'
                                handleChangeAdmin={handleChangeAdmin}
                            />
                            {/* CONFIRM PASSWORD */}
                            <InputFormulario
                                texto = 'Confirmar Password:'
                                nombre = 'confirmPassword'
                                tipo = 'text'
                                placeholder = '************'
                                handleChangeAdmin={handleChangeAdmin}
                             />
                            
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  '>
                    <button className='w-[20%] h-[100%] bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal text-white rounded font-semibold'>
                        Guardar
                    </button>
                </div>
                <ModalAviso 
                    isOpen = {activoModal}
                    onClose = {()=>setActivoModal(false)}
                    
                />
            </form>
        </main>
        </section>
        
    </div>
  )
}

export default Formulario