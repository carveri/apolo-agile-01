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
import { getDataLista } from "@/app/(Front)/React/Fetch/getDataLista";
import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion";

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
    const [puntoHistoria, setPuntoHistoria] = useState(12)

    useEffect(()=>{
        // const traerDepto =async()=>{
        //     const ruta = 'departamento'
        //     const res = await getData({ruta})
        //     setDepartamento(res)
        // }
        const traerCargo =async()=>{
            const ruta = 'cargo'
            //const url = '12b87914-ed8c-4411-931e-7b9b567d7117'
            const res = await getData({ruta})
            setCargo(res)
        }
        const traerCargo2 =async()=>{
            const ruta = 'cargoPorArea'
            const url = '12b87914-ed8c-4411-931e-7b9b567d7117'
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
        else {
            console.log('sd');
            
        }
        
    }

    const areaId = "12b87914-ed8c-4411-931e-7b9b567d7117"
    const productBacklogId = '1af659a1-06b9-46e7-94fb-2220d8f5f0b8'
    const equipo3 = 6

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
        const data = { nombreHistoria, equipo3, presupuestoHistoria, puntoHistoria, tiempoHistoria,  detalleHistoria, productBacklogId, caracterId, userId}
        console.log(data);
        
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
                Dashboard Cliente {'>'} Clientes {'>'} Marketing {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <FormularioClientePeticion
                handleSumbitCliente = {handleSumbitCliente}
                dia = {dia}
                hora = {hora} 
                cargoI = {cargoI} 
                activoCargo = {activoCargo}
                cargo = {cargo}
                handleClickCargo = {handleClickCargo}
                handleClickCliente2 = {handleClickCliente2}
                userI = {userI}
                activoSolicitante = {activoSolicitante}
                user = {user}
                handleClickCliente3 = {handleClickCliente3}
                handleChangeCliente = {handleChangeCliente}
                caracterI = {caracterI}
                activoCaracter = {activoCaracter}
                handleClickCaracter = {handleClickCaracter}
                caracter = {caracter}
                handleClickCliente4 = {handleClickCliente4}
                handleClickSolicitante = {handleClickSolicitante}
            
            />
        </main>
        </section>
        
    </div>
  )
}

export default page