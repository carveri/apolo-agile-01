'use client'

import { useState, useEffect } from "react";
import { format } from "date-fns";

import { dataClientes } from '@/app/(Front)/React/Utils/dataClientes'

import React from 'react'
import { dataDeptos } from "@/app/(Front)/React/Utils/dataDeptos";
import { dataCaracter } from "@/app/(Front)/React/Utils/dataCaracter";
import { dataCargo } from "@/app/(Front)/React/Utils/dataCargo";
import { getData } from "@/app/(Front)/React/Fetch/getData";
import { postData } from "@/app/(Front)/React/Fetch/postData";
import { useRouter } from "next/navigation";

const page = () => {

    const router = useRouter()
    const [activoDepto, setActivoDepto] = useState(false)
    const [activoCargo, setActivoCargo] = useState(false)
    const [activoSolicitante, setActivoSolicitante] = useState(false)
    const [activoCaracter, setActivoCaracter] = useState(false)
    const [activoProblema, setActivoProblema] = useState(false)

    // estados de los inputs 
    const [nombreHistoria, setNombreHistoria] = useState('')
    const [presupuestoHistoria, setPresupuestoHistoria] = useState(0)
    const [tiempoHistoria, setTiempoHistoria] = useState(0)
    const [detalleHistoria, setDetalleHistoria] = useState('')

    // traer datos de la db
    //const [departamento, setDepartamento] = useState([])
    const [cargo, setCargo] = useState([])
    const [user, setUser] = useState([])
    const [caracter, setCaracter] = useState([])


    // inicial
    //const [departamentoI, setDepartamentoI] = useState('Stake Holder')
    const [cargoI, setCargoI] = useState('SuperAdmin')
    const [userI, setUserI] = useState('Usuario@gmail.com')
    const [caracterI, setCaracterI] = useState('Crecimiento')

    // ids
    //const [departamentoId, setDepartamentoId] = useState('')
    const [cargoId, setCargoId] = useState('')
    const [userId, setUserId] = useState('')
    const [caracterId, setCaracterId] = useState('')

    // traer la historia desde la db
    const [historias, setHistorias] = useState([])


    useEffect(()=>{
        // const traerDepto =async()=>{
        //     const ruta = 'departamento'
        //     const res = await getData({ruta})
        //     setDepartamento(res)
        // }
        const traerCargo =async()=>{
            const ruta = 'cargo'
            const res = await getData({ruta})
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

        const traerHistoria =async()=>{
            const ruta = 'historia'
            const res = await getData({ruta})
            setHistorias(res)
        }
        //traerDepto()
        traerCargo()
        traerUser()
        traerCaracter()
        traerHistoria()

    }, [])

    //console.log(caracter);
    console.log('sdsd', historias);
    
    


    // const handleClickDepto =()=>{
    //     setActivoDepto(!activoDepto)
    // }

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

    const handleChangeCliente =(e)=>{
        if(e.target.name === 'nombreHistoria'){
            setNombreHistoria(e.target.value)
        }
        
        else if(e.target.name === 'presupuestoHistoria'){
            setPresupuestoHistoria(e.target.value)
        }
        else if(e.target.name === 'tiempoHistoria'){
            setTiempoHistoria(e.target.value)
        }
        else if(e.target.name === 'detalleHistoria'){
            setDetalleHistoria(e.target.value)
        }
        else {
            console.log('sd');
            
        }
        
    }

    const areaId = "b1eaf458-7650-41f6-9852-561011a479a7"
    const productBacklogId = 'a3f75b55-ef27-4fcb-a097-2994bd91cf35'

    const handleClickCliente2 =(id, nombreCargo)=>{
        setCargoId(id)
        setCargoI(nombreCargo)
        setActivoCargo(false)
    }

    const handleClickCliente3 =(id, email)=>{
        setUserId(id)
        setUserI(email)
        setActivoSolicitante(false)
    }

    const handleClickCliente4 =(id, nombreCaracter)=>{
        setCaracterId(id)
        setCaracterI(nombreCaracter)
        setActivoCaracter(false)
    }

    const handleSumbitCliente =(e)=>{
        e.preventDefault()
        console.log('areaId:', areaId);
        console.log('nombreHistoria:', nombreHistoria);
        console.log('productBacklogId', "a3f75b55-ef27-4fcb-a097-2994bd91cf35");
        console.log('caracterId:', caracterId);
        console.log('detalleHistoria:', detalleHistoria);
        console.log('presupuestoHistoria:', presupuestoHistoria);
        console.log('tiempoHistoria:', tiempoHistoria);
        console.log('userId:', userId);
        const data = { nombreHistoria, productBacklogId, caracterId, detalleHistoria, presupuestoHistoria, tiempoHistoria, userId}

        const ruta = 'historia'
        postData({ruta, data})
        alert('Se guardo correctamente la historia')
        
    }

    // const handleClickVerResolucionTarea =()=>{
    //     router.push
    // }

    const dia =format(new Date(), 'dd/MM/yyyy')
    const hora = format(new Date(), 'H:mm')

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            
            <main className='w-full h-[90%]  '>
            <form onSubmit={handleSumbitCliente} action="" className=' w-full h-[690px] '>

                <div className='flex h-[90%] px-3  place-content-center  mt-8 '>
                    <section className='w-[48%] h-[90%] border border-gray-200 px-4 mr-10 pt-5 bg-white rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Discrepancias
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-4 px-8 '>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Discrepancia 1:</label>
                                <div className=' pl-3 py-1 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                    {historias[0]?.discrepancia1}
                                </div>
                                <div className=' pl-3 py-1 rounded-md   bg-gray-50 grid content-center' >
                                    {historias[0]?.descripcion1}
                                </div>
                            </article>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Discrepancia 2:</label>
                                <div className=' pl-3 py-1 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                    {historias[0]?.discrepancia2}
                                </div>
                                <div className=' pl-3 py-1 rounded-md   bg-gray-50 grid content-center' >
                                    {historias[0]?.descripcion2}
                                </div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Discrepancia 1:</label>
                                <div className=' pl-3 py-1 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                {historias[0]?.discrepancia3}
                                </div>
                                <div className=' pl-3 py-1 rounded-md  bg-gray-50 grid content-center' >
                                {historias[0]?.descripcion3}
                                </div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Discrepancia 1:</label>
                                <div className=' pl-3 py-1 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                {historias[0]?.discrepancia4}
                                </div>
                                <div className=' pl-3 py-1 rounded-md  bg-gray-50 grid content-center' >
                                {historias[0]?.descripcion4}
                                </div>
                            </article>
                            
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[90%] border border-gray-200 bg-white  mr-4 pt-5'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl' >
                            Resolución de la petición
                        </header>
                        <div className='w-full h-[90%] grid grid-rows-6 px-8 mt-2 '>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nombre de la petición (Historia de usuario):</label>
                                    
                                    
                                <div className="border bg-gray-100 rounded border-gray-200 pt-1 pl-2">{historias[0]?.nombreHistoria}</div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Caracter de la petición:</label>
                                    
                                    
                                <div className="border bg-gray-100 rounded border-gray-200 pt-1 pl-2">Crecimiento</div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nuevo monto del presupuesto de la petición (CLP):</label>
                                    
                                    
                                <input name="presupuestoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="100.000"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nuevo tiempo de la petición (dias):</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="7"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Resolución de nuevos equipos:</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Aceptado"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Resolución de recursos tecnicos :</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Nuevas licencias"/>
                            </article>
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center '>
                    <button  className='w-[20%] h-[90%] bg-violet-500 hover:bg-violet-600 text-white rounded font-semibold'>
                        Enviar
                    </button>
                </div>
            </form>
        </main>
        </section>
        
    </div>
  )
}

export default page