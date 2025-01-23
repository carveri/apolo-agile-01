'use client'
import { useState, useEffect } from "react";
import { getData } from "../../Fetch/getData";
import { getDataLista } from "../../Fetch/getDataLista";
import { postData } from "../../Fetch/postData";
import { IFormularioClientePeticion } from "@/app/Interfaces/IAgregarTareas";

import xlsx from "node-xlsx";


const FormularioClientePeticion = ({id, areaId, email}:IFormularioClientePeticion) => {
  
    const [activoCargo, setActivoCargo] = useState(false)
    const [activoSolicitante, setActivoSolicitante] = useState(false)
    const [activoCaracter, setActivoCaracter] = useState(false)
    const [activoProblema, setActivoProblema] = useState(false)

    // estados de los inputs 
    const [nombreHistoria, setNombreHistoria] = useState('')
    const [presupuestoHistoria, setPresupuestoHistoria] = useState(0)
    const [tiempoHistoria, setTiempoHistoria] = useState(0)
    const [detalleHistoria, setDetalleHistoria] = useState('')
    const [quiero, setQuiero] = useState('')
    const [como, setComo] = useState('')
    const [para, setPara] = useState('')
    const [archivoA, setArchivoA] = useState('')


    const [cargo, setCargo] = useState({})
    const [user, setUser] = useState([])
    const [caracter, setCaracter] = useState([])


    // inicial
    
    const [caracterI, setCaracterI] = useState('Crecimiento')

    // ids
    const [caracterId, setCaracterId] = useState('')
    const [puntoHistoria, setPuntoHistoria] = useState(12)

    useEffect(()=>{
        
        
        const traerCargo2 =async()=>{
            const ruta = 'cargoPorUsuario'
            const url = id
            const res = await getDataLista({ruta, url})
            setCargo(res)
        }
        const traerUser =async()=>{
            const ruta = 'user'
            const res = await getData({ruta})
            setUser(res)
        }
        const traerCaracter =async()=>{
            const ruta = 'caracter'
            const res = await getData({ruta})
            setCaracter(res)
        }
        traerCargo2()
        traerUser()
        traerCaracter()
        

    }, [])


    const handleClickCargo = ()=>{
        setActivoCargo(!activoCargo)
    }

    const handleClickSolicitante = ()=>{
        setActivoSolicitante(!activoSolicitante)
    }


    // detalles
    const handleClickCaracter =()=>{
        setActivoCaracter(!activoCaracter)
    }

    const handleClickProblema =()=>{
        setActivoProblema(!activoProblema)
    }

    const handleChangeCliente =(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'nombreHistoria'){
            setNombreHistoria(e.target.value)
        }
        else if(e.target.name === 'quiero'){
            setQuiero(e.target.value)
        }
        else if(e.target.name === 'como'){
            setComo(e.target.value)
        }
        else if(e.target.name === 'para'){
            setPara(e.target.value)
        }
        
        else if(e.target.name === 'presupuestoHistoria'){
            setPresupuestoHistoria(e.target.valueAsNumber)
        }
        else if(e.target.name === 'tiempoHistoria'){
            setTiempoHistoria(e.target.valueAsNumber)
        }
        else if(e.target.name === 'detalleHistoria'){
            setDetalleHistoria(e.target.value)
        }
        else if(e.target.name === 'puntoDeHistoria'){
            setPuntoHistoria(e.target.valueAsNumber)
        }
        else if(e.target.name === 'archivoApoyo'){
            setArchivoA(e.target.value)
        }
        else {
            console.log('sd');
            
        }
        
    }


    const productBacklogId = 'b7617060-cc79-472b-8e84-8763beb787a0'
    const mediumBacklogId = 'b2f58e30-19ca-437b-8875-8470435b65e0'



    const handleClickCliente4 =(id:string, nombreCaracter:string)=>{
        setCaracterId(id)
        setCaracterI(nombreCaracter)
        setActivoCaracter(false)
    }


    const handleSumbitCliente =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()    
        const userId = id
        const data = { nombreHistoria, mediumBacklogId, quiero, para, como, presupuestoHistoria, puntoHistoria, tiempoHistoria,  detalleHistoria, productBacklogId, caracterId, userId}
        //console.log(data);
        const ruta = 'historia'
        postData({ruta, data})
        alert('Se guardo correctamente la historia')
        //console.log('as', archivoA);
        
    }

 
    return (
    <form onSubmit={handleSumbitCliente} action="" className=' w-full h-full '>

                <div className='flex h-[85%]  place-content-center  mt-8 px-80 gap-x-16 '>
                    <section className='w-[48%] h-[95%] border border-gray-200 px-4 mr-10 pt-5 bg-white rounded shadow-lg'>
                        <header className='w-full h-[10%]  grid place-content-center text-base'>
                            Información de la petición 
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-4'>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nombre de la petición (Historia de usuario):</label>
                                    
                                    
                                <input name="nombreHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center "  type="text" placeholder="Agregar calendario. "/>
                            </article>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Quiero:</label>
                                    
                                    
                                <input name="quiero" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="Agregar un calendario como herramienta de filtro."/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Cómo:</label>
                                    
                                    
                                <input name="como" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="De color azul, en español."/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Para:</label>
                                    
                                    
                                <input name="para" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="text" placeholder="Filtrar vacaciones de empleados entre dos fechas."/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Archivo de apoyo:</label>
                                    
                                    
                                <input name="archivoApoyo"  onChange={handleChangeCliente} className="file:h-9 file:px-3 file:rounded  file:text-tamañoLetraChica font-semibold text-tamañoLetraChica file:border-none   file:bg-colorBotonPrincipal file:text-white text-colorTextoNavbar  file:cursor-pointer " accept=".jpg, .png, .webp" type="file" />
                            </article>
                            
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5  px-8 shadow-xl'>
                        <header className='w-full h-[10%]  grid place-content-center text-base pb-2' >
                            Detalles de la petición
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-2 '>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Punto de Historia:</label>
                                    
                                    
                                <input name="puntoDeHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="number" placeholder="10"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Caracter de la petición:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-gray-50 border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickCaracter}>
                                        {caracterI}
                                    </div>
                                    {activoCaracter &&
                                        <div className='mt-[162px] z-50 absolute top-60 left-3/5 max-h-20 overflow-auto '>
                                            
                                            {caracter.map((el)=>{
                                                    const {nombreCaracter, id} = el
                                                    return  (<div onClick={()=>handleClickCliente4(id, nombreCaracter)} className='w-[300px] cursor-pointer ml-1 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={id}>
                                                        {nombreCaracter}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Monto del presupuesto de la petición (CLP):</label>
                                    
                                    
                                <input name="presupuestoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="number" placeholder="100.000"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Tiempo estimado de la petición (dias):</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="number" placeholder="7"/>
                            </article>
                            <article className='grid  pb-3  h-28'>
                                <label className="h-7 "  htmlFor="">Detalle de la petición (Criterios de Aceptación):</label>
                                    
                                    
                                <input name="detalleHistoria" onChange={handleChangeCliente} className="pl-3  h-24 rounded-md bg-white border border-gray-200 cursor-pointer  " type="text" placeholder="Se requiere un calendario de color azul..."/>
                            </article>
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  mt-2'>
                    <button className='w-[20%] h-[90%] bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal text-white rounded font-semibold'>
                        Guardar
                    </button>
                </div>
            </form>
  )
}

export default FormularioClientePeticion