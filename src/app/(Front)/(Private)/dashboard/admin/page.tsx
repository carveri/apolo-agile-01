'use client'

import { useState, useEffect} from "react";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";
import { postData } from "@/app/(Front)/React/Fetch/postData";
import { getData } from "@/app/(Front)/React/Fetch/getData";
import Image from "next/image";

// IMAGENES
import flechaAbajo from "./../../../React/Assets/Icons/flechaAbajo4.png";
import { getDataLista } from "@/app/(Front)/React/Fetch/getDataLista";

const page = () => {

    const router = useRouter()

    const [activoCargo, setActivoCargo] = useState(false)
    const [activoEquipo, setActivoEquipo] = useState(false)

    // estados de los inputs
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [rutPersonal, setRutPersonal] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [cargoI, setCargoI] = useState('Admin')
    const [equipoI, setEquipoI] = useState('AdminsTeam')

    // traer datos de la db del cargo y el equipo
    const [cargos, setCargos] = useState([])
    const [equipos, setEquipos] = useState([])
    const [cargoId, setCargoId] = useState('cc3aa0df-1698-47fe-a417-22cec1e46aff')
    const [equipoId, setEquipoId] = useState('8045c1d8-1162-4537-9dac-2e89b42a8100')


    //const [activoArea, setActivoArea] = useState(false)

    useEffect(()=>{
        const traerCargos = async()=>{
            const ruta = 'cargo'
            const res = await getData({ruta})
            setCargos(res)
        }
        const traerEquipos = async()=>{
            const ruta = 'equipo'
            const res = await getData({ruta})
            setEquipos(res)
        }
        traerCargos()
        traerEquipos()
    }, [])

     console.log(cargos);
    // console.log(equipos);
    
    

    

    const handleClickCargo = ()=>{
        setActivoCargo(!activoCargo)
    }

    const handleClickEquipo = ()=>{
        setActivoEquipo(!activoEquipo)
    }


    const handleClickListaAdmin1 =(id, nombreCargo)=>{
        setCargoId(id)
        // const traerEquipos = async()=>{
        //     const ruta = 'equipo'
        //     const url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
        //     const res = await getDataLista({ruta, url})
        //     setEquipos(res)
        // }
        // traerEquipos()
        setCargoI(nombreCargo)
        setActivoCargo(false)
    }

    console.log('equi:', equipos);
    

    const handleClickListaAdmin2 =(id, nombreEquipo)=>{
        setEquipoId(id)
        setEquipoI(nombreEquipo)
        setActivoEquipo(false)
    }
    

    const hanldeChangeNewUser =(e)=>{
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
        else if(e.target.name === 'confirmarPassword'){
            setConfirmPassword(e.target.value)
        }
        else {
            console.log('sd');
            
        }
    }

    const createdAt = format(new Date(), 'dd/MM/yyyy')
    const horaAt = format(new Date(), 'H:mm')
    const empresaId = "092cee92-4e22-4270-8aa5-1ba69194cf39 " 

    //console.log('cargos:', cargos);
    
    

    const handleSubmitNewUserAdmin = (e)=>{
        e.preventDefault()
        const ruta = 'user'
        const data = {primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, rutPersonal, password, confirmPassword, createdAt, horaAt, cargoId, empresaId, equipoId}
        console.log('cargoId:', cargoId);
        console.log('empresaId:', empresaId);
        console.log('equipoId:', equipoId);
        
        console.log('data', data);
        //if(password)
        
        if(password !== confirmPassword){
            return alert('Las contraseñas no coinciden')
        }
        if(primerNombre === '' ||segundoNombre ===''|| apellidoPaterno === ''|| apellidoMaterno ===''|| email === '' || rutPersonal ==='' || password ==='' || confirmPassword === ''|| createdAt === ''|| horaAt === ''|| cargoId === ''|| empresaId === null || equipoId === ''  ){
            return alert('Es necesario rellenar todos los campos')
        }
        postData({ruta, data})
        signOut()
        router.push('/api/auth/login')

    }
    
    

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[7%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Admin {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[93%] '>
            <form onSubmit={handleSubmitNewUserAdmin} action="" className=' w-full h-full'>

                <div className='flex h-[80%]   place-content-center  mt-8  px-56 gap-x-10'>
                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white px-4 mr-10 pt-5  rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Datos Personales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                        <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Primer Nombre:</label>
                                <input name="primerNombre" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="Juan"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Segundo Nombre:</label>
                                <input name="segundoNombre" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="Luis"/>
                            </article>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Apellido Paterno:</label>
                                <input name="apellidoPaterno" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="Gomez"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Apellido Materno:</label>
                                <input name="apellidoMaterno" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200  grid content-center" type="text" placeholder="Robles"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Rut Usuario (Con puntos y guion):</label>
                                <input name="rutPersonal" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="30.000.000-0"/>
                            </article>    
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5 px-8 rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl ' >
                            Datos Laborales
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-2 '>
                            
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Cargo Usuario:</label>
                                    <div className=" pl-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[150px]  " onClick={handleClickCargo}>
                                        <div className=" w-56 pt-2">
                                            {cargoI}
                                        </div> 
                                        <div className="pt-2">
                                            <Image
                                                src={flechaAbajo}
                                                alt="a"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                    {activoCargo &&
                                        <div className='mt-[67px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                            
                                            {cargos.map((el)=>{
                                                    const {nombreCargo, id} = el
                                                    return  (<div onClick={()=>handleClickListaAdmin1(id, nombreCargo)} className='w-[405px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreCargo}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Equipo Usuario:</label>
                                {/* <div className="border border-gray-200 pl-3 pt-2">
                                    {equipos?.nombreEquipo}
                                </div> */}
                                    <div className=" pl-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[150px]  " onClick={handleClickEquipo}>
                                        <div className=" w-56 pt-2">
                                            {equipoI}
                                        </div> 
                                        <div className="pt-2">
                                            <Image
                                                src={flechaAbajo}
                                                alt="a"
                                                width={20}
                                                height={20}
                                            />
                                        </div>

                                    </div>
                                    {activoEquipo &&
                                        <div className='mt-[158px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                            
                                            {equipos.map((el)=>{
                                                    const {nombreEquipo, id} = el
                                                    return  (<div onClick={()=>handleClickListaAdmin2(id, nombreEquipo)} className='w-[405px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreEquipo}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                            }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Email Empresa:</label>
                                <input name="email" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="user@gmail.com"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Password:</label>
                                <input name="password" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="****************"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Confirmar Password (Con puntos y guion):</label>
                                <input name="confirmarPassword" onChange={hanldeChangeNewUser} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="****************"/>
                            </article>
                            
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  mt-2'>
                    <button className='w-[20%] h-[90%] bg-violet-500 hover:bg-violet-600 text-white rounded font-semibold'>
                        Guardar
                    </button>
                </div>
            </form>
        </main>
        </section>
        
    </div>
)}

export default page