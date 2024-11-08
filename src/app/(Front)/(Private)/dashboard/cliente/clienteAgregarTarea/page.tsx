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

const page = () => {


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
        //traerDepto()
        traerCargo()
        traerUser()
        traerCaracter()
        

    }, [])

    //console.log(caracter);
    


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

    const dia =format(new Date(), 'dd/MM/yyyy')
    const hora = format(new Date(), 'H:mm')

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[5%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Clientes {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <form onSubmit={handleSumbitCliente} action="" className=' w-full h-full '>

                <div className='flex h-[80%] px-3  place-content-center  mt-8 '>
                    <section className='w-[48%] h-[95%] border border-gray-200 px-4 mr-10 pt-5 bg-white rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Datos del Solicitante
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                            <article className='flex w-full h-14  justify-end gap-x-10 text-violet-600 items-center font-semibold pr-4'>
                                <div>
                                    {dia}
                                </div>
                                <div>
                                    {hora}
                                </div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Area del solicitante:</label>
                                <div className=' pl-3 py-4 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                    Cliente
                                </div>
                            </article>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Cargo del solicitante:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickCargo}>
                                        {cargoI}
                                    </div>
                                    {activoCargo &&
                                        <div className='mt-[228px] z-50 absolute top-60 left-3/5 max-h-[120px] overflow-auto '>
                                            
                                            {cargo.map((el)=>{
                                                const {nombreCargo, id} = el
                                                    return  (<div onClick={()=>handleClickCliente2(id, nombreCargo)} className='w-[660px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreCargo}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2'>
                            <label  htmlFor="">Email del solicitante:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickSolicitante}>
                                        {userI}
                                    </div>
                                    {activoSolicitante &&
                                        <div className='mt-[330px] z-50 absolute top-60 left-3/5 max-h-[120px] overflow-auto '>
                                            
                                            {user.map((el)=>{
                                                const {email, id} = el
                                                    return  (<div onClick={()=>handleClickCliente3(id, email)} className='w-[660px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {email} 
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl' >
                            Detalles de la petición
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-2 '>
                            
                        <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nombre de la petición (Historia de usuario):</label>
                                    
                                    
                                <input name="nombreHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Agregar calendario..."/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Caracter de la petición:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickCaracter}>
                                        {caracterI}
                                    </div>
                                    {activoCaracter &&
                                        <div className='mt-[145px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                            
                                            {caracter.map((el)=>{
                                                    const {nombreCaracter, id} = el
                                                    return  (<div onClick={()=>handleClickCliente4(id, nombreCaracter)} className='w-[660px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreCaracter}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Monto del presupuesto de la petición (CLP):</label>
                                    
                                    
                                <input name="presupuestoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="100.000"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Tiempo estimado de la petición (dias):</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="7"/>
                            </article>
                            <article className='grid  pb-3  h-28'>
                                <label className="h-7 "  htmlFor="">Detalle de la petición:</label>
                                    
                                    
                                <input name="detalleHistoria" onChange={handleChangeCliente} className="pl-3  h-24 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Se requiere un calendario de color azul, con tonalidades grices"/>
                            </article>
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  mt-2'>
                    <button className='w-[20%] h-[90%] bg-violet-500 hover:bg-violet-600 text-white rounded font-semibold'>
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